<template id="contact-component-template">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight">
        <div class="contact">
        <transition name="custom-classes-transition" enter-active-class="animated fadeIn">
        <div>
            <div class="social-section">

            <!--contact form component-->
                <form-child></form-child>

                <!--aframe webvr scene-->
                <three class="aframe"></three>

                    <!--social icon wrapper-->
                <div class="social-icons">
                    <a href="https://www.facebook.com/anthony.blanton.5" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook-square fa-4x" aria-hidden="true"></i></a>

                    <a href="https://www.linkedin.com/in/devcrvft/" target="_blank" rel="noopener noreferrer"><i class="fa fa-linkedin-square fa-4x" aria-hidden="true"></i></a>

                    <a href="https://twitter.com/HPBVSSCRVFT?lang=en" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter-square fa-4x" aria-hidden="true"></i></a>

                    <a href="https://github.com/NeoLePorte" target="_blank" rel="noopener noreferrer"><i class="fa fa-github-square fa-4x" aria-hidden="true"></i></a>
                    
                </div>
            </div>
            </div>
        </transition>
                
        </div>
  </transition>
</template>

<script>
import Child from './contact-child.vue'
import Three from './contact-three.vue'

export default {
    template:'#contact-component-template',
    components: {
        formChild: Child,  //<--uses imported contact-child.vue
        three: Three        //<--uses imported contact-three.vue
  },
  data() {
    return { isShowing: false } //defaults isShowing property to false to hide on page load
    }
}
</script>

<style>
/*Contact-CSS*/
.contact {
    background: rgba(26,27,37,0.7);
    font-family: 'Nunito', sans-serif;
    min-height: 87.5vh
}

.social-section {
    background: rgba(16, 9, 11,0.5);
    padding: 0 2em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.social-icons {
    padding-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    order: 1;
    
}

.social-icons i{
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    cursor: pointer;
    text-decoration: none;
    color: ivory;
}

.social-icons a {
    display: block;
}
/*hover styling for icons*/
.social-icons i:before {
    font-family: FontAwesome;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition-duration: 0.5s;
    transition-duration: 0.5s;
    -webkit-transition-property: color;
    transition-property: color;
}

.social-icons i:hover:before,
.social-icons i:focus:before,
.social-icons i:active:before {
    color: #0F9E5E;
}
/*--------------------------------*/

.aframe {
    order: 3;
    margin-top: 3em;
}
/*Order of elements change with resize*/
@media(min-width: 900px) {
    .social-section{
        align-content: center;
    }

    .aframe {
    order: 2;
}

    .social-icons {
        order: 1;
    }

    
}

@media(min-width: 1300px) {

    .contact {
        max-height: 84.4;
    }
    .social-section {
        width: 90%;
        height: 612px;
        flex-direction: row;
        justify-content: space-between;
        margin: 2em auto;
    }

    .social-section a {
        margin: 0 50% 0;
    }
    
    .social-icons {
        align-self: space-around;
        margin-right: 2em;
        order: 3;
        flex-direction: column;
    }

    .social-icons a:last-child, .social-icons a:nth-child(2),
    .social-icons a:nth-child(3) {
        margin-top: 1em;
    }

    .aframe {
        order: 2;
        margin-top: auto;
    }
}


</style>