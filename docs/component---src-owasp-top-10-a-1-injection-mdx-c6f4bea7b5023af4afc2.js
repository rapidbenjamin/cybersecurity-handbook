(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{ZFgk:function(e,t,n){e.exports=n.p+"static/xkcd_327-3f89e3f5f26349e27df9cd2bc1266a96.png"},kSsi:function(e,t,n){e.exports=n.p+"static/car_injection-2e00b0b826b0f38a80b279d95af052e5.jpg"},qh6f:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return l}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),r=n("TjRS");n("aD51");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/owasp_top_10/a1_Injection.mdx"}});var s={_frontmatter:i},c=r.a;function l(e){var t=e.components,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(c,o({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"a1-injection"},"A1 Injection"),Object(a.b)("p",null,Object(a.b)("img",{alt:"xkcd - Exploits of a Mom",src:n("ZFgk")}),"\n",Object(a.b)("em",{parentName:"p"},"Image from ",Object(a.b)("a",o({parentName:"em"},{href:"https://xkcd.com/327/"}),"xkcd"))),Object(a.b)("h2",{id:"definition"},"Definition"),Object(a.b)("p",null,"Injection flaws, such as SQL, NoSQL, OS, and LDAP injection, occur when untrusted data is sent\nto an interpreter as part of a command or query. The attacker’s hostile data can trick the\ninterpreter into executing unintended commands or accessing data without proper authorization."),Object(a.b)("h2",{id:"risk-factor-summary"},"Risk Factor Summary"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Score: 8.0"),Object(a.b)("li",{parentName:"ul"},"Attack Vectors Exploitability: 3"),Object(a.b)("li",{parentName:"ul"},"Security Weakness Prevalence: 2"),Object(a.b)("li",{parentName:"ul"},"Security Weakness Detectability: 3"),Object(a.b)("li",{parentName:"ul"},"Impact Technical: 3")),Object(a.b)("h2",{id:"context"},"Context"),Object(a.b)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/rWHvp7rUka8"}),Object(a.b)("p",null,"Almost any source of data can be an injection vector, environment\nvariables, parameters, external and\ninternal web services, and all types of\nusers. ",Object(a.b)("a",o({parentName:"p"},{href:"https://owasp.org/www-community/Injection_Flaws"}),"Injection flaws")," occur when an\nattacker can send hostile data to an\ninterpreter."),Object(a.b)("p",null,"Injection flaws are very prevalent, particularly in\nlegacy code. Injection vulnerabilities are often found\nin SQL, LDAP, XPath, or NoSQL queries, OS\ncommands, XML parsers, SMTP headers,\nexpression languages, and ORM queries."),Object(a.b)("p",null,"Injection flaws are easy to discover when examining\ncode. Scanners and fuzzers can help attackers find\ninjection flaws."),Object(a.b)("p",null,"Injection can result in data loss,\ncorruption, or disclosure to\nunauthorized parties, loss of\naccountability, or denial of access."),Object(a.b)("p",null,"Injection can sometimes lead to\ncomplete host takeover."),Object(a.b)("p",null,"The business impact depends on the\nneeds of the application and data."),Object(a.b)("h2",{id:"is-the-application-vulnerable"},"Is the Application Vulnerable?"),Object(a.b)("p",null,"An application is vulnerable to attack when:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"User-supplied data is not validated, filtered, or sanitized by the\napplication."),Object(a.b)("li",{parentName:"ul"},"Dynamic queries or non-parameterized calls without contextaware escaping are used directly in the interpreter."),Object(a.b)("li",{parentName:"ul"},"Hostile data is used within object-relational mapping (ORM)\nsearch parameters to extract additional, sensitive records."),Object(a.b)("li",{parentName:"ul"},"Hostile data is directly used or concatenated, such that the\nSQL or command contains both structure and hostile data in\ndynamic queries, commands, or stored procedures.\nSome of the more common injections are SQL, NoSQL, OS\ncommand, Object Relational Mapping (ORM), LDAP, and\nExpression Language (EL) or Object Graph Navigation Library\n(OGNL) injection. The concept is identical among all interpreters.\nSource code review is the best method of detecting if\napplications are vulnerable to injections, closely followed by\nthorough automated testing of all parameters, headers, URL,\ncookies, JSON, SOAP, and XML data inputs. Organizations can\ninclude static source (SAST) and dynamic application test\n(DAST) tools into the CI/CD pipeline to identify newly introduced\ninjection flaws prior to production deployment. ")),Object(a.b)("h2",{id:"conceptual-attacks"},"Conceptual Attacks"),Object(a.b)("h3",{id:"scenario-1"},"Scenario #1:"),Object(a.b)("p",null,"An application uses untrusted data in the\nconstruction of the following vulnerable SQL call:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const query = `SELECT * FROM accounts WHERE\ncustID='${request.getParameter(\"id\")}'`;\n")),Object(a.b)("h3",{id:"scenario-2"},"Scenario #2:"),Object(a.b)("p",null,"Similarly, an application’s blind trust in frameworks\nmay result in queries that are still vulnerable, (e.g. Hibernate\nQuery Language (HQL)):"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const HQLQuery = session.createQuery(`FROM accounts\nWHERE custID='${request.getParameter(\"id\")}'`);\n")),Object(a.b)("p",null,"In both cases, the attacker modifies the ‘id’ parameter value in\ntheir browser to send: ",Object(a.b)("inlineCode",{parentName:"p"},"' or '1'='1"),". For example:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"http://example.com/app/accountView?id=' or '1'='1\n")),Object(a.b)("p",null,"This changes the meaning of both queries to return all the\nrecords from the accounts table, since ",Object(a.b)("inlineCode",{parentName:"p"},"'1'='1")," will always evaluate TRUE.\nMore dangerous attacks could modify or delete data, or even invoke stored procedures."),Object(a.b)("h2",{id:"example-attack-scenarios"},"Example Attack Scenarios"),Object(a.b)("h3",{id:"sql-injection"},"SQL Injection:"),Object(a.b)("p",null,"This example is based on  ",Object(a.b)("a",o({parentName:"p"},{href:"http://scottksmith.com/blog/2015/06/08/secure-node-apps-against-owasp-top-10-injection/"}),"Scott Smith example about Injections")),Object(a.b)("p",null,"Our server code:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const { mysqlConfig } = require('./config)\nconst express = require('express');\nconst bodyParser = require('body-parser');\nconst mysql  = require('mysql');\nconst connection = mysql.createConnection(mysqlConfig);\nconst app = express();\n\n//Middleware\napp.use(bodyParser.urlencoded());\n\n// Routes\napp.post('/login', (req, res) => {\n  const { user, pass } = req.body;\n  const sql = `SELECT * FROM users WHERE user = '${user}' AND pass = '${pass}'`;\n  console.log(`SQL to be executed: ${sql}`)\n  // connection.query(sql, (err, results) => {})\n});\napp.listen(8080);\n")),Object(a.b)("p",null,"our malicious request:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"POST /login HTTP/1.1\nHost: example.com\nContent-Type: application/x-www-form-urlencoded\n\nuser=admin'--&pass=pass\n")),Object(a.b)("p",null,"The final query is:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM users WHERE user = 'admin'--' AND pass = 'pass'\n")),Object(a.b)("p",null,"The problem here is that ",Object(a.b)("inlineCode",{parentName:"p"},'"--"')," renders everything that follows as a comment, thus returning the user info regardless of the password."),Object(a.b)("p",null,"In this particular case the mitigation can be done by using ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/mysqljs/mysql#escaping-query-values"}),Object(a.b)("inlineCode",{parentName:"a"},"escape")," function built-it in ",Object(a.b)("inlineCode",{parentName:"a"},"mysql")," library"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"//...\nconst connection = mysql.createConnection(mysqlConfig);\n//..\n\napp.post('/login', (req, res) => {\n  const user = connection.escape(req.body.user);\n  const pass = connection.escape(req.body.pass);\n\n  const sql = `SELECT * FROM users WHERE user = '${user}' AND pass = '${pass}'`;\n  console.log(`SQL to be executed: ${sql}`)\n  // connection.query(sql, (err, results) => {})\n});\n//..\n")),Object(a.b)("p",null,"Using the previous malicious payload you get a safe query:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM users WHERE user = 'admin''--' AND pass = 'pass'\n")),Object(a.b)("h3",{id:"non-sql-injection"},"NON-SQL Injection:"),Object(a.b)("p",null,"This example is based on  ",Object(a.b)("a",o({parentName:"p"},{href:"http://scottksmith.com/blog/2015/06/08/secure-node-apps-against-owasp-top-10-injection/"}),"Scott Smith example about Injections")),Object(a.b)("p",null,"Our server code:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const MongoClient = require('mongodb').MongoClient;\nconst { dbName, url } = require('./config).mongoConfig;\nconst express = require('express');\nconst bodyParser = require('body-parser');\nconst app = express();\nlet db;\n\n// DB Connection\nMongoClient.connect(url, (err, client) => {\n  if(err) throw err;\n  console.log(\"Connected successfully to MongoDB\");\n  db = client.db(dbName);\n  app.listen(8080);\n});\n\n//Middleware\napp.use(bodyParser.urlencoded());\n\n// Routes\napp.post('/login', (req, res) => {\n  const { user, pass } = req.body;\n  db.users.find({user: user, pass: pass});\n});\n")),Object(a.b)("p",null,"our malicious request:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),'POST /login HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\n    "user": {"$gt": ""},\n    "pass": {"$gt": ""}\n}\n')),Object(a.b)("p",null,"The final query will return all the users within the user collection"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"db.users.find({user: { '$gt': '' }, pass: { '$gt': '' }});\n")),Object(a.b)("p",null,"In this particular case the mitigation can be done by using an explicit query selector."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"app.post('/login', (req, res) => {\n  const { user, pass } = req.body;\n  db.users.find({user: { $in: [user] }, pass: { $in: [pass] }});\n});\n")),Object(a.b)("p",null,"Using the previous malicious payload, you get a safe query now:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"db.users.find({user: { $in: [{ '$gt': '' }] }, pass: { $in: [{ '$gt': '' }] }});\n")),Object(a.b)("h3",{id:"os-command-injection"},"OS Command Injection:"),Object(a.b)("p",null,"In this case we want to use ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ytdl-org/youtube-dl/blob/master/README.md"}),"youtube-dl")," to download a cool ",Object(a.b)("a",o({parentName:"p"},{href:"https://www.youtube.com/watch?v=KEkrWRHCDQU"}),"youtube video")," to our local machine."),Object(a.b)("p",null,"As ",Object(a.b)("inlineCode",{parentName:"p"},"youtube-dl")," is a Python library we will use ",Object(a.b)("a",o({parentName:"p"},{href:"https://nodejs.org/api/child_process.html"}),"process child")," to run it in Nodejs. "),Object(a.b)("p",null,"Note: This example is non very common, but is much better than the typical ",Object(a.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval"}),Object(a.b)("inlineCode",{parentName:"a"},"eval()"))," example."),Object(a.b)("p",null,"Our server code:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"const { exec } = require('child_process');\nconst express = require('express');\nconst app = express();\n\n// Routes\napp.get('/download_video/:id', (req, res) => {\n  const { id } = req.params;\n  const cmd = `youtube-dl https://www.youtube.com/watch\\?v\\=${id}`\n  exec(cmd, (error, stdout, stderr) => {\n      if(error || stderr) return res.status(500).send(`😱 The video with id:${id} was not downloaded!`)\n      res.send(`🎉 Video with id:${id} was downloaded!. ${stdout}`)\n  })\n});\n\napp.listen(8080);\n")),Object(a.b)("p",null,"Our malicious request:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"GET /download_video/KEkrWRHCDQU; printenv\n")),Object(a.b)("p",null,"This request will be translated to ",Object(a.b)("inlineCode",{parentName:"p"},"youtube-dl https://www.youtube.com/watch?v=KEkrWRHCDQU; printenv"),". So will include all the enviromental variables in the response."),Object(a.b)("p",null,"To prevent this specific attack you can use a regex to validate the ",Object(a.b)("a",o({parentName:"p"},{href:"https://markmail.org/message/jb6nsveqs7hya5la"}),"Youtube video id")," with a regex: ",Object(a.b)("inlineCode",{parentName:"p"},"/^[a-zA-Z0-9_-]{11}$/")," and avoid to include the ",Object(a.b)("inlineCode",{parentName:"p"},"stdout")," or raw errors in the response."),Object(a.b)("p",null,"Our server code:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"//..\nconst idValidation = (id) => {\n    const re = /^[a-zA-Z0-9_-]{11}$/;\n    return re.test(String(id));\n}\n\n// Routes\napp.get('/download_video/:id', (req, res) => {\n  const { id } = req.params;\n  if(!idValidation(id)) return res.status(400).send(\"You sent an invalid id!\")\n  const cmd = `youtube-dl https://www.youtube.com/watch\\?v\\=${id}`\n  exec(cmd, (error, stdout, stderr) => {\n      if(error || stderr) return res.status(500).send(`😱 The video with id:${id} was not downloaded!`)\n      res.send(`🎉 Video with id:${id} was downloaded!.`)\n  })\n});\n//..\n")),Object(a.b)("p",null,"Note: These kind of bugs in the design can easily lead to Backdoors. Check out ",Object(a.b)("a",o({parentName:"p"},{href:"https://snyk.io/blog/what-is-a-backdoor/"}),"this post for more details"),". "),Object(a.b)("h3",{id:"external-content-injection"},"External content Injection:"),Object(a.b)("p",null,"It is very common to use Content Delivery Networks (CDNs) to speed up our static content (css, js, etc...). If we are using a third party CDN we must use ",Object(a.b)("a",o({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity"}),"Subresource Integrity\nvalidation")," in our HTML in order to prevent the execution on malicious content in case that the CDN is compromised and the files replaced by malicious ones."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-html"}),'<script src="https://example.com/example-framework.js"\n    integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"\n    crossorigin="anonymous">\n<\/script>\n')),Object(a.b)("p",null,"As you can see the ",Object(a.b)("inlineCode",{parentName:"p"},"integrity")," property contains the hashed value of the file that we're expecting. This will allow the browser to check the integrity of the files downloaded before the execution."),Object(a.b)("p",null,"Note: Most of the CDN services already had included this features, please use them"),Object(a.b)("h2",{id:"how-to-prevent"},"How to Prevent"),Object(a.b)("h3",{id:"general-advice"},"General advice"),Object(a.b)("p",null,"Preventing injection requires keeping data separate from\ncommands and queries"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The preferred option is to use a safe API, which avoids the use\nof the interpreter entirely or provides a parameterized interface,\nor migrate to use Object Relational Mapping Tools (ORMs).\nNote: Even when parameterized, stored procedures can still\nintroduce SQL injection if PL/SQL or T-SQL concatenates\nqueries and data, or executes hostile data with EXECUTE\nIMMEDIATE or exec()."),Object(a.b)("li",{parentName:"ul"},'Use positive or "whitelist" server-side input validation. This is\nnot a complete defense as many applications require special\ncharacters, such as text areas or APIs for mobile applications.'),Object(a.b)("li",{parentName:"ul"},"For any residual dynamic queries, escape special characters\nusing the specific escape syntax for that interpreter.\nNote: SQL structure such as table names, column names, and\nso on cannot be escaped, and thus user-supplied structure\nnames are dangerous. This is a common issue in report-writing\nsoftware."),Object(a.b)("li",{parentName:"ul"},"Use LIMIT and other SQL controls within queries to prevent\nmass disclosure of records in case of SQL injection.")),Object(a.b)("h3",{id:"keys-to-mitigate"},"Keys to mitigate"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Validate and sanitize any user input"),Object(a.b)("li",{parentName:"ul"},"Strongly type your parameters"),Object(a.b)("li",{parentName:"ul"},"Use parameterized queries for databases"),Object(a.b)("li",{parentName:"ul"},"Configure your database account with the minimum permissions possible")),Object(a.b)("h2",{id:"extra-mile-unexpected-injections"},"Extra mile: Unexpected injections"),Object(a.b)("p",null,Object(a.b)("img",{alt:"Car with an SQL injection in as a plate",src:n("kSsi")}),"\n",Object(a.b)("em",{parentName:"p"},"Image from ",Object(a.b)("a",o({parentName:"em"},{href:"https://backtrackacademy.com/articulo/sql-injection-god-level-mito-o-realidad"}),"backtrackacademy"))),Object(a.b)("p",null,"You always must sanitize all the Inputs. No matter where they came from. Any non-controller input can be a very harmful. "),Object(a.b)("h2",{id:"hacking-playground"},"Hacking Playground"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://nodegoat.herokuapp.com/tutorial/a1"}),"🐐 NodeGoat | A1 - Injection")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://pwning.owasp-juice.shop/part2/injection.html"}),"🧃 Pwning OWASP Juice Shop | A1 - Injection")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://application.security/free-application-security-training/owas-top-10-sql-injection"}),"Kontra | SQL Injection"))),Object(a.b)("h2",{id:"references"},"References"),Object(a.b)("h3",{id:"owasp"},"OWASP"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://owasp.org/www-project-proactive-controls/"}),"OWASP Proactive Controls: Parameterize Queries")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html"}),"OWASP Cheat Sheet: Injection Prevention")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html"}),"OWASP Cheat Sheet: SQL Injection Prevention")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cheatsheetseries.owasp.org/cheatsheets/Query_Parameterization_Cheat_Sheet.html"}),"OWASP Cheat Sheet: Query Parameterization"))),Object(a.b)("h3",{id:"cwes"},"CWEs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/77.html"}),"CWE-77: Command Injection")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/89.html"}),"CWE-89: SQL Injection")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/94.html"}),"CWE-94: Improper Control of Generation of Code ('Code Injection')"),"\n- ",Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/95.html"}),"CWE-95: Improper Neutralization of Directives in Dynamically Evaluated Code ('Eval Injection')")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/116.html"}),"CWE-116: Improper Encoding or Escaping of Output")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/564.html"}),"CWE-564: Hibernate Injection")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://cwe.mitre.org/data/definitions/917.html"}),"CWE-917: Expression Language Injection"))),Object(a.b)("h3",{id:"other"},"Other"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"http://scottksmith.com/blog/2015/06/08/secure-node-apps-against-owasp-top-10-injection/"}),"Scott Smith | Secure Node Apps Against OWASP Top 10 - Injection")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://snyk.io/blog/what-is-a-backdoor/"}),"Snyk | What is a backdoor? Let’s build one with Node.js"))))}void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/owasp_top_10/a1_Injection.mdx"}}),l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-owasp-top-10-a-1-injection-mdx-c6f4bea7b5023af4afc2.js.map