(self.webpackChunk=self.webpackChunk||[]).push([[8202],{8159:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=t(85893),s=t(11151),a=(t(74866),t(85162),t(2154));const o={id:"state",title:"Basics"},i=void 0,c={id:"components/state",title:"Basics",description:"Borrowing from React, Near Components use hooks such as useState and useEffect to handle the state's logic, and props to receive parameters.",source:"@site/../docs/components/state.md",sourceDirName:"components",slug:"/components/state",permalink:"/legacy-docs/components/state",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"state",title:"Basics"},sidebar:"intro",previous:{title:"What is a Component?",permalink:"/legacy-docs/components/what-is"},next:{title:"Choose your Dev Environment",permalink:"/legacy-docs/components/dev-environment"}},l={},u=[{value:"State",id:"state",level:2},{value:"Props",id:"props",level:2},{value:"useEffect Hook",id:"useeffect-hook",level:2},{value:"Import",id:"import",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Borrowing from React, Near Components use hooks such as ",(0,r.jsx)(n.a,{href:"#state",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"useState"})})})," and ",(0,r.jsx)(n.a,{href:"#useeffect-hook",children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"useEffect"})})})," to handle the state's logic, and ",(0,r.jsx)(n.a,{href:"#props",children:(0,r.jsx)(n.strong,{children:"props"})})," to receive parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["Near Components are stored in the blockchain, for which you will use the ",(0,r.jsx)(n.code,{children:"NEAR VM"})," to ",(0,r.jsx)(n.a,{href:"/legacy-docs/components/integrate-components",children:"retrieve and execute them in the browser"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Using a VM enforces components to be sandboxed, making them very secure since they cannot access your ",(0,r.jsx)(n.code,{children:"LocalStorage"})," or other elements in the page they are incorporated to. However, because of this, components cannot import external libraries. However, they can ",(0,r.jsx)(n.a,{href:"#import",children:(0,r.jsx)(n.strong,{children:"import functions"})})," from other components."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"state",children:"State"}),"\n",(0,r.jsxs)(n.p,{children:["To handle the component's state you can use ",(0,r.jsx)(n.code,{children:"useState"})," hook. The ",(0,r.jsx)(n.code,{children:"useState"})," hook returns a tuple of two values: the current state and a function that updates it."]}),"\n",(0,r.jsx)(a.W,{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const [count, setCount] = useState(0);\n\nreturn (\n  <div>\n    <p>You clicked {count} times</p>\n    <button onClick={() => setCount(count + 1)}>Click me</button>\n  </div>\n);\n\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["Each time a state variable is updated, the component will be ",(0,r.jsx)(n.strong,{children:"re-rendered"}),". This means that the ",(0,r.jsx)(n.strong,{children:"whole code will run again"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"props",children:"Props"}),"\n",(0,r.jsxs)(n.p,{children:["Each component has access to a local variable named ",(0,r.jsx)(n.code,{children:"props"})," which holds the properties received as input when the component is composed."]}),"\n",(0,r.jsx)(a.W,{id:"2",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'return <>\n  <p> This component props: {JSON.stringify(props)} </p>\n  <Widget src="influencer.testnet/widget/Greeter"\n          props={{name: "Maria", amount: 2}} />\n</>\n'})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"useeffect-hook",children:"useEffect Hook"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsxs)(n.a,{href:"https://react.dev/learn/synchronizing-with-effects",children:[(0,r.jsx)(n.code,{children:"useEffect"})," hook"]})," is used to handle side effects. It will execute each time one of the dependencies changes."]}),"\n",(0,r.jsx)(a.W,{id:"3",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'const [count, setCount] = useState(0);\nconst [visible, setVisible] = useState(false);\n\nuseEffect(() => {\n  if(count > 5) setVisible(true);\n}, [count]);\n\nreturn (\n  <div>\n    <p>You clicked {count} times</p>\n    <p className="alert alert-danger" hidden={!visible}>\n      You clicked more than 5 times\n    </p>\n    <button onClick={() => setCount(count + 1)}>Click me</button>\n  </div>\n);\n'})})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"import",children:"Import"}),"\n",(0,r.jsx)(n.p,{children:"Components can import functions from other components. This is useful to reuse code and to create libraries of components."}),"\n",(0,r.jsx)(a.W,{id:"4",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:"const {add, multiply} = VM.require('influencer.testnet/widget/Math');\n\nreturn <>\n  <p> 2 + 3 = {add(2, 3)} </p>\n  <p> 2 * 3 = {multiply(2, 3)} </p>\n</>\n"})})}),"\n",(0,r.jsxs)(n.p,{children:["Where the code of the ",(0,r.jsx)(n.code,{children:"Math"})," component is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"function add(a, b) {\n  return a + b;\n}\n\nfunction multiply(a, b) {\n  return a * b;\n}\n\nreturn { add, multiply };\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});t(67294);var r=t(36905);const s={tabItem:"tabItem_Ymn6"};var a=t(85893);function o(e){var n=e.children,t=e.hidden,o=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{"use strict";t.d(n,{Z:()=>y});var r=t(67294),s=t(36905),a=t(12466),o=t(16550),i=t(20469),c=t(91980),l=t(67392),u=t(20812);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,l.lx)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,s=e.groupId,a=(0,o.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:s});return[(0,c._X)(i),(0,r.useCallback)((function(e){if(i){var n=new URLSearchParams(a.location.search);n.set(i,e),a.replace(Object.assign({},a.location,{search:n.toString()}))}}),[i,a])]}function m(e){var n,t,s,a,o=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,m=h(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var s=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:o,tabValues:m})})),b=v[0],x=v[1],g=f({queryString:l,groupId:d}),j=g[0],w=g[1],y=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),s=t[0],a=t[1],[s,(0,r.useCallback)((function(e){n&&a.set(e)}),[n,a])]),k=y[0],N=y[1],C=function(){var e=null!=j?j:k;return p({value:e,tabValues:m})?e:null}();return(0,i.Z)((function(){C&&x(C)}),[C]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),w(e),N(e)}),[w,N,m]),tabValues:m}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function g(e){var n=e.className,t=e.block,r=e.selectedValue,o=e.selectValue,i=e.tabValues,c=[],l=(0,a.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(l(n),o(s))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,s=c.indexOf(e.currentTarget)+1;t=null!=(r=c[s])?r:c[0];break;case"ArrowLeft":var a,o=c.indexOf(e.currentTarget)-1;t=null!=(a=c[o])?a:c[c.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((function(e){var n=e.value,t=e.label,a=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},a,{className:(0,s.Z)("tabs__item",b.tabItem,null==a?void 0:a.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:(0,s.Z)("margin-top--md",i.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(g,Object.assign({},n,e)),(0,x.jsx)(j,Object.assign({},n,e))]})}function y(e){var n=(0,v.Z)();return(0,x.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},2154:(e,n,t)=>{"use strict";t.d(n,{W:()=>o});var r=t(67294),s=t(91262),a=t(85893);function o(e){var n=e.children,o=e.id,i=void 0===o?1:o,c=e.networkId,l=void 0===c?"testnet":c,u=e.height,d=void 0===u?"160px":u;return(0,a.jsx)(s.Z,{fallback:(0,a.jsx)("div",{children:" Loading... "}),children:function(){var e="";try{n.length||(n=[n]),e=n[0].props.children.props.children}catch(v){}var s=t(58613),o=s.Widget,c=s.useInitNear,u=t(2302).ZP,h=(0,r.useState)(e),p=h[0],f=h[1],m=c().initNear;return(0,r.useEffect)((function(){m&&m({networkId:l,selector:new Promise((function(){}))})}),[m]),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"monaco",children:(0,a.jsx)(u,{height:d,value:p,options:{minimap:{enabled:!1},wordWrap:"on",scrollBeyondLastLine:!1,fontSize:"14px",renderLineHighlight:!1,hideMargin:!0,glyphMargin:!1,folding:!1,lineNumbers:!1,lineDecorationsWidth:0,lineNumbersMinChars:0,scrollBars:!1},onChange:function(e,n){return f(e)}})}),(0,a.jsx)("div",{className:"code_iframe",children:(0,a.jsx)("div",{className:"bootstrap-scope",children:(0,a.jsx)("div",{className:"vm-widget",children:(0,a.jsx)(o,{code:p},i)})})}),n[1]]})}})}},46601:()=>{},89214:()=>{},85568:()=>{},24654:()=>{},52361:()=>{},94616:()=>{},55024:()=>{}}]);