(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[1372],{9082:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],l={keywords:["ISCP","Smart Contracts","Core Concepts","Table of Contents"],description:"IOTA Smart Contract Protocol Documentation Overview",image:"/img/logo/WASP_logo_dark.png"},c="ISCP Documentation",s={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"ISCP Documentation",description:"IOTA Smart Contract Protocol Documentation Overview",source:"@site/docs/overview.md",sourceDirName:".",slug:"/overview",permalink:"/wasp/docs/overview",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/overview.md",version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","Core Concepts","Table of Contents"],description:"IOTA Smart Contract Protocol Documentation Overview",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",next:{title:"Smart Contracts",permalink:"/wasp/docs/guide/core_concepts/smart-contracts"}},u=[{value:"ISCP Core Concepts",id:"iscp-core-concepts",children:[]},{value:"Running ISCP Chains and Nodes",id:"running-iscp-chains-and-nodes",children:[]},{value:"Rust/WASM based smart contracts",id:"rustwasm-based-smart-contracts",children:[]},{value:"EVM based smart contracts",id:"evm-based-smart-contracts",children:[]}],p={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iscp-documentation"},"ISCP Documentation"),(0,o.kt)("p",null,"Goal of the documentation: Give a higher level overview of what ISCP is and how it works for the average developer building applications for ISCP or looking to run a chain/node. Doesn\u2019t need to contain every explicit detail but should contain everything you need to know to set up a smart contract chain and run and interact with smart contracts."),(0,o.kt)("h2",{id:"iscp-core-concepts"},"ISCP Core Concepts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/smart-contracts"},"What Are Smart Contracts?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/iscp"},"What is ISCP?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/iscp-architecture"},"ISCP Architecture Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/validators"},"Committees and Validators")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/consensus"},"Consensus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/states"},"State, Transitions and State Anchoring")),(0,o.kt)("li",{parentName:"ul"},"Accounts",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/accounts/how-accounts-work"},"How Accounts Work")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain"},"How to Deposit to a Chain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"},"How to Withdraw From a Chain")))),(0,o.kt)("li",{parentName:"ul"},"Interacting With Smart Contracts",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/smartcontract-interaction/on-ledger-requests"},"On-ledger Requests")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/smartcontract-interaction/on-ledger-requests"},"Off-ledger Requests")))),(0,o.kt)("li",{parentName:"ul"},"Types of VMs/Languages",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/vm-types/iscp-vm"},"How ISCP Works As a Language/VM Agnostic Platform")),(0,o.kt)("li",{parentName:"ul"},"Rust/Wasm Based Smart Contracts",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/vm-types/rust-wasm"},"Why and What Does It Look Like?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/vm-types/rust-wasm"},"Pros and Cons")))),(0,o.kt)("li",{parentName:"ul"},"Solidity/EVM Based Smart Contracts",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/vm-types/evm"},"Why and What Does It Look Like?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guide/core_concepts/vm-types/evm"},"Pros and Cons"))))))),(0,o.kt)("h2",{id:"running-iscp-chains-and-nodes"},"Running ISCP Chains and Nodes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setting up a chain",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Requirements"),(0,o.kt)("li",{parentName:"ul"},"Configuration"),(0,o.kt)("li",{parentName:"ul"},"Adding nodes/validators"),(0,o.kt)("li",{parentName:"ul"},"Testing if it works"))),(0,o.kt)("li",{parentName:"ul"},"Running a node",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Requirements"),(0,o.kt)("li",{parentName:"ul"},"Configuration"),(0,o.kt)("li",{parentName:"ul"},"Dashboard"),(0,o.kt)("li",{parentName:"ul"},"Testing if works"))),(0,o.kt)("li",{parentName:"ul"},"Chain management",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Administrative tasks")))),(0,o.kt)("h2",{id:"rustwasm-based-smart-contracts"},"Rust/WASM based smart contracts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduction"),(0,o.kt)("li",{parentName:"ul"},"Smart contract example"),(0,o.kt)("li",{parentName:"ul"},"Deploying a smart contract"),(0,o.kt)("li",{parentName:"ul"},"Tooling",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Scaffolding tool"),(0,o.kt)("li",{parentName:"ul"},"Testing with Solo"),(0,o.kt)("li",{parentName:"ul"},"CLI"))),(0,o.kt)("li",{parentName:"ul"},"Reference",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Available sandbox methods"))),(0,o.kt)("li",{parentName:"ul"},"Examples/Tutorials",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Hello World"),(0,o.kt)("li",{parentName:"ul"},"Calling a view function"),(0,o.kt)("li",{parentName:"ul"},"Sending a request to a smart contract function"),(0,o.kt)("li",{parentName:"ul"},"Interacting with layer 1 assets/Account contract"),(0,o.kt)("li",{parentName:"ul"},"Cross chain communication")))),(0,o.kt)("h2",{id:"evm-based-smart-contracts"},"EVM based smart contracts"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Introduction"),(0,o.kt)("li",{parentName:"ul"},"Limitations",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Limited by EVM, no layer 1 or cross-chain interaction yet"))),(0,o.kt)("li",{parentName:"ul"},"Smart contract example"),(0,o.kt)("li",{parentName:"ul"},"Deploying a smart contract",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Core concept of how EVM is implemented in ISCP"),(0,o.kt)("li",{parentName:"ul"},"Why you should use existing EVM tooling"))),(0,o.kt)("li",{parentName:"ul"},"Tooling",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CLI"),(0,o.kt)("li",{parentName:"ul"},"Metamask configuration"),(0,o.kt)("li",{parentName:"ul"},"Hardhat configuration"),(0,o.kt)("li",{parentName:"ul"},"Redux configuration"),(0,o.kt)("li",{parentName:"ul"},"Web3/Ethers.js setup"))),(0,o.kt)("li",{parentName:"ul"},"External EVM references"),(0,o.kt)("li",{parentName:"ul"},"Examples/Tutorials")))}m.isMDXComponent=!0},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,k=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);