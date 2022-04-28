import { createWebHistory, createRouter } from 'vue-router'
import HomePage from './pages/HomePage'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import AboutPage from './pages/AboutPage'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/games', component: GameDetails, name: 'GameDetails' },
  { path: '/details/:game_id', component: ViewGames, name: 'ViewGames' },
  { path: '/about', component: AboutPage, name: 'AboutPage' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
