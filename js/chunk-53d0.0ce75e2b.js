(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53d0"],{"025e":function(t,n,e){"use strict";var s=e("5d93"),c=e.n(s);n["default"]=c.a},"0bfb":function(t,n,e){"use strict";var s=e("cb7c");t.exports=function(){var t=s(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},"1e84":function(t,n,e){},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"5d93":function(t,n,e){t.exports={content:"doc_content_TJYX_",place:"doc_place_2gGYz",testImg:"doc_testImg_3hsTi"}},"6b54":function(t,n,e){"use strict";e("3846");var s=e("cb7c"),c=e("0bfb"),a=e("9e1e"),o="toString",i=/./[o],r=function(t){e("2aba")(RegExp.prototype,o,t,!0)};e("79e5")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?r(function(){var t=s(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?c.call(t):void 0)}):i.name!=o&&r(function(){return i.call(this)})},"712f":function(t,n,e){"use strict";var s=e("1e84"),c=e.n(s);n["default"]=c.a},"84b4":function(t,n,e){var s=e("5ca1");s(s.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},9913:function(t,n,e){"use strict";e.r(n);var s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{class:t.$style.content},[e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.load,expression:"load"}],class:t.$style.place},[e("luck-ten",{attrs:{title:"抽奖"}}),e("el-button",{attrs:{size:"mini"}},[t._v("点")])],1)])},c=[],a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("div",{on:{click:t.cons}},[t._v(t._s(t.title))]),e("el-button",{staticStyle:{margin:"15px"},attrs:{size:"mini"},on:{click:function(n){t.luckDraw(1)}}},[t._v("单抽")]),e("el-button",{staticStyle:{margin:"15px"},attrs:{size:"mini"},on:{click:function(n){t.luckDraw(10)}}},[t._v("十连抽")]),e("br"),e("span",[t._v("抽奖次数: "+t._s(t.frequency))]),e("br"),e("span",[t._v("SSR: "+t._s(t.ssr))]),e("br"),e("span",[t._v("保底SSR: "+t._s(t.bgSsr))]),e("br"),e("span",[t._v("剩余"+t._s(t.BG)+"发保底")])],1)},o=[],i=(e("84b4"),e("6b54"),{name:"luckTen",props:{title:String},data:function(){return{ssrFlag:!1,srFlag:!1,rFlag:!1,num:"",frequency:0,ssr:0,sr:0,r:0,bgSsr:0,bgSr:0,BG:100}},computed:{},watch:{},mounted:function(){console.log(this.title)},methods:{cons:function(){console.log(this.title)},luckDraw:function(t){try{this.BG<=10&&(this.ssrFlag=!0);var n=parseInt(t);if("number"===typeof n&&"NaN"!==n.toString()){for(var e=[Math.trunc(100*Math.random()),[]],s=e[0],c=e[1],a=0;a<n;a++)if(this.BG--,this.BG>0){var o=Math.trunc(100*Math.random());o===s?(c.push("SSR"),this.ssr++,this.BG=100):c.push("辣鸡卡")}else c.push("SSR"),this.BG=100,this.ssr++,this.bgSsr++;return console.log(this.BG,c),1===t?this.frequency+=1:10===t&&(this.frequency+=10),c[c.length-1]||"啥都没中"}console.log("抽奖失败")}catch(t){}finally{this.ssrFlag=!1,this.srFlag=!1}}}}),r=i,l=e("712f"),u=e("2877");function f(t){this["$style"]=l["default"].locals||l["default"]}var g=Object(u["a"])(r,a,o,!1,f,null,null),h=g.exports,d=e("365c"),p=(e("2f62"),{name:"doc",components:{LuckTen:h},data(){return{load:!1}},computed:{},watch:{},created(){},mounted(){},methods:{async login(){let t={email:"88888881@qq.com",password:"123456"};const[n,e]=await Object(d["b"])(Object(d["a"])(t));console.log(n,e)}}}),b=p,m=e("025e");function v(t){this["$style"]=m["default"].locals||m["default"]}var _=Object(u["a"])(b,s,c,!1,v,null,null);n["default"]=_.exports}}]);