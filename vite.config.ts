import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      images: path.resolve(__dirname, 'src/assets/images'),
      components: path.resolve(__dirname, 'src/assets/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      constants: path.resolve(__dirname, 'src/assets/constants'),
    }
  }
})
