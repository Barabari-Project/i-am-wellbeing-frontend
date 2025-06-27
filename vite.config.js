import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  allowedHosts: ["*"], // Allows all hosts (not recommended for production)
});
