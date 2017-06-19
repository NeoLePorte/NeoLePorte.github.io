<template>
<div id="app">
    <header class="main-heading"  v-sticky="{ zIndex: 100, stickyTop: 1 }">
        <a href="#"><h1>Anthony Blanton</h1></a>
        <nav>
            <!--  router-link component for navigation. -->
            <router-link to="/#">Home</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
</div>
</template>

<script>
import VueSticky from 'vue-sticky'
export default {
     directives: {
        'sticky': VueSticky,
    },
        data () {
            return {
            }
        },
        
    }    
</script>