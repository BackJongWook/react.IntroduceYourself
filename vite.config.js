import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],  
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@utiles", replacement: "/src/utiles" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@provider", replacement: "/src/provider" },
      { find: "@jotai", replacement: "/src/jotai" },
      { find: "@hook", replacement: "/src/hook" },
    ],
  }
})
