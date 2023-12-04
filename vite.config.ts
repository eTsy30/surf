import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/*'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/page'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@style': path.resolve(__dirname, 'src/styles'),
    },
  },
});
