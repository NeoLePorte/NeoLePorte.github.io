<template id="home-component-template">
        <transition  name="custom-classes-transition" enter-active-class="animated fadeInLeft">
    <div>
        <div class="home">
        <section class="home-section">
        <transition  name="custom-classes-transition" enter-active-class="animated fadeDownBig" leave-active-class="animated fadeOut" >
        <div>
        <p class="home-text hvr-bob">Welcome to my portfolio page. This page will house projects I work on and also be a testing ground for anything new and cool I want to try out. Thanks for checking it out!</p>
        </div>
        </transition>
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

<style>
    .home {
    background: rgba(13, 0, 54, 0.6);
    min-height:100vh; 
}

.home-text {
    padding-top: 29%;
    /*font-family: 'Inconsolata', monospace;*/
    font-family: 'Share Tech Mono', monospace;
    color: ivory;
    text-align: center;
}

@media(min-width: 900px) {
    .home {
        max-height:100vh;
    }
}
</style>

    