// Override at build time with VITE_API_BASE_URL when using another backend.
export const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  "https://tbt-companion-backend.onrender.com"
).replace(/\/+$/, "");
