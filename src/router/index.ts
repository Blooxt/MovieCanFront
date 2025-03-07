import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'; // Importar la vista de Login
import EditView from '../views/EditView.vue';
import UsuariosView from '../views/UsuariosView.vue';
import UsuariosEditView from '../views/UsuariosEditView.vue';
import UsuariosCreateView from '../views/UsuariosCreateView.vue';
import RolesView from '../views/RolesView.vue';
import RolesCreateView from '../views/RolesCreateView.vue';
import RolesEditView from '../views/RolesEditView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }, // Proteger la ruta
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: () => import('../views/RecommendationView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/Form',
      name: 'form',
      component: () => import('../views/FormView.vue'),
      meta: { requiresAuth: true }, // Accesible para cualquier usuario autenticado
    },
    {
      path: '/edit/:id',
      component: EditView,
      meta: { requiresAuth: true }, // Accesible para cualquier usuario autenticado
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/BlogView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/usuarios',
      component: UsuariosView,
      meta: { requiresAuth: true, requiresAdmin: true }, // Solo para admin
    },
    {
      path: '/usuarios/crear',
      component: UsuariosCreateView,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/usuarios/editar/:id',
      component: UsuariosEditView,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/roles',
      component: RolesView,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/roles/crear',
      component: RolesCreateView,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
    {
      path: '/roles/editar/:id',
      component: RolesEditView,
      meta: { requiresAuth: true, requiresAdmin: true },
    },
  ],
});

// Guardia de navegación
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol');

  if (to.meta.requiresAuth && !token) {
    next('/login'); // Redirigir a login si no está autenticado
  } else if (to.meta.requiresAdmin && rol !== 'Admin') {
    next('/'); // Redirigir a home si no es admin
  } else {
    next(); // Continuar la navegación
  }
});

export default router;