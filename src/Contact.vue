<template id="contact-component-template">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight">
        <div class="contact">
        <transition name="custom-classes-transition" enter-active-class="animated fadeIn">
        <div>
            <div class="social-section">
                <form-child></form-child>
                <three class="aframe"></three>
                <div class="social-icons">
                    <i class="fa fa-facebook-square fa-4x" aria-hidden="true"></i>
                    <i class="fa fa-linkedin-square fa-4x" aria-hidden="true"></i>
                    <i class="fa fa-twitter-square fa-4x" aria-hidden="true"></i>
                    <i class="fa fa-github-square fa-4x" aria-hidden="true"></i>
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
        formChild: Child,
        three: Three
  },
  data() {
    return { isShowing: false }
    }
}
</script>

<style>

.contact {
    background: rgba(56, 0, 0, 0.6);
    font-family: 'Nunito', sans-serif;
    min-height: 100vh;
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

.social-icons i {
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    cursor: pointer;

}

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


.aframe {
    order: 3;
    margin-top: 3em;
}

@media(min-width: 900px) {

    .contact {
        max-height: 100vh;
    }
    .social-section {
        width: 78%;
        height: 612px;
        flex-direction: row;
        justify-content: space-between;
        margin: 4em auto;
    }

    .social-section i {
        margin: 0 50% 0;
    }
    
    .social-icons {
        align-self: space-around;
        margin-right: 2em;
        order: 3;
        flex-direction: column;
    }

    .social-icons i:last-child, .social-icons i:nth-child(2),
    .social-icons i:nth-child(3) {
        margin-top: 1em;
    }

    .aframe {
        order: 2;
        margin-top: auto;
    }
}


</style>