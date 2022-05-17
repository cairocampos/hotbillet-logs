import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Leads from '@/pages/Leads/Leads.vue'


const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: Home,
    meta: {
      title: "Leads"
    }
  },
  {
    name: "Leads",
    path: "/clientes/:id/leads",
    component: Leads,
    props:true,
    meta: {
      title: "Leads"
    }
  }
]

const router = createRouter({
  history: createWebHistory("/logs"),
  routes
})

export {
  router
}