(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{WiUB:function(e,t,i){"use strict";i.r(t),i.d(t,"_frontmatter",(function(){return s})),i.d(t,"default",(function(){return l}));i("5hJT"),i("W1QL"),i("K/PF"),i("t91x"),i("75LO"),i("PJhk"),i("mXGw");var n=i("/FXl"),a=i("TjRS");i("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/proactive_controls/c1_define_security_requirements.mdx"}});var o={_frontmatter:s},c=a.a;function l(e){var t=e.components,i=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,["components"]);return Object(n.b)(c,r({},o,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"ℹ️ This section will be part of ",Object(n.b)("a",r({parentName:"em"},{href:"https://github.com/guidesmiths/cybersecurity-handbook/issues/41"}),"1.0.0 Release"))),Object(n.b)("h1",{id:"c1-define-security-requirements"},"C1 Define Security Requirements"),Object(n.b)("h2",{id:"description"},"Description"),Object(n.b)("p",null,"A security requirement is a statement of needed security functionality that ensures one of\nmany different security properties of software is being satisfied. Security requirements are\nderived from industry standards, applicable laws, and a history of past vulnerabilities. Security\nrequirements define new features or additions to existing features to solve a specific security\nproblem or eliminate a potential vulnerability."),Object(n.b)("p",null,"Security requirements provide a foundation of vetted security functionality for an application.\nInstead of creating a custom approach to security for every application, standard security\nrequirements allow developers to reuse the definition of security controls and best practices.\nThose same vetted security requirements provide solutions for security issues that have\noccurred in the past. Requirements exist to prevent the repeat of past security failures."),Object(n.b)("h3",{id:"the-owasp-asvs"},"The OWASP ASVS"),Object(n.b)("p",null,"The ",Object(n.b)("a",r({parentName:"p"},{href:"https://owasp.org/www-project-application-security-verification-standard/"}),"OWASP Application Security Verification Standard (ASVS)")," is a catalog of available security\nrequirements and verification criteria. OWASP ASVS can be a source of detailed security\nrequirements for development teams.\nSecurity requirements are categorized into different buckets based on a shared higher order\nsecurity function. For example, the ASVS contains categories such as authentication, access\ncontrol, error handling / logging, and web services. Each category contains a collection of\nrequirements that represent the best practices for that category drafted as verifiable\nstatements."),Object(n.b)("h3",{id:"augmenting-requirements-with-user-stories-and-misuse-cases"},"Augmenting Requirements with User Stories and Misuse Cases"),Object(n.b)("p",null,"The ASVS requirements are basic verifiable statements which can be expanded upon with\nuser stories and misuse cases. The advantage of a user story or misuse case is that it ties the\napplication to exactly what the user or attacker does to the system, versus describing what\nthe system offers to the user. "),Object(n.b)("p",null,"Here is an example of expanding on an ASVS 3.0.1 requirement. From the ",Object(n.b)("inlineCode",{parentName:"p"},"“Authentication\nVerification Requirements”")," section of ASVS 3.0.1, requirement 2.19 focuses on default\npasswords."),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"2.19 Verify there are no default passwords in use for the application framework or any\ncomponents used by the application (such as “admin/password”).")),Object(n.b)("p",null,"This requirement contains both an action to verify that no default passwords exist, and also\ncarries with it the guidance that no default passwords should be used within the application.\nA user story focuses on the perspective of the user, administrator, or attacker of the system,\nand describes functionality based on what a user wants the system to do for them. A user\nstory takes the form of ",Object(n.b)("inlineCode",{parentName:"p"},"“As a user, I can do x, y, and z”"),"."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"As a user, I can enter my username and password to gain access to the application.\nAs a user, I can enter a long password that has a maximum of 1023 characters.\n")),Object(n.b)("p",null,"When the story is focused on the attacker and their actions, it is referred to as a misuse case."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"As an attacker, I can enter in a default username and password to gain access.\n")),Object(n.b)("p",null,"This story contains the same message as the traditional requirement from ASVS, with\nadditional user or attacker details to help make the requirement more testable."),Object(n.b)("h2",{id:"implementation"},"Implementation"),Object(n.b)("p",null,"Successful use of security requirements involves four steps. The process includes discovering /\nselecting, documenting, implementing, and then confirming correct implementation of new\nsecurity features and functionality within an application. "),Object(n.b)("h3",{id:"discovery-and-selection"},"Discovery and Selection"),Object(n.b)("p",null,"The process begins with discovery and selection of security requirements. In this phase, the\ndeveloper is understanding security requirements from a standard source such as ASVS and\nchoosing which requirements to include for a given release of an application. The point of\ndiscovery and selection is to choose a manageable number of security requirements for this\nrelease or sprint, and then continue to iterate for each sprint, adding more security\nfunctionality over time."),Object(n.b)("h3",{id:"investigation-and-documentation"},"Investigation and Documentation"),Object(n.b)("p",null,"During investigation and documentation, the developer reviews the existing application\nagainst the new set of security requirements to determine whether the application currently\nmeets the requirement or if some development is required. This investigation culminates in\nthe documentation of the results of the review."),Object(n.b)("h3",{id:"implementation-and-test"},"Implementation and Test"),Object(n.b)("p",null,"After the need is determined for development, the developer must now modify the\napplication in some way to add the new functionality or eliminate an insecure option. In this\nphase the developer first determines the design required to address the requirement, and\nthen completes the code changes to meet the requirement. Test cases should be created to\nconfirm the existence of the new functionality or disprove the existence of a previously\ninsecure option."),Object(n.b)("h2",{id:"vulnerabilities-prevented"},"Vulnerabilities Prevented"),Object(n.b)("p",null,"Security requirements define the security functionality of an application. Better security built\nin from the beginning of an applications life cycle results in the prevention of many types of\nvulnerabilities. "),Object(n.b)("h2",{id:"specific-mitigations"},"Specific Mitigations"),Object(n.b)("h3",{id:"owasp-top-10-vulnerabilities-mitigated"},"OWASP Top 10 Vulnerabilities Mitigated"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a1_injection"}),"A1:2017-Injection")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a2_broken_authentication"}),"A2:2017-Broken Authentication")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a3_sensitived_data_exposure"}),"A3:2017-Sensitive Data Exposure")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a4_xml_external_entities_xxe"}),"A4:2017-XML External Entities (XXE)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a5_broken_access_control"}),"A5:2017-Broken Access Control")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a6_security_misconfiguration"}),"A6:2017-Security Misconfiguration")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a7_cross-site_scripting_xss"}),"A7:2017-Cross-Site Scripting (XSS)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a8_insecure_deserialization"}),"A8:2017-Insecure Deserialization")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a9_using_components_with_known_vulnerabilities"}),"A9:2017-Using Components with Known Vulnerabilities")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"/owasp/a10_insufficient_logging_and_monitoring"}),"A10:2017-Insufficient Logging & Monitoring"))),Object(n.b)("h3",{id:"owasp-mobile-top-10-vulnerabilities-mitigated"},"OWASP Mobile Top 10 Vulnerabilities Mitigated"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m1-improper-platform-usage"}),"M1: Improper Platform Usage")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m2-insecure-data-storage"}),"M2: Insecure Data Storage")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m3-insecure-communication"}),"M3: Insecure Communication")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m4-insecure-authentication"}),"M4: Insecure Authentication")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m5-insufficient-cryptography"}),"M5: Insufficient Cryptography")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m6-insecure-authorization"}),"M6: Insecure Authorization")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m7-client-code-quality"}),"M7: Client Code Quality")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m8-code-tampering"}),"M8: Code Tampering")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m9-reverse-engineering"}),"M9: Reverse Engineering")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m10-extraneous-functionality"}),"M10: Extraneous Functionality"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/proactive_controls/c1_define_security_requirements.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-proactive-controls-c-1-define-security-requirements-mdx-84b6f3e14525496d4ec3.js.map