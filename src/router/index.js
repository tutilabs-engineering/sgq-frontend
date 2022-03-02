import { createRouter, createWebHistory } from 'vue-router'
import http from "../services/account/Users"
async function Auth(to, from, next) {
  
  const token = sessionStorage.getItem("token")
  
  if(!token) {
    return next("/login")
  }

  await http.validate().then((response) => {
    if(response.status === 200) {
      return next()
    } 
    return next("/login")
  }).catch(() => {
    return next("/login")
  })
  return next("/login")
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
    path: '/startups-aprovadas',
    name: 'TabelaAprovados',
    component: () => import('../views/TabelaAprovados'),
    beforeEnter: Auth
  },
  {
    path: '/startups-reprovadas',
    name: 'TabelaReprovados',
    component: () => import('../views/TabelaReprovados'),
    beforeEnter: Auth
  },
  {
    path: '/startups-andamentos',
    name: 'TabelaAndamento',
    component: () => import('../views/TabelaAndamento'),
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

  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: () => import('../views/Configuracoes.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
