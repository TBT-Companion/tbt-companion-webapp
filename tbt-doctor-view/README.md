## Backend connection

The frontend uses `https://tbt-companion-backend.onrender.com` by default for API requests and the admin dashboard. Firebase still handles sign-in; its ID token is sent to the backend.

To override the backend, set this in `.env.local` or your frontend hosting environment before building:

```env
VITE_API_BASE_URL=https://tbt-companion-backend.onrender.com
```

Restart the Vite dev server after changing the value. For a deployed frontend, rebuild and redeploy because Vite embeds environment values at build time.

The backend must allow the frontend origin through CORS, including the `Authorization` and `Content-Type` request headers and preflight requests. Its Firebase Admin configuration must use the same Firebase project as this frontend (`osucomprop4`). The backend must serve `/admin-dashboard.html` for admin sign-in redirects.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
