import Vue from 'vue'
import Router from 'vue-router'
import Rv from '@/components/Rv'
import Room from '@/components/Room'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Rv',
      component: Rv
    },

    {
      path: '/room',
      name: 'Room',
      component: Room
    },

    {
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
