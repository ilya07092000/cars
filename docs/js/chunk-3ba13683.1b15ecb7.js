(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ba13683"],{"05ef":function(t,e,a){"use strict";var i=a("9842"),s=a.n(i);s.a},1827:function(t,e,a){},"228f":function(t,e,a){},"6a56":function(t,e,a){"use strict";var i=a("1827"),s=a.n(i);s.a},"88a8":function(t,e,a){"use strict";var i=a("228f"),s=a.n(i);s.a},"89fb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("swiper",{ref:"mySwiper",staticClass:"swiper",attrs:{options:t.swiperOption}},[t._l(t.items,(function(t){return a("swiper-slide",{staticClass:"slide"},[a("img",{staticClass:"slide__img",attrs:{src:t,alt:""}})])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)},s=[];function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r={data:function(){return{swiperOption:{loop:!0,initialSlide:0,effect:"fade",autoplay:n({delay:2500,stopOnLastSlide:!1,disableOnInteraction:!0},"disableOnInteraction",!1),pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"}}}},computed:{swiper:function(){return this.$refs.mySwiper.$swiper}},props:["items"],mounted:function(){this.swiper.autoplay.start()}},c=r,l=(a("6a56"),a("2877")),o=Object(l["a"])(c,i,s,!1,null,"6d939373",null);e["a"]=o.exports},9842:function(t,e,a){},bede:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"intro"},[a("slider",{attrs:{items:t.landingImg}})],1),a("div",{staticClass:"best__container"},[t._m(0),a("div",{staticClass:"catalog__items"},t._l(t.bestSellers,(function(t){return a("catalogitem",{key:t.id,attrs:{car:t}})})),1)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"best__header"},[a("h1",[t._v("Best Sellers")])])}],n=a("db85"),r=a("89fb"),c={computed:{bestSellers:function(){return this.$store.getters.getBestSellers},landingImg:function(){return this.$store.getters.getLandingImg}},components:{catalogitem:n["a"],slider:r["a"]}},l=c,o=(a("05ef"),a("2877")),u=Object(o["a"])(l,i,s,!1,null,"0050dfd2",null);e["default"]=u.exports},db85:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"catalog__item"},[a("router-link",{staticClass:"catalog__link",attrs:{tag:"a",to:{name:"title",params:{title:t.car.title,id:t.car.id,vendor:t.car.vendor}},car:t.car}},[a("div",{staticClass:"catalog__item__icon"},[a("img",{staticClass:"catalog__item__img",attrs:{src:t.car.img,alt:""}})]),a("p",{staticClass:"catalog__item__title"},[t._v(t._s(t.car.title))]),a("p",{staticClass:"catalog__item__price"},[t._v(t._s(t._f("price")(t.car.price.toFixed(3))))])])],1)},s=[],n={props:["car"]},r=n,c=(a("88a8"),a("2877")),l=Object(c["a"])(r,i,s,!1,null,"8e765876",null);e["a"]=l.exports}}]);
//# sourceMappingURL=chunk-3ba13683.1b15ecb7.js.map