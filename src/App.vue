<script setup lang="ts">
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'; // Asegúrate de que Footer.vue también esté correctamente importado
</script>

<template>
  <header>
    <Navbar />
  </header>
  
  <RouterView />
  <div>
    <Footer />
  </div>
</template>