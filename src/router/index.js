import { createRouter, createWebHistory } from 'vue-router'
import http from "../services/account/Users"
import jwt from "jsonwebtoken"

async function Auth(to, from, next) {

  const token = sessionStorage.getItem("token")

  if (!token) {
    return next("/login")
  }

  await http.validate().then((response) => {
    if (response.status === 200) {
      return next()
    }
    return next("/login")
  }).catch(() => {
    return next("/login")
  })
  return next("/login")
}

async function AuthAdmin(to, from, next) {

  async function IsAuth() {
    const token = sessionStorage.getItem("token")

    if (!token) {
      next("/login")
      return false
    }

    await http.validate().then((response) => {
      if (response.status === 200) {
        return true
      }
      next("/login")
      return false
    }).catch(() => {
      next("/login")
      return false
    })
    return false
  }

  const auth = IsAuth();

  if (!auth) {
    return next("/login")
  }

  const secret = "cf2cf1732834hh4hsg657tvdbsi84732492ccF=2=eyfgewyf6329382¨&%$gydsu";

  const token = sessionStorage.getItem("token");

  if (token) {
    try {
      const { sub } = jwt.verify(token, secret)
      await http.findUserById(sub).then((response) => {
        const role = response.data.user.role.id
        if (role === 1 || role === 2) {
          return next()

        }
        return next("/errorPermission")
      })
    } catch (error) {
      console.log(error)
    }
  }
}

async function EmManutencao(to, from, next) {

  async function IsAuth() {
    const token = sessionStorage.getItem("token")

    if (!token) {
      next("/login")
      return false
    }

    await http.validate().then((response) => {
      if (response.status === 200) {
        return true
      }
      next("/login")
      return false
    }).catch(() => {
      next("/login")
      return false
    })
    return false
  }

  const auth = IsAuth();

  if (!auth) {
    return next("/login")
  }

  next("/emConstrucao")
}


const routes = [
  {
    path: '/',
    name: 'default',
    beforeEnter: Auth
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: EmManutencao
  },
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
    path: '/analise_produtos',
    name: 'AnaliseDeProdutos',
    component: () => import('../views/AnaliseDeProdutos.vue'),
    beforeEnter: Auth
  },

  {
    path: '/metrologia',
    name: 'metrologia',
    component: () => import('../views/Metrologia.vue'),
    beforeEnter: Auth
  },

  {
    path: '/errorPermission',
    name: 'ErrorPermission',
    component: () => import('../components/ModalError/AccessError.vue'),
    beforeEnter: Auth
  },

  {
    path: '/notFound',
    name: 'NotFound',
    component: () => import('../components/ModalError/RouteNotFoundError.vue')
  },

  {
    path: '/modal_base',
    name: 'ModalBase',
    component: () => import('../components/Modal/ModalBase.vue'),
    beforeEnter: EmManutencao
  },


  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('../views/Perfil.vue'),
    beforeEnter: Auth
  },

  {
    path: '/create-startup-by-id',
    name: 'NovaStartupById',
    component: () => import('../views/NovaStartupById.vue'),
    beforeEnter: Auth
  },

  {
    path: '/cadastroUsuario',
    name: 'CadastroUsuario',
    component: () => import('../views/CadastroUsuario.vue'),
    beforeEnter: AuthAdmin
  },
  {
    path: '/metrologiaDetalhes',
    name: 'MetrologiaDetalhes',
    component: () => import('../views/MetrologiaDetalhes.vue'),
    beforeEnter: Auth
  },

  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: () => import('../views/Configuracoes.vue'),
    beforeEnter: Auth
  },
  {
    path: '/editarUsuario',
    name: 'EditarUsuario',
    component: () => import('../views/EditarUsuario.vue'),
    beforeEnter: AuthAdmin
  },
  {
    path: '/emConstrucao',
    name: 'EmConstrucao',
    component: () => import('../components/ModalError/EmConstrucao.vue'),
    beforeEnter: AuthAdmin
  },

  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    beforeEnter: Auth
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
