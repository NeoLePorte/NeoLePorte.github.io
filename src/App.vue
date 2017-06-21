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
</script>