import { createRouter, createWebHistory } from 'vue-router';
import Application from '../client/views/Application.vue';
import PromisorySigning from '../client/views/PromisorySigning.vue';
import Dashboard from '../client/views/Dashboard.vue';

const routes = [
  { path: '/', component: Application },
  { path: '/promisory-signing', component: PromisorySigning },
  { path: '/dashboard', component: Dashboard}
];

export default createRouter({
  history: createWebHistory(),
  routes
});
