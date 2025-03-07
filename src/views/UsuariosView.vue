<template>
    <div class="bg-[#1C1C1C] text-white min-h-screen p-8">
      
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-4xl font-bold">Usuarios</h1>
        <router-link
          to="/usuarios/crear"
          class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
        >
          Crear Usuario
        </router-link>
      </div>
  
      
      <div class="overflow-x-auto">
        <table class="min-w-full bg-gray-700 rounded-lg">
          <thead>
            <tr>
              <th class="px-6 py-3 text-left text-sm font-medium text-white uppercase">ID</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-white uppercase">Nombre de Usuario</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-white uppercase">Correo</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-white uppercase">Rol</th>
              <th class="px-6 py-3 text-left text-sm font-medium text-white uppercase">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in usuarios" :key="usuario.id" class="hover:bg-gray-600 transition-colors">
              <td class="px-6 py-4">{{ usuario.id }}</td>
              <td class="px-6 py-4">{{ usuario.nombreUsuario }}</td>
              <td class="px-6 py-4">{{ usuario.correo }}</td>
              <td class="px-6 py-4">{{ usuario.rolNombre }}</td>
              <td class="px-6 py-4 flex gap-2">
                <button
                  @click="editarUsuario(usuario.id)"
                  class="px-4 py-2 bg-yellow-600 text-white font-bold rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Editar✒️
                </button>
                <button
                  @click="eliminarUsuario(usuario.id)"
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
  const usuarios = ref([]);
  
  
  const obtenerUsuarios = async () => {
    try {
      const response = await fetch('https://localhost:7034/api/usuarios');
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const data = await response.json();
      usuarios.value = data;
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  const eliminarUsuario = async (id: number) => {
    try {
      const response = await fetch(`https://localhost:7034/api/usuarios/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar el usuario');
      }
  
      
      obtenerUsuarios();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  const editarUsuario = (id: number) => {
    router.push(`/usuarios/editar/${id}`);
  };
  
  
  onMounted(() => {
    obtenerUsuarios();
  });
  </script>
  
  <style scoped>
  
  </style>