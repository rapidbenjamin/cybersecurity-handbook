!function(e){function c(c){for(var n,r,s=c[0],d=c[1],p=c[2],m=0,f=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);for(i&&i(c);f.length;)f.shift()();return a.push.apply(a,p||[]),t()}function t(){for(var e,c=0;c<a.length;c++){for(var t=a[c],n=!0,s=1;s<t.length;s++){var d=t[s];0!==o[d]&&(n=!1)}n&&(a.splice(c--,1),e=r(r.s=t[0]))}return e}var n={},o={103:0},a=[];function r(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.e=function(e){var c=[],t=o[e];if(0!==t)if(t)c.push(t[2]);else{var n=new Promise((function(c,n){t=o[e]=[c,n]}));c.push(t[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.src=function(e){return r.p+""+({0:"bac1b955",1:"bb99f8f894085eadd0ca6a942b63bab511672b17",3:"component---src-about-cybersecurity-common-attacks-mdx",4:"component---src-about-cybersecurity-cyber-kill-chain-ckc-mdx",5:"component---src-about-cybersecurity-intro-mdx",6:"component---src-about-cybersecurity-state-open-source-mdx",7:"component---src-acknowledgments-and-credits-mdx",8:"component---src-attacks-explained-buffer-mdx",9:"component---src-attacks-explained-clickjacking-mdx",10:"component---src-attacks-explained-csrf-mdx",11:"component---src-attacks-explained-css-exfil-mdx",12:"component---src-attacks-explained-exhausting-system-resources-mdx",13:"component---src-attacks-explained-fork-bomb-mdx",14:"component---src-attacks-explained-http-parameter-pollution-mdx",15:"component---src-attacks-explained-insecure-randomness-mdx",16:"component---src-attacks-explained-intro-mdx",17:"component---src-attacks-explained-leaking-application-secrets-mdx",18:"component---src-attacks-explained-lockfile-mdx",19:"component---src-attacks-explained-open-redirection-mdx",20:"component---src-attacks-explained-path-traversal-mdx",21:"component---src-attacks-explained-prototype-pollution-mdx",22:"component---src-attacks-explained-redos-mdx",23:"component---src-attacks-explained-ssrf-mdx",24:"component---src-attacks-explained-symlink-mdx",25:"component---src-attacks-explained-xml-bomb-mdx",26:"component---src-attacks-explained-xss-mdx",27:"component---src-attacks-explained-zip-bomb-mdx",28:"component---src-best-practices-cookies-mdx",29:"component---src-best-practices-crypto-mdx",30:"component---src-best-practices-databases-mdx",31:"component---src-best-practices-docker-mdx",32:"component---src-best-practices-express-mdx",33:"component---src-best-practices-general-mdx",34:"component---src-best-practices-intro-mdx",35:"component---src-best-practices-jwt-mdx",36:"component---src-best-practices-node-mdx",37:"component---src-best-practices-npm-and-dependencies-mdx",38:"component---src-best-practices-session-and-tokens-mdx",39:"component---src-best-practices-version-control-mdx",40:"component---src-cheatsheets-mdx",41:"component---src-checklists-authorization-and-authentication-mdx",42:"component---src-checklists-databases-mdx",43:"component---src-checklists-docker-mdx",44:"component---src-checklists-express-mdx",45:"component---src-checklists-intro-mdx",46:"component---src-checklists-nodejs-mdx",47:"component---src-http-headers-content-security-policy-mdx",48:"component---src-http-headers-cors-mdx",49:"component---src-http-headers-crossdomain-mdx",50:"component---src-http-headers-dns-prefetch-control-mdx",51:"component---src-http-headers-dont-sniff-mimetype-mdx",52:"component---src-http-headers-etag-mdx",53:"component---src-http-headers-expect-ct-mdx",54:"component---src-http-headers-feature-policy-mdx",55:"component---src-http-headers-frameguard-mdx",56:"component---src-http-headers-hsts-mdx",57:"component---src-http-headers-ie-no-open-mdx",58:"component---src-http-headers-intro-mdx",59:"component---src-http-headers-powered-by-mdx",60:"component---src-http-headers-referrer-policy-mdx",61:"component---src-http-headers-xss-filter-mdx",62:"component---src-index-mdx",63:"component---src-notable-security-incidents-mdx",64:"component---src-owasp-top-10-a-1-injection-mdx",65:"component---src-owasp-top-10-a-10-insufficient-logging-and-monitoring-mdx",66:"component---src-owasp-top-10-a-2-broken-authentication-mdx",67:"component---src-owasp-top-10-a-3-sensitive-data-exposure-mdx",68:"component---src-owasp-top-10-a-4-xml-external-entities-xxe-mdx",69:"component---src-owasp-top-10-a-5-broken-access-control-mdx",70:"component---src-owasp-top-10-a-6-security-misconfiguration-mdx",71:"component---src-owasp-top-10-a-7-cross-site-scripting-xss-mdx",72:"component---src-owasp-top-10-a-8-insecure-deserialization-mdx",73:"component---src-owasp-top-10-a-9-using-components-with-known-vulnerabilities-mdx",74:"component---src-owasp-top-10-intro-mdx",75:"component---src-pages-404-js",76:"component---src-proactive-controls-c-1-define-security-requirements-mdx",77:"component---src-proactive-controls-c-10-handle-all-errors-and-exceptions-mdx",78:"component---src-proactive-controls-c-2-leverage-security-frameworks-and-libraries-mdx",79:"component---src-proactive-controls-c-3-secure-database-access-mdx",80:"component---src-proactive-controls-c-4-encode-and-escape-data-mdx",81:"component---src-proactive-controls-c-5-validate-all-inputs-mdx",82:"component---src-proactive-controls-c-6-implement-digital-identity-mdx",83:"component---src-proactive-controls-c-7-enforce-access-controls-mdx",84:"component---src-proactive-controls-c-8-protect-data-everywhere-mdx",85:"component---src-proactive-controls-c-9-implement-security-logging-and-monitoring-mdx",86:"component---src-proactive-controls-intro-mdx",87:"component---src-resources-mdx",88:"component---src-security-design-authentication-mdx",89:"component---src-security-design-authorization-mdx",90:"component---src-security-design-cryptography-mdx",91:"component---src-security-design-data-validation-mdx",92:"component---src-security-design-external-components-mdx",93:"component---src-security-design-future-changes-mdx",94:"component---src-security-design-intro-mdx",95:"component---src-security-design-sensitive-data-mdx",96:"component---src-security-design-separation-mdx",97:"component---src-security-design-trust-mdx",98:"component---src-security-design-users-mdx",99:"component---src-testing-guides-mdx",100:"component---src-tooling-mdx"}[e]||e)+"-"+{0:"c10d60d121aac572689e",1:"d69f98068684ff7c8321",3:"5cca3a10385126b97ca5",4:"5c8dd29013727e439b19",5:"953cc0df690da0e1b8f0",6:"dc0a2caeae846ac733c4",7:"bb95240d221730b27266",8:"41a365541e6493118c8a",9:"ff82234dd2c9ac428482",10:"749a32ed54e3cfe77489",11:"6a677ac8aefeba6dccaa",12:"debc5b08ba417032f23a",13:"ea75d9021fa4c1f9f804",14:"2d9bac150a658bd0e7d2",15:"b5cac2982a06d4449228",16:"83cf57ee62153a3a6d9d",17:"a83265389e9878440b9b",18:"04317c136157a92e8eb7",19:"46cf6db7825c048973fa",20:"836c1c4adf590097d10e",21:"f7cdf2f3362a9789fd98",22:"c3fecbb07307718b1efe",23:"014f75879ffa8238051b",24:"f1a88f36fe26205d6873",25:"33c07feb67802efe42e4",26:"1b0b2f3d319220e12332",27:"e89796c4a012d7afb916",28:"26a5f512628766d90fac",29:"1d59e124cc5e977e8b3e",30:"d7d07da9bb561a3173b2",31:"47a471afdb52d6857d43",32:"906f2f0469cac049d45e",33:"232aa810326cfc84a9e7",34:"e34e604063bfe7d7eb4b",35:"7b12e8b9ee45c10702c3",36:"dcb80ff53f4e6fde9dc6",37:"fc0101d33ab711cc5f6f",38:"4363e7c14d4fdaaf6a0d",39:"7041343a90a924541931",40:"f373a0678f15b7b55fdf",41:"f2691f43365ba50e592d",42:"0131b5b45550356f8b65",43:"dd0c56c2030dfd044278",44:"fbdb00f2f80a2f541ebb",45:"84971f4566aa11b26fc9",46:"7a6d7bb56522dfa94906",47:"a6173890ce9f925adc3f",48:"20437b3acd4d680ca7cc",49:"ae16d6eac9fab2b0a589",50:"ce2858d0f00019761708",51:"e60ff8c8c93d0d20866a",52:"565a4931cff36ba40ab3",53:"39e8defa12ff74bfaf8c",54:"2ad338e62448d58952f1",55:"4c04e8ce7b1afa7a8d7e",56:"09973962db87fe6f7631",57:"d4ee885cf97de8692605",58:"5ee973776499ec7ac8bc",59:"5228a3429b27ed9d751c",60:"c9a1ff4e5fb2238db001",61:"c0bbefe1360d0d35c317",62:"d2885d65022ccd542a43",63:"2eff8a6163516c640b80",64:"af9cacc772d956686b20",65:"3414bbe6d7ba4983306b",66:"7d0f25d667e0b6b07d3c",67:"e4bb1403955771d97b8e",68:"f72a2271294c440dbecf",69:"63e4bb259df63fa114eb",70:"79c8deb15cee5ad41f20",71:"edefb6df9abf27c14f00",72:"eb6d503f35046dbe42c9",73:"7dff9456478c97f9d6fa",74:"116a65e3579b097b6e57",75:"300ddfecd0280d2e82b9",76:"6ca4bdbc7c27d3440b41",77:"5c3b26aeddd0599d3e57",78:"0b80c3d8f654e725061d",79:"a1c9df92c88177464e24",80:"eca5f2484d1cfb9c2c73",81:"39209babfa25e02cbb15",82:"2c3b36f6afecd014c35f",83:"33f2f14dbbb747ddce00",84:"475276c40bed37c5242c",85:"2f577b2796ff7b305648",86:"11bece8721cbd0056939",87:"d955eaed88135d120382",88:"c034ab2d924aa9de9b14",89:"470a9472e94a5a5f3b6c",90:"e04da1e44f4407610a59",91:"6f0fa7fe79cc555c59ed",92:"b834e1f04e63be626ff8",93:"fc72820b9e62a7afac61",94:"7157f3e02238ca2059e8",95:"f1e5c59bc174118b69c8",96:"32ea781123be4bd56b90",97:"94014c23c8031b874faf",98:"6fcae5a1027ebf5b1606",99:"2c880fe6517bdeb2059c",100:"99cefb838d59a8a34038"}[e]+".js"}(e);var d=new Error;a=function(c){s.onerror=s.onload=null,clearTimeout(p);var t=o[e];if(0!==t){if(t){var n=c&&("load"===c.type?"missing":c.type),a=c&&c.target&&c.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,t[1](d)}o[e]=void 0}};var p=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(c)},r.m=e,r.c=n,r.d=function(e,c,t){r.o(e,c)||Object.defineProperty(e,c,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,c){if(1&c&&(e=r(e)),8&c)return e;if(4&c&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&c&&"string"!=typeof e)for(var n in e)r.d(t,n,function(c){return e[c]}.bind(null,n));return t},r.n=function(e){var c=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(c,"a",c),c},r.o=function(e,c){return Object.prototype.hasOwnProperty.call(e,c)},r.p="/cybersecurity-handbook/",r.oe=function(e){throw console.error(e),e};var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=c,s=s.slice();for(var p=0;p<s.length;p++)c(s[p]);var i=d;t()}([]);
//# sourceMappingURL=webpack-runtime-f54c67b31eca4994043c.js.map