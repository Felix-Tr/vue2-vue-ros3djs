import Vue from 'vue'
import Router from 'vue-router'
import SkillsC from './components/SkillsC.vue'
import AboutC from './components/AboutC.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'skills',
      component: SkillsC
    },
    {
      path: '/about/:name',
      name: 'about',
      component: AboutC
    }
  ]
})