import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
  },
  resolve: {
    alias: {
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Pages': path.resolve(__dirname, './src/pages'),
      '@Context': path.resolve(__dirname, './src/context'),
      '@Templates': path.resolve(__dirname, './src/templates'),
      '@Utils': path.resolve(__dirname, './src/utils'),
    },
  },
});