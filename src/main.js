import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Management from '@/views/Management'
import MainPage from '@/views/MainPage'
import Info from '@/views/Info'
import Contact from '@/views/Contact'
import Reception from '@/views/Reception'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainPage
  },
  {
    path: '/management',
    component: Management
  },
  {
    path: '/info',
    component: Info
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '/reception',
    component: Reception
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
