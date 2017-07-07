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
                    I work primarly with javascript (front-end/Back-end), and
                    various frameworks to make cool and useful things. My profesional background is
                    I.T. but I am trying to build out my skills to move towards working in Web Development
                    profesionally.
                     <br>

                <br> Check out some of my <a href="#/Projects">Projects</a> 
                and <a href="#/Contact">Contact me</a>
                for any work opportunities or if you have any cool projects I could assist with.
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
min-height: 100vh;
}


.about-text {
    padding: 1em 0 1em 0;
    border-bottom: 2px solid ivory;
    border-top: 2px solid ivory;
    text-align: center;
}
.about-section {
    display: flex;
    flex-direction: column;
    align-content: flex-end;
    padding-top: 5%;
    font-size: 24px;
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
    border-radius: 100%;
    align-self: center;
}

@media(min-width: 900px) {

    /*.about-text {
    margin: auto;
    padding: 1em 0 1em 0;
    }*/
}

</style>