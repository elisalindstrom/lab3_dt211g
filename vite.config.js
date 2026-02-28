import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                sass: resolve(__dirname, "sass.html"),
                animering: resolve(__dirname, "animering.html"),
                diagram: resolve(__dirname, "diagram.html"),
                karta: resolve(__dirname, "karta.html")
            }
        }
    },
    plugins: [
        ViteImageOptimizer({
            jpg: {
                quality: 75
            },
            webp: {
                quality: 70
            },
            png: {
                quality: 75
            }
        })
    ]
});