import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'


export default ({ mode }) => {
  Object.assign(process.env, loadEnv(mode, process.cwd(), ''))
  


// https://vitejs.dev/config/
return  defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Here
    // strictPort: true,
    port: process.env.PORT as unknown as number
  }
})
} 