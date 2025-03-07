<template>
  <div class="bg-[#1C1C1C] text-white min-h-screen flex flex-col">
    
    <div class="text-center py-20 flex-grow">
      <h1 class="text-4xl font-bold mb-4">Bienvenidos</h1>
      <p class="mb-8 max-w-2xl mx-auto px-4">
        Bienvenido a MovieCan, tu sitio ideal para descubrir las mejores películas. <br>
        Encuentra recomendaciones por titulo, género, y comparte tus opiniones <br>
         sobre tus películas favoritas. 🎬🍿
      </p>
      <p class="mb-8"></p>
      <RouterLink to="/about">
        <button class="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition duration-300">
          Sobre Nosotros
        </button>
      </RouterLink>
    </div>

    
    <div class="container mx-auto px-4 py-10 flex-grow">
      <h2 class="text-2xl font-bold mb-6">Recomendaciones Destacadas</h2>
      <div class="flex overflow-x-auto space-x-4 pb-4">
        <img src="/Shrek.jpg" alt="Shrek" class="w-48 h-64 object-cover rounded-lg">
        <img src="/Sonic 3.jpg" alt="Sonic 3" class="w-48 h-64 object-cover rounded-lg">
        <img src="/Saw X.jpg" alt="Saw X" class="w-48 h-64 object-cover rounded-lg">
        <img src="/Spiderverse.jpg" alt="Spiderverse" class="w-48 h-64 object-cover rounded-lg">
        <img src="/Mario.jpg" alt="Mario" class="w-48 h-64 object-cover rounded-lg">
        <img src="/Dogman.jpg" alt="Dogman" class="w-48 h-64 object-cover rounded-lg">
        <img src="/Deadpool.jpg" alt="Deadpool" class="w-48 h-64 object-cover rounded-lg">
        <img src="/Flow.jpg" alt="Flow" class="w-48 h-64 object-cover rounded-lg">
      </div>
    </div>

    
    <div class="text-center py-10 flex-grow">
      <RouterLink to="/recommendation" class="underline hover:text-gray-300 transition duration-300">
        Para ver más recomendaciones de películas haga clic aquí
      </RouterLink>
    </div>

    
    <div class="bg-gray-700 text-white text-center py-20 mx-auto max-w-md rounded-lg mb-20">
      <h3 class="text-2xl font-bold mb-4">¿Requieres nuestros servicios?</h3>
      <RouterLink to="/contact">
        <button class="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition duration-300">
          Contáctanos
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>