<template  id="childarea">
    <transition name="custom-classes-transition" enter-active-class="animated bounceInUp" >
        <div class="img-contain">
            <div class="overlay">
    	        <p class="overlay-text" >{{this.details}}</p>
                <a :href="this.link"><div class="proj-link">View!</div></a>
            </div>
        <transition-group transition name="flip" mode="out-in" >
            <slot v-if="!isShowing"></slot> 
            <img v-else src=""/>
        </transition-group>
        </div>
    </transition>
</template>

<script>

export default {
        template: "#childarea",
        props: ['details', 'link'],
        data() {
            return {
                isShowing: false
            }
        },
        methods: {
            toggleShow() {
                this.isShowing = !this.isShowing;
                }
            },
        created: function () {
                this.details
    }
}
</script>

<style>
.proj-link {
    background: #c62735;
    color: white;
    border: 0;
    padding: 5px 5px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 20%;
    margin-left: 40%;
}

span,
app-child,
img,
a {
}

img {
    width: 100%;
    transform-origin: 50% 50%;
    cursor: pointer;
    transform: scaleY(1) translateZ(0);
    margin: 5px;
}

main {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.img-contain {
    overflow: hidden;

}

.img-contain:hover .overlay {
    opacity: 1;
    background: rgba(13, 0, 0, 0.5);
    transition: 0.3s opacity ease-out;
}

.overlay {
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 1000;
    margin: 5px;
    opacity: 0;
    overflow: hidden;
    transition: 0.3s opacity ease-in;
}

.overlay-text {
    margin-top: 50px;
}

@media(min-width: 1600px) {
    .overlay {
    width: 495px;
    height: 293px;
    }

    .img-contain {
    width: 500px;
    height: 320px;
    }
}
</style>

