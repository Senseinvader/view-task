import Vue from 'vue';
import Router from 'vue-router';
import { store } from '@/store/Store';

const routeOptions = [
  {
    path: '/',
    name: 'HelloWorld',
    component: 'HelloWorld',
  },
  {
    path: '/news',
    name: 'News',
    component: 'News',
  },
  {
    path: '/profile',
    name: 'Profile',
    component: 'Profile',
    meta: { requiresAuth: true },
    beforeEnter: (to, from, next) => {
      if (!store.getters['auth/isAuthenticated']) {
        next('/login');
      } else {
        next();
      }
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: 'Login',
  },
];

const routes = routeOptions.map((route) => {
  let imports = {};
  if (route.component) {
    imports = { component: () => import(`@/components/${route.component}.vue`) };
  }
  return {
    ...route,
    ...imports,
  };
});

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes,
});
