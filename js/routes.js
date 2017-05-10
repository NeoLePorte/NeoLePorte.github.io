//  Defined route components.
const AboutComponent = { template: "#about-component-template" }

const PortfolioComponent = { template: '#portfolio-component-template',
  data () {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('https://cpv2api.com/pens/public/bvsscrvft').then(response => {

    // get body data
    this.someData = response.body;
    let stuff = this.someData;
    console.log(stuff.data);

  }, response => {
    // error callback
  });
  }
 }
}

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
    router,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
}).$mount('#app')
