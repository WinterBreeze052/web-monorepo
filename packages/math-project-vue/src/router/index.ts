import { createRouter, createWebHistory } from 'vue-router'

import Apifox from '../components/Apifox.vue'
import DingZhen from '../components/DingZhen.vue'
import HelloWorld from '../components/HelloWorld.vue'
import I18n from '../pages/I18nView.vue'
import ZhihuHot from '../components/ZhihuHot.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/zhihuhot', component: ZhihuHot },
  { path: '/dingzhen', component: DingZhen },
  { path: '/apifox', component: Apifox },
  { path: '/i18n', component: I18n },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
