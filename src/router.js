import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import AboutPage from './pages/AboutPage'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/games', component: ViewGames, name: 'ViewGames'},
  { path: '/about', component: AboutPage, name: 'AboutPage'},
  { path: '/details/:game_id', component: GameDetails, name: 'GameDetails'}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
