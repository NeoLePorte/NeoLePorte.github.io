import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import About from './About.vue'
import Projects from './Projects.vue'
import Contact from './Contact.vue'
import Home from './Home.vue'

Vue.use(VueRouter);

// Defined routes

const routes = [
    { path: '/', component: Home },
    { path: '/projects', component: Projects },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
]

//initiates router
const router = new VueRouter({
    name: router,
    routes // short for routes: routes
})


const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')