# React SPA 脚手架

基于 **Vite** 的中小型 React 单页应用（SPA）起始项目，采用 **Feature-based** 目录划分，集成路由、服务端状态、全局 UI 状态与工程化工具链。

## 技术栈

| 类别         | 选型                              | 说明                                                               |
| ------------ | --------------------------------- | ------------------------------------------------------------------ |
| 构建         | Vite 8                            | 开发热更新、生产打包                                               |
| 框架         | React 18 + TypeScript（`strict`） | 严格类型；入口使用 `StrictMode`                                    |
| 路由         | React Router v6                   | `createBrowserRouter`（Data Router），支持路由级 `loader` 预取数据 |
| 服务端状态   | TanStack Query v5                 | 缓存、请求去重、与 `loader` 共享 `queryClient`                     |
| HTTP         | Axios                             | 单例封装于 `src/services/http.ts`，统一 baseURL 与拦截器           |
| 全局 UI 状态 | Zustand                           | 侧栏、主题等客户端 UI 状态；业务实体数据优先走 React Query         |
| 样式         | Tailwind CSS v4                   | 通过 `@tailwindcss/vite` 集成                                      |
| 代码规范     | ESLint 9 + Prettier               | `eslint-config-prettier` 避免与 Prettier 冲突                      |
| Git 钩子     | Husky + lint-staged               | 提交前对暂存文件执行 ESLint / Prettier                             |

路径别名：`@/` 指向 `src/`（见 `vite.config.ts` 与 `tsconfig.app.json`）。

## 目录结构（概要）

```
src/
  assets/          静态资源
  components/      全局通用 UI 组件
  features/        按业务模块划分（api、components、hooks、queries、loaders 等）
  layouts/         布局（含 Outlet）
  pages/             路由页面（拼装为主）
  services/        Axios 实例、QueryClient
  store/             全局 Zustand（UI 状态）
  utils/             纯函数工具
  router.tsx         路由与 Data Router 配置
  main.tsx           入口（QueryClientProvider + RouterProvider）
```

## 环境要求

- **Node.js**：建议 **20.x** 或 **22.x**（与当前工具链兼容；版本过低可能导致依赖安装失败）
- 包管理器：**npm**（或自行改用 pnpm / yarn，需自行保证 lockfile 一致）

## 安装依赖

```bash
npm install
```

首次克隆后若需 Git 提交钩子，请确保已执行过 `npm install`（会触发 `prepare` 安装 Husky）。仓库需为 Git 仓库（`git init` 或 clone）。

## 本地开发

```bash
npm run dev
```

默认在 `http://localhost:5173` 启动开发服务器（以终端输出为准）。修改代码会触发热更新（HMR）。

### 环境变量（可选）

复制示例文件并按需修改：

```bash
copy .env.example .env
```

| 变量                | 说明                                                        |
| ------------------- | ----------------------------------------------------------- |
| `VITE_API_BASE_URL` | 后端 API 根地址；不配置时默认使用脚手架内置的演示接口根地址 |

仅 `VITE_` 前缀的变量会暴露给前端代码，见 [Vite 环境变量说明](https://cn.vitejs.dev/guide/env-and-mode.html)。

## 构建生产包

```bash
npm run build
```

执行 `tsc -b` 做类型检查，再执行 `vite build`。产物输出到 **`dist/`** 目录，为可部署的静态文件（HTML / JS / CSS / 资源）。

## 本地预览生产构建

```bash
npm run preview
```

在本地起一个静态服务预览 `dist`，用于发布前自测。

## 代码检查与格式化

```bash
npm run lint      # ESLint
npm run format    # Prettier 格式化 src 下 ts/tsx/css
```

提交时 **lint-staged** 会对暂存的 `*.ts`、`*.tsx` 等执行 ESLint 与 Prettier（需 Husky 已正确安装）。

## 部署说明

本仓库为 **纯前端静态资源**，部署即是将 **`dist/`** 目录托管到任意支持静态文件的 Web 服务器或 CDN。

1. 在部署流水线或本机执行：`npm ci`（或 `npm install`）→ `npm run build`。
2. 将 **`dist/`** 内全部文件上传到托管目标根目录（或配置子路径时需同步设置 Vite [`base`](https://cn.vitejs.dev/config/shared-options.html#base)）。
3. 生产环境的 API 地址通过构建时环境变量注入，例如在 CI 中设置 `VITE_API_BASE_URL` 后再执行 `npm run build`。

**SPA 路由**：使用 History 模式时，服务器需将所有前端路由回退到 `index.html`（避免刷新 404）。例如 Nginx：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

具体配置随主机商（Vercel、Netlify、Nginx、OSS 静态网站等）文档略有差异。

## 常用脚本一览

| 命令              | 作用                |
| ----------------- | ------------------- |
| `npm run dev`     | 开发模式            |
| `npm run build`   | 类型检查 + 生产构建 |
| `npm run preview` | 预览 `dist`         |
| `npm run lint`    | 运行 ESLint         |
| `npm run format`  | Prettier 写入格式化 |

---

更多架构约定（Feature 内聚、Query 与 Loader 配合等）以源码注释与目录为准。
