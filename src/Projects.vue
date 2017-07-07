<template id="projects-component-template">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" > 
        <div>
            <div class="projects">
                <div class="pens">
                    <li v-for="project in data" :key="project"> <!--renders list of projects pulled from codepen API-->
                        <app-child :details='project.details' :link='project.link' :title='project.title'><!--uses overlay created in 'project-child' component-->
                            <a :href="project.link" :key="project" :alt="project.name">
                                <img :src="project.images.large" :key="project">
                            </a>
                        </app-child>
                    </li>
                </div>
            </div>   
        </div>
    </transition>
</template>

<script>
import Child from './project-child.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vue from 'vue'



export default {
    template: '#projects-component-template',
    data() {
        return {
            data: []  //empty array houses codepen project data
        }
    },
    components: {
        appChild: Child  // uses overlay created in 'project-child' component
    },
    // calls codepen API when this component is rendered right before mount
    created() {
        const api = 'https://cpv2api.com/pens/public/bvsscrvft'

        Vue.use(VueAxios, axios)

        Vue.axios.get(api)
            .then((res) => {
                this.data = res.data.data
                })
            }
        }
</script>

<style>
.projects {
    background: rgba(0, 29, 14, 0.6);
    min-height:100vh;
}


.pens{
    list-style: none;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}

.pens li > p {
    font-size: 1.2em;
}

.projects-section > p {
    font-size: 1.8em;
}

.projects-section {
    display: flex;
    font-size: 24px;
    margin: 0 auto;
    padding: 25px;
}

@media(min-width: 900px) {
    .projects {
        max-height:100vh;
    }

    .pens li{
        margin-left: 1em;
    }

    .pens {
        justify-content: flex-start;
    }

    .projets.section {
        margin-bottom: 5em;
    }
}
</style>




