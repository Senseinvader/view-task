import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import News from '@/components/News';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import { store } from '@/store/Store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/news',
      name: 'News',
      component: News,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
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
      component: Login,
    },
  ],
});
