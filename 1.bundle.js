webpackJsonp([1],{343:function(a,b,c){var d=c(125)(c(347),c(365),function(){c(372)},null,null);a.exports=d.exports},347:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(360),e=c.n(d),f=c(127),g=c.n(f),h=c(128),i=c.n(h),j=c(88),k=c.n(j);b["default"]={template:"#projects-component-template",data(){return{data:[]}},components:{appChild:e.a},created(){k.a.use(i.a,g.a),k.a.axios.get("https://cpv2api.com/pens/public/bvsscrvft").then((a)=>{this.data=a.data.data,console.log(this.data)})}}},350:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b["default"]={template:"#overlay",props:["details","link","title"]}},354:function(a,b,c){b=a.exports=c(124)(void 0),b.push([a.i,"img{width:100%;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;cursor:pointer;-webkit-transform:scaleY(1) translateZ(0);transform:scaleY(1) translateZ(0);margin:5px;border:3px solid rgba(16,9,11,.8);border-radius:1%}.project-section p{-ms-flex-item-align:center;align-self:center}.img-contain{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:333px;max-height:282px;overflow:hidden}.overlay>a{background:#c62735;color:#fff;border:0;padding:5px;border-radius:4px;outline:0;cursor:pointer;width:20%;margin:auto;text-decoration:none}.img-contain:hover .overlay{opacity:1;background:rgba(13,0,0,.7);-webkit-transition:opacity .3s ease-out;transition:opacity .3s ease-out}.overlay{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:absolute;z-index:1000;margin:5px;opacity:0;overflow:hidden;-webkit-transition:opacity .3s ease-in;transition:opacity .3s ease-in;width:333px;height:198px}.overlay-text{margin:18px 10px;font-size:.8em;border-bottom:2px solid rgba(16,9,11,.9);border-top:2px solid rgba(16,9,11,.9);text-align:center}.overlay-bttn{background:#c62735;color:#fff;border:0;padding:5px;border-radius:4px;outline:0;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:20%;margin:auto}.project-section>p{font-size:1.3em}@media(min-width:900px){.overlay{width:495px;height:293px}.overlay-text{margin-top:50px;font-size:1em}.img-contain{max-width:500px;max-height:310px}.img-contain,.project-section{display:-webkit-box;display:-ms-flexbox;display:flex}.project-section{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;background:rgba(16,9,11,.5);margin-right:0;padding:0;height:97.5%;-ms-flex-item-align:center;align-self:center}}",""])},355:function(a,b,c){b=a.exports=c(124)(void 0),b.push([a.i,".projects{background:rgba(26,27,37,.7);min-height:84.4vh}.pens{list-style:none;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row wrap;flex-flow:row wrap}.pens li>p{font-size:1.2em}@media(min-width:900px){.pens{-ms-flex-pack:distribute;justify-content:space-around}}",""])},360:function(a,b,c){var d=c(125)(c(350),c(364),function(){c(371)},null,null);a.exports=d.exports},364:function(a){a.exports={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated bounceInUp"}},[c("section",{staticClass:"project-section"},[c("p",[a._v(a._s(this.title))]),a._v(" "),c("div",{staticClass:"img-contain"},[c("div",{staticClass:"overlay  hvr-overline-from-center hvr-underline-from-center"},[c("p",{staticClass:"overlay-text",domProps:{innerHTML:a._s(this.details)}}),a._v(" "),c("a",{attrs:{href:this.link,target:"_blank",rel:"noopener noreferrer"}},[c("div",{staticClass:"overlay-bttn"},[a._v("View!")])])]),a._v(" "),a._t("default")],2)])])},staticRenderFns:[]}},365:function(a){a.exports={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animated fadeInRight"}},[c("div",[c("div",{staticClass:"projects"},[c("div",{staticClass:"pens"},a._l(a.data,function(a){return c("li",{key:a},[c("app-child",{attrs:{details:a.details,link:a.link,title:a.title}},[c("img",{key:a,attrs:{src:a.images.large}})])],1)}))])])])},staticRenderFns:[]}},371:function(a,b,c){var d=c(354);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);c(126)("5b821bea",d,!0)},372:function(a,b,c){var d=c(355);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);c(126)("65edea4c",d,!0)}});