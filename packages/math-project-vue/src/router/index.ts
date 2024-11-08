import { createRouter, createWebHistory } from 'vue-router'

import Apifox from '../components/Apifox.vue'
import DingZhen from '../components/DingZhen.vue'
import HelloWorld from '../components/HelloWorld.vue'
import I18n from '../pages/I18nView.vue'
import UnocssThemeSwitcher from '../pages/UnocssThemeSwitcher.vue'
import ZhihuHot from '../components/ZhihuHot.vue'
import TheCounter from '../components/TheCounter.vue'
import MessageBox from '../components/MessageBox.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/zhihuhot', component: ZhihuHot },
  { path: '/dingzhen', component: DingZhen },
  { path: '/apifox', component: Apifox },
  { path: '/i18n', component: I18n },
  { path: '/thecountern', component: TheCounter },
  { path: '/unocssthemeswitcher', component: UnocssThemeSwitcher },
  { path: '/messagebox', component: MessageBox },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
