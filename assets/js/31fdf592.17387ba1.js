(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[4089],{1871:function(e,t,n){"use strict";var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,c=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:c},t)}},1137:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var a=n(7294),c=n(4179);var o=function(){var e=(0,a.useContext)(c.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(6010),l="tabItem_1uMI",u="tabItemActive_2DSg";var s=37,i=39;var p=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=o(),g=f.tabGroupChoices,v=f.setTabGroupChoices,b=(0,a.useState)(c),k=b[0],h=b[1],w=a.Children.toArray(e.children),y=[];if(null!=m){var N=g[m];null!=N&&N!==k&&p.some((function(e){return e.value===N}))&&h(N)}var T=function(e){var t=e.currentTarget,n=y.indexOf(t),a=p[n].value;h(a),null!=m&&(v(m,a),setTimeout((function(){var e,n,a,c,o,r,l,s;(e=t.getBoundingClientRect(),n=e.top,a=e.left,c=e.bottom,o=e.right,r=window,l=r.innerHeight,s=r.innerWidth,n>=0&&o<=s&&c<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(u),setTimeout((function(){return t.classList.remove(u)}),2e3))}),150))},A=function(e){var t,n;switch(e.keyCode){case i:var a=y.indexOf(e.target)+1;n=y[a]||y[0];break;case s:var c=y.indexOf(e.target)-1;n=y[c]||y[y.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:A,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},4179:function(e,t,n){"use strict";var a=(0,n(7294).createContext)(void 0);t.Z=a},978:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var a=n(2122),c=n(9756),o=(n(7294),n(3905)),r=n(1137),l=n(1871),u=["components"],s={keywords:["ISCP","view","account","balances","Rust","Solo"],description:"The Accounts contract provides the balance, totalAssets and accounts views.",image:"/img/logo/WASP_logo_dark.png"},i="View Account Balances",p={unversionedId:"guide/core_concepts/accounts/view-account-balances",id:"guide/core_concepts/accounts/view-account-balances",isDocsHomePage:!1,title:"View Account Balances",description:"The Accounts contract provides the balance, totalAssets and accounts views.",source:"@site/docs/guide/core_concepts/accounts/view-account-balances.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/view-account-balances",permalink:"/wasp/docs/guide/core_concepts/accounts/view-account-balances",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/core_concepts/accounts/view-account-balances.mdx",version:"current",frontMatter:{keywords:["ISCP","view","account","balances","Rust","Solo"],description:"The Accounts contract provides the balance, totalAssets and accounts views.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"How to Withdraw From a Chain",permalink:"/wasp/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},next:{title:"The Common Account",permalink:"/wasp/docs/guide/core_concepts/accounts/the-common-account"}},m=[{value:"balance",id:"balance",children:[]},{value:"totalAssets",id:"totalassets",children:[]},{value:"accounts",id:"accounts",children:[]},{value:"getAccountNonce",id:"getaccountnonce",children:[]}],d={toc:m};function f(e){var t=e.components,n=(0,c.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"view-account-balances"},"View Account Balances"),(0,o.kt)("p",null,"The Accounts contract provides the following views:"),(0,o.kt)("h2",{id:"balance"},"balance"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"balance")," - get the account balance of a specific account"),(0,o.kt)("p",null,"parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ParamAgentID")," - account's AgentID")),(0,o.kt)("p",null,"returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a map of ","[token_color]"," -> ","[amount]")),(0,o.kt)("p",null,"examples:"),(0,o.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Rust (ISCP)",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"balances := chain.GetAccountBalance(agentID)\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// TODO does this work?\nlet parms = ScMutableMap::new();\nparms.get_int64("a").set_value(AGENT_ID)\nlet ret = ctx.call(ScHname::new("accounts"), ScHname::new("balance"), Some(params), None);\nlet balances = ret.get_map(&KEY_BALANCES).immutable()\n')))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"totalassets"},"totalAssets"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"totalAssets")," - get the total colored balances controlled by the chain"),(0,o.kt)("p",null,"returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a map of ","[token_color]"," -> ","[amount]")),(0,o.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Rust (ISCP)",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"balances:= chain.GetTotalAssets()\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let ret = ctx.call(ScHname::new("accounts"), ScHname::new("totalAssets") , None);\nlet balances = ret.get_map(&KEY_BALANCES).immutable()\n')))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"accounts"},"accounts"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," - get a list of all accounts existing on the chain"),(0,o.kt)("p",null,"returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a list of accounts (AgentIDs)")),(0,o.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Rust (ISCP)",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"accounts := chain.GetAccounts()\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// TODO does this work?\nlet ret = ctx.call(ScHname::new("accounts"), ScHname::new("accounts") , None);\nlet account = ret.get_agent_id_array(&KEY_PARAMS)\n')))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"getaccountnonce"},"getAccountNonce"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"getAccountNonce")," - get the current nonce for a given account."),(0,o.kt)("p",null,"parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ParamAgentID")," - account's AgentI")),(0,o.kt)("p",null,"returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the current nonce")),(0,o.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Rust (ISCP)",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"solo",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"ret, err := chain.CallView(accounts.Contract.Name, accounts.FuncGetAccountNonce.Name,\n    accounts.ParamAgentID, iscp.NewAgentID(address, 0),\n)\nrequire.NoError(t, err)\nnonce, _, err := codec.DecodeUint64(ret.MustGet(accounts.ParamAccountNonce)\n"))),(0,o.kt)(l.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'// TODO does this work?\nlet parms = ScMutableMap::new();\nparms.get_int64("a").set_value(AGENT_ID)\nlet ret = ctx.call(ScHname::new("accounts"), ScHname::new("getAccountNonce"), Some(params), None);\nlet nonce = ret.get_int64("n")\n')))))}f.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return i},kt:function(){return d}});var a=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=c,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,r(r({ref:t},i),{},{components:n})):a.createElement(f,r({ref:t},i))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:c,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6010:function(e,t,n){"use strict";function a(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}function c(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(c&&(c+=" "),c+=t);return c}n.d(t,{Z:function(){return c}})}}]);