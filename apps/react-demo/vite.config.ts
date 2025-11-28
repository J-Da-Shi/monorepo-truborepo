import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    plugins: [react()],
    resolve: {
      alias: isDev ? {
        '@my-org/ui': resolve(__dirname, '../../packages/ui/src'), // 开发环境使用软连接
      } : undefined,
    },
    build: {
      // 确保外部化依赖（可选）
      rollupOptions: {
        external: [], // 不 externalize @my-org/ui，要打包进去
      },
    },
  }
})
