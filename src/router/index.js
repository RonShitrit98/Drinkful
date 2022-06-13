import { createRouter, createWebHashHistory } from 'vue-router'
import homePage from '../views/home-page.vue'
import mainGame from '../views/main-game.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/:gameId/play',
      name: 'main-game',
      component: mainGame
    },

  ]
})

export default router
