<template>
    <div class="bg-[#1C1C1C] text-white min-h-screen flex items-center justify-center">
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg w-96">
        <h1 class="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h1>
        <form @submit.prevent="iniciarSesion" class="space-y-6">
          <div>
            <label for="correo" class="block text-lg font-medium mb-2">Correo</label>
            <input
              type="email"
              id="correo"
              v-model="correo"
              placeholder="Ingresa tu correo"
              class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div>
            <label for="contrasena" class="block text-lg font-medium mb-2">Contraseña</label>
            <input
              type="password"
              id="contrasena"
              v-model="contrasena"
              placeholder="Ingresa tu contraseña"
              class="w-full p-2 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              required
            />
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="px-6 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const correo = ref('');
const contrasena = ref('');

const iniciarSesion = async () => {
  try {
    const response = await fetch('https://localhost:7034/api/usuarios/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        correo: correo.value,
        contrasena: contrasena.value,
      }),
    });

    if (!response.ok) {
      throw new Error('Credenciales incorrectas');
    }

    const data = await response.json();
    localStorage.setItem('token', data.token);
    localStorage.setItem('rol', data.rol);

    
    window.dispatchEvent(new CustomEvent('actualizar-rol', { detail: data.rol }));

    
    router.push('/');
  } catch (error) {
    console.error('Error:', error);
    alert('Credenciales incorrectas');
  }
};
</script>
  
  <style scoped>
  
  </style>