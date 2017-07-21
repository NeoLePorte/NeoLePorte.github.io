<template id="projects-component-template">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" > 
        <div>
            <div class="projects">
                    <div class="pens">
                        <li v-for="project in data" :key="project"> <!--renders list of projects pulled from codepen API-->
                            <app-child :details='project.details' :link='project.link' :title='project.title'><!--uses overlay created in 'project-child' component-->
                                
                                    <img :src="project.images.large" :key="project">
                                
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
                console.log(this.data)
                })
            }
        }
</script>

<style>
.projects {
    background: rgba(26,27,37,0.7);
    min-height: 84.4vh;

}


.pens{
    list-style: none;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: row wrap;
}

.pens li > p {
    font-size: 1.2em;
}




@media(min-width: 900px) {
    .pens {
        justify-content: space-around;
    }

    
}
</style>




