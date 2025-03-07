<template>
  <div class="bg-[#1C1C1C] text-white min-h-screen p-8">
    
    <h1 class="text-4xl font-bold text-center mb-8">Sobre Nosotros</h1>

    
    <div class="space-y-4 max-w-2xl mx-auto">
      
      <button
        @click="toggleDescription('quienesSomos')"
        class="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-pink-700 transition duration-300 flex justify-between items-center px-6"
      >
        <span>¿Quiénes somos?</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transform transition-transform duration-300"
          :class="{ 'rotate-180': activeDescription === 'quienesSomos' }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-if="activeDescription === 'quienesSomos'" class="bg-gray-700 p-4 rounded-lg">
        <p>
          En MovieCan, somos apasionados del cine y queremos ayudarte a encontrar las mejores películas según tus gustos. Nuestro sitio ofrece recomendaciones organizadas por género, popularidad y reseñas de usuarios. Además, permitimos que la comunidad participe dejando comentarios y compartiendo sus opiniones sobre cada película.
        </p>
      </div>

      
      <button
        @click="toggleDescription('mision')"
        class="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-pink-700 transition duration-300 flex justify-between items-center px-6"
      >
        <span>Misión</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transform transition-transform duration-300"
          :class="{ 'rotate-180': activeDescription === 'mision' }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-if="activeDescription === 'mision'" class="bg-gray-700 p-4 rounded-lg">
        <p>
          Brindar a los amantes del cine una plataforma donde puedan descubrir, compartir y debatir sobre películas, ofreciendo recomendaciones confiables y fomentando una comunidad activa y participativa.
        </p>
      </div>

      
      <button
        @click="toggleDescription('vision')"
        class="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-pink-700 transition duration-300 flex justify-between items-center px-6"
      >
        <span>Visión</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transform transition-transform duration-300"
          :class="{ 'rotate-180': activeDescription === 'vision' }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-if="activeDescription === 'vision'" class="bg-gray-700 p-4 rounded-lg">
        <p>
          Ser el sitio de referencia para recomendaciones de películas, reconocido por su comunidad comprometida, contenido de calidad y un sistema de recomendaciones personalizado basado en las opiniones de los usuarios.
        </p>
      </div>

      
      <button
        @click="toggleDescription('valores')"
        class="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-pink-700 transition duration-300 flex justify-between items-center px-6"
      >
        <span>Valores</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 transform transition-transform duration-300"
          :class="{ 'rotate-180': activeDescription === 'valores' }"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div v-if="activeDescription === 'valores'" class="bg-gray-700 p-4 rounded-lg">
        <p>
          🎬 Pasión por el cine: Creemos en el poder del cine para inspirar, entretener y conectar a las personas.<br>
          ⭐ Comunidad: Fomentamos la interacción y el respeto entre nuestros usuarios para construir un espacio enriquecedor.<br>
          📢 Transparencia: Todas las recomendaciones y reseñas son auténticas y generadas por la comunidad.<br>
          🚀 Innovación: Buscamos mejorar continuamente nuestra plataforma para ofrecer la mejor experiencia a los cinéfilos.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const activeDescription = ref<string | null>(null);

const toggleDescription = (description: string) => {
  activeDescription.value = activeDescription.value === description ? null : description;
};
</script>

<style scoped>

</style>