<template>
  <div class="bg-[#1C1C1C] text-white min-h-screen p-8">
    
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-4xl font-bold">Crear Usuario</h1>
      <button
        @click="irAUsuariosView"
        class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
      >
        Volver
      </button>
    </div>

    
    <form @submit.prevent="crearUsuario" class="max-w-2xl mx-auto">
      <div class="mb-6">
        <label for="nombreUsuario" class="block text-lg font-medium mb-2">Nombre de Usuario</label>
        <input
          type="text"
          id="nombreUsuario"
          v-model="usuario.nombreUsuario"
          placeholder="Ingresa el nombre de usuario"
          class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
      </div>

      <div class="mb-6">
        <label for="correo" class="block text-lg font-medium mb-2">Correo</label>
        <input
          type="email"
          id="correo"
          v-model="usuario.correo"
          placeholder="Ingresa el correo"
          class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
      </div>

      <div class="mb-6">
        <label for="contrasena" class="block text-lg font-medium mb-2">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          v-model="usuario.contrasena"
          placeholder="Ingresa la contraseña"
          class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        />
      </div>

      <div class="mb-6">
        <label for="rolId" class="block text-lg font-medium mb-2">Rol</label>
        <select
          id="rolId"
          v-model="usuario.rolId"
          class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          required
        >
          <option v-for="rol in roles" :key="rol.id" :value="rol.id">
            {{ rol.nombre }}
          </option>
        </select>
      </div>

      <div class="text-center">
        <button
          type="submit"
          class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
        >
          Crear Usuario
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const usuario = ref({
  nombreUsuario: '',
  correo: '',
  contrasena: '',
  rolId: 1,
});
const roles = ref([]);


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


const crearUsuario = async () => {
  try {
    const response = await fetch('https://localhost:7034/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(usuario.value),
    });

    if (!response.ok) {
      throw new Error('Error al crear el usuario');
    }

    
    router.push('/usuarios');
  } catch (error) {
    console.error('Error:', error);
  }
};


const irAUsuariosView = () => {
  router.push('/usuarios');
};


onMounted(() => {
  obtenerRoles();
});
</script>

<style scoped>

</style>