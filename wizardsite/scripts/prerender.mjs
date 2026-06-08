import { fork } from "node:child_process";
import { writeFile, mkdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const ROOT = join(__dirname, "..");
const DIST_CLIENT = join(ROOT, "dist", "client");
const DIST_SERVER = join(ROOT, "dist", "server");
const DIST_NITRO_JSON = join(ROOT, "dist", "nitro.json");
const SERVER_ENTRY = join(ROOT, "dist", "server", "index.mjs");

const ROUTES = ["/", "/privacy-policy", "/terms-and-conditions"];

const PORT = 3099;
const BASE_URL = `http://localhost:${PORT}`;

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok || res.status < 500) return true;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Server did not start within ${timeoutMs}ms`);
}

async function prerender() {
  console.log("[prerender] Starting server...");

  const serverProc = fork(SERVER_ENTRY, [], {
    cwd: ROOT,
    env: { ...process.env, PORT: String(PORT), NITRO_PORT: String(PORT) },
    silent: true,
  });

  serverProc.stdout?.on("data", (d) => process.stdout.write(`[server] ${d}`));
  serverProc.stderr?.on("data", (d) => process.stderr.write(`[server] ${d}`));

  try {
    await waitForServer(BASE_URL);

    for (const route of ROUTES) {
      const url = `${BASE_URL}${route}`;
      console.log(`[prerender] Fetching ${url}`);
      const res = await fetch(url);

      if (!res.ok) {
        console.error(`[prerender] WARNING: ${route} returned ${res.status}`);
        const body = await res.text();
        console.error(`[prerender] Body preview: ${body.slice(0, 300)}`);
        continue;
      }

      const html = await res.text();
      const outDir =
        route === "/" ? DIST_CLIENT : join(DIST_CLIENT, route);
      await mkdir(outDir, { recursive: true });
      const outPath = join(outDir, "index.html");
      await writeFile(outPath, html);
      console.log(
        `[prerender] Saved ${route} -> ${outPath} (${html.length} bytes)`,
      );
    }

    console.log("[prerender] Done.");

    console.log("[prerender] Cleaning up server build artifacts...");
    await rm(DIST_SERVER, { recursive: true, force: true });
    await rm(DIST_NITRO_JSON, { force: true });
    console.log("[prerender] Cleaned up. Static output in dist/client/");
  } finally {
    serverProc.kill("SIGTERM");
    setTimeout(() => {
      if (!serverProc.killed) serverProc.kill("SIGKILL");
    }, 3000);
  }
}

prerender().catch((err) => {
  console.error("[prerender] Fatal:", err);
  process.exit(1);
});
