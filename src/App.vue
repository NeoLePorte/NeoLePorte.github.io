<template>
<div id="app">
    <header class="main-heading">
        <h1>Anthony Blanton</h1>
        <nav>
            <!--  router-link component for navigation. -->
            <router-link to="/#">Home</router-link>
            <router-link to="/Projects" class="reload">Projects</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <!--<transition-group name="custom-classes-transition" leave-active-class="rotateOut">-->
    <router-view></router-view>
    <!--</transition-group>-->
</div>
</template>

<script>
export default {
        data () {
            return {
            }
        }
    }    
</script>