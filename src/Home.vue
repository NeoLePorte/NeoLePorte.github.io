<template id="home-component-template">
        <transition  name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="fadeOutUpBig" >
    <div>
        <div class="home">
        <section class="home-section">
        <p>Hello, welcome to my Portfolio page. This page will house my projects I work on and also be a testing ground for anything new and cool I want to try out. Thanks for checking it out!</p>
        </section>
        </div>
    </div>
        </transition>
</template>

<script>
export default {
        template: '#home-component-template'
        }    
</script>