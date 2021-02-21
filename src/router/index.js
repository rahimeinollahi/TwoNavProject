import { createRouter, createWebHistory } from 'vue-router'

//Home Routers
const Home = import('../views/HomeViews/MainHome.vue');
const homepage = import('../views/HomeViews/HomePage.vue');
const homecp = import('../components/MainHomeCp/HomeCp.vue');
const algorithm = import('../views/HomeViews/Algorithm.vue');
const csharp = import('../views/HomeViews/CSharp.vue');
const java = import('../views/HomeViews/Java.vue');

//algorithm page
const alpage1 = import('../views/HomeViews/AlgorithmView/AlPage1.vue');

//csharp page
const csharppage1 = import('../views/HomeViews/CSharpView/CSharpPage1.vue');


//book routers
const bookhome = import('../views/BookView/BookHome.vue');
const software = import('../views/BookView/Software.vue');
      //hardware
      const hardware = import('../views/BookView/HardwareViews/Hardware.vue');
      const hardwarepage1 = import('../views/BookView/HardwareViews/HardwarePage1.vue');
      const hardwarepage2 = import('../views/BookView/HardwareViews/HardwarePage2.vue');

const datasintis = import('../views/BookView/DataSictise.vue');

//ai router
const astart = import('../views/BookView/AStar.vue');
const genetic = import('../views/BookView/Genetic.vue');
const recovery = import('../views/BookView/Recovery.vue');

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
        meta:{transition:"ts-homepage"},
        children:[
          {
            path: '',
            name: 'homecp',
            component: homecp,
            meta:{transition:"ts-homecp"}
          },
          {
            path: 'algorithm',
            name: 'algorithm',
            component: algorithm,
            meta:{transition:"ts-algorithm"}
          },
          {
            path: 'csharp',
            name: 'csharp',
            component: csharp,
            meta:{transition:"ts-csharp"}
          },
          {
            path: 'java',
            name: 'java',
            component: java,
            meta:{transition:"ts-java"}
          },
          {
            path: 'alpage1',
            name: 'alpage1',
            component: alpage1,
            meta:{transition:"ts-alpage1"}
          },
          {
            path: 'csharppage1',
            name: 'csharppage1',
            component: csharppage1,
            meta:{transition:"ts-csharppage1"}
          },
        ],
      },      
        
      {
        path: 'bookhome',
        name: 'bookhome',
        component: bookhome,
        meta:{transition:"ts-bookhome"},
        children:[
          {
            path: '',
            name: 'software',
            component: software,
            meta:{transition:"ts-software"}
          },
          {
            path: 'hardware',
            name: 'hardware',
            component: hardware,
            meta:{transition:"ts-hardware"},
            children:[
              {
                path: '',
                name: 'hardwarepage1',
                component: hardwarepage1,
                meta:{transition:"ts-hardwarepage1"}
              },
              {
                path: 'hardwarepage2',
                name: 'hardwarepage2',
                component: hardwarepage2,
                meta:{transition:"ts-hardwarepage2"}
              },
            ]
          },
          {
            path: 'datasintis',
            name: 'datasintis',
            component: datasintis,
            meta:{transition:"ts-datasintis"}
          },
          {
            path: 'astart',
            name: 'astart',
            component: astart,
            meta:{transition:"ts-astart"}
          },
          {
            path: 'genetic',
            name: 'genetic',
            component: genetic,
            meta:{transition:"ts-genetic"}
          },
          {
            path: 'recovery',
            name: 'recovery',
            component: recovery,
            meta:{transition:"ts-recovery"}
          },
        ]
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
