(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"5HxQ":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var o=n("/FXl"),r=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/http_headers/ie_no_open.mdx"}});var l={_frontmatter:i},s=r.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(o.b)(s,a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"http-header-ie-no-open"},"HTTP Header: IE No Open"),Object(o.b)("h2",{id:"the-attack"},"The attack"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"This attack only affects old versions of Internet Explorer.")),Object(o.b)("p",null,"Some web applications will serve untrusted HTML for download. For example, you could allow users to upload and download HTML files."),Object(o.b)("p",null,"By default, old versions of Internet Explorer will allow you to open those HTML files in the context of your site, which means that an untrusted HTML page could start doing bad things in the context of your pages. For more, see ",Object(o.b)("a",a({parentName:"p"},{href:"https://blogs.msdn.microsoft.com/ie/2008/07/02/ie8-security-part-v-comprehensive-protection/"}),"this MSDN blog post"),"."),Object(o.b)("h2",{id:"the-header"},"The header"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"X-Download-Options")," header can be set to ",Object(o.b)("inlineCode",{parentName:"p"},"noopen"),". This will prevent old versions of Internet Explorer from allowing malicious HTML downloads to be executed in the context of your site."),Object(o.b)("h2",{id:"the-code"},"The code"),Object(o.b)("p",null,"This middleware sets the ",Object(o.b)("inlineCode",{parentName:"p"},"X-Download-Options")," to prevent Internet Explorer from executing downloads in your site’s context."),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"const helmet = require('helmet')\n\n// Sets \"X-Download-Options: noopen\".\napp.use(helmet.ieNoOpen())\n")),Object(o.b)("h3",{id:"refs"},"Refs:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",a({parentName:"li"},{href:"https://helmetjs.github.io/docs/ienoopen"}),"Helmet | IE No Open")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",a({parentName:"li"},{href:"https://blogs.msdn.microsoft.com/ie/2008/07/02/ie8-security-part-v-comprehensive-protection/"}),"Microsoft | IE8 Security Part V: Comprehensive Protection"))))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/http_headers/ie_no_open.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-http-headers-ie-no-open-mdx-d4ee885cf97de8692605.js.map