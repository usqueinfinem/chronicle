import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/ishikas-magical-chronicle/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html')
    }
  }
});
