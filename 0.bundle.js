webpackJsonp([0],{374:function(a,b,c){var d=c(93)(c(387),c(405),function(){c(412)},null,null);a.exports=d.exports},378:function(a){function b(a,b){var d=a[1]||"",e=a[3];if(!e)return d;if(b&&"function"==typeof btoa){var f=c(e),g=e.sources.map(function(a){return"/*# sourceURL="+e.sourceRoot+a+" */"});return[d].concat(g).concat([f]).join("\n")}return[d].join("\n")}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a))));return"/*# "+("sourceMappingURL=data:application/json;charset=utf-8;base64,"+b)+" */"}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?"@media "+c[2]+"{"+d+"}":d}).join("")},c.i=function(a,b){"string"==typeof a&&(a=[[null,a,""]]);for(var d,e={},f=0;f<this.length;f++)d=this[f][0],"number"==typeof d&&(e[d]=!0);for(f=0;f<a.length;f++){var g=a[f];"number"==typeof g[0]&&e[g[0]]||(b&&!g[2]?g[2]=b:b&&(g[2]="("+g[2]+") and ("+b+")"),c.push(g))}},c}},379:function(a,b,c){function d(a){for(var b=0;b<a.length;b++){var c=a[b],d=l[c.id];if(d){d.refs++;for(var e=0;e<d.parts.length;e++)d.parts[e](c.parts[e]);for(;e<c.parts.length;e++)d.parts.push(f(c.parts[e]));d.parts.length>c.parts.length&&(d.parts.length=c.parts.length)}else{for(var g=[],e=0;e<c.parts.length;e++)g.push(f(c.parts[e]));l[c.id]={id:c.id,refs:1,parts:g}}}}function e(){var a=document.createElement("style");return a.type="text/css",j.appendChild(a),a}function f(a){var b,c,d=document.querySelector("style["+r+"~=\""+a.id+"\"]");if(d){if(o)return p;d.parentNode.removeChild(d)}if(s){var f=n++;d=m||(m=e()),b=g.bind(null,d,f,!1),c=g.bind(null,d,f,!0)}else d=e(),b=h.bind(null,d),c=function(){d.parentNode.removeChild(d)};return b(a),function(d){if(d){if(d.css===a.css&&d.media===a.media&&d.sourceMap===a.sourceMap)return;b(a=d)}else c()}}function g(a,b,c,d){var e=c?"":d.css;if(a.styleSheet)a.styleSheet.cssText=t(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function h(a,b){var c=b.css,d=b.media,e=b.sourceMap;if(d&&a.setAttribute("media",d),q.ssrId&&a.setAttribute(r,b.id),e&&(c+="\n/*# sourceURL="+e.sources[0]+" */",c+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"),a.styleSheet)a.styleSheet.cssText=c;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(c))}}var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var k=c(380),l={},j=i&&(document.head||document.getElementsByTagName("head")[0]),m=null,n=0,o=!1,p=function(){},q=null,r="data-vue-ssr-id",s="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());a.exports=function(a,b,c,e){o=c,q=e||{};var f=k(a,b);return d(f),function(b){for(var c=[],e=0;e<f.length;e++){var g=f[e],h=l[g.id];h.refs--,c.push(h)}b?(f=k(a,b),d(f)):f=[];for(var h,e=0;e<c.length;e++)if(h=c[e],0===h.refs){for(var i=0;i<h.parts.length;i++)h.parts[i]();delete l[h.id]}}};var t=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join("\n")}}()},380:function(a){a.exports=function(a,b){for(var c=[],d={},e=0;e<b.length;e++){var f=b[e],g=f[0],h=f[1],i=f[2],j=f[3],k={id:a+":"+e,css:h,media:i,sourceMap:j};d[g]?d[g].parts.push(k):c.push(d[g]={id:g,parts:[k]})}return c}},387:function(a,b,c){"use strict";function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,"__esModule",{value:!0});var e=c(400),f=d(e),g=c(401),h=d(g);b.default={template:"#contact-component-template",components:{formChild:f.default,three:h.default},data:function(){return{isShowing:!1}}}},391:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default={template:"#form",data:function(){return{isShowing:!1}},methods:{toggleShow:function(){this.isShowing=!this.isShowing,console.log("this is working")}}}},392:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default={template:"#three",mounted:function(){var a=document.getElementById("size"),b={scale:40},c=new AFRAME.TWEEN.Tween(b).to({scale:30},1e3).repeat(Infinity).yoyo(!0).onUpdate(function(){a.setAttribute("text","wrapCount",b.scale)}).start()}}},394:function(a,b,c){b=a.exports=c(378)(!1),b.push([a.i,"@media(min-width:900px){a-scene{height:612px;width:700px}.three-section{-ms-flex-item-align:center;align-self:center}}",""])},396:function(a,b,c){b=a.exports=c(378)(!1),b.push([a.i,".contact{background:rgba(26,27,37,.7);font-family:Nunito,sans-serif;min-height:87.5vh}.social-section{background:rgba(16,9,11,.5);padding:0 2em;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.social-icons,.social-section{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.social-icons{padding-top:1em;-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.social-icons i{-webkit-transform:perspective(1px) translateZ(0);transform:perspective(1px) translateZ(0);-webkit-box-shadow:0 0 1px transparent;box-shadow:0 0 1px transparent;cursor:pointer;text-decoration:none;color:ivory}.social-icons a{display:block}.social-icons i:before{font-family:FontAwesome;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition-duration:.5s;transition-duration:.5s;-webkit-transition-property:color;transition-property:color}.social-icons i:active:before,.social-icons i:focus:before,.social-icons i:hover:before{color:#0f9e5e}.aframe{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;margin-top:3em}@media(min-width:900px){.social-section{-ms-flex-line-pack:center;align-content:center}.aframe{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.social-icons{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}}@media(min-width:1300px){.contact{max-height:84.4}.social-section{width:90%;height:612px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin:2em auto}.social-section a{margin:0 50%}.social-icons{-ms-flex-item-align:space-around;align-self:space-around;margin-right:2em;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.social-icons a:last-child,.social-icons a:nth-child(2),.social-icons a:nth-child(3){margin-top:1em}.aframe{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2;margin-top:auto}}",""])},398:function(a,b,c){b=a.exports=c(378)(!1),b.push([a.i,".form-show-btn{padding:19px 39px 18px;color:#fff;background:#306;font-size:18px;text-align:center;font-style:normal;border-radius:5px;width:310px;border:1px solid #304;border-width:1px 1px 3px;margin-bottom:20px;cursor:pointer}.form-con,.form-show-btn{-ms-flex-item-align:center;align-self:center}.form-con{margin-top:1em;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.form,form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:10px 20px;background:rgba(16,9,11,.8);border-radius:8px;color:ivory}h1{margin:0 0 30px;text-align:center}fieldset>label{color:ivory;text-weight:400}input[type=email],input[type=text],textarea{border:none;font-size:16px;height:auto;margin:0;outline:0;padding:15px;width:100%;background-color:ivory;color:#8a97a0;-webkit-box-shadow:0 1px 0 rgba(0,0,0,.06) inset;box-shadow:inset 0 1px 0 rgba(0,0,0,.06);margin-bottom:20px;resize:none}.submit{padding:19px 39px 18px;color:#fff;background:#306;font-size:18px;text-align:center;font-style:normal;border-radius:5px;width:100%;border:1px solid #304;border-width:1px 1px 3px;-webkit-box-shadow:0 -1px 0 hsla(0,0%,100%,.1) inset;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.1);margin-bottom:10px;cursor:pointer}fieldset{margin-bottom:30px;border:none}legend{font-size:1.4em;margin-bottom:10px}label{display:block;margin-bottom:8px}label.light{font-weight:300;display:inline}@media(min-width:900px){.form-con{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}@media(min-width:1550px){.form-show-btn{width:346px}.form-con{-ms-flex-item-align:start;align-self:flex-start;margin-left:1em;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.contact{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}",""])},400:function(a,b,c){var d=c(93)(c(391),c(407),function(){c(414)},null,null);a.exports=d.exports},401:function(a,b,c){var d=c(93)(c(392),c(403),function(){c(410)},null,null);a.exports=d.exports},403:function(a){a.exports={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInUp"}},[c("section",{staticClass:"three-section"},[c("a-scene",{attrs:{embedded:""}},[c("a-assets",[c("a-mixin",{attrs:{id:"marker",geometry:"primitive: plane; width: 0.02; height: 0.02",material:"color: red"}}),a._v(" "),c("a-mixin",{attrs:{id:"cube",geometry:"primitive: box"}}),a._v(" "),c("a-mixin",{attrs:{id:"cube-hovered",material:"color: magenta"}}),a._v(" "),c("a-mixin",{attrs:{id:"cube-selected",material:"color: cyan"}}),a._v(" "),c("a-mixin",{attrs:{id:"red",material:"color: red"}}),a._v(" "),c("a-mixin",{attrs:{id:"green",material:"color: green"}}),a._v(" "),c("a-mixin",{attrs:{id:"blue",material:"color: blue"}}),a._v(" "),c("a-mixin",{attrs:{id:"yellow",material:"color: yellow"}}),a._v(" "),c("a-mixin",{attrs:{id:"sphere",geometry:"primitive: sphere"}}),a._v(" "),c("img",{attrs:{src:"css/img/grid.png",id:"grid",crossorigin:"anonymous"}}),a._v(" "),c("a-mixin",{attrs:{id:"boldFont",text:"font: #optimerBoldFont"}})],1),a._v(" "),c("a-entity",{attrs:{position:"0 2.9 0.01",text:"font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; lineHeight: 50; letterSpacing: 5; color: white; align: center; value: Contact me for professional opportunities or just to say hi! I would love to hear from you either way.; width: 3.2"}}),a._v(" "),c("a-entity",{attrs:{id:"size",position:"0 0.7 0.01",text:"color: white; align: center; value: Use WASD to move click+drag to look; width: 2"}}),a._v(" "),c("a-entity",{attrs:{position:"-2 2 -6"}},[c("a-entity",{attrs:{"text-geometry":"value: Contact Me; bevelEnabled: true; bevelSize: 0.05; bevelThickness: 0.05; curveSegments: 12;",material:"color: #01cd74; metalness:0.8; roughness: 0.5;"}})],1),a._v(" "),c("a-entity",{attrs:{position:" -2.2 1 -6"}},[c("a-entity",{attrs:{onClick:"location.href='https://www.facebook.com/anthony.blanton.5'",geometry:"primitive: box; width: 1; height: 1; depth: 1",material:"color:white; src:css/img/facebook.jpg; metalness: 0.8;"}},[c("a-animation",{attrs:{begin:"click",attribute:"rotation",to:"0 360 0",easing:"linear",dur:"2000",fill:"backwards"}})],1)],1),a._v(" "),c("a-entity",{attrs:{position:" -0.7 1 -6"}},[c("a-entity",{attrs:{onClick:"location.href='https://www.linkedin.com/in/devcrvft/'",geometry:"primitive: box; width: 1; height: 1; depth: 1",material:"color:grey; src:css/img/in.jpg"}},[c("a-animation",{attrs:{begin:"click",attribute:"rotation",to:"0 360 0",easing:"linear",dur:"2000",fill:"backwards"}})],1)],1),a._v(" "),c("a-entity",{attrs:{position:" 0.8 1 -6"}},[c("a-entity",{attrs:{onClick:"location.href='https://twitter.com/HPBVSSCRVFT?lang=en'",geometry:"primitive: box; width: 1; height: 1; depth: 1",material:"color:white; src:css/img/twitter.jpg"}},[c("a-animation",{attrs:{begin:"click",attribute:"rotation",to:"0 360 0",easing:"linear",dur:"2000",fill:"backwards"}})],1)],1),a._v(" "),c("a-entity",{attrs:{position:" 2.3 1 -6"}},[c("a-entity",{attrs:{onClick:"location.href='https://github.com/NeoLePorte'",geometry:"primitive: box; width: 1; height: 1; depth: 1",material:"color:white; src:css/img/github.jpg"}},[c("a-animation",{attrs:{begin:"click",attribute:"rotation",to:"0 360 0",easing:"linear",dur:"2000",fill:"backwards"}})],1)],1),a._v(" "),c("a-entity",{attrs:{geometry:"primitive: plane; width: 10000; height: 10000;",rotation:"-90 0 0",material:"src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4;"}}),a._v(" "),c("a-entity",{attrs:{position:"0 2.2 2"}},[c("a-entity",{attrs:{camera:"","look-controls":"","wasd-controls":""}},[c("a-entity",{attrs:{position:"0 0 -4",geometry:"primitive: ring; radiusOuter: 0.30;\n                          radiusInner: 0.20;",material:"color: #330066; shader: flat; opacity: 0.5",cursor:"fuse: true; rayOrigin: mouse"}},[c("a-animation",{attrs:{begin:"click",easing:"ease-in",attribute:"scale",fill:"backwards",from:"0.1 0.1 0.1",to:"1 1 1",dur:"150"}}),a._v(" "),c("a-animation",{attrs:{begin:"fusing",easing:"ease-in",attribute:"scale",fill:"forwards",from:"1 1 1",to:"0.1 0.1 0.1",dur:"1500"}})],1)],1)],1)],1)],1)])},staticRenderFns:[]}},405:function(a){a.exports={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInRight"}},[c("div",{staticClass:"contact"},[c("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeIn"}},[c("div",[c("div",{staticClass:"social-section"},[c("form-child"),a._v(" "),c("three",{staticClass:"aframe"}),a._v(" "),c("div",{staticClass:"social-icons"},[c("a",{attrs:{href:"https://www.facebook.com/anthony.blanton.5",target:"_blank",rel:"noopener noreferrer"}},[c("i",{staticClass:"fa fa-facebook-square fa-4x",attrs:{"aria-hidden":"true"}})]),a._v(" "),c("a",{attrs:{href:"https://www.linkedin.com/in/devcrvft/",target:"_blank",rel:"noopener noreferrer"}},[c("i",{staticClass:"fa fa-linkedin-square fa-4x",attrs:{"aria-hidden":"true"}})]),a._v(" "),c("a",{attrs:{href:"https://twitter.com/HPBVSSCRVFT?lang=en",target:"_blank",rel:"noopener noreferrer"}},[c("i",{staticClass:"fa fa-twitter-square fa-4x",attrs:{"aria-hidden":"true"}})]),a._v(" "),c("a",{attrs:{href:"https://github.com/NeoLePorte",target:"_blank",rel:"noopener noreferrer"}},[c("i",{staticClass:"fa fa-github-square fa-4x",attrs:{"aria-hidden":"true"}})])])],1)])])],1)])},staticRenderFns:[]}},407:function(a){a.exports={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("div",{staticClass:"form-con"},[c("button",{staticClass:"form-show-btn hvr-bob",on:{click:a.toggleShow}},[a._v("Contact me")]),a._v(" "),c("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInUp","leave-active-class":"animated bounceOutDown"}},[a.isShowing?c("div",{staticClass:"form"},[c("form",{attrs:{action:"http://formspree.io/devcrvft@gmail.com",method:"post"}},[c("fieldset",{staticClass:"form"},[c("label",{attrs:{for:"name"}},[a._v("Name:")]),a._v(" "),c("input",{attrs:{type:"text",id:"name",name:"name"}}),a._v(" "),c("label",{attrs:{for:"mail"}},[a._v("Email:")]),a._v(" "),c("input",{attrs:{type:"email",id:"mail",name:"email"}})]),a._v(" "),c("fieldset",[c("label",{attrs:{for:"comment"}},[a._v("Comments:")]),a._v(" "),c("textarea",{attrs:{id:"comment",name:"comments"}})]),a._v(" "),c("button",{staticClass:"submit"},[a._v("Submit")])])]):a._t("default")],2)],1)},staticRenderFns:[]}},410:function(a,b,c){var d=c(394);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);c(379)("38a94d6b",d,!0,{})},412:function(a,b,c){var d=c(396);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);c(379)("aafe42b4",d,!0,{})},414:function(a,b,c){var d=c(398);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);c(379)("3b1080ae",d,!0,{})}});