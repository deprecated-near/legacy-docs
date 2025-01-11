(self.webpackChunk=self.webpackChunk||[]).push([[6449],{352:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>h,toc:()=>o});var r=t(85893),s=t(11151),i=t(2154);const d={id:"web-methods",title:"Web Browser Methods"},c=void 0,h={id:"components/web-methods",title:"Web Browser Methods",description:"NEAR Components have access to classic web methods that enable them to:",source:"@site/../docs/components/web-methods.md",sourceDirName:"components",slug:"/components/web-methods",permalink:"/legacy-docs/components/web-methods",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"web-methods",title:"Web Browser Methods"},sidebar:"intro",previous:{title:"Integrating Components",permalink:"/legacy-docs/components/integrate-components"},next:{title:"Social Interactions",permalink:"/legacy-docs/components/social"}},l={},o=[{value:"Fetch",id:"fetch",level:2},{value:"Async Version",id:"async-version",level:4},{value:"Cache",id:"cache",level:2},{value:"LocalStorage",id:"localstorage",level:2},{value:"Storage.get",id:"storageget",level:4},{value:"Storage.set",id:"storageset",level:4},{value:"Storage.privateGet",id:"storageprivateget",level:4},{value:"Storage.privateSet",id:"storageprivateset",level:4},{value:"Clipboard",id:"clipboard",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"NEAR Components have access to classic web methods that enable them to:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#fetch",children:"Fetch"})," data from external sources."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#cache",children:"Cache"})," values to avoid redundant computations."]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.a,{href:"#localstorage",children:"LocalStorage"})," to store data in the web browser."]}),"\n",(0,r.jsxs)(n.li,{children:["Access to the ",(0,r.jsx)(n.a,{href:"#clipboard",children:"Clipboard"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"fetch",children:"Fetch"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"fetch"})," allows to fetch data from the URL. It acts like a hook. It's a wrapper around the ",(0,r.jsx)(n.code,{children:"fetch"})," function from the browser behind the caching layer."]}),"\n",(0,r.jsx)(n.p,{children:"The possible returned values are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If the data is not cached, it returns ",(0,r.jsx)(n.code,{children:"null"})," and fetches the data in the background."]}),"\n",(0,r.jsx)(n.li,{children:"If the data is cached, it returns the cached value and then revalidates it."}),"\n"]}),"\n",(0,r.jsx)(i.W,{height:"80",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const res = fetch("https://rpc.mainnet.near.org/status");\n\nreturn res.body;\n'})})}),"\n",(0,r.jsx)("hr",{className:"subsection"}),"\n",(0,r.jsx)(n.h4,{id:"async-version",children:"Async Version"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"asyncFetch"})," is the ",(0,r.jsx)(n.code,{children:"async"})," version of ",(0,r.jsx)(n.a,{href:"#fetch",children:(0,r.jsx)(n.code,{children:"fetch"})}),", meaning that it returns a promise instead of a value."]}),"\n",(0,r.jsx)(i.W,{height:"80",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const [uptime, setUptime] = useState(null);\n\nfunction reportUptime() {\n  const promise = asyncFetch("https://rpc.mainnet.near.org/status")\n  \n  promise.then(\n    res => { setUptime(res.body.uptime_sec) }\n  );\n}\n\nreturn <>\n  <p> {uptime? `Uptime: ${uptime}s` : `Fetch a value` } </p>\n  <button onClick={reportUptime}>Fetch uptime</button>\n</>\n'})})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["In contrast with ",(0,r.jsx)(n.code,{children:"fetch"}),", ",(0,r.jsx)(n.code,{children:"asyncFetch"})," does ",(0,r.jsx)(n.strong,{children:"not"})," cache the resulting value, so it should only be used within a function to avoid frequent requests on every render."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"cache",children:"Cache"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"useCache"})," hook takes a promise through a generator function, fetches the data and caches it. It can be used to easily use and cache data from async data sources."]}),"\n",(0,r.jsxs)(n.p,{children:["The cache is global for the VM, but each cached element is identified by a unique ",(0,r.jsx)(n.code,{children:"dataKey"})," within each component."]}),"\n",(0,r.jsx)(n.p,{children:"The possible values returned are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"null"})," if the cache is cold and data is fetching"]}),"\n",(0,r.jsxs)(n.li,{children:["the ",(0,r.jsx)(n.code,{children:"cached value"})," while the data is being fetched"]}),"\n",(0,r.jsxs)(n.li,{children:["A new ",(0,r.jsx)(n.code,{children:"value"})," if new data is fetched."]}),"\n"]}),"\n",(0,r.jsx)(i.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const status = useCache(\n  () =>\n    asyncFetch("https://rpc.mainnet.near.org/status").then((res) => res.body),\n  "mainnetRpcStatus",\n  { subscribe: true }\n);\n\nreturn status;\n'})})}),"\n",(0,r.jsxs)(t,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Parameters "}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"promiseGenerator"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"a function that returns a promise, which generates data."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"dataKey"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"the unique name (within the current component) to identify the data."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"options"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"optional argument."})]})]})]}),(0,r.jsx)(n.admonition,{title:"options object",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"subscribe"})," ",(0,r.jsx)(n.em,{children:"(optional)"}),": if ",(0,r.jsx)(n.code,{children:"true"}),", the data refreshes periodically by invalidating cache."]}),"\n"]})}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"promiseGenerator"}),": you don't return the promise directly, because it should only be fired once."]}),"\n"]})})]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"#fetch",children:"fetch"})," method is built on top of the ",(0,r.jsx)(n.code,{children:"useCache"})," hook."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"The data is being cached and compared as JSON serialized objects."})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"localstorage",children:"LocalStorage"}),"\n",(0,r.jsxs)(n.p,{children:["NEAR Components have access to a simulated ",(0,r.jsx)(n.code,{children:"localStorage"})," through the ",(0,r.jsx)(n.code,{children:"Storage"})," object:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#storageget",children:(0,r.jsx)(n.code,{children:"Storage.get"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#storageset",children:(0,r.jsx)(n.code,{children:"Storage.set"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#storageprivateget",children:(0,r.jsx)(n.code,{children:"Storage.privateGet"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#storageprivateset",children:(0,r.jsx)(n.code,{children:"Storage.privateSet"})})}),"\n"]}),"\n",(0,r.jsx)(i.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const [time, setTime] = useState(stored || Date.now()) \n\nconst storeValue = () => {\n  const date = Date.now();\n  Storage.set('time_now', date)\n}\n\nreturn <>\n  <p> Time Now: {Date.now()} </p>\n  <p> Time Stored: {Storage.get('time_now')} </p>\n  <button onClick={storeValue}>Store Date.now()</button>\n</>\n"})})}),"\n",(0,r.jsxs)(t,{markdown:"1",children:[(0,r.jsx)("summary",{children:" Parameters "}),(0,r.jsx)(n.h4,{id:"storageget",children:"Storage.get"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Storage.get(key, widgetSrc?)"})," - returns the public value for a given key under the given widgetSrc or the current component if ",(0,r.jsx)(n.code,{children:"widgetSrc"})," is omitted. Can only read public values."]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"a user-defined key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"widgetSrc"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.em,{children:"optional"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"a user-defined component"})]})]})]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h4,{id:"storageset",children:"Storage.set"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Storage.set(key, value)"})," - sets the public value for a given key under the current widget. The value will be public, so other widgets can read it."]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"a user-defined key"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"a user-defined value"})]})]})]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h4,{id:"storageprivateget",children:"Storage.privateGet"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Storage.privateGet(key)"})," - returns the private value for a given key under the current component."]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"a user-defined key under the current component"})]})})]}),(0,r.jsx)(n.hr,{}),(0,r.jsx)(n.h4,{id:"storageprivateset",children:"Storage.privateSet"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Storage.privateSet(key, value)"})," - sets the private value for a given key under the current component. The value is private, only the current component can read it."]}),(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Private and public values can share the same key and don't conflict."})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"param"}),(0,r.jsx)(n.th,{children:"required"}),(0,r.jsx)(n.th,{children:"type"}),(0,r.jsx)(n.th,{children:"description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"a user-defined key under the current component"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"value"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"required"})}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"a user-defined value"})]})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"clipboard",children:"Clipboard"}),"\n",(0,r.jsxs)(n.p,{children:["NEAR Components can ",(0,r.jsx)(n.strong,{children:"write"})," data to the system's clipboard through the ",(0,r.jsx)(n.code,{children:"clipboard.writeText"})," method."]}),"\n",(0,r.jsxs)(n.p,{children:["Writing to the clipboard is ",(0,r.jsx)(n.strong,{children:"only"})," allowed in ",(0,r.jsx)(n.strong,{children:"trusted actions"}),", for example, when the user clicks a button."]}),"\n",(0,r.jsx)(i.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const copyToClipboard = (test) => { clipboard.writeText("Hello World!") }\n\nreturn <>\n    <button onClick={copyToClipboard}> Copy </button>\n    <textarea className="form-control mt-2" placeholder="Test pasting here" />\n</>\n'})})})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},2154:(e,n,t)=>{"use strict";t.d(n,{W:()=>d});var r=t(67294),s=t(91262),i=t(85893);function d(e){var n=e.children,d=e.id,c=void 0===d?1:d,h=e.networkId,l=void 0===h?"testnet":h,o=e.height,a=void 0===o?"160px":o;return(0,i.jsx)(s.Z,{fallback:(0,i.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(m){}var s=t(58613),d=s.Widget,h=s.useInitNear,o=t(2302).ZP,j=(0,r.useState)(e),x=j[0],u=j[1],p=h().initNear;return(0,r.useEffect)((function(){p&&p({networkId:l,selector:new Promise((function(){}))})}),[p]),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"monaco",children:(0,i.jsx)(o,{height:a,value:x,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return u(e)}})}),(0,i.jsx)("div",{className:"code_iframe",children:(0,i.jsx)("div",{className:"bootstrap-scope",children:(0,i.jsx)("div",{className:"vm-widget",children:(0,i.jsx)(d,{code:x},c)})})}),n[1]]})}})}},46601:()=>{},89214:()=>{},85568:()=>{},24654:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);