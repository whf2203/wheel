webpackJsonp([3],{32:function(t,e,r){"use strict";function n(t){r(62)}Object.defineProperty(e,"__esModule",{value:!0});var i=r(41),o=r(65),a=r(7),c=n,s=a(i.a,o.a,!1,c,"data-v-b5fced24",null);e.default=s.exports},36:function(t,e,r){"use strict";function n(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)}function i(t,e){function r(t){var e=t.getBoundingClientRect();return e.left>=0&&e.left<window.innerWidth&&e.top>=0&&e.top<window.innerHeight}function i(t){return t.src=t.dataset.src}function o(){[].concat(n(document.querySelectorAll("img[data-src]"))).forEach(function(t){t.src=e,r(t)&&!i(t)&&(t.src=t.dataset.src)})}o(),t?document.querySelector(t).addEventListener("scroll",o):window.onscroll=o}e.a=i},41:function(t,e,r){"use strict";var n=r(8),i=r(64),o=r(36),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t};e.a={computed:a({},Object(n.d)({imgList:function(t){return t.img.imgList},isFetching:function(t){return t.img.isFetching},Page:function(t){return t.img.Page}})),methods:a({},Object(n.b)({getCategoryImageList:"img/getCategoryImageList"}),{scroll:function(){var t=this.$refs.wrap.scrollTop,e=this.$refs.section.getBoundingClientRect().height;console.log("scrollTop...",t),console.log("height...",e),t>e-window.innerHeight-20&&!this.isFetching&&(console.log("加载下一页"),this.getCategoryImageList({SerialID:this.$route.query.SerialID,ImageID:this.$route.query.ImageID}))}}),updated:function(){2==this.Page&&this.imgList.length&&Object(o.a)(".wrap")},mounted:function(){this.getCategoryImageList({SerialID:this.$route.query.SerialID,ImageID:this.$route.query.ImageID});var t=Object(i.a)(this.scroll,100);this.$refs.wrap.addEventListener("scroll",t)}}},62:function(t,e,r){var n=r(63);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(6)("5d125874",n,!0,{})},63:function(t,e,r){e=t.exports=r(5)(!1),e.push([t.i,".wrap[data-v-b5fced24]{height:100%;overflow-y:scroll}section[data-v-b5fced24]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}section img[data-v-b5fced24]{width:2.46rem;height:2rem;background-size:cover;background-repeat:no-repeat;background-position:50%}",""])},64:function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:150,r=0;return function(){clearTimeout(r),r=setTimeout(function(){t()},e)}}e.a=n},65:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrap",staticClass:"wrap"},[n("section",{ref:"section"},t._l(t.imgList,function(t,e){return n("img",{key:e,attrs:{src:r(66),"data-src":""+t.Url.replace("{0}",t.LowSize)}})}))])},i=[],o={render:n,staticRenderFns:i};e.a=o},66:function(t,e,r){t.exports=r.p+"default.png?d473997a13d14a5efce3648bf807658b"}});
//# sourceMappingURL=3.build.js.map