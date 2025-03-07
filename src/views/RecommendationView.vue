<template>
  <div class="bg-[#1C1C1C] text-white min-h-screen p-8">
    
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold">Recomendaciones</h1>
      <p class="mt-4">Estas son las películas recomendadas.</p>
    </div>

    
    <div class="flex justify-center mb-8">
      <div class="w-full max-w-md">
        
        <select
          v-model="tipoBusqueda"
          class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 mb-4"
        >
          <option value="titulo">Buscar por título</option>
          <option value="genero">Buscar por género</option>
        </select>

        
        <div class="relative">
          <input
            type="text"
            v-model="terminoBusqueda"
            :placeholder="tipoBusqueda === 'titulo' ? 'Buscar por título' : 'Buscar por género'"
            class="w-full p-2 pl-10 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>

    
    <div class="flex justify-center mb-8">
      <router-link
        to="/form"
        class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
      >
        Añadir Recomendación
      </router-link>
    </div>

    
    <div class="space-y-8">
      
      <div
        v-for="pelicula in peliculasFiltradas"
        :key="pelicula.id"
        class="flex flex-col md:flex-row items-center gap-8"
      >
        <img :src="pelicula.imagen" :alt="pelicula.titulo" class="w-48 h-64 object-cover rounded-lg">
        <div class="flex-1">
          <h2 class="text-2xl font-bold text-red-600">{{ pelicula.titulo }}</h2>
          <p class="mt-2">{{ pelicula.descripcion }}</p>
          <p class="mt-2"><strong>Fecha de estreno:</strong> {{ formatFecha(pelicula.fechaEstreno) }}</p>
          <p class="mt-2"><strong>Género:</strong> {{ pelicula.genero }}</p>

          
          <div class="mt-4 flex gap-4">
            <button
              @click="eliminarPelicula(pelicula.id)"
              class="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-colors"
            >
              Eliminar🗑️
            </button>
            <button
              @click="editarPelicula(pelicula.id)"
              class="px-4 py-2 bg-yellow-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
            >
              Editar✒️
            </button>
          </div>
        </div>
      </div>

      
      <div v-if="peliculasFiltradas.length === 0" class="text-center text-gray-400">
        No se encontraron películas.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();


interface Pelicula {
  id: number;
  titulo: string;
  descripcion: string;
  fechaEstreno: string;
  genero: string;
  imagen: string;
}


const peliculas = ref<Pelicula[]>([]);

const terminoBusqueda = ref('');

const tipoBusqueda = ref<'titulo' | 'genero'>('titulo');

const formatFecha = (fecha: string) => {
  return new Date(fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const obtenerPeliculas = async () => {
  try {
    const response = await fetch('https://localhost:7034/api/peliculas'); // Cambia la URL por la de tu API
    if (!response.ok) {
      throw new Error('Error al obtener las películas');
    }
    const data = await response.json();
    peliculas.value = data;
  } catch (error) {
    console.error('Error:', error);
  }
};

const eliminarPelicula = async (id: number) => {
  try {
    const response = await fetch(`https://localhost:7034/api/peliculas/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Error al eliminar la película');
    }


    obtenerPeliculas();
  } catch (error) {
    console.error('Error:', error);
    alert('Hubo un error al eliminar la película');
  }
};

const editarPelicula = (id: number) => {
  router.push(`/edit/${id}`);
};


const peliculasFiltradas = computed(() => {
  if (!terminoBusqueda.value) {
    return peliculas.value; 
  }

  const termino = terminoBusqueda.value.toLowerCase();

  return peliculas.value.filter((pelicula) => {
    if (tipoBusqueda.value === 'titulo') {
      return pelicula.titulo.toLowerCase().includes(termino);
    } else {
      return pelicula.genero.toLowerCase().includes(termino);
    }
  });
});


onMounted(() => {
  obtenerPeliculas();
});
</script>

<style scoped>

</style>