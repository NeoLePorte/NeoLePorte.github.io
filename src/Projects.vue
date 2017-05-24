<template id="projects-component-template">
    <transition name="custom-classes-transition" enter-active-class="animated fadeInRight" > 
    <div>
        <div class="projects">
        <section class="projects-section">
        <p>PROJECTS</p>
        </section>
           <div class="pens">
        <iframe id="cp_embed_EWXBEg" src="http://codepen.io/bvsscrvft/embed/preview/EWXBEg?height=265&amp;theme-id=0&amp;slug-hash=EWXBEg&amp;default-tab=js%2Cresult&amp;user=bvsscrvft&amp;embed-version=2&amp;pen-title=Glitchwar%20Sadat&amp;preview=true" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="Glitchwar Sadat" class="cp_embed_iframe  cp_embed_wrapper" style="width: 100%; overflow: hidden;"></iframe>

        <iframe id="cp_embed_yVMopr" src="http://codepen.io/bvsscrvft/embed/preview/yVMopr?height=265&amp;theme-id=0&amp;slug-hash=yVMopr&amp;default-tab=css%2Cresult&amp;user=bvsscrvft&amp;embed-version=2&amp;pen-title=Cut-Up%20Machine&amp;preview=true" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="Cut-Up Machine" class="cp_embed_iframe cp_embed_wrapper" style="width: 100%; overflow: hidden;"></iframe>

        <iframe id="cp_embed_rmMoWj" src="http://codepen.io/bvsscrvft/embed/preview/rmMoWj?height=265&amp;theme-id=0&amp;slug-hash=rmMoWj&amp;default-tab=css%2Cresult&amp;user=bvsscrvft&amp;embed-version=2&amp;pen-title=ToDoList&amp;preview=true" scrolling="no" frameborder="0" height="265" allowtransparency="true" allowfullscreen="true" name="CodePen Embed" title="ToDoList" class="cp_embed_iframe  cp_embed_wrapper" style="width: 100%; overflow: hidden;"></iframe>
        </div>
    </div>   
</div>
        </transition>
    </template>

    <script>
export default {
        template: '#projects-component-template',
        method: function () {
            let reload = document.getElementByClassName(reload)
        }
    }    
</script>

<style>
.projects {
    background: #333333;
}

/*.projects-section ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    background: inherit;
    justify-content: space-between;
    margin: auto;
}*/

/*.projects-section li {
    text-decoration: none;
    background: inherit;
    color: #f02c11;
    border: solid 2px black;
}*/

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

.pens {
    background: inherit;
}
</style>




