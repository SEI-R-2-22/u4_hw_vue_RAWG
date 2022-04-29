import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import AboutPage from './pages/AboutPage'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path : '/', component: HomePage, name : 'Homepage'},
    // { path: '/games', component: ViewGames, name : 'ViewGames' },
    { path: '/details/:game_id', component: GameDetails, name : 'GameDetails' },
    { path: '/about', component: AboutPage, name : 'AboutPage' },
    { path: '/games/:genre_id', component: ViewGames, name: 'ViewGames'},
  ]
})

export default router
