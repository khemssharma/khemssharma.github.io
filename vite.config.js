import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For a user site hosted at https://<username>.github.io/, use root base
  base: "/",
})
