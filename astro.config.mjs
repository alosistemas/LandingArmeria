import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/LandingArmeria',
  build: {
    outDir: './dist',
  },
});