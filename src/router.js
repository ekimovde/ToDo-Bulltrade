import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/home/HomePage.vue';
import TaskEditPage from './pages/task-edit/TaskEditPage.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/edit/:taskId', name: 'task-edit', component: TaskEditPage },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
