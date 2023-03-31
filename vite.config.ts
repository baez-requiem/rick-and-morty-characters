import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vite-gh-pages',
  plugins: [react()],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, 'src') }
    ]
  }
})
