(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{353:function(t,o,e){},373:function(t,o,e){"use strict";var n=e(353);e.n(n).a},377:function(t,o,e){"use strict";e.r(o);e(98);var n=e(332),a=e(372),r={name:"app",computed:{tagsTest:function(){var t,o={},e=[],a=Object(n.a)(this.$site.pages);try{for(a.s();!(t=a.n()).done;){var r=t.value;for(var i in r.frontmatter.tags){var s=r.frontmatter.tags[i];if(s in o)for(var l in e)e[l].name==s&&e[l].value++;else o[s]=!0,e.push({name:s,value:1})}}}catch(t){a.e(t)}finally{a.f()}return e}},components:{TagCloud:e.n(a).a},methods:{wordClickHandler:function(t,o,e){console.log("wordClickHandler",t,o,e),window.location.href="/ITblog/tags.html#"+t}},data:function(){return{wordRotate:{from:0,to:0,numOfOrientation:0},wordFont:"Roboto,Microsoft JhengHei",myColors:["#1f77b4","#629fc9","#94bedb","#c9e0ef"]}}},i=(e(373),e(41)),s=Object(i.a)(r,(function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("TagCloud",{attrs:{data:this.tagsTest,nameKey:"name",valueKey:"value",rotate:this.wordRotate,fontSize:[30,80],font:this.wordFont,showTooltip:!1,wordClick:this.wordClickHandler}})],1)}),[],!1,null,null,null);o.default=s.exports}}]);