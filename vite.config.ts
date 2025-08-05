import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
  const isProd = command === "build";

  const base = isProd ? "/sigmacem-test-task/" : "/";

  return {
    base,
    plugins: [tailwindcss(), react()],
  };
});
