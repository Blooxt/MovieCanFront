<template>
    <div class="bg-[#1C1C1C] text-white min-h-screen p-8">
      
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold">Editar Rol</h1>
        <button
          @click="irARolesView"
          class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
        >
          Volver
        </button>
      </div>
  
      
      <form @submit.prevent="actualizarRol" class="max-w-2xl mx-auto">
        <div class="mb-6">
          <label for="nombre" class="block text-lg font-medium mb-2">Nombre del Rol</label>
          <input
            type="text"
            id="nombre"
            v-model="rol.nombre"
            placeholder="Ingresa el nombre del rol"
            class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
  
        <div class="text-center">
          <button
            type="submit"
            class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
          >
            Actualizar Rol
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  const router = useRouter();
  const route = useRoute();
  const rol = ref({
    id: 0,
    nombre: '',
  });
  
  
  const obtenerRol = async () => {
    const id = route.params.id;
    try {
      const response = await fetch(`https://localhost:7034/api/roles/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener el rol');
      }
      const data = await response.json();
      rol.value = data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  const actualizarRol = async () => {
    try {
      const response = await fetch(`https://localhost:7034/api/roles/${rol.value.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rol.value),
      });
  
      if (!response.ok) {
        throw new Error('Error al actualizar el rol');
      }
  
      
      router.push('/roles');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  const irARolesView = () => {
    router.push('/roles');
  };
  
  
  onMounted(() => {
    obtenerRol();
  });
  </script>
  
  <style scoped>
  
  </style>