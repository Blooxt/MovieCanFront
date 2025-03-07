<template>
    <footer class="bg-red-600 text-white py-6 px-8 flex flex-col md:flex-row md:justify-between items-center">
      <router-link to="/" class="flex items-center space-x-2 mb-4 md:mb-0">
        <img src="/MovieCan.png" alt="MovieCan Logo" class="h-12 w-auto" />
      </router-link>
      <div class="text-center md:text-left">
        <h3 class="text-lg font-semibold mb-2 text-white-400">Páginas</h3>
        <ul class="space-y-2 text-white-300">
          <li><router-link to="/" class="hover:underline">Inicio</router-link></li>
          <li><router-link to="/about" class="hover:underline">Sobre Nosotros</router-link></li>
          <li><router-link to="/recommendation" class="hover:underline">Recomendaciones</router-link></li>
          <li><router-link to="/blog" class="hover:underline">Blog</router-link></li>
          <li><router-link to="/Contact" class="hover:underline">Contáctanos</router-link></li>
        </ul>
      </div>
    </footer>
  </template>