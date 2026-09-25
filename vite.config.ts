import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

// Find where index.html actually lives in the project
let rootPath = "./";
if (!fs.existsSync(path.resolve(__dirname, "index.html"))) {
  if (fs.existsSync(path.resolve(__dirname, "frontend/index.html"))) {
    rootPath = "./frontend";
  } else if (fs.existsSync(path.resolve(__dirname, "src/index.html"))) {
    rootPath = "./src";
  }
}

export default defineConfig({
  root: rootPath, // Tells Vite exactly where index.html is hiding
  base: '/ishikas-magical-chronicle/',
  server: {
    host: "::",
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
