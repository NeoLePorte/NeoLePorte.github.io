<template id="about-component-template">
        <transition name="custom-classes-transition" enter-active-class="animated fadeInLeft" >
    <div>
        <div class="about">
            <section class="about-section">
                <div class="pic-container">
                <transition  name="custom-classes-transition" enter-active-class="animated rollIn">
                    <img v-if="show" src="css/img/me2.jpg" alt="Me thinking deeply...">
                </transition>
                </div>
                <div>
                <p class="about-text">Hello, I am a Web Developer out of Louisville, Kentucky.
                    I work primarily with JavaScript (front-end/Back-end), and
                    various frameworks to make cool and useful things. I do love learning though,
                    so I have dabbled in various other languages as well.
                    My professional background is in I.T. but I am trying to switch career paths 
                    towards working in Web development professionally.
                <br>

                <br> Check out some of my <a class="hvr-underline-from-center" href="#/Projects">Projects</a> 
                and <a class="hvr-underline-from-center" href="#/Contact">Contact me</a>
                for any professional opportunities or if you have any cool projects I could assist with.
                </p>
                </div>
            </section>
        </div>
    </div>
        </transition>
</template>


<script>
export default {
        template: "#about-component-template",
        data()  {
            return {
                show: true
            }
        }
        }    
</script>

<style>
.about {
background: rgba(26,27,37,0.7);
min-height: 87.5vh
}


.about-text {
    margin-top: 8px;
    padding: 1em 0 1em 0;
    border-bottom: 2px solid ivory;
    border-top: 2px solid ivory;
    text-align: center;
    line-height: 1.5;
    font-size: 16px;
}

.about-text a {
    text-decoration: none;
    color: #01cd74;
}
.about-section {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    padding-top: 2%;
    margin: 0 auto;
    padding: 25px;
}

.pic-container {
    display: flex;
    flex-direction: column;
    padding-bottom: 1em;

}

.pic-container img {
    max-width: 35%;
    height: auto;
    border-radius: 50%;
    align-self: center;
}

@media(min-width: 900px) {

    .about-text {
    font-size: 20px;
    }

    .pic-container img {
        max-width: 25%;
    }
}

</style>