<template id="projects-component-template">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOut" > 
    <div>
        <div class="projects">
        <section class="projects-section">
        <p>PROJECTS</p>
        </section>
        <div class="pens">
        <main>
            <li v-for="project in data" :key="project">
                <p>{{project.title}}</p>
                <app-child :details='project.details' :link='project.link'>
                    <a :href="project.link" :key="project">
                    <img :src='project.images.large' :key="project">
                    </a>
                </app-child>
            </li>
        </main>
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
            data: []
        }
    },
        components: {
            appChild: Child
        },
        created() {
            const api = 'https://cpv2api.com/pens/public/bvsscrvft'

    Vue.use(VueAxios, axios)

    Vue.axios.get(api)
        .then((res) => {
            this.data = res.data.data
            console.log(this.data)
        })
        // .catch((err) => {
        //     this.errMsg = "Uh oh, this is a ${err} error :("
        //     this.data = []
        //     console.log(this.errMsg)
        //     next()
        // })
        },
        methods: {
    setData (res, err) {
      if (err) {
        this.error = err.toString()
      } else {
        this.res = res
      }
    }
}
}
</script>

<style>

.projects {
    background: rgba(0, 29, 14, 0.6);
}

.pens ul {
    display: flex;
    flex-direction: row;
    background: inherit;
    justify-content: space-between;
    margin: auto;
}

.pens li {
    list-style: none;
    background: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
}

.pens li > p {
    font-size: 1.2em;
}

.projects-section > p {
    font-size: 1.8em;
}





/*.cp_embed_wrapper {
    display: flex;
    background: inherit;
    margin-left: 2em;
    overflow: hidden;
     make resizeble! 
    resize: both;
     required to see the handle 
    background: white;
    padding-bottom: 10px;
     default height 
    height: 400px;
}*/

/*.cp_embed_wrapper iframe {
    height: 100% !important;
}*/
</style>




