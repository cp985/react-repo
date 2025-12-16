// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(),tailwindcss()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Il nome del repository è 'react-repo'. 
// Questo imposta il base path per GitHub Pages su /react-repo/
const repoName = 'react-repo'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // ✅ Configurazione del base path per il deployment (cruciale per GitHub Pages)
  base: `/${repoName}/`,
  
  build: {
    // La cartella di output sarà 'dist'
    outDir: 'dist',
  }
})