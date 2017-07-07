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
      </a-assets>
      <a-entity mixin="marker" position="-2.5 0.7 0.01"></a-entity>

      <a-entity mixin="marker" position="0 0.7 0.01"></a-entity>
      <a-entity id="color" position="0 3.1 0.01"
                text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; lineHeight: 50; letterSpacing: 5; color: white; align: center; value: Contact me for Job offers or just to say hi! I would love to hear from you either way.; width: 3.2">
      </a-entity>

      <a-entity mixin="marker" position="2.5 0.7 0.01"></a-entity>
      <a-entity id="size" position="2.5 0.7 0"
                text="color: white; align: center; value: Animating size; width: 2">
      </a-entity>

      <a-entity
          rotation="0 0 5"
          position="0 2 0.2"
          text-geometry="value: Contact Me; font: #dawningFont; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12; size: 1; height: 0;"
          material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;"
        ></a-entity>

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
        color.setAttribute('text', 'color', randomHexColor);
      }, 1000);
      // Animate size.
      var size = document.getElementById('size');
      var objsize = {scale: 60};
      var tween = new AFRAME.TWEEN.Tween(objsize)
        .to({scale: 20}, 1000)
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
}
</style>
