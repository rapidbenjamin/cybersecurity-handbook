(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"/kGR":function(e,t,l){"use strict";l.r(t),l.d(t,"_frontmatter",(function(){return i})),l.d(t,"default",(function(){return c}));l("5hJT"),l("W1QL"),l("K/PF"),l("t91x"),l("75LO"),l("PJhk"),l("mXGw");var n=l("/FXl"),a=l("TjRS");l("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/owasp_top_10/a4_xml_external_entities_xxe.mdx"}});var r={_frontmatter:i},s=a.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,["components"]);return Object(n.b)(s,o({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"a4-xml-external-entities-xxe"},"A4 XML External Entities (XXE)"),Object(n.b)("p",null,Object(n.b)("img",{alt:"CommitStrip | And that\\u2019s how good old XML disappeared",src:l("BFA6")}),"\n",Object(n.b)("em",{parentName:"p"},"Image from ",Object(n.b)("a",o({parentName:"em"},{href:"http://www.commitstrip.com/en/2014/05/27/and-thats-how-good-old-xml-disappeared/"}),"CommitStrip | And that’s how good old XML disappeared"))),Object(n.b)("h2",{id:"definition"},"Definition"),Object(n.b)("p",null,"Many older or poorly configured XML processors evaluate external entity references within XML\ndocuments. External entities can be used to disclose internal files using the file URI handler,\ninternal file shares, internal port scanning, remote code execution, and denial of service attacks."),Object(n.b)("h2",{id:"risk-factor-summary"},"Risk Factor Summary"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Score: 7.0"),Object(n.b)("li",{parentName:"ul"},"Attack Vectors Exploitability: 2"),Object(n.b)("li",{parentName:"ul"},"Security Weakness Prevalence: 2"),Object(n.b)("li",{parentName:"ul"},"Security Weakness Detectability: 3"),Object(n.b)("li",{parentName:"ul"},"Impact Technical: 3")),Object(n.b)("h2",{id:"context"},"Context"),Object(n.b)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/g2ey7ry8_CQ"}),Object(n.b)("p",null,"Attackers can exploit vulnerable XML\nprocessors if they can upload XML or\ninclude hostile content in an XML\ndocument, exploiting vulnerable code,\ndependencies or integrations. "),Object(n.b)("p",null,"By default, many older XML processors allow\nspecification of an external entity, a URI that is\ndereferenced and evaluated during XML processing."),Object(n.b)("p",null,"SAST tools can discover this issue by inspecting\ndependencies and configuration. DAST tools require\nadditional manual steps to detect and exploit this\nissue. Manual testers need to be trained in how to\ntest for XXE, as it not commonly tested as of 2017."),Object(n.b)("p",null,"These flaws can be used to extract\ndata, execute a remote request from\nthe server, scan internal systems,\nperform a denial-of-service attack, as\nwell as execute other attacks."),Object(n.b)("p",null,"The business impact depends on the\nprotection needs of all affected\napplication and data."),Object(n.b)("h2",{id:"is-the-application-vulnerable"},"Is the Application Vulnerable?"),Object(n.b)("p",null,"Applications and in particular XML-based web services or\ndownstream integrations might be vulnerable to attack if:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The application accepts XML directly or XML uploads,\nespecially from untrusted sources, or inserts untrusted data into\nXML documents, which is then parsed by an XML processor."),Object(n.b)("li",{parentName:"ul"},"Any of the XML processors in the application or SOAP based\nweb services has ",Object(n.b)("a",o({parentName:"li"},{href:"https://www.w3schools.com/xml/xml_dtd_intro.asp"}),"document type definitions (DTDs)")," enabled.\nAs the exact mechanism for disabling DTD processing varies\nby processor, it is good practice to consult a reference such as\nthe ",Object(n.b)("a",o({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html"}),"OWASP Cheat Sheet 'XXE Prevention'"),"."),Object(n.b)("li",{parentName:"ul"},"If your application uses SAML for identity processing within\nfederated security or single sign on (SSO) purposes. SAML\nuses XML for identity assertions, and may be vulnerable."),Object(n.b)("li",{parentName:"ul"},"If the application uses SOAP prior to version 1.2, it is likely\nsusceptible to XXE attacks if XML entities are being passed to\nthe SOAP framework."),Object(n.b)("li",{parentName:"ul"},"Being vulnerable to XXE attacks likely means that the\napplication is vulnerable to denial of service attacks including\nthe Billion Laughs attack.")),Object(n.b)("h2",{id:"how-to-prevent"},"How to Prevent"),Object(n.b)("p",null,"Developer training is essential to identify and mitigate XXE.\nBesides that, preventing XXE requires:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Whenever possible, use less complex data formats such as\nJSON, and avoiding serialization of sensitive data."),Object(n.b)("li",{parentName:"ul"},"Patch or upgrade all XML processors and libraries in use by\nthe application or on the underlying operating system. Use\ndependency checkers. Update SOAP to SOAP 1.2 or higher."),Object(n.b)("li",{parentName:"ul"},"Disable XML external entity and DTD processing in all XML\nparsers in the application, as per the ",Object(n.b)("a",o({parentName:"li"},{href:"(https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html)"}),"OWASP Cheat Sheet\n'XXE Prevention'"),"."),Object(n.b)("li",{parentName:"ul"},'Implement positive ("whitelisting") server-side input validation,\nfiltering, or sanitization to prevent hostile data within XML\ndocuments, headers, or nodes.'),Object(n.b)("li",{parentName:"ul"},"Verify that XML or XSL file upload functionality validates\nincoming XML using XSD validation or similar."),Object(n.b)("li",{parentName:"ul"},"SAST tools can help detect XXE in source code, although\nmanual code review is the best alternative in large, complex\napplications with many integrations.\nIf these controls are not possible, consider using virtual\npatching, API security gateways, or Web Application Firewalls\n(WAFs) to detect, monitor, and block XXE attacks.")),Object(n.b)("h2",{id:"conceptual-attacks"},"Conceptual Attacks"),Object(n.b)("p",null,"Numerous public XXE issues have been discovered, including\nattacking embedded devices. XXE occurs in a lot of unexpected\nplaces, including deeply nested dependencies. The easiest way\nis to upload a malicious XML file, if accepted:"),Object(n.b)("h3",{id:"scenario-1"},"Scenario #1:"),Object(n.b)("p",null,"The attacker attempts to extract data from the server:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="ISO-8859-1"?>\n<!DOCTYPE foo [\n<!ELEMENT foo ANY >\n<!ENTITY xxe SYSTEM "file:///etc/passwd" >]>\n<foo>&xxe;</foo>\n')),Object(n.b)("h3",{id:"scenario-2"},"Scenario #2:"),Object(n.b)("p",null,"An attacker probes the server's private network by changing the above ENTITY line to:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-xml"}),'<!ENTITY xxe SYSTEM "https://192.168.1.1/private" >]>\n')),Object(n.b)("h3",{id:"scenario-3"},"Scenario #3:"),Object(n.b)("p",null,"An attacker attempts a denial-of-service attack by including a potentially endless file:"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-xml"}),'<!ENTITY xxe SYSTEM "file:///dev/random" >]>\n')),Object(n.b)("h3",{id:"scenario-4"},"Scenario #4:"),Object(n.b)("p",null,"An attacker attempts a denial-of-service attack by expanding entities, like ",Object(n.b)("a",o({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Billion_laughs_attack"}),"Billion laughs attack"),". "),Object(n.b)("p",null,"👉 Check ",Object(n.b)("a",o({parentName:"p"},{href:"/attacks_explained/xml_bomb"}),"XML Bomb attack")," in this Guide for more details"),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0"?>\n<!DOCTYPE lolz [\n <!ENTITY lol "lol">\n <!ELEMENT lolz (#PCDATA)>\n <!ENTITY lol1 "&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;&lol;">\n <!ENTITY lol2 "&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;&lol1;">\n <!ENTITY lol3 "&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;&lol2;">\n <!ENTITY lol4 "&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;&lol3;">\n <!ENTITY lol5 "&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;&lol4;">\n <!ENTITY lol6 "&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;&lol5;">\n <!ENTITY lol7 "&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;&lol6;">\n <!ENTITY lol8 "&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;&lol7;">\n <!ENTITY lol9 "&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;&lol8;">\n]>\n<lolz>&lol9;</lolz>\n')),Object(n.b)("h2",{id:"hacking-playground"},"Hacking Playground"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://pwning.owasp-juice.shop/part2/xxe.html"}),"🧃 Pwning OWASP Juice Shop | A4 XML External Entities (XXE)"))),Object(n.b)("h2",{id:"references"},"References"),Object(n.b)("h3",{id:"owasp"},"OWASP"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html"}),"OWASP Cheat Sheet: XXE Prevention")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/XML_Security_Cheat_Sheet.html"}),"OWASP Cheat Sheet: XML Security"))),Object(n.b)("h3",{id:"cwes"},"CWEs"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/611.html"}),"CWE-611: Improper Restriction of XXE"))),Object(n.b)("h3",{id:"other"},"Other"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Billion_laughs_attack"}),"Wikipedia | Billion laughs attack"))))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/owasp_top_10/a4_xml_external_entities_xxe.mdx"}}),c.isMDXComponent=!0},BFA6:function(e,t,l){e.exports=l.p+"static/meme_04-a932eb4f49facd8b2db80b1857e0fe4e.jpg"}}]);
//# sourceMappingURL=component---src-owasp-top-10-a-4-xml-external-entities-xxe-mdx-41ba47fa24e46c3c3c09.js.map