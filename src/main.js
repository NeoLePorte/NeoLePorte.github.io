import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './About.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import Home from './Home.vue'
import Child from './project-child.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

//tells vue to use vue-router plugin
Vue.use(VueRouter)

// Defined routes

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects, },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
]

//initiates router

const router = new VueRouter({
        name: router,
        routes, // short for routes: routes
        scrollBehavior: (to, from, savedPosition) => { //saves scroll position with forward and back buttons
            if (savedPosition) {
                return savedPosition
            } else {
                return { x: 0, y: 0 }
            }
        }
    })
    //mounts/renders app
const app = new Vue({
    mode: 'history',
    router: router,
    render: h => h(App)
}).$mount('#app')