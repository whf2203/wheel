webpackJsonp([2],{31:function(t,e,i){"use strict";function r(t){i(55)}Object.defineProperty(e,"__esModule",{value:!0});var a=i(39),c=i(61),n=i(7),o=r,s=n(a.a,c.a,!1,o,"data-v-35786ccb",null);e.default=s.exports},39:function(t,e,i){"use strict";var r=i(8),a=i(57),c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.a={data:function(){return{id:0}},computed:c({},Object(r.d)({detailList:function(t){return t.detail.getDetailList},list:function(t){return t.detail.list}}),{listKey:function(){return Object.keys(this.list).sort(function(t,e){return t<e})},changeList:function(){return this.list[this.listKey[this.id]]}}),mounted:function(){this.getDetailList(this.$route.query.id)},methods:c({},Object(r.b)({getDetailList:"detail/getDetailList"}),{change:function(t){this.id=t},goImg:function(t){this.$router.push({path:"/picture",query:{SerialID:t}})}}),components:{Content:a.a}}},40:function(t,e,i){"use strict";var r=i(8),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t};e.a={props:{changeList:{type:Object,default:{}}},computed:a({},Object(r.d)({cityNum:function(t){return t.quotation.cityNum}})),mounted:function(){}}},55:function(t,e,i){var r=i(56);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(6)("4121ce0c",r,!0,{})},56:function(t,e,i){e=t.exports=i(5)(!1),e.push([t.i,".box[data-v-35786ccb]{width:100%;height:100%;overflow:hidden}.box .con[data-v-35786ccb]{width:100%;height:100%;overflow-y:scroll}h1[data-v-35786ccb]{width:100%;height:3.7rem;position:relative}h1 img[data-v-35786ccb]{width:100%;height:100%}h1 span[data-v-35786ccb]{position:absolute;bottom:.4rem;right:.2rem;background:rgba(0,0,0,.5);color:#fff;border-radius:.1rem;font-weight:400;font-size:.27rem;padding:0 .1rem;box-sizing:border-box}.priceNum[data-v-35786ccb]{width:100%;height:1rem;display:flex;align-items:center;justify-content:space-between;border-bottom:.1rem solid #eee}.priceNum p[data-v-35786ccb]{margin-left:.1rem}.priceNum p span[data-v-35786ccb]{display:block}.priceNum p span[data-v-35786ccb]:first-child{font-size:.35rem;color:red}.priceNum p span[data-v-35786ccb]:last-child{font-size:.28rem;color:#ccc}.priceNum p span:last-child i[data-v-35786ccb]{font-style:normal}.priceNum button[data-v-35786ccb]{width:3.8rem;color:#fff;border-radius:.03rem;height:.7rem;background:#00afff;border:0;border-radius:.07rem;margin-right:.1rem}.year[data-v-35786ccb]{width:100%;height:.77rem;display:flex;align-items:center}.year p[data-v-35786ccb]{margin:0 .2rem;color:#000}.year .type[data-v-35786ccb]{color:#3aacff}footer[data-v-35786ccb]{width:100%;height:1rem;background:#3aacff;text-align:center;position:fixed;bottom:0;left:0;z-index:9999}footer p[data-v-35786ccb]{color:#fff}footer p[data-v-35786ccb]:first-child{font-size:.32rem;margin-top:.1rem}footer p[data-v-35786ccb]:last-child{font-size:.26rem;margin-top:.06rem}",""])},57:function(t,e,i){"use strict";function r(t){i(58)}var a=i(40),c=i(60),n=i(7),o=r,s=n(a.a,c.a,!1,o,"data-v-4cabb33f",null);e.a=s.exports},58:function(t,e,i){var r=i(59);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);i(6)("35bf578b",r,!0,{})},59:function(t,e,i){e=t.exports=i(5)(!1),e.push([t.i,".content[data-v-4cabb33f]{width:100%}.con_list[data-v-4cabb33f]{width:100%;background:#eee}.con_list>p[data-v-4cabb33f]{width:100%;height:.5rem;background:#eee;color:#666;padding-left:.16rem;font-size:.26rem;line-height:.5rem;box-sizing:border-box}.con_list ul[data-v-4cabb33f]{width:100%;background:#fff}.con_list ul li[data-v-4cabb33f]{width:100%}.con_list ul .tit[data-v-4cabb33f]{padding-left:.16rem;line-height:.65rem;font-size:.32rem;color:#3d3d3d;box-sizing:border-box}.con_list ul .horse_power[data-v-4cabb33f]{color:#ccc;padding-left:.16rem;font-size:.3rem;box-sizing:border-box}.con_list ul .price[data-v-4cabb33f]{display:flex;justify-content:flex-end;align-items:center;height:.6rem;border-bottom:1px solid #eee}.con_list ul .price span[data-v-4cabb33f]{margin-right:.2rem}.con_list ul .price .refer_price[data-v-4cabb33f]{font-size:.25rem;color:#666}.con_list ul .price .price_min[data-v-4cabb33f]{font-size:.3rem;color:red}.con_list ul .ask[data-v-4cabb33f]{height:.8rem;font-size:.32rem;color:#00afff;font-weight:500;text-align:center;line-height:.8rem;margin-bottom:.15rem}",""])},60:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},t._l(t.changeList,function(e,r,a){return i("div",{key:a,staticClass:"con_list"},[i("p",[t._v(t._s(r))]),t._v(" "),t._l(e,function(e,r){return i("ul",{key:r},[i("li",{staticClass:"tit"},[t._v(t._s(e.car_name))]),t._v(" "),i("li",{staticClass:"horse_power"},[t._v(t._s(e.horse_power)+"马力7档")]),t._v(" "),i("li",{staticClass:"price"},[i("span",{staticClass:"refer_price"},[t._v("指导价 "+t._s(e.market_attribute.official_refer_price))]),t._v(" "),i("span",{staticClass:"price_min"},[t._v(t._s(e.market_attribute.dealer_price_min)+"起")])]),t._v(" "),i("router-link",{staticClass:"ask",attrs:{tag:"li",to:{path:"/quotation",query:{carId:e.car_id,cityId:t.cityNum}}}},[t._v("询问底价")])],1)})],2)}))},a=[],c={render:r,staticRenderFns:a};e.a=c},61:function(t,e,i){"use strict";var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"con"},[i("h1",[i("img",{attrs:{src:t.detailList.Picture},on:{click:function(e){t.goImg(t.detailList.SerialID)}}}),t._v(" "),i("span",[t._v(t._s(t.detailList.pic_group_count)+"张照片")])]),t._v(" "),i("div",{staticClass:"priceNum"},[i("p",[i("span",[t._v(t._s(t.detailList.market_attribute.dealer_price))]),t._v(" "),i("span",[t._v("指导价 "),i("i",[t._v(t._s(t.detailList.market_attribute.official_refer_price)+t._s(t.detailList.market_attribute.dealer_price_max))])])]),t._v(" "),i("button",[t._v("询问底价")])]),t._v(" "),i("div",{staticClass:"section"},[i("div",{staticClass:"year"},t._l(t.listKey,function(e,r){return i("p",{key:r,class:r==t.id?"type":"",on:{click:function(e){t.change(r)}}},[t._v("\n                    "+t._s(e)+"\n                ")])})),t._v(" "),i("Content",{attrs:{changeList:t.changeList}})],1)]),t._v(" "),t._m(0)])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",[i("p",[t._v("询问底价")]),t._v(" "),i("p",[t._v("本地经销商为你报价")])])}],c={render:r,staticRenderFns:a};e.a=c}});
//# sourceMappingURL=2.build.js.map