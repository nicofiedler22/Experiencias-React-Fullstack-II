import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Con esta configuración le indicamos a Vite que integre React
// y habilite el entorno virtual jsdom para ejecutar nuestras pruebas unitarias con Vitest.
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                     // Nos permite usar describe, it y expect sin importarlos manualmente
    environment: 'jsdom',             // Simulamos un navegador en memoria para las pruebas de componentes
    setupFiles: './src/setupTests.js', // Cargamos la configuración inicial de los matchers de testing
  },
})