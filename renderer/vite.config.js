import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname),
  base: './',
  server: {
    port: 5174,
    strictPort: true,
  },
  build: {
    outDir: 'dist',
  },
});
