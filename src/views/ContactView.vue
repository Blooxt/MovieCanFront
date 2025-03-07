<template>
    <div class="bg-[#1C1C1C] text-white min-h-screen p-8">
      <!-- Título y párrafo -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold">Contáctanos</h1>
        <p class="mt-4">Envíenos un mensaje.</p>
      </div>
  
      <!-- Contenedor principal -->
      <div class="container mx-auto flex flex-col lg:flex-row gap-8">
        <!-- Formulario de contacto -->
        <div class="lg:w-1/2">
          <form class="space-y-6">
            <!-- Nombre completo -->
            <div>
              <label for="nombre" class="block text-sm font-medium">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                required
                class="w-full p-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
  
            <!-- Correo electrónico -->
            <div>
              <label for="email" class="block text-sm font-medium">Correo electrónico</label>
              <input
                type="email"
                id="email"
                required
                class="w-full p-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
  
            <!-- Asunto -->
            <div>
              <label for="asunto" class="block text-sm font-medium">Asunto</label>
              <input
                type="text"
                id="asunto"
                required
                class="w-full p-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
  
            <!-- Mensaje -->
            <div>
              <label for="mensaje" class="block text-sm font-medium">Mensaje</label>
              <textarea
                id="mensaje"
                rows="4"
                required
                class="w-full p-2 mt-1 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>
            </div>
  
            <!-- Botón Enviar -->
            <button
              type="submit"
              class="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-pink-700 transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
  
        <!-- Mapa de Google Maps -->
        <div class="lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29770.49828148954!2d-86.8926237256836!3d21.139966999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2b9e47dae191%3A0xb52f486efccce553!2sCin%C3%A9polis%20-%20La%20Gran%20Plaza%20Canc%C3%BAn!5e0!3m2!1ses-419!2smx!4v1740454472710!5m2!1ses-419!2smx"
            width="100%"
            height="450"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // Lógica de envío del formulario se agregará posteriormente
  </script>
  
  <style scoped>
  /* Estilos adicionales si son necesarios */
  </style>