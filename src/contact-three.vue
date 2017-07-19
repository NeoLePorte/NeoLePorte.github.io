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
        <a-mixin id="cube" geometry="primitive: box"></a-mixin>
    <a-mixin id="cube-hovered" material="color: magenta"></a-mixin>
    <a-mixin id="cube-selected" material="color: cyan"></a-mixin>
    <a-mixin id="red" material="color: red"></a-mixin>
    <a-mixin id="green" material="color: green"></a-mixin>
    <a-mixin id="blue" material="color: blue"></a-mixin>
    <a-mixin id="yellow" material="color: yellow"></a-mixin>
    <a-mixin id="sphere" geometry="primitive: sphere"></a-mixin>

        <img src="css/img/grid.png" id="grid" crossorigin="anonymous">
        <a-mixin id="boldFont" text="font: #optimerBoldFont"></a-mixin>
      </a-assets>

      <a-entity  position="0 2.9 0.01"
                text="font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; lineHeight: 50; letterSpacing: 5; color: white; align: center; value: Contact me for professional opportunities or just to say hi! I would love to hear from you either way.; width: 3.2">
      </a-entity>

      <!--<a-entity mixin="marker" position="-2.5 0.7 0.01"></a-entity>-->
      <a-entity id="size" position="0 0.7 0.01"
        text="color: white; align: center; value: Use WASD to move click+drag to look; width: 2">
      </a-entity>

      <a-entity position="-2 2 -6">
          <a-entity
          text-geometry="value: Contact Me; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12;"
          material="color: #01cd74; metalness:0.8; roughness: 0.5;">
          </a-entity>
        </a-entity>

    <a-entity position=" -2.2 1 -6">
      <a-entity
        onClick="location.href='https://www.facebook.com/anthony.blanton.5'"
        geometry="primitive: box; width: 1; height: 1; depth: 1"
        material="color:white; src:css/img/facebook.jpg; metalness: 0.8;">
        <a-animation begin="click" attribute="rotation" to="0 360 0"
          easing="linear" dur="2000" fill="backwards">
        </a-animation>
      </a-entity>
    </a-entity>

    <a-entity position=" -0.7 1 -6">
      <a-entity
        onClick="location.href='https://www.linkedin.com/in/devcrvft/'"
        geometry="primitive: box; width: 1; height: 1; depth: 1"
        material="color:grey; src:css/img/in.jpg">
        <a-animation begin="click" attribute="rotation" to="0 360 0"
          easing="linear" dur="2000" fill="backwards">
        </a-animation>
      </a-entity>
    </a-entity>

    <a-entity position=" 0.8 1 -6">
      <a-entity
        onClick="location.href='https://twitter.com/HPBVSSCRVFT?lang=en'"
        geometry="primitive: box; width: 1; height: 1; depth: 1"
        material="color:white; src:css/img/twitter.jpg">
        <a-animation begin="click" attribute="rotation" to="0 360 0"
          easing="linear" dur="2000" fill="backwards">
        </a-animation>
      </a-entity>
    </a-entity>

    <a-entity position=" 2.3 1 -6">
      <a-entity
        onClick="location.href='https://github.com/NeoLePorte'"
        geometry="primitive: box; width: 1; height: 1; depth: 1"
        material="color:white; src:css/img/github.jpg">
        <a-animation begin="click" attribute="rotation" to="0 360 0"
          easing="linear" dur="2000" fill="backwards">
        </a-animation>
      </a-entity>
    </a-entity>

      <a-entity
        geometry="primitive: plane; width: 10000; height: 10000;" 
        rotation="-90 0 0"
        material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4;">
        </a-entity>

      <a-entity position="0 2.2 4">
        <a-entity camera look-controls wasd-controls>
          <a-entity position="0 0 -4"
                geometry="primitive: ring; radiusOuter: 0.30;
                          radiusInner: 0.20;"
                material="color: #330066; shader: flat; opacity: 0.5"
                cursor="fuse: true; rayOrigin: mouse">
                <a-animation begin="click" easing="ease-in" attribute="scale"
                  fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
                <a-animation begin="fusing" easing="ease-in" attribute="scale"
                  fill="forwards" from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
          </a-entity>
        </a-entity>
      </a-entity>
    </a-scene>
        </section>
    </transition>
</template>

<script>
export default {
    template: '#three',
    mounted() {

    //     let opacity = document.getElementById('opacity');
    //   let obj = {opacity: 0};
    //   let tween = new AFRAME.TWEEN.Tween(obj)
    //     .to({opacity: 1}, 500)
    //     .repeat( Infinity )
    //     .yoyo( true )
    //     .onUpdate(function () {
    //       opacity.setAttribute('text', 'opacity', obj.opacity);
    //     })
    //     .start();

      // Animate color.
      // let color = document.getElementById('color');
      // setInterval(function() {
      //   let randomHexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      //   color.setAttribute('material', 'color', randomHexColor);
      // }, 10000);

      // Animate size.
      let size = document.getElementById('size');
      let objsize = {scale: 40};
      let tween = new AFRAME.TWEEN.Tween(objsize)
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
