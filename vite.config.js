/*eslint-env node*/
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import viteSvgIcons from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/assets/svgIcons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_API_ENDPOINT || 'https://7zo142dml5.execute-api.us-east-1.amazonaws.com/prod/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
