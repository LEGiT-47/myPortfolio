import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { handleDemo } from "./routes/demo.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // ✅ Serve static files from dist/spa
  const distPath = path.join(__dirname, "../dist/spa");
  app.use(express.static(distPath));

  // ✅ Fallback for React Router (SPA)
  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });

  return app;
}
