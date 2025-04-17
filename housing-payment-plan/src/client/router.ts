import { createRouter, createWebHistory } from 'vue-router';
import Application from '../client/views/Application.vue';
import PromisorySigning from '../client/views/PromisorySigning.vue';

const routes = [
  { path: '/', component: Application },
  { path: '/promisory-signing', component: PromisorySigning }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
