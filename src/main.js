import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)

//async components 
const Home = () =>
    import ('./Home.vue')
const Projects = () =>
    import ('./Projects.vue')
    const GithubProjects = () =>
    import ('./Github-Projects.vue')
const About = () =>
    import ('./About.vue')
const Contact = () =>
    import ('./Contact.vue')


//tells vue to use vue-router plugin
Vue.use(VueRouter)

// Defined routes
const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects, },
    { path: '/github-projects', component: GithubProjects, },
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