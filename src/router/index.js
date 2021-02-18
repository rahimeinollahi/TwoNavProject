import { createRouter, createWebHistory } from 'vue-router'

//Home Routers
const Home = import('../views/HomeViews/MainHome.vue');
const homepage = import('../views/HomeViews/HomePage.vue');

//book routers
const bookhome = import('../views/BookView/BookHome.vue');

//cars routers
const carhome = import('../views/CarView/CarHome.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{transition:"ts-home"},
    children:[
      {
        path: '',
        name: 'homepage',
        component: homepage,
        meta:{transition:"ts-homepage"}
      },
      {
        path: 'bookhome',
        name: 'bookhome',
        component: bookhome,
        meta:{transition:"ts-bookhome"}
      },
      {
        path: 'carhome',
        name: 'carhome',
        component: carhome,
        meta:{transition:"ts-carhome"}
      },
    ]
  },
  
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
