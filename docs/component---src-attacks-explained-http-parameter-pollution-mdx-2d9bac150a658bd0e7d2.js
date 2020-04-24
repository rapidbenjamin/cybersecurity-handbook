(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{vjMu:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return s}));r("5hJT"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("PJhk"),r("mXGw");var a=r("/FXl"),n=r("TjRS");r("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/attacks_explained/http_parameter_pollution.mdx"}});var l={_frontmatter:c},p=n.a;function s(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(p,o({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"http-parameter-pollution-hpp"},"HTTP Parameter Pollution (HPP)"),Object(a.b)("h2",{id:"the-attack"},"The Attack"),Object(a.b)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/QVZBl8yxVX0"}),Object(a.b)("p",null,"There are some corner cases that the ",Object(a.b)("a",o({parentName:"p"},{href:"https://tools.ietf.org/html/rfc2616"}),"HTTP Specification")," doesn't cover like HTTP Parameter Pollution or HTTP. "),Object(a.b)("p",null,"Check out this code:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const express = require('express')\nconst app = express()\n\napp.get('/films', (req, res) => res.json(req.query))\n\napp.listen(8080, () => console.log('Check http://localhost:8080'))\n")),Object(a.b)("p",null,"Check out the responses:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"http://localhost:8080/films\n\n{}\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'http://localhost:8080/films?actor=Me\n\n{"actor":"Me"}\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'http://localhost:8080/films?actor=Me&director=You\n\n{"actor":"Me","director":"You"}\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'http://localhost:8080/films?actor=Me&actor=You\n{"actor":["Me","You"]}\n')),Object(a.b)("p",null,"In the case of Express if the query param is redefined again we will receive an array, this can lead to many unexpected scenarios like:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Type Errors uncaught that can lead to DoS attacks"),Object(a.b)("li",{parentName:"ul"},"Unexpected data that can modify the behavior of our application")),Object(a.b)("h2",{id:"the-solution"},"The solution"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Check the expected type and implement a strong error handling mechanism.")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const express = require('express')\nconst app = express()\n\napp.get('/films', (req, res) => {\n    const { query } = req\n    let actor = Array.isArray(query.actor) ? query.actor[0] : query.actor;\n    res.send(`The actor is ${actor}`)\n})\n\napp.listen(8080, () => console.log('Check http://localhost:8080'))\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"http://localhost:8080/films?actor=Me\nThe actor is Me\n")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"http://localhost:8080/films?actor=Me&actor=You\nThe actor is Me\n")),Object(a.b)("h3",{id:"refs"},"Refs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://speakerdeck.com/ckarande/top-overlooked-security-threats-to-node-dot-js-web-applications?slide=48"}),"ckarande | Top Overlooked Security Threats to Node.js Web Applications | HPP"))))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/attacks_explained/http_parameter_pollution.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-attacks-explained-http-parameter-pollution-mdx-2d9bac150a658bd0e7d2.js.map