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
    path: '/attributes',
    name: 'attributes',
    component: () => import('../views/Atributos.vue'),
    beforeEnter: Auth
  },

  {
    path: '/metrologia',
    name: 'metrologia',
    component: () => import('../views/Metrologia.vue'),
    beforeEnter: Auth
  },

  {
    path: '/error',
    name: 'errorPermission',
    component: () => import('../components/ModalError/AccessError.vue'),
    beforeEnter: Auth
  },

  {
    path: '/notFound',
    name: 'NotFound',
    component: () => import('../components/ModalError/RouteNotFoundError.vue')
  },


  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/Perfil.vue')
  },

  {
    path: '/cadastroUsuario',
    name: 'CadastroUsuario',
    component: () => import('../views/CadastroUsuario.vue')
  },
  {
    path: '/metrologiaDetalhes',
    name: 'MetrologiaDetalhes',
    component: () => import('../views/MetrologiaDetalhes.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
