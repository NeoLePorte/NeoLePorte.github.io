<template id="projects-component-template">
<transition name="custom-classes-transition" enter-active-class="animated fadeInRight" > 
<div>
    <div class="projects">
        <div class="pens">
            <li v-for="project in data" :key="project.owner.id"> <!--renders list of projects pulled from codepen API-->
                <app-child :details='project.description' :link='project.html_url' :title='project.name'><!--uses overlay created in 'project-child' component-->

                        <img class='git-image' :src='project.homepage? project.homepage: url' :key="project.owner.id">

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
    template: '#github-projects-component-template',
    data() {
        return {
            data: [], //empty array houses project data
            url: 'https://i.pinimg.com/originals/e2/e3/6b/e2e36b59c8653223630c93459f705864.jpg'
        }
    },
    components: {
        appChild: Child  // uses overlay created in 'project-child' component
    },
    // calls codepen API when this component is rendered right before mount
    created() {
        const api = 'https://api.github.com/users/neoleporte/repos'

        Vue.use(VueAxios, axios)

        Vue.axios.get(api)
            .then((res) => {
                this.data = res.data
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
    justify-content: flex-start;
    align-content: center;
    flex-flow: row wrap;
}

.pens li > p {
    font-size: 1.2em;
}




@media(min-width: 900px) {
    .pens {
        justify-content: center;
    }
}
</style>




