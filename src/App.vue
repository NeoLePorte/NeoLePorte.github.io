<<<<<<< HEAD
<template>
<div id="app">
    <header class="main-heading"  v-sticky="{ zIndex: 1001, stickyTop: 1 }">
    <a href="#"><h1 class="hvr-bob">Anthony Blanton</h1></a>
        <nav>
            <!--  router-link component for navigation. -->
            <router-link v-scroll-to="'body'" to="/#" class="hvr-underline-from-center">Home</router-link>
            <router-link v-scroll-to="'body'" to="/projects" class="hvr-underline-from-center">Projects</router-link>
            <router-link v-scroll-to="'body'" to="/about" class="hvr-underline-from-center">About</router-link>
            <router-link v-scroll-to="'body'" to="/contact" class="hvr-underline-from-center">Contact</router-link>
        </nav>
    </header>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>

    <footer class="main-footer">
        <div class="footer-icons">
            <a href="https://www.facebook.com/anthony.blanton.5" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
            <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
            <i class="fa fa-github-square fa-2x" aria-hidden="true"></i>
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

export default {
     directives: {
        'sticky': VueSticky, //sticks header to top of view
    },
        data () {
            return {
            }
        },
        
    }    
=======
<template>
<div id="app">
    <header class="main-heading"  v-sticky="{ zIndex: 100, stickyTop: 1 }">
        <a href="#"><h1>Anthony Blanton</h1></a>
        <nav>
            <!--  router-link component for navigation. -->
            <router-link v-scroll-to="'body'" to="/#">Home</router-link>
            <router-link v-scroll-to="'body'" to="/projects">Projects</router-link>
            <router-link v-scroll-to="'body'" to="/about">About</router-link>
            <router-link v-scroll-to="'body'" to="/contact">Contact</router-link>
        </nav>
    </header>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
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

export default {
     directives: {
        'sticky': VueSticky, //sticks header to top of view
    },
        data () {
            return {
            }
        },
        
    }    
>>>>>>> 38967afa685b3c455f08cea058724b50c0dbe634
</script>