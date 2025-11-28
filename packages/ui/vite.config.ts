// packages/ui/vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyUI',
      formats: ['es', 'cjs'],
      // 👇 强制输出文件名为 index.js / index.mjs
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React' }
      }
    }
  },
  plugins: [dts({ rollupTypes: false, tsconfigPath: resolve(__dirname, 'tsconfig.json') })]
});