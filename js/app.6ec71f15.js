(function(t){function e(e){for(var a,n,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)n=s[p],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&d.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],a=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var a={},o={app:0},r=[];function n(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=a,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(i,a,function(e){return t[e]}.bind(null,a));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var a=i("85ec"),o=i.n(a);o.a},"4a50":function(t,e,i){},5273:function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",[i("div",[i("div",{staticClass:"top-spacer"}),i("div",{staticClass:"center"},[i("router-link",{staticClass:"bar-h3",attrs:{to:"/"}},[i("h1",{on:{click:function(e){return t.setfilter("all")}}},[t._v("Shayne Eliason")])])],1),i("div",{staticClass:"distribute center"},[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"filter",on:{click:function(e){return t.setfilter("logos")}}},[t._v("logos")])]),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"filter",on:{click:function(e){return t.setfilter("branding")}}},[t._v("branding")])]),i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"filter",on:{click:function(e){return t.setfilter("miscellaneous")}}},[t._v("misc")])]),t._m(0),i("div",{staticClass:"filter"},[i("router-link",{staticClass:"bar-h3",attrs:{to:"/about"}},[i("div",[t._v("About")])])],1)],1)]),i("div",{attrs:{id:"mobile-bar"}},[i("div",{attrs:{id:"bar-container"}},[i("div",[i("router-link",{staticClass:"bar-h3",attrs:{to:"/"}},[i("h3",[t._v("Shayne Eliason")])])],1)])])]),i("div",{staticStyle:{height:"calc(100vh - 3em)",margin:"0 auto"},attrs:{id:"router-view"}},[i("router-view")],1)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://www.instagram.com/"}},[i("div",{staticClass:"filter"},[t._v("insta")])])}],n=(i("4de4"),i("d3b7"),i("ac1f"),i("00b4"),{name:"App",methods:{setfilter:function(t){this.$root.$data.filter=t,console.log(t)},isMobile:function(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}}}),s=n,c=(i("034f"),i("2877")),l=Object(c["a"])(s,o,r,!1,null,null,null),u=l.exports,p=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top-spacer"}),i("div",{staticClass:"relative"},[i("div",{staticClass:"items"},[t.show_items?i("div",[i("div",{staticClass:"items"},t._l(t.items,(function(e){return i("div",{key:e.id},[i("router-link",{attrs:{to:"/design/"+e.name}},[i("div",{staticClass:"item"},[i("img",{attrs:{src:"/images/"+e.image[0]}}),i("h3",[t._v(t._s(e.name))])])])],1)})),0)]):t._e()])]),i("br"),i("div",[t._v(t._s(t.num_pages))]),i("div",{staticClass:"bottom-spacer top-spacer"})])},g=[],m=(i("25f0"),i("6062"),i("3ca3"),i("ddb0"),i("4e82"),i("a630"),i("fb6a"),{name:"Home",data:function(){return{perpage:1006,pageNumber:0}},methods:{previouspage:function(){this.filtered_items.length;this.pageNumber>0?this.pageNumber--:console.log("NO")},nextpage:function(){var t=this.filtered_items.length;Math.ceil(t/this.perpage)>this.pageNumber+1&&this.pageNumber++},toggle_art:function(){this.pageNumber=0,this.$root.$data.show_art=!this.$root.$data.show_art},toggle_photos:function(){this.pageNumber=0,this.$root.$data.show_photos=!this.$root.$data.show_photos},toggle_design:function(){this.pageNumber=0,this.$root.$data.show_design=!this.$root.$data.show_design},contains_object:function(t,e){var i;for(i=0;i<e.length;i++)if(e[i]===t)return!0;return!1}},computed:{num_pages:function(){var t=this.filtered_items.length,e=Math.floor(t/this.perpage)+1;return(this.pageNumber+1).toString()+" of "+e.toString()+" pages"},show_items:function(){return this.items.length>0},filtered_items:function(){var t=this,e=this.$root.$data.items,i=this.$root.$data.filter;"all"!=i&&(e=this.$root.$data.items.filter((function(e){return t.contains_object(i,e.category)})));var a=new Set(e);return e=Array.from(a).sort((function(t,e){return new Date(e.date)-new Date(t.date)})),e},items:function(){var t=this.filtered_items;return t=t.slice(this.pageNumber*this.perpage,this.pageNumber*this.perpage+this.perpage),t},show_photos:function(){return this.$root.$data.show_photos},show_art:function(){return this.$root.$data.show_art},show_design:function(){return this.$root.$data.show_design}}}),h=m,f=(i("f17f"),Object(c["a"])(h,d,g,!1,null,"bd402550",null)),v=f.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"top-spacer"}),i("h2",[t._v("design")]),i("hr"),i("div",{attrs:{id:"middlebar"}},[i("div",{staticClass:"toggle",staticStyle:{"font-size":"2em"},on:{click:function(e){return t.previouspage()}}},[t._v("⬅️")]),i("h2",{staticClass:"toggle",class:{active:t.show_photos},on:{click:function(e){return t.toggle_photos()}}},[t._v(" 🎞 photos ")]),i("h2",{staticClass:"toggle",class:{active:t.show_design},on:{click:function(e){return t.toggle_design()}}},[t._v(" 💻 design ")]),i("h2",{staticClass:"toggle",class:{active:t.show_art},on:{click:function(e){return t.toggle_art()}}},[t._v(" 🖼 art ")]),i("div",{staticClass:"toggle",staticStyle:{"font-size":"2em",margin:"0"},on:{click:function(e){return t.nextpage()}}},[t._v("➡️")])]),i("hr"),i("div",{staticClass:"relative"},[i("div",{staticClass:"square_overlays"},[i("div",{staticClass:"items"},t._l(t.items,(function(t){return i("div",{key:t.id},[i("div",{staticClass:"square_overlay"})])})),0)]),i("div",{staticClass:"items"},[t.show_items?i("div",[i("div",{staticClass:"items"},t._l(t.items,(function(t){return i("div",{key:t.id},[i("router-link",{attrs:{to:"/design/"+t.name}},[i("div",{staticClass:"item",style:"background: url(/images/"+t.image[0]+") no-repeat center top;"})])],1)})),0)]):i("div",{staticStyle:{width:"100%"}},[i("p",{staticClass:"mono"},[t._v("toggle a category to view items.")])])])]),i("br"),i("div",[t._v(t._s(t.num_pages))]),i("div",{staticClass:"bottom-spacer top-spacer"})])},_=[],w=(i("99af"),{name:"Design",data:function(){return{perpage:6,pageNumber:0}},methods:{previouspage:function(){this.filtered_items.length;this.pageNumber>0?this.pageNumber--:console.log("NO")},nextpage:function(){var t=this.filtered_items.length;Math.ceil(t/this.perpage)>this.pageNumber+1&&this.pageNumber++},toggle_art:function(){this.pageNumber=0,this.$root.$data.show_art=!this.$root.$data.show_art},toggle_photos:function(){this.pageNumber=0,this.$root.$data.show_photos=!this.$root.$data.show_photos},toggle_design:function(){this.pageNumber=0,this.$root.$data.show_design=!this.$root.$data.show_design},contains_object:function(t,e){var i;for(i=0;i<e.length;i++)if(e[i]===t)return!0;return!1}},computed:{num_pages:function(){var t=this.filtered_items.length,e=Math.floor(t/this.perpage)+1;return(this.pageNumber+1).toString()+" of "+e.toString()+" pages"},show_items:function(){return this.items.length>0},filtered_items:function(){var t=this,e=[];this.$root.$data.show_art&&(e=e.concat(this.$root.$data.items.filter((function(e){return t.contains_object("art",e.category)})))),this.$root.$data.show_photos&&(e=e.concat(this.$root.$data.items.filter((function(e){return t.contains_object("photo",e.category)})))),this.$root.$data.show_design&&(e=e.concat(this.$root.$data.items.filter((function(e){return t.contains_object("design",e.category)}))));var i=new Set(e);return e=Array.from(i).sort((function(t,e){return new Date(e.date)-new Date(t.date)})),e},items:function(){var t=this.filtered_items;return t=t.slice(this.pageNumber*this.perpage,this.pageNumber*this.perpage+this.perpage),t},show_photos:function(){return this.$root.$data.show_photos},show_art:function(){return this.$root.$data.show_art},show_design:function(){return this.$root.$data.show_design}}}),y=w,$=(i("6ae6"),Object(c["a"])(y,b,_,!1,null,"f6e5f87a",null)),k=$.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("div",{staticClass:"content"},[i("h2",{staticClass:"item-header center",staticStyle:{"padding-top":"3.5vw"}},[t._v(t._s(t.item_name))]),i("div",{staticClass:"flex-content"},[i("div",{staticClass:"image-wrap",staticStyle:{"padding-top":"3.5vw"}}),t._l(t.images,(function(t){return i("div",{key:t,staticClass:"image-wrap"},[i("img",{attrs:{src:"/images/"+t,alt:""}})])})),i("div",{staticClass:"top-spacer"})],2),i("div",{staticClass:"description"},[i("div",{staticClass:"date"},[t._v(" "+t._s(t.item_date)+" ")]),i("p",[t._v(t._s(t.item_description))]),i("div",{staticClass:"top-spacer"}),i("div",{staticClass:"bottom-spacer"})])])])},C=[],x=(i("c740"),i("b0c0"),i("a4d3"),i("e01a"),{name:"DesignViewer",props:{},computed:{item_index:function(){var t=this.$root.$data.items,e=this.$route.params.id,i=t.findIndex((function(t,i){if(t.name==e)return!0}));return i},item:function(){var t=this.$root.$data.items;return t[this.item_index]},images:function(){var t=this.item;return t.image},item_name:function(){return this.item.name},item_description:function(){return this.item.description},item_date:function(){return this.item.date}},data:function(){return{}},methods:{}}),N=x,S=(i("777b"),Object(c["a"])(N,j,C,!1,null,"9a44c084",null)),O=S.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{margin:"0 auto"},attrs:{id:"project-viewer"}},[i("div",{staticClass:"top-spacer"}),i("vue-markdown",{attrs:{id:"markdown",source:t.md}}),i("p",[t._v("View my full cv "),i("router-link",{staticClass:"mono",attrs:{to:"/about/cv"}},[t._v("here")]),t._v(".")],1),i("hr"),i("div",{staticClass:"top-spacer bottom-spacer"})],1)},M=[],P=(i("1276"),i("5319"),{name:"About",props:{},mounted:function(){Prism.highlightAll()},methods:{},computed:{project:function(){return this.$root.$data.about[0]},date:function(){var t=this.project.date.split("T")[0],e=t.split("-");return e[1]+"/"+e[2]+"/"+e[0]},md:function(){var t=this.project,e=t.contents;return e=e.replace(/!\[(.*?)\]\((.+?)\)/,'![]($2)<p class="alt">$1</p>'),e=e.replace(/\[(.*?)\]\(([^\.]*?)\)/,"[$1](https://zacheliason.com/#/projects/$2)"),console.log(e),e}},data:function(){return{}}}),A=P,E=(i("e76e"),Object(c["a"])(A,z,M,!1,null,null,null)),T=E.exports;a["a"].use(p["a"]);var q=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:T},{path:"/design",name:"Design",component:k},{path:"*",redirect:"/"},{path:"/design/:id",component:O}],D=new p["a"]({mode:"hash",base:"/",scrollBehavior:function(t,e,i){return{x:0,y:0}},routes:q}),G=D,J=i("832e");console.log(J),a["a"].config.productionTip=!1;var H={filter:"all",show_art:!0,show_photos:!0,show_design:!0,items:J};new a["a"]({router:G,data:H,render:function(t){return t(u)}}).$mount("#app")},"6ae6":function(t,e,i){"use strict";var a=i("5273"),o=i.n(a);o.a},"777b":function(t,e,i){"use strict";var a=i("4a50"),o=i.n(a);o.a},"832e":function(t){t.exports=JSON.parse('[{"category":[],"description":"","id":1,"image":["most favorite card mock up.jpg"],"name":"most favorite card mock up"},{"category":[],"description":"","id":2,"image":["collage poster.jpg"],"name":"collage poster"},{"category":[],"description":"","id":3,"image":["treasured trinket logo-01.jpg","treasured trinket color variations-01.jpg","treasured trinket branding page-01.jpg"],"name":"Treasured Trinket"},{"category":[],"description":"","id":4,"image":["goldie prawn logo-01.jpg","goldie prawn branding page-01.jpg","goldie prawn color variations-01.jpg"],"name":"Goldie Prawn"},{"category":[],"description":"","id":5,"image":["cherry on top final logo.jpg","cherry on top color variations-01.jpg"," cherry on top branding page.jpg"],"name":"Cherry on top"},{"category":[],"description":"","id":6,"image":["lily collage.jpg"],"name":"lily collage"},{"category":[],"description":"","id":7,"image":["window collage.jpg"],"name":"window collage"},{"category":[],"description":"","id":8,"image":["the joint flyer mock up.jpg"],"name":"the joint flyer mock up"},{"category":[],"description":"","id":9,"image":["willow tree color and logo variations-01.jpg","Willowtree branding page-01.jpg","willow tree logo.jpg"],"name":"Willow tree"},{"category":[],"description":"","id":10,"image":["trifold brochure for Private Club Travel Managment.jpeg"],"name":"trifold brochure for Private Club Travel Managment"},{"category":[],"description":"","id":11,"image":["lettering poster mock up.jpg"],"name":"lettering poster mock up"},{"category":[],"description":"","id":12,"image":["Katies award show brochure.jpg"],"name":"Katies award show brochure"},{"category":[],"description":"","id":13,"image":["Luke birth announcement.jpeg"],"name":"Luke birth announcement"},{"category":[],"description":"","id":14,"image":["Real Generation Gap.jpg"],"name":"Real Generation Gap"},{"category":[],"description":"","id":15,"image":["silkscreen poster mock up.jpg"],"name":"silkscreen poster mock up"}]')},"85ec":function(t,e,i){},"91aa":function(t,e,i){},"9d41":function(t,e,i){},e76e:function(t,e,i){"use strict";var a=i("91aa"),o=i.n(a);o.a},f17f:function(t,e,i){"use strict";var a=i("9d41"),o=i.n(a);o.a}});
//# sourceMappingURL=app.6ec71f15.js.map