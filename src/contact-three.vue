<template  id="three">
    <transition name="custom-classes-transition" enter-active-class="animated bounceInUp">
        <section class="three-section">
            <a-scene embedded >
      <a-assets>

        <a-mixin
          id="marker"
          geometry="primitive: plane; width: 0.02; height: 0.02"
          material="color: red"
        ></a-mixin>

        <img src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous">
        <a-mixin id="boldFont" text="font: #optimerBoldFont"></a-mixin>
      </a-assets>

      <!--<a-entity mixin="marker" position="-2.5 0.7 0.01"></a-entity>-->
      <!--<a-entity text-geometry="value: What's up" position="-2.5 0.7 0.01"
        material="wireframe: true;"
      ></a-entity>-->

      <!--<a-entity mixin="marker" position="0 0.7 0.01"></a-entity>-->
      

      <a-entity  position="0 2.9 0.01"
                text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; lineHeight: 50; letterSpacing: 5; color: white; align: center; value: Contact me for professional opportunities or just to say hi! I would love to hear from you either way.; width: 3.2">
      </a-entity>

      <!--<a-entity mixin="marker" position="-2.5 0.7 0.01"></a-entity>-->
      <a-entity id="size" position="0 0.7 0.01"
        text="color: white; align: center; value: Use WASD to move click+drag to look; width: 2">
      </a-entity>

      <a-entity id="color"
          href="https://github.com/gasolin/aframe-href-component"
          position="-2 2 -6"
          text-geometry="value: Contact Me; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12; width: 6;"
          material="color: #01cd74; metalness:0.8; roughness: 0.5;"
        ></a-entity>

        <a-entity
        geometry="primitive: box; width: 1; height: 1; depth: 1"
        position=" -2.2 1 -6" 
        material="color:white; src:css/img/facebook.jpg; metalness: 0.8;"
        link="href:https://www.facebook.com/anthony.blanton.5"
        ></a-entity>

       


        <a-entity
        geometry="primitive: box; width: 1; height: 1; depth: 1"
        material="color:grey; src:css/img/in.jpg"
        position=" -0.7 1 -6" >
        </a-entity>

        <a-entity
        geometry="primitive: box; width: 1; height: 1; depth: 1"
        material="color:white; src:css/img/twitter.jpg"
        position=" 0.8 1 -6" >
        </a-entity>

        <a-entity
        geometry="primitive: box; width: 1; height: 1; depth: 1"
        material="color:white; src:css/img/github.jpg"
        position=" 2.3 1 -6">
        </a-entity>

      <a-entity
        geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0"
        material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;"></a-entity>

      <a-entity position="0 1.8 2">
        <a-entity camera look-controls wasd-controls></a-entity>
      </a-entity>
    </a-scene>
        </section>
    </transition>
</template>

<script>
export default {
    template: '#three',
    mounted() {

    //     var opacity = document.getElementById('opacity');
    //   var obj = {opacity: 0};
    //   var tween = new AFRAME.TWEEN.Tween(obj)
    //     .to({opacity: 1}, 500)
    //     .repeat( Infinity )
    //     .yoyo( true )
    //     .onUpdate(function () {
    //       opacity.setAttribute('text', 'opacity', obj.opacity);
    //     })
    //     .start();

      // Animate color.
      var color = document.getElementById('color');
      setInterval(function() {
        var randomHexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        color.setAttribute('material', 'color', randomHexColor);
      }, 10000);

      // Animate size.
      var size = document.getElementById('size');
      var objsize = {scale: 40};
      var tween = new AFRAME.TWEEN.Tween(objsize)
        .to({scale: 30}, 1000)
        .repeat( Infinity )
        .yoyo( true )
        .onUpdate(function () {
          size.setAttribute('text', 'wrapCount', objsize.scale);
        })
        .start();
    }
  }
</script>

<style>
@media(min-width: 900px) {
        a-scene {
    height: 612px;
    width: 700px;
    }

    .three-section {
      align-self: center;
    }
}
</style>
