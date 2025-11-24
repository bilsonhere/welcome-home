import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // 🚀 ADD THIS LINE
  // Replace 'web-app-repo' with the actual name of your GitHub repository
  base: "/welcome-home/", 
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
<<<<<<< HEAD
}));
=======
}));
>>>>>>> 929bbf6f5bb12353a2fa50600c60a6cbafb18159
