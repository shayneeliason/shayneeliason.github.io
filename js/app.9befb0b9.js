(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],r=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var r={},n={app:0},a=[];function o(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=r,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(i,r,function(e){return t[e]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var r=i("85ec"),n=i.n(r);n.a},"382a":function(t,e,i){},4978:function(t,e,i){"use strict";var r=i("5b6c"),n=i.n(r);n.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",[i("div",[i("div",{staticClass:"top-spacer"}),i("div",{staticClass:"center"},[i("router-link",{staticClass:"bar-h3",attrs:{to:"/"}},[i("h1",{on:{click:function(e){return t.setfilter("all")}}},[t._v("Shayne Eliason")])])],1),i("div",{staticClass:"distribute marginzero center"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"filter",on:{click:function(e){return t.setfilter("branding")}}},[t._v("branding")])]),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"filter",on:{click:function(e){return t.setfilter("publication")}}},[t._v("publication")])]),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"filter",on:{click:function(e){return t.setfilter("personal")}}},[t._v("personal")])])],1)])]),i("div",{staticStyle:{height:"calc(100vh - 3em)",margin:"0 auto"},attrs:{id:"router-view"}},[i("router-view")],1)])},a=[],o=(i("4de4"),i("d3b7"),{name:"App",methods:{setfilter:function(t){this.$root.$data.filter=t}}}),s=o,c=(i("034f"),i("2877")),l=Object(c["a"])(s,n,a,!1,null,null,null),u=l.exports,d=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top-spacer"}),i("div",{staticClass:"relative"},[i("div",{staticClass:"items"},[t.show_items?i("div",[i("div",{staticClass:"items"},t._l(t.filtered_items,(function(e){return i("div",{key:e.id,staticClass:"item"},[i("router-link",{attrs:{to:"/design/"+e.name}},[i("div",{staticClass:"item"},[i("p",{staticClass:"item-header center",staticStyle:{width:"100%"}},[t._v(t._s(e.name))]),i("img",{attrs:{src:"/images/"+e.images[0]}})])])],1)})),0)]):t._e()])]),i("div",{staticClass:"bottom-spacer top-spacer"})])},m=[],g=(i("25f0"),i("fb6a"),{name:"Home",data:function(){return{perpage:1e3,pageNumber:0}},methods:{contains_object:function(t,e){var i;for(i=0;i<e.length;i++)if(e[i]===t)return!0;return!1}},computed:{num_pages:function(){var t=this.filtered_items.length,e=Math.floor(t/this.perpage)+1;return(this.pageNumber+1).toString()+" of "+e.toString()+" pages"},show_items:function(){return this.items.length>0},filtered_items:function(){var t=this,e=this.$root.$data.items,i=this.$root.$data.filter;return"all"!=i&&(e=this.$root.$data.items.filter((function(e){return t.contains_object(i,e.categories)}))),console.log(e),e},items:function(){var t=this.filtered_items;return t=t.slice(this.pageNumber*this.perpage,this.pageNumber*this.perpage+this.perpage),t},show_photos:function(){return this.$root.$data.show_photos},show_art:function(){return this.$root.$data.show_art},show_design:function(){return this.$root.$data.show_design}}}),f=g,h=(i("4978"),Object(c["a"])(f,p,m,!1,null,"4b398f67",null)),v=h.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{staticStyle:{height:"100%"},attrs:{to:"/"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"center"},[i("p",{staticClass:"item-header center lineafter",staticStyle:{"padding-top":"3.5vw"}},[t._v(t._s(t.item_name))]),i("p",[t._v(t._s(t.item_description))])]),i("div",{staticClass:"flex-content"},[t._l(t.images,(function(t){return i("div",{key:t,staticClass:"image-wrap"},[i("img",{attrs:{src:"/images/"+t,alt:""}})])})),i("div",{staticClass:"top-spacer"})],2),i("div",{staticClass:"description"},[i("div",{staticClass:"date"},[t._v(" "+t._s(t.item_date)+" ")]),i("div",{staticClass:"top-spacer"}),i("div",{staticClass:"bottom-spacer"})])])])},_=[],C=(i("c740"),i("b0c0"),i("a4d3"),i("e01a"),{name:"DesignViewer",props:{},computed:{item_index:function(){var t=this.$root.$data.items,e=this.$route.params.id,i=t.findIndex((function(t){if(t.name==e)return!0}));return i},item:function(){var t=this.$root.$data.items;return t[this.item_index]},images:function(){var t=this.item;return t.images},item_name:function(){return this.item.name},item_description:function(){return this.item.description},item_date:function(){return this.item.date}},data:function(){return{}},methods:{}}),w=C,j=(i("dc05"),Object(c["a"])(w,b,_,!1,null,"2890cebe",null)),y=j.exports,$=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"0 auto"},attrs:{id:"project-viewer"}},[i("div",{staticClass:"top-spacer"}),i("p",[t._v("Cutest mom in the WHOLE WIDE WORLD")]),i("div",{staticClass:"top-spacer bottom-spacer"})])}],k=(i("ac1f"),i("1276"),{name:"About",props:{},methods:{},computed:{project:function(){return this.$root.$data.about[0]},date:function(){var t=this.project.date.split("T")[0],e=t.split("-");return e[1]+"/"+e[2]+"/"+e[0]}},data:function(){return{}}}),O=k,S=(i("e76e"),Object(c["a"])(O,$,P,!1,null,null,null)),x=S.exports;r["a"].use(d["a"]);var M=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:x},{path:"*",redirect:"/"},{path:"/design/:id",component:y}],T=new d["a"]({mode:"hash",base:"/",scrollBehavior:function(t,e,i){return{x:0,y:0}},routes:M}),B=T,L=i("832e");console.log(L),r["a"].config.productionTip=!1;var H={filter:"all",show_art:!0,show_photos:!0,show_design:!0,items:L};new r["a"]({router:B,data:H,render:function(t){return t(u)}}).$mount("#app")},"5b6c":function(t,e,i){},"832e":function(t){t.exports=JSON.parse('[{"name":"Goldie Prawn Fish and Chips Food Truck","id":5,"images":["Goldie Prawn Logo.jpg","goldie prawn branding page-01.jpg","goldie prawn truck mock up.jpg"],"categories":["branding"],"description":"Proposed Branding"},{"name":"Cherry On Top Ice Cream","id":7,"images":["cherry on top mock up.jpg","Branding for Cherry On Top Ice Cream .jpg","Cherry On Top Packaging.jpg"],"categories":["branding"],"description":"Proposed Branding"},{"name":"Willow Tree Greenhouse","id":10,"images":["willowtree mock up.jpg","Branding for Willow Tree Greenhouse.jpg","Willow Tree Logo and Color variations.jpg"],"categories":["branding"],"description":"Proposed Branding"},{"name":"Coast + Flow Surf and Skate Shop","id":4,"images":["coast and flow mock up.jpg","Coast and Flow Branding page-01.jpg"],"categories":["branding"],"description":"Proposed Branding"},{"name":"Clark Memorandum Magazine","id":11,"images":["Hand Lettering for Clark Memorandum Magazine.jpg"],"categories":["publication"],"description":"Hand Lettering for Article"},{"name":"Birth Announcement","id":8,"images":["Hand Lettered Birth Announcement .jpeg"],"categories":["personal"],"description":"Hand Lettering"},{"name":"Most Favorite","id":3,"images":["Greeting Card, \\"Most Favorite\\".jpg"],"categories":["personal"],"description":"Greeting Card"},{"name":"Digital Collage Poster","id":9,"images":["Digital Collage Poster, \\"Author and Artist\\".jpg"],"categories":["personal"],"description":null},{"name":"Katies\' Award Show","id":1,"images":["Hand Lettering for Katies\' Award Show.jpg"],"categories":["publication"],"description":"Hand Lettering for Poster, Program and Invitations"},{"name":"Hand Lettered Poster","id":2,"images":["Hand Lettered Poster, \\"Most Beautiful\\".jpg"],"categories":["personal"],"description":null},{"name":"The Joint Chiropractic Clinic","id":6,"images":["Promotional Flyers for the Joint.jpg"],"categories":["publication"],"description":"Promotional Fliers"},{"name":"Private Club Travel Management","id":12,"images":["Promotional Brochure for Private Club Travel Management.jpeg"],"categories":["publication"],"description":"Promotional Brochure"}]')},"85ec":function(t,e,i){},"91aa":function(t,e,i){},dc05:function(t,e,i){"use strict";var r=i("382a"),n=i.n(r);n.a},e76e:function(t,e,i){"use strict";var r=i("91aa"),n=i.n(r);n.a}});
//# sourceMappingURL=app.9befb0b9.js.map