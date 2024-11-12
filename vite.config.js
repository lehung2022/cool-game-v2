import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === "serve") {
    // Development-only settings
    return {
      server: {
        proxy: {
          "/api": {
            target: "https://api.rawg.io",
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
      plugins: [react()],
    };
  } else {
    // Production settings (no proxy)
    return {
      plugins: [react()],
    };
  }
});
