(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{407:function(s,t,e){"use strict";e.r(t);var a=e(41),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("Breadcrumb"),s._v(" "),e("h1",{attrs:{id:"在vuepress內使用font-awesome-icon"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在vuepress內使用font-awesome-icon"}},[s._v("#")]),s._v(" 在Vuepress內使用Font Awesome Icon")]),s._v(" "),e("ul",[e("li",[s._v("先在專案內安裝font awesome相關套件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("npm i --save @fortawesome/fontawesome-svg-core\nnpm i --save @fortawesome/fontawesome-free-solid\n\x3c!-- npm i --save @fortawesome/fontawesome-free-regular --\x3e\nnpm i --save @fortawesome/vue-fontawesome\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("在.vuepress目錄下新增enhanceApp.js檔案，引入font awesome相關套件。")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//enhanceApp.js")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" library "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@fortawesome/fontawesome-svg-core'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" solid "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@fortawesome/fontawesome-free-solid'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// import regular from '@fortawesome/fontawesome-free-regular'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" FontAwesomeIcon "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@fortawesome/vue-fontawesome'")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the version of Vue being used in the VuePress app")]),s._v("\n  options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the options for the root Vue instance")]),s._v("\n  router"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// the router instance for the app")]),s._v("\n  siteData "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// site metadata")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  library"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("solid"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Vue"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'font-awesome-icon'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" FontAwesomeIcon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("ul",[e("li",[s._v("在需要使用font awesome icon的地方加上icon標籤")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<font-awesome-icon icon="coffee" />\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("TagLinks")],1)}),[],!1,null,null,null);t.default=n.exports}}]);