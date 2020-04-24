(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{wLc2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/owasp_top_10/a6_security_misconfiguration.mdx"}});var o={_frontmatter:s},c=i.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(c,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"a6-security-misconfiguration"},"A6 Security Misconfiguration"),Object(a.b)("h2",{id:"definition"},"Definition"),Object(a.b)("p",null,"Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure\ndefault configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured\nHTTP headers, and verbose error messages containing sensitive information. Not only must all\noperating systems, frameworks, libraries, and applications be securely configured, but they must\nbe patched and upgraded in a timely fashion."),Object(a.b)("h2",{id:"risk-factor-summary"},"Risk Factor Summary"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Score: 6.0"),Object(a.b)("li",{parentName:"ul"},"Attack Vectors Exploitability: 3"),Object(a.b)("li",{parentName:"ul"},"Security Weakness Prevalence: 3"),Object(a.b)("li",{parentName:"ul"},"Security Weakness Detectability: 3"),Object(a.b)("li",{parentName:"ul"},"Impact Technical: 2")),Object(a.b)("h2",{id:"context"},"Context"),Object(a.b)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/JuGSUMtKTPU"}),Object(a.b)("p",null,"Attackers will often attempt to exploit\nunpatched flaws or access default\naccounts, unused pages, unprotected\nfiles and directories, etc to gain\nunauthorized access or knowledge of\nthe system."),Object(a.b)("p",null,"Security misconfiguration can happen at any level of\nan application stack, including the network services,\nplatform, web server, application server, database,\nframeworks, custom code, and pre-installed virtual\nmachines, containers, or storage. Automated\nscanners are useful for detecting misconfigurations,\nuse of default accounts or configurations,\nunnecessary services, legacy options, etc."),Object(a.b)("p",null,"Such flaws frequently give attackers\nunauthorized access to some system\ndata or functionality. Occasionally,\nsuch flaws result in a complete\nsystem compromise."),Object(a.b)("p",null,"The business impact depends on the\nprotection needs of the application\nand data."),Object(a.b)("h2",{id:"is-the-application-vulnerable"},"Is the Application Vulnerable?"),Object(a.b)("p",null,"The application might be vulnerable if the application is:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Missing appropriate security hardening across any part of the\napplication stack, or improperly configured permissions on\ncloud services."),Object(a.b)("li",{parentName:"ul"},"Unnecessary features are enabled or installed (e.g.\nunnecessary ports, services, pages, accounts, or privileges)."),Object(a.b)("li",{parentName:"ul"},"Default accounts and their passwords still enabled and\nunchanged."),Object(a.b)("li",{parentName:"ul"},"Error handling reveals stack traces or other overly informative\nerror messages to users."),Object(a.b)("li",{parentName:"ul"},"For upgraded systems, latest security features are disabled or\nnot configured securely."),Object(a.b)("li",{parentName:"ul"},"The security settings in the application servers, application\nframeworks (e.g. Struts, Spring, ASP.NET), libraries,\ndatabases, etc. not set to secure values."),Object(a.b)("li",{parentName:"ul"},"The server does not send security headers or directives or they\nare not set to secure values."),Object(a.b)("li",{parentName:"ul"},"The software is out of date or vulnerable (see ",Object(a.b)("a",r({parentName:"li"},{href:"/docs/owasp/a9_using_components_with_known_vulnerabilities"}),"A9:2017-Using\nComponents with Known Vulnerabilities"),").\nWithout a concerted, repeatable application security\nconfiguration process, systems are at a higher risk.")),Object(a.b)("h2",{id:"how-to-prevent"},"How to Prevent"),Object(a.b)("p",null,"Secure installation processes should be implemented, including:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A repeatable hardening process that makes it fast and easy to\ndeploy another environment that is properly locked down.\nDevelopment, QA, and production environments should all be\nconfigured identically, with different credentials used in each\nenvironment. This process should be automated to minimize\nthe effort required to setup a new secure environment."),Object(a.b)("li",{parentName:"ul"},"A minimal platform without any unnecessary features,\ncomponents, documentation, and samples. Remove or do not\ninstall unused features and frameworks."),Object(a.b)("li",{parentName:"ul"},"A task to review and update the configurations appropriate to\nall security notes, updates and patches as part of the patch\nmanagement process (see ",Object(a.b)("a",r({parentName:"li"},{href:"/docs/owasp/a9_using_components_with_known_vulnerabilities"}),"A9:2017-Using Components with\nKnown Vulnerabilities"),"). In particular, review cloud storage\npermissions (e.g. S3 bucket permissions)."),Object(a.b)("li",{parentName:"ul"},"A segmented application architecture that provides effective,\nsecure separation between components or tenants, with\nsegmentation, containerization, or cloud security groups."),Object(a.b)("li",{parentName:"ul"},"Sending security directives to clients, e.g. Security Headers."),Object(a.b)("li",{parentName:"ul"},"An automated process to verify the effectiveness of the\nconfigurations and settings in all environments."),Object(a.b)("li",{parentName:"ul"},"Use generators for projects like ",Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/guidesmiths/generator-systemic"}),"generator-systemic")," or ",Object(a.b)("a",r({parentName:"li"},{href:"https://github.com/facebook/create-react-app"}),"create-react-app"),".")),Object(a.b)("h2",{id:"conceptual-attacks"},"Conceptual Attacks"),Object(a.b)("h3",{id:"scenario-1"},"Scenario #1:"),Object(a.b)("p",null,"The application server comes with sample\napplications that are not removed from the production server.\nThese sample applications have known security flaws attackers\nuse to compromise the server. If one of these applications is the\nadmin console, and default accounts weren’t changed the\nattacker logs in with default passwords and takes over."),Object(a.b)("h3",{id:"scenario-2"},"Scenario #2:"),Object(a.b)("p",null,"Directory listing is not disabled on the server. An\nattacker discovers they can simply list directories. The attacker\nfinds and downloads the compiled Java classes, which they\ndecompile and reverse engineer to view the code. The attacker\nthen finds a serious access control flaw in the application."),Object(a.b)("h3",{id:"scenario-3"},"Scenario #3:"),Object(a.b)("p",null,"The application server’s configuration allows detailed error messages, e.g. stack traces, to be returned to users.\nThis potentially exposes sensitive information or underlying flaws\nsuch as component versions that are known to be vulnerable."),Object(a.b)("h3",{id:"scenario-4"},"Scenario #4:"),Object(a.b)("p",null,"A cloud service provider has default sharing\npermissions open to the Internet by other CSP users. This allows\nsensitive data stored within cloud storage to be accessed."),Object(a.b)("h2",{id:"example-attack-scenarios"},"Example Attack Scenarios"),Object(a.b)("h3",{id:"express-information-leak-on-headers"},"Express information leak on headers"),Object(a.b)("p",null,"Express by default without helmet:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'HTTP/1.1 200 OK\nX-Powered-By: Express\nContent-Type: text/html; charset=utf-8\nContent-Length: 12\nETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"\nDate: Wed, 08 Apr 2020 07:00:48 GMT\nConnection: keep-alive\n')),Object(a.b)("p",null,"Without ",Object(a.b)("inlineCode",{parentName:"p"},"X-Powered-By"),":"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),'HTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nContent-Length: 12\nETag: W/"c-Lve95gjOVATpfV8EL5X4nxwjKHE"\nDate: Wed, 08 Apr 2020 07:00:48 GMT\nConnection: keep-alive\n')),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{className:"language-js"}),"const express = require('express');\nconst app = express();\n\napp.disable('x-powered-by')\n\napp.listen(8080);\n")),Object(a.b)("h4",{id:"please-review"},"Please review"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("a",r({parentName:"li"},{href:"/docs/http_headers/"}),"Recommendations for HTTP Headers in this guide")),Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("a",r({parentName:"li"},{href:"/docs/best_practices/express"}),"Best practices for Express in this guide"))),Object(a.b)("h2",{id:"hacking-playground"},"Hacking Playground"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://nodegoat.herokuapp.com/tutorial/a6"}),"🐐 NodeGoat | A6 Security Misconfiguration")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://pwning.owasp-juice.shop/part2/security-misconfiguration.html"}),"🧃 Pwning OWASP Juice Shop | A6 Security Misconfiguration"))),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("h3",{id:"cwes"},"CWEs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/2.html"}),"CWE-2: Environmental Security Flaws")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/16.html"}),"CWE-16: Configuration")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/388.html"}),"CWE-388: Error Handling"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/owasp_top_10/a6_security_misconfiguration.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-owasp-top-10-a-6-security-misconfiguration-mdx-619ef18892f4709ef898.js.map