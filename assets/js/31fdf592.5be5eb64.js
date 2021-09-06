(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[4089],{1871:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1137:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),o=n(4179);var r=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=n(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,i=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=r(),v=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,a.useState)(o),k=g[0],h=g[1],y=a.Children.toArray(e.children),w=[];if(null!=m){var T=v[m];null!=T&&T!==k&&p.some((function(e){return e.value===T}))&&h(T)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;h(a),null!=m&&(b(m,a),setTimeout((function(){var e,n,a,o,r,c,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,r=e.right,c=window,l=c.innerHeight,s=c.innerWidth,n>=0&&r<=s&&o<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},A=function(e){var t,n;switch(e.keyCode){case i:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case s:var o=w.indexOf(e.target)-1;n=w[o]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,c.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:A,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},4179:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},978:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),c=n(1137),l=n(1871),u=["components"],s={keywords:["ISCP","view","account","balances","Rust","Solo"],description:"The Accounts contract provides the balance, totalAssets and accounts views.",image:"/img/logo/WASP_logo_dark.png"},i="View Account Balances",p={unversionedId:"guide/core_concepts/accounts/view-account-balances",id:"guide/core_concepts/accounts/view-account-balances",isDocsHomePage:!1,title:"View Account Balances",description:"The Accounts contract provides the balance, totalAssets and accounts views.",source:"@site/docs/guide/core_concepts/accounts/view-account-balances.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/view-account-balances",permalink:"/docs/guide/core_concepts/accounts/view-account-balances",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/core_concepts/accounts/view-account-balances.mdx",version:"current",frontMatter:{keywords:["ISCP","view","account","balances","Rust","Solo"],description:"The Accounts contract provides the balance, totalAssets and accounts views.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"How to Withdraw From a Chain",permalink:"/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},next:{title:"The Common Account",permalink:"/docs/guide/core_concepts/accounts/the-common-account"}},m=[{value:"balance",id:"balance",children:[]},{value:"totalAssets",id:"totalassets",children:[]},{value:"accounts",id:"accounts",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"view-account-balances"},"View Account Balances"),(0,r.kt)("p",null,"The Accounts contract provides the following views:"),(0,r.kt)("h2",{id:"balance"},"balance"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"balance")," - get the account balance of a specific account"),(0,r.kt)("p",null,"parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ParamAgentID")," - account's AgentID")),(0,r.kt)("p",null,"returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a map of ","[token_color]"," -> ","[amount]")),(0,r.kt)("p",null,"examples:"),(0,r.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Rust (ISCP)",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"balances := chain.GetAccountBalance(agentID)\n"))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// TODO does this work?\nlet ret = ctx.call(ScHname::new("accounts"), ScHname::new("balance") , None);\nlet balances = ret.get_map(&KEY_BALANCES).immutable()\n')))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"totalassets"},"totalAssets"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"totalAssets")," - get the total colored balances controlled by the chain"),(0,r.kt)("p",null,"returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a map of ","[token_color]"," -> ","[amount]")),(0,r.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Rust (ISCP)",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"balances:= chain.GetTotalAssets()\n"))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'let ret = ctx.call(ScHname::new("accounts"), ScHname::new("totalAssets") , None);\nlet balances = ret.get_map(&KEY_BALANCES).immutable()\n')))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"accounts"},"accounts"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," - get a list of all accounts existing on the chain"),(0,r.kt)("p",null,"returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a list of accounts (AgentIDs)")),(0,r.kt)(c.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Rust (ISCP)",value:"rust"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"accounts := chain.GetAccounts()\n"))),(0,r.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'// TODO does this work?\nlet ret = ctx.call(ScHname::new("accounts"), ScHname::new("accounts") , None);\nlet account = ret.get_agent_id_array(&KEY_PARAMS)\n')))))}f.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(f,c(c({ref:t},i),{},{components:n})):a.createElement(f,c({ref:t},i))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);