<template>
<div id="app">
    <header class="main-heading"  v-sticky="{ zIndex: 1001, stickyTop: 1 }">
    <a href="/"><h1 class="hvr-bob">Anthony Blanton</h1></a>
        <nav>
            <!--  router-link component for navigation. -->
            <router-link v-scroll-to="'body'" to="/" class="hvr-underline-from-center">Home</router-link>
            <div class="dropdown">
                    <router-link v-scroll-to="'body'" to="" class="hvr-underline-from-center ">Projects
                        <i class="fa fa-caret-down"></i>
                    </router-link>
                <div class="dropdown-content">
                    <router-link v-scroll-to="'body'" to="/github-projects" class="hvr-underline-from-center">Github</router-link>
                    <router-link v-scroll-to="'body'" to="/projects" class="hvr-underline-from-center">Code Pen</router-link>
                </div>
            </div>
            <router-link v-scroll-to="'body'" to="/about" class="hvr-underline-from-center">About</router-link>
            <router-link v-scroll-to="'body'" to="/contact" class="hvr-underline-from-center">Contact</router-link>
        </nav>
    </header>

    <vue-particles 
    color="#b342f4" 
    linesColor="#ff4e00"
    :linesWidth="3"
    shapeType="polygon"
    :moveSpeed="3">
    
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    </vue-particles>
    <router-view></router-view>
    <footer class="main-footer">
        <div class="footer-icons">
            <a href="https://www.facebook.com/anthony.blanton.5" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>

            <a href="https://www.linkedin.com/in/devcrvft/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>

            <a href="https://twitter.com/HPBVSSCRVFT?lang=en" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>

            <a href="https://github.com/NeoLePorte" target="_blank" rel="noopener noreferrer"><i class="fa fa-github-square fa-2x" aria-hidden="true"></i></a>
        </div>
    </footer>
    
</div>
</template>

<script>
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import VueSticky from 'vue-sticky'


//scrolls to top of body when route changes
Vue.use(VueScrollTo, {
    duration: 1
})
Vue.use(VueSticky)
export default {
     directives: {
        'sticky': VueSticky, //sticks header to top of view
    },
        data () {
            return {
            }
        },
        
    }    
</script>