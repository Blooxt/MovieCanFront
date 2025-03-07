<template>
  <nav v-if="mostrarNavbar" class="bg-red-600 text-white py-4 px-6 flex items-center justify-between shadow-lg">
    <router-link to="/" class="flex items-center space-x-2">
      <img src="/MovieCan.png" alt="MovieCan Logo" class="h-10 w-auto" />
      <span class="text-2xl font-semibold">MovieCan</span>
    </router-link>
    <ul class="flex space-x-6 text-lg font-medium">
      <li>
        <router-link to="/" class="hover:underline">Inicio</router-link>
      </li>
      <li>
        <router-link to="/about" class="hover:underline">Sobre nosotros</router-link>
      </li>
      <li>
        <router-link to="/recommendation" class="hover:underline">Recomendaciones</router-link>
      </li>
      <li>
        <router-link to="/blog" class="hover:underline">Blog</router-link>
      </li>
      <li>
        <router-link to="/contact" class="hover:underline">Contáctanos</router-link>
      </li>
      <li v-if="rol === 'Admin'">
        <router-link to="/usuarios" class="hover:underline">Usuarios</router-link>
      </li>
      <li v-if="rol === 'Admin'">
        <router-link to="/roles" class="hover:underline">Roles</router-link>
      </li>
      <li>
        <button @click="cerrarSesion" class="hover:underline">Cerrar sesión</button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const rol = ref(localStorage.getItem('rol'));

// Ocultar el Navbar en la pantalla de login
const mostrarNavbar = computed(() => route.path !== '/login');

const cerrarSesion = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('rol');

  // Emitir un evento personalizado para notificar el cambio de rol
  window.dispatchEvent(new CustomEvent('actualizar-rol', { detail: null }));

  router.push('/login');
};

// Escuchar el evento personalizado para actualizar el rol
const actualizarRol = (event: CustomEvent) => {
  rol.value = event.detail;
};

onMounted(() => {
  rol.value = localStorage.getItem('rol');
  window.addEventListener('actualizar-rol', actualizarRol as EventListener);
});

onUnmounted(() => {
  window.removeEventListener('actualizar-rol', actualizarRol as EventListener);
});
</script>

<style scoped>

</style>