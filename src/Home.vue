<template id="home-component-template">
        <transition  name="custom-classes-transition" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutUpBig" >
    <div>
        <div class="home">
        <section class="home-section">
        <p>Hello, welcome to my Portfolio page. This page will house my projects I work on and also be a testing ground for anything new and cool I want to try out. Thanks for checking it out!</p>
        </section>
        <div id="three">

        </div>
    </div>
</div>
        </transition>
</template>

<script>
import * as THREE from 'three'
export default {
        template: '#home-component-template',

         mounted: function(){

    var scene, camera, renderer;
    var geometry, material, cube;

    init()
    animate()

    function init() {

        scene = new THREE.Scene()

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 )
        camera.position.z = 800;

        geometry = new THREE.BoxGeometry( 200, 200, 200 )
        material = new THREE.MeshBasicMaterial( { color: 0xbada55, wireframe: true } );

        cube = new THREE.Mesh( geometry, material )
        scene.add( cube )

        renderer = new THREE.WebGLRenderer()
        renderer.setSize( window.innerWidth, window.innerHeight )

        document.body.appendChild( renderer.domElement )

    }

    function animate() {
        requestAnimationFrame( animate )

        cube.rotation.x += 0.03
        cube.rotation.y += 0.05

        renderer.render( scene, camera )
      }
  }
}
</script>