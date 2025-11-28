## 架构
monorepo + turborepo

## 启动apps下的react-demo
pnpm --filter react-demo dev

给 react-demo 声明依赖，才会创建软连接：pnpm add @my-org/ui@workspace:* --filter react-demo

使用 packages 下的 UI 本地开发支持 HMR 热更新
生产环境需要对 UI 进行打包：pnpm --filter @my-org/ui build

## 强制更新软连接
pnpm install --force

## 开发环境支持热更新（HMR）

react-demo/vite.config.ts 中添加了 alias ，vite 监听源文件变化，触发热更新

## 生产环境

必须通过 pnpm install --force 进行强制刷新 软连接