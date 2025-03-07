<template>
    <div class="bg-[#1C1C1C] text-white min-h-screen p-8">
      
      <div class="mb-8">
        <button
          @click="irARecommendationView"
          class="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Volver
        </button>
      </div>
  
      
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold">Agregar Nueva Película</h1>
        <p class="mt-4">Completa el formulario para agregar una nueva película.</p>
      </div>
  
      
      <form @submit.prevent="agregarPelicula" class="max-w-2xl mx-auto">
        
        <div class="mb-6">
          <label for="titulo" class="block text-lg font-medium mb-2">Título</label>
          <input
            type="text"
            id="titulo"
            v-model="pelicula.titulo"
            placeholder="Ingresa el título de la película"
            class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
  
        <div class="mb-6">
          <label for="descripcion" class="block text-lg font-medium mb-2">Descripción</label>
          <textarea
            id="descripcion"
            v-model="pelicula.descripcion"
            placeholder="Ingresa la descripción de la película"
            class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            rows="4"
            required
          ></textarea>
        </div>
  
        <div class="mb-6">
          <label for="fechaEstreno" class="block text-lg font-medium mb-2">Fecha de Estreno</label>
          <input
            type="date"
            id="fechaEstreno"
            v-model="pelicula.fechaEstreno"
            class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
  
        <div class="mb-6">
          <label for="genero" class="block text-lg font-medium mb-2">Género</label>
          <input
            type="text"
            id="genero"
            v-model="pelicula.genero"
            placeholder="Ingresa el género de la película"
            class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
  
        <div class="mb-6">
          <label for="imagen" class="block text-lg font-medium mb-2">URL de la Imagen</label>
          <input
            type="text"
            id="imagen"
            v-model="pelicula.imagen"
            placeholder="Ingresa la URL de la imagen de la película"
            class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
  
        
        <div class="text-center">
          <button
            type="submit"
            class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
          >
            Agregar Película
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  
  interface Pelicula {
    titulo: string;
    descripcion: string;
    fechaEstreno: string;
    genero: string;
    imagen: string;
  }
  
  
  const pelicula = ref<Pelicula>({
    titulo: '',
    descripcion: '',
    fechaEstreno: '',
    genero: '',
    imagen: '',
  });
  
  
  const agregarPelicula = async () => {
    try {
      const response = await fetch('https://localhost:7034/api/peliculas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pelicula.value),
      });
  
      if (!response.ok) {
        throw new Error('Error al agregar la película');
      }
  
      
      pelicula.value = {
        titulo: '',
        descripcion: '',
        fechaEstreno: '',
        genero: '',
        imagen: '',
      };
  
      
      router.push('/recommendation');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al agregar la película');
    }
  };
  
  
  const irARecommendationView = () => {
    router.push('/recommendation');
  };
  </script>
  
  <style scoped>
  
  </style>