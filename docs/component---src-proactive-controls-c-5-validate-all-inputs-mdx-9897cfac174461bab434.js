(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{"/7aX":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return c}));a("5hJT"),a("W1QL"),a("K/PF"),a("t91x"),a("75LO"),a("PJhk"),a("mXGw");var i=a("/FXl"),n=a("TjRS");a("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/proactive_controls/c5_validate_all_inputs.mdx"}});var r={_frontmatter:s},l=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(l,o({},r,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"ℹ️ This section will be part of ",Object(i.b)("a",o({parentName:"em"},{href:"https://github.com/guidesmiths/cybersecurity-handbook/issues/41"}),"1.0.0 Release"))),Object(i.b)("h1",{id:"c5-validate-all-inputs"},"C5: Validate All Inputs"),Object(i.b)("h2",{id:"description"},"Description"),Object(i.b)("p",null,"Input validation is a programming technique that ensures only properly formatted data may\nenter a software system component."),Object(i.b)("h3",{id:"syntax-and-semantic-validity"},"Syntax and Semantic Validity"),Object(i.b)("p",null,"An application should check that data is both syntactically and semantically valid (in that\norder) before using it in any way (including displaying it back to the user)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Syntax validity")," means that the data is in the form that is expected. For example, an application\nmay allow a user to select a four-digit “account ID” to perform some kind of operation. The\napplication should assume the user is entering a SQL injection payload, and should check that\nthe data entered by the user is exactly four digits in length, and consists only of numbers (in\naddition to utilizing proper query parameterization)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Semantic validity")," includes only accepting input that is within an acceptable range for the given\napplication functionality and context. For example, a start date must be before an end date\nwhen choosing date ranges."),Object(i.b)("h2",{id:"implementation"},"Implementation"),Object(i.b)("h3",{id:"whitelisting-vs-blacklisting"},"Whitelisting vs Blacklisting"),Object(i.b)("p",null,"There are two general approaches to performing input syntax validation, commonly known as\nblacklisting and whitelisting:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Blacklisting or blacklist validation attempts to check that given data does not contain\n“known bad” content. For example, a web application may block input that contains\nthe exact text ",Object(i.b)("inlineCode",{parentName:"li"},"<SCRIPT>")," in order to help prevent XSS. However, this defense could\nbe evaded with a lower case script tag or a script tag of mixed case."),Object(i.b)("li",{parentName:"ul"},"Whitelisting or whitelist validation attempts to check that a given data matches a set\nof “known good” rules. For example a whitelist validation rule for a US state would be\na 2-letter code that is only one of the valid US states.\nWhen building secure software, whitelisting is the recommended minimal approach.\nBlacklisting is prone to error and can be bypassed with various evasion techniques and can be\ndangerous when depended on by itself. Even though blacklisting can often be evaded it can\noften useful to help detect obvious attacks. So while whitelisting helps limit the attack surface\nby ensuring data is of the right syntactic and semantic validity, blacklisting helps detect and\npotentially stop obvious attacks. ")),Object(i.b)("h3",{id:"client-side-and-server-side-validation"},"Client side and Server side Validation"),Object(i.b)("p",null,"Input validation must always be done on the server-side for security. While client side\nvalidation can be useful for both functional and some security purposes it can often be easily\nbypassed. This makes server-side validation even more fundamental to security. For example,\nJavaScript validation may alert the user that a particular field must consist of numbers but the\nserver side application must validate that the submitted data only consists of numbers in the\nappropriate numerical range for that feature."),Object(i.b)("h3",{id:"regular-expressions"},"Regular Expressions"),Object(i.b)("p",null,"Regular expressions offer a way to check whether data matches a specific pattern. Let’s start\nwith a basic example."),Object(i.b)("p",null,"The following regular expression is used to define a whitelist rule to validate usernames."),Object(i.b)("pre",null,Object(i.b)("code",o({parentName:"pre"},{}),"^[a-z0-9_]{3,16}$\n")),Object(i.b)("p",null,"This regular expression allows only lowercase letters, numbers and the underscore character.\nThe username is also restricted to a length of 3 and 16 characters."),Object(i.b)("h4",{id:"caution-potential-for-denial-of-service"},"Caution: Potential for Denial of Service"),Object(i.b)("p",null,"Care should be exercised when creating regular expressions. Poorly designed expressions may\nresult in potential ",Object(i.b)("a",o({parentName:"p"},{href:"/attacks_explained/redos"}),"denial of service conditions (aka ReDoS)"),". Various tools can test to verify that\nregular expressions are not vulnerable to ReDoS."),Object(i.b)("h4",{id:"caution-complexity"},"Caution: Complexity"),Object(i.b)("p",null,"Regular expressions are just one way to accomplish validation. Regular expressions can be\ndifficult to maintain or understand for some developers. Other validation alternatives involve\nwriting validation methods programmatically which can be easier to maintain for some\ndevelopers."),Object(i.b)("h3",{id:"limits-of-input-validation"},"Limits of Input Validation"),Object(i.b)("p",null,'Input validation does not always make data “safe” since certain forms of complex input may\nbe "valid" but still dangerous. For example a valid email address may contain a SQL injection\nattack or a valid URL may contain a Cross Site Scripting attack. Additional defenses besides\ninput validation should always be applied to data such as query parameterization or escaping.'),Object(i.b)("h3",{id:"challenges-of-validating-serialized-data"},"Challenges of Validating Serialized Data"),Object(i.b)("p",null,"Some forms of input are so complex that validation can only minimally protect the\napplication. For example, it's dangerous to deserialize untrusted data or data that can be\nmanipulated by an attacker. The only safe architectural pattern is to not accept serialized\nobjects from untrusted sources or to only deserialize in limited capacity for only simple data\ntypes. You should avoid processing serialized data formats and use easier to defend formats\nsuch as JSON when possible."),Object(i.b)("p",null,"If that is not possible then consider a series of validation defenses when processing serialized\ndata."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Implement integrity checks or encryption of the serialized objects to prevent hostile\nobject creation or data tampering."),Object(i.b)("li",{parentName:"ul"},"Enforce strict type constraints during deserialization before object creation; typically\ncode is expecting a definable set of classes. Bypasses to this technique have been\ndemonstrated."),Object(i.b)("li",{parentName:"ul"},"Isolate code that deserializes, such that it runs in very low privilege environments,\nsuch as temporary containers."),Object(i.b)("li",{parentName:"ul"},"Log security deserialization exceptions and failures, such as where the incoming type is\nnot the expected type, or the deserialization throws exceptions."),Object(i.b)("li",{parentName:"ul"},"Restrict or monitor incoming and outgoing network connectivity from containers or\nservers that deserialize."),Object(i.b)("li",{parentName:"ul"},"Monitor deserialization, alerting if a user deserializes constantly.")),Object(i.b)("h3",{id:"unexpected-user-input-mass-assignment"},"Unexpected User Input (Mass Assignment)"),Object(i.b)("p",null,"Some frameworks support automatic binding of HTTP requests parameters to server-side\nobjects used by the application. This auto-binding feature can allow an attacker to update\nserver-side objects that were not meant to be modified. The attacker can possibly modify\ntheir access control level or circumvent the intended business logic of the application with\nthis feature."),Object(i.b)("p",null,"This attack has a number of names including: mass assignment, autobinding and object\ninjection."),Object(i.b)("p",null,"As a simple example, if the user object has a field privilege which specifies the user's privilege\nlevel in the application, a malicious user can look for pages where user data is modified and\nadd privilege=admin to the HTTP parameters sent. If auto-binding is enabled in an insecure\nfashion, the server-side object representing the user will be modified accordingly."),Object(i.b)("p",null,"Two approaches can be used to handle this:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Avoid binding input directly and use Data Transfer Objects (DTOs) instead."),Object(i.b)("li",{parentName:"ul"},"Enable auto-binding but set up whitelist rules for each page or feature to define which\nfields are allowed to be auto-bound.")),Object(i.b)("p",null,"More examples are available in the ",Object(i.b)("a",o({parentName:"p"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Mass_Assignment_Cheat_Sheet.html"}),"OWASP Mass Assignment Cheat Sheet")),Object(i.b)("h3",{id:"validating-and-sanitizing-html"},"Validating and Sanitizing HTML"),Object(i.b)("p",null,"Consider an application that needs to accept HTML from users (via a WYSIWYG editor that\nrepresents content as HTML or features that directly accept HTML in input). In this situation\nvalidation or escaping will not help."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Regular expressions are not expressive enough to understand the complexity of\nHTML5."),Object(i.b)("li",{parentName:"ul"},"Encoding or escaping HTML will not help since it will cause the HTML to not render\nproperly.\nTherefore, you need a library that can parse and clean HTML formatted text. Please see the\n",Object(i.b)("a",o({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html"}),"XSS Prevention Cheat Sheet on HTML Sanitization")," for more information on HTML Sanitization.")),Object(i.b)("h3",{id:"validation-functionality-in-libraries-and-frameworks"},"Validation Functionality in Libraries and Frameworks"),Object(i.b)("p",null,'All languages and most frameworks provide validation libraries or functions which should be\nleveraged to validate data. Validation libraries typically cover common data types, length requirements, integer ranges, "is null" checks and more. Many validation libraries and\nframeworks allow you to define your own regular expression or logic for custom validation in\na way that allows the programmer to leverage that functionality throughout your application.\nExamples of validation functionality include ',Object(i.b)("a",o({parentName:"p"},{href:"https://github.com/cure53/DOMPurify"}),"DOMPurify")),Object(i.b)("h2",{id:"vulnerabilities-prevented"},"Vulnerabilities Prevented"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Input validation reduces the attack surface of applications and can sometimes make\nattacks more difficult against an application."),Object(i.b)("li",{parentName:"ul"},"Input validation is a technique that provides security to certain forms of data, specific\nto certain attacks and cannot be reliably applied as a general security rule."),Object(i.b)("li",{parentName:"ul"},"Input validation should not be used as the primary method of preventing XSS, SQL\nInjection and other attacks.")),Object(i.b)("h2",{id:"specific-mitigations"},"Specific Mitigations"),Object(i.b)("h3",{id:"owasp-top-10-vulnerabilities-mitigated"},"OWASP Top 10 Vulnerabilities Mitigated"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/owasp/a1_injection"}),"A1:2017-Injection")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"/owasp/a7_cross-site_scripting_xss"}),"A7:2017-Cross-Site Scripting (XSS)"))),Object(i.b)("h3",{id:"owasp-mobile-top-10-vulnerabilities-mitigated"},"OWASP Mobile Top 10 Vulnerabilities Mitigated"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",o({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m7-client-code-quality"}),"M7: Client Code Quality"))))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/proactive_controls/c5_validate_all_inputs.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-proactive-controls-c-5-validate-all-inputs-mdx-9897cfac174461bab434.js.map