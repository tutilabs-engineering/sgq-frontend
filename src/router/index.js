import { createRouter, createWebHistory } from 'vue-router'
// import jwt from 'jsonwebtoken'
function Auth(to, from, next) {
  console.log(to.matched[0].props.default)
  // const secret = "@#$%¨&*(UGYdkjsbvkjdbvbdsojew#$%¨&Hddjdjbskjdepwopwwcjshvcdsjvcds";
  if (localStorage.getItem("token") != undefined) {
    next()
  } else {
    next("/login");
  }
}
const routes = [
  {
    path: '/startup',
    name: 'Startup',
    component: () => import('../views/Startup.vue'),
    beforeEnter: Auth
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../components/CreateUser.vue'),
    beforeEnter: Auth
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/create-startup',
    name: 'Status',
    component: () => import('../views/NovaStartup.vue'),
    beforeEnter: Auth
  },
  {
    path: '/table-rp',
    name: 'TabelaReprovados',
    component: () => import('../views/TabelaReprovados'),
    beforeEnter: Auth
  },
  {
    path: '/table-ap',
    name: 'TabelaAprovados',
    component: () => import('../views/TabelaAprovados'),
    beforeEnter: Auth
  },
  {
    path: '/principal',
    name: 'Principal',
    component: () => import('../views/Principal.vue'),
    beforeEnter: Auth
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    beforeEnter: Auth
  },
  {
    path: '/attributes',
    name: 'attributes',
    component: () => import('../views/Atributos.vue'),
    beforeEnter: Auth
  },
  {
    path: '/analise-produtos',
    name: 'AnaliseProdutos',
    component: () => import('../views/AnaliseProdutos.vue'),
    beforeEnter: Auth
  },
  {
    path: '/metrologia',
    name: 'metrologia',
    component: () => import('../views/Metrologia.vue'),
    beforeEnter: Auth
  },
  {
    path: '/Modalvar',
    name: 'modalvar',
    component: () => import('../views/Modalvar.vue'),
    beforeEnter: Auth
  },
  {
    path: '/Modalatr',
    name: 'modalatr',
    component: () => import('../views/Modalatr.vue'),
    beforeEnter: Auth
  },
  {
    path: '/StartupDigital',
    name: 'startupdigital',
    component: () => import('../views/StartupDigital.vue'),
    beforeEnter: Auth
  },

  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: Auth
  },

  {
    path: '/error',
    name: 'errorPermission',
    component: () => import('../components/Error.vue'),
    beforeEnter: Auth
  },

  {
    path: '/notFound',
    name: 'NotFound',
    component: () => import('../components/RouteNotFound.vue')
  },

  {
    path: '/load',
    name: 'LoadinPage',
    component: () => import('../components/LoadingPage.vue')
  },

  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/Perfil.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
