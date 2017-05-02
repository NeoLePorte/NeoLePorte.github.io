//  Defined route components.
const AboutComponent = Vue.extend({
    template: "#about-component-template"
});
const PortfolioComponent = { template: '#portfolio-component-template' }
const HomeComponent = { template: '#home-component-template' }
const ContactComponent = { template: '#contact-component-template' }

// Defined routes

const routes = [
    { path: '/', component: HomeComponent },
    { path: '/portfolio', component: PortfolioComponent },
    { path: '/about', component: AboutComponent },
    { path: '/contact', component: ContactComponent }
]

// initiates router
const router = new VueRouter({
    routes // short for routes: routes
})

// Mounts router
const app = new Vue({
    router
}).$mount('#app')