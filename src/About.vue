<template id="about-component-template">
        <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOut" >
    <div>
        <div class="about">
        <section class="about-section">
        <p>ABOUT ME</p>
        </section>
         <p>My name is Anthony Blanton. 
        </p>
        </div>
    </div>
        </transition>
</template>


<script>
export default {
        template: "#about-component-template"
        }    
</script>

<style>
    .about {
    background: rgba(26,27,37,0.7)
}
</style>