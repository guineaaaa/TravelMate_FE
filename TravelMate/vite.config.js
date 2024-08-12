import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons'],
  },
})
