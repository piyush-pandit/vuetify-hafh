import Vue from 'vue'
import Router from 'vue-router'
import Rv from '@/components/Rv'
import Room from '@/components/Room'
import Post from '@/components/Post'
import RvAddModal from'@/components/RvAddModal'
import RoomAddModal from '@/components/RoomAddModal'
import PostAddModal from '@/components/PostAddModal'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      path: '/rv',
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
    },

    {
      path: '/rvmodal',
      name: 'RvAddModal',
      component: RvAddModal
    },

    {
      path: '/roommodal',
      name: 'RoomAddModal',
      component: RoomAddModal
    },

    {
      path: '/postmodal',
      name: 'PostAddModal',
      component: PostAddModal
    },

    {
      path: '/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
