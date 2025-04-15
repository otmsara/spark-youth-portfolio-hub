
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Configuration pour GitHub Pages
  base: './', // Utilise des chemins relatifs au lieu de chemins absolus
  build: {
    // Assurons-nous que les fichiers sont servis avec les bons types MIME
    assetsInlineLimit: 0,
    outDir: './', // Output à la racine du projet pour GitHub Pages
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'main.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      },
    },
  },
}));
