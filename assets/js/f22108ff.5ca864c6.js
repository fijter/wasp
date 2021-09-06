(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[4259],{1558:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(2122),o=r(9756),c=(r(7294),r(3905)),i=["components"],a={keywords:["ISCP","Smart Contracts","Architecture","Ethereum","Implementation"],description:"ISCP allows anyone to start their own chain and validators. Link to full technical description of the ISCP architecture.",image:"/img/logo/WASP_logo_dark.png"},s="ISCP Architecture",u={unversionedId:"guide/core_concepts/iscp-architecture",id:"guide/core_concepts/iscp-architecture",isDocsHomePage:!1,title:"ISCP Architecture",description:"ISCP allows anyone to start their own chain and validators. Link to full technical description of the ISCP architecture.",source:"@site/docs/guide/core_concepts/iscp-architecture.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/iscp-architecture",permalink:"/wasp/docs/guide/core_concepts/iscp-architecture",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/core_concepts/iscp-architecture.md",version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","Architecture","Ethereum","Implementation"],description:"ISCP allows anyone to start their own chain and validators. Link to full technical description of the ISCP architecture.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"ISCP",permalink:"/wasp/docs/guide/core_concepts/iscp"},next:{title:"Validators",permalink:"/wasp/docs/guide/core_concepts/validators"}},p=[{value:"TODO: Insert image of architecture (probably the image of page 7 of the architecture doc)",id:"todo-insert-image-of-architecture-probably-the-image-of-page-7-of-the-architecture-doc",children:[]}],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"iscp-architecture"},"ISCP Architecture"),(0,c.kt)("p",null,"With ISCP anyone can start a own chain and define the validators. Each chain has its own state\nwhere a state update (going from one block to the next) is hashed and published to the main tangle\nas well by moving a special state anchor on Layer 1. This makes ISCP a more complex implementation\nof smart contracts over say Ethereum as illustrated here:"),(0,c.kt)("h2",{id:"todo-insert-image-of-architecture-probably-the-image-of-page-7-of-the-architecture-doc"},"TODO: Insert image of architecture (probably the image of page 7 of the architecture doc)"),(0,c.kt)("p",null,"A full and extensive description of the IOTA Architecture describing all components in detail can be found in this\n",(0,c.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/raw/master/documentation/ISCP%20architecture%20description%20v3.pdf"},"technical description"),"."))}d.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,f=d["".concat(s,".").concat(h)]||d[h]||l[h]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);