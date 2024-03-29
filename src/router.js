import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/details/:id',
            name: 'videodetails',
            component: () => import(/* webpackChunkName: "videodetails" */ './views/VideoDetails.vue')
        },
        {
            path: '/details/:id/season/:season',
            name: 'videodetails-season',
            component: () => import(/* webpackChunkName: "videodetails-season" */ './views/VideoDetails.vue')
        },
        {
            path: '/details/:imdbid/:season/:episode',
            name: 'videodetails-episode',
            component: () => import(/* webpackChunkName: "videodetails-episode" */ './views/EpisodeDetails.vue')
        }
    ]
})
