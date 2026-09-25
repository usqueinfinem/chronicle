import { defineConfig } from "vite";
import path from "path";
import fs from "fs";

// Automatically search every directory for the index.html file
function findIndexHtml(dir: string): string | null {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (file === 'node_modules' || file === '.git' || file === '.github') continue;
    
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      const found = findIndexHtml(fullPath);
      if (found) return found;
    } else if (file === 'index.html') {
      return dir;
    }
  }
  return null;
}

const detectedRoot = findIndexHtml(__dirname) || "./";
console.log(`[Vite Build] Found index.html root directory at: ${detectedRoot}`);

export default defineConfig({
  root: detectedRoot, // Dynamically targets the exact folder containing index.html
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
