(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{ECaj:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return l}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),i=n("TjRS");n("aD51");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var o={};void 0!==o&&o&&o===Object(o)&&Object.isExtensible(o)&&!o.hasOwnProperty("__filemeta")&&Object.defineProperty(o,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/proactive_controls/c6_implement_digital_identity.mdx"}});var r={_frontmatter:o},c=i.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(c,s({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"ℹ️ This section will be part of ",Object(a.b)("a",s({parentName:"em"},{href:"https://github.com/guidesmiths/cybersecurity-handbook/issues/41"}),"1.0.0 Release"))),Object(a.b)("h1",{id:"c6-implement-digital-identity"},"C6: Implement Digital Identity"),Object(a.b)("h2",{id:"description"},"Description"),Object(a.b)("p",null,"Digital Identity is the unique representation of a user (or other subject) as they engage in an\nonline transaction. Authentication is the process of verifying that an individual or entity is who they\nclaim to be. Session management is a process by which a server maintains the state of the\nusers authentication so that the user may continue to use the system without reauthenticating. "),Object(a.b)("p",null,"The ",Object(a.b)("a",s({parentName:"p"},{href:"https://pages.nist.gov/800-63-3/sp800-63b.html"}),"NIST Special Publication 800-63B: Digital Identity Guidelines (Authentication and\nLifecycle Management)")," provides solid guidance on implementing digital identity, authentication and\nsession management controls."),Object(a.b)("h2",{id:"implementation"},"Implementation"),Object(a.b)("h3",{id:"authentication-levels"},"Authentication Levels"),Object(a.b)("p",null,"NIST 800-63b describes three levels of a authentication assurance called a authentication\nassurance level (AAL). AAL level 1 is reserved for lower-risk applications that do not contain PII\nor other private data. At AAL level 1 only single-factor authentication is required, typically\nthrough the use of a password. "),Object(a.b)("h4",{id:"level-1--passwords"},"Level 1 : Passwords"),Object(a.b)("h5",{id:"password-requirements"},"Password Requirements"),Object(a.b)("p",null,"Passwords should comply with the following requirements at the very least:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"be at least 8 characters in length if multi-factor authentication (MFA) and other\ncontrols are also used. If MFA is not possible, this should be increased to at least 10\ncharacters"),Object(a.b)("li",{parentName:"ul"},"all printing ASCII characters as well as the space character should be acceptable in\nmemorized secrets"),Object(a.b)("li",{parentName:"ul"},"encourage the use of long passwords and passphrases remove complexity requirements as these have been found to be of limited\neffectiveness. Instead, the adoption of MFA or longer password lengths is\nrecommended"),Object(a.b)("li",{parentName:"ul"},"ensure that passwords used are not commonly used passwords that have been\nalready been leaked in a previous compromise. You may choose to block the top 1000\nor 10000 most common passwords which meet the above length requirements and\nare found in compromised password lists. The following link contains ",Object(a.b)("a",s({parentName:"li"},{href:"https://github.com/danielmiessler/SecLists/tree/master/Passwords"}),"the most\ncommonly found passwords"))),Object(a.b)("h5",{id:"implement-secure-password-recovery-mechanism"},"Implement Secure Password Recovery Mechanism"),Object(a.b)("p",null,"It is common for an application to have a mechanism for a user to gain access to their account\nin the event they forget their password. A good design workflow for a password recovery\nfeature will use multi-factor authentication elements. For example, it may ask a security\nquestion - something they know, and then send a generated token to a device - something\nthey own."),Object(a.b)("p",null,"Please see the ",Object(a.b)("a",s({parentName:"p"},{href:"https://www.owasp.org/index.php/Forgot_Password_Cheat_Sheet"}),"Forgot password cheat sheet")," and ",Object(a.b)("a",s({parentName:"p"},{href:"https://www.owasp.org/index.php/Choosing_and_Using_Security_Questions_Cheat_Sheet"}),"Choosing and using security questions cheat sheet")," for further details."),Object(a.b)("h5",{id:"implement-secure-password-storage"},"Implement Secure Password Storage"),Object(a.b)("p",null,"In order to provide strong authentication controls, an application must securely store user\ncredentials. Furthermore, cryptographic controls should be in place such that if a credential\n(e.g., a password) is compromised, the attacker does not immediately have access to this\ninformation."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"PHP Example for Password Storage")),Object(a.b)("p",null,"Below is an example for secure password hashing in PHP using password_hash() function\n(available since 5.5.0) which defaults to using the bcrypt algorithm. The example uses a work\nfactor of 15."),Object(a.b)("pre",null,Object(a.b)("code",s({parentName:"pre"},{className:"language-php"}),'<?php\n $cost = 15;\n $password_hash = password_hash("secret_password", PASSWORD_DEFAULT, ["cost" =>\n$cost] );\n?>\n')),Object(a.b)("p",null,"Please see the ",Object(a.b)("a",s({parentName:"p"},{href:"https://www.owasp.org/index.php/Password_Storage_Cheat_Sheet"}),"OWASP Password Storage Cheat Sheet")," for further details."),Object(a.b)("h4",{id:"level-2--multi-factor-authentication"},"Level 2 : Multi-Factor Authentication"),Object(a.b)("p",null,'NIST 800-63b AAL level 2 is reserved for higher-risk applications that contain "self-asserted PII\nor other personal information made available online." At AAL level 2 multi-factor\nauthentication is required including OTP or other forms of multi-factor implementation.'),Object(a.b)("p",null,"Multi-factor authentication (MFA) ensures that users are who they claim to be by requiring\nthem to identify themselves with a combination of:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Something you know – password or PIN"),Object(a.b)("li",{parentName:"ul"},"Something you own – token or phone"),Object(a.b)("li",{parentName:"ul"},"Something you are – biometrics, such as a fingerprint")),Object(a.b)("p",null,"Using passwords as a sole factor provides weak security. Multi-factor solutions provide a\nmore robust solution by requiring an attacker to acquire more than one element to\nauthenticate with the service.."),Object(a.b)("p",null,"It is worth noting that biometrics, when employed as a single factor of authentication, are not\nconsidered acceptable secrets for digital authentication. They can be obtained online or by\ntaking a picture of someone with a camera phone (e.g., facial images) with or without their\nknowledge, lifted from objects someone touches (e.g., latent fingerprints), or captured with\nhigh resolution images (e.g., iris patterns). Biometrics must be used only as part of multifactor authentication with a physical authenticator (something you own). For example,\naccessing a multi-factor one-time password (OTP) device that will generate a one-time\npassword that the user manually enters for the verifier."),Object(a.b)("h4",{id:"level-3--cryptographic-based-authentication"},"Level 3 : Cryptographic Based Authentication"),Object(a.b)("p",null,'NIST 800-63b Authentication Assurance Level 3 (AAL3) is required when the impact of\ncompromised systems could lead to personal harm, significant financial loss, harm the public\ninterest or involve civil or criminal violations. AAL3 requires authentication that is "based on\nproof of possession of a key through a cryptographic protocol." This type of authentication is\nused to achieve the strongest level of authentication assurance. This is typically done though\nhardware cryptographic modules.'),Object(a.b)("h3",{id:"session-management"},"Session Management"),Object(a.b)("p",null,"Once the initial successful user authentication has taken place, an application may choose to\ntrack and maintain this authentication state for a limited amount of time. This will allow the\nuser to continue using the application without having to keep re-authentication with each\nrequest. Tracking of this user state is called Session Management. "),Object(a.b)("h4",{id:"session-generation-and-expiration"},"Session Generation and Expiration"),Object(a.b)("p",null,"User state is tracked in a session. This session is typically stored on the server for traditional\nweb based session management. A session identifier is then given to the user so the user can\nidentify which server-side session contains the correct user data. The client only needs to\nmaintain this session identifier, which also keeps sensitive server-side session data off of the\nclient."),Object(a.b)("p",null,"Here are a few controls to consider when building or implementing session management\nsolutions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ensure that the session id is long, unique and random."),Object(a.b)("li",{parentName:"ul"},"The application should generate a new session or at least rotate the session id during\nauthentication and re-authentication."),Object(a.b)("li",{parentName:"ul"},"The application should implement an idle timeout after a period of inactivity and an\nabsolute maximum lifetime for each session, after which users must re-authenticate.")),Object(a.b)("p",null,"The length of the timeouts should be inversely proportional with the value of the data\nprotected."),Object(a.b)("p",null,"Please see the ",Object(a.b)("a",s({parentName:"p"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html"}),"Session Management Cheat Sheet")," further details. ASVS Section 3 covers\nadditional session management requirements"),Object(a.b)("h4",{id:"browser-cookies"},"Browser Cookies"),Object(a.b)("p",null,"Browser cookies are a common method for web application to store session identifiers for\nweb applications implementing standard session management techniques. Here are some\ndefenses to consider when using browser cookies."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When browser cookies are used as the mechanism for tracking the session of an\nauthenticated user, these should be accessible to a minimum set of domains and\npaths and should be tagged to expire at, or soon after, the session’s validity period."),Object(a.b)("li",{parentName:"ul"},"The ‘secure’ flag should be set to ensure the transfer is done via secure channel only\n(TLS)."),Object(a.b)("li",{parentName:"ul"},"HttpOnly flag should be set to prevent the cookie from being accessed via JavaScript."),Object(a.b)("li",{parentName:"ul"},"Adding ",Object(a.b)("a",s({parentName:"li"},{href:"https://www.owasp.org/index.php/SameSite"}),Object(a.b)("inlineCode",{parentName:"a"},"samesite"))," attributes to cookies prevents some ",Object(a.b)("a",s({parentName:"li"},{href:"https://caniuse.com/#search=samesite"}),"modern browsers")," from\nsending cookies with cross-site requests and provides protection against cross-site\nrequest forgery and information leakage attacks.")),Object(a.b)("h4",{id:"tokens"},"Tokens"),Object(a.b)("p",null,'Server-side sessions can be limiting for some forms of authentication. "Stateless services"\nallow for client side management of session data for performance purposes so they server has\nless of a burden to store and verify user session. These "stateless" applications generate a\nshort-lived access token which can be used to authenticate a client request without sending\nthe user\'s credentials after the initial authentication.'),Object(a.b)("h3",{id:"jwt-json-web-tokens"},"JWT (JSON Web Tokens)"),Object(a.b)("p",null,"JSON Web Token (JWT) is an open standard (",Object(a.b)("a",s({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7519"}),"RFC 7519"),") that defines a compact and selfcontained way for securely transmitting information between parties as a JSON object. This\ninformation can be verified and trusted because it is digitally signed. A JWT token is created\nduring authentication and is verified by the server (or servers) before any processing.\nHowever, JWT's are often not saved by the server after initial creation. JWT's are typically\ncreated and then handed to a client without being saved by the server in any way. The\nintegrity of the token is maintained through the use of digital signatures so a server can later\nverify that the JWT is still valid and was not tampered with since its creation.\nThis approach is both stateless and portable in the way that client and server technologies can\nbe different yet still interact."),Object(a.b)("h3",{id:"caution"},"Caution"),Object(a.b)("p",null,"Digital identity, authentication and session management are very big topics. We're scratching\nthe surface of the topic of Digital Identity here. Ensure that your most capable engineering\ntalent is responsible for maintaining the complexity involved with most Identity solutions."),Object(a.b)("h2",{id:"specific-mitigations"},"Specific Mitigations"),Object(a.b)("h3",{id:"owasp-top-10-vulnerabilities-mitigated"},"OWASP Top 10 Vulnerabilities Mitigated"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",s({parentName:"li"},{href:"/cybersecurity-handbook/owasp/a2_broken_authentication"}),"A2:2017-Broken Authentication"))),Object(a.b)("h3",{id:"owasp-mobile-top-10-vulnerabilities-mitigated"},"OWASP Mobile Top 10 Vulnerabilities Mitigated"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",s({parentName:"li"},{href:"https://owasp.org/www-project-mobile-top-10/2016-risks/m4-insecure-authentication"}),"M4: Insecure Authentication"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/proactive_controls/c6_implement_digital_identity.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-proactive-controls-c-6-implement-digital-identity-mdx-a5e3dcdb282cf0becf93.js.map