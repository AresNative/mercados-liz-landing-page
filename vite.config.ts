/// <reference types="vitest" />

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Cargar variables de entorno de acuerdo con el modo
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), legacy()],
    define: {
      "process.env": {
        REACT_APP_API_URL: env.REACT_APP_API_URL,
        REACT_APP_API_KEY: env.REACT_APP_API_KEY,
        REACT_APP_NODE_ENV: env.REACT_APP_NODE_ENV,
      },
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
