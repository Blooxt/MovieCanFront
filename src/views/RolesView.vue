<template>
    <div class="bg-[#1C1C1C] text-white min-h-screen p-8">
      <!-- Título y botón de creación -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold">Roles</h1>
        <router-link
          to="/roles/crear"
          class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
        >
          Crear Rol
        </router-link>
      </div>
  
      <!-- Tabla de roles -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-gray-700 rounded-lg">
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-sm font-medium text-white uppercase">ID</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-white uppercase">Nombre</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-white uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="rol in roles" :key="rol.id" class="hover:bg-gray-600 transition-colors">
              <td class="px-6 py-4">{{ rol.id }}</td>
              <td class="px-6 py-4">{{ rol.nombre }}</td>
              <td class="px-6 py-4 flex gap-2">
                <button
                  @click="editarRol(rol.id)"
                  class="px-4 py-2 bg-yellow-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Editar✒️
                </button>
                <button
                  @click="eliminarRol(rol.id)"
                  class="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-colors"
                >
                  Eliminar🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const roles = ref([]);
  
  // Función para obtener la lista de roles
  const obtenerRoles = async () => {
    try {
      const response = await fetch('https://localhost:7034/api/roles');
      if (!response.ok) {
        throw new Error('Error al obtener los roles');
      }
      const data = await response.json();
      roles.value = data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Función para eliminar un rol
  const eliminarRol = async (id: number) => {
    try {
      const response = await fetch(`https://localhost:7034/api/roles/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar el rol');
      }
  
      // Actualizar la lista de roles
      obtenerRoles();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  // Función para redirigir a la vista de edición
  const editarRol = (id: number) => {
    router.push(`/roles/editar/${id}`);
  };
  
  // Llamamos a la función al montar el componente
  onMounted(() => {
    obtenerRoles();
  });
  </script>
  
  <style scoped>
  /* Estilos adicionales si son necesarios */
  </style>