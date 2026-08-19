# For_Node_Env
starting node

'''
    npm create vite@latest
-> project name
-> React
-> Typescript
-> Eslint
'''

## tailwindcss

npm install tailwindcss @tailwindcss/vite

vite.config.ts に Tailwind を追加

'''
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
'''

index.cssには

'''
@import "tailwindcss";
'''

main.tsxで

'''
import "./index.css";
'''

