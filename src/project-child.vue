<template  id="overlay">
    <transition name="custom-classes-transition" enter-active-class="animated bounceInUp">
            <section class="project-section">
                <p>{{this.title}}</p>
        <div class="img-contain">
            <div class="overlay  hvr-overline-from-center hvr-underline-from-center">
                <p class="overlay-text" v-html="this.details"></p>
                <a  :href="this.link" target="_blank" rel="noopener noreferrer"><div class="overlay-bttn">View!</div></a>
            </div>
            <slot></slot>
        </div>
        </section>
    </transition>
</template>

<script>

export default {
        template: "#overlay",
        props: ['details', 'link', 'title'],
}
</script>

<style>

img {
    width: 100%;
    transform-origin: 50% 50%;
    cursor: pointer;
    transform: scaleY(1) translateZ(0);
    margin: 5px;
    border: solid 3px rgba(16, 9, 11, 0.8);
    border-radius: 1%;
}

.project-section p {
    align-self:center;
}


.img-contain {
    display: flex;
    flex-direction: column;
    max-width: 333px;
    max-height: 282px;
    overflow: hidden;
    

}

.overlay > a {
    background: #c62735;
    color: white;
    border: 0;
    padding: 5px 5px;
    border-radius: 4px;
    outline: 0;
    cursor: pointer;
    width: 20%;
    margin: auto;
    text-decoration: none;

}

.img-contain:hover .overlay {
    opacity: 1;
    background: rgba(13, 0, 0, 0.7);
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
    width: 333px;
    height: 198px;
}

.overlay-text {
    margin: 18px 10px;
    font-size: 0.8em;
    border-bottom: solid 2px rgba(16, 9, 11, 0.9);
    border-top: solid 2px rgba(16, 9, 11, 0.9);
    text-align: center;
    
}

.overlay-bttn {
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
    margin: auto;
}

.project-section > p {
    font-size: 1.3em;
}

@media(min-width: 900px) {
    .overlay {
    width: 495px;
    height: 294px;
    }

    .overlay-text {
    margin-top: 50px;
    font-size: 1em;
    }

    .img-contain {
    display: flex;
    max-width: 500px;
    max-height: 310px;
    }

    .project-section {
        display: flex;
        flex-direction: column;
        background: rgba(16, 9, 11,0.5);
        margin-left: 1.3em;
        padding: 0;
        height: 97.5%;
        align-self: center;
        border: solid 4px rebeccapurple;
    }
}
</style>

