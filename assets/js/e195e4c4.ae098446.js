(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[8657],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,f=h["".concat(l,".").concat(u)]||h[u]||m[u]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6440:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],c={},l="The `root` contract",p={unversionedId:"contract_core/root",id:"contract_core/root",isDocsHomePage:!1,title:"The `root` contract",description:"The root contract is one of the core contracts on each ISCP",source:"@site/docs/contract_core/root.md",sourceDirName:"contract_core",slug:"/contract_core/root",permalink:"/wasp/docs/contract_core/root",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/contract_core/root.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core smart contracts",permalink:"/wasp/docs/contract_core/overview"},next:{title:"The `_default` contract",permalink:"/wasp/docs/contract_core/default"}},s=[{value:"Entry points",id:"entry-points",children:[]},{value:"Views",id:"views",children:[]}],m={toc:s};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-root-contract"},"The ",(0,o.kt)("inlineCode",{parentName:"h1"},"root")," contract"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," contract is one of the ",(0,o.kt)("a",{parentName:"p",href:"/wasp/docs/contract_core/overview"},"core contracts")," on each ISCP\nchain."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," contract provides the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It is the first smart contract deployed on the chain. It initializes the state\nof the chain. Part of the state initialization is deployment of all other core\ncontracts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It functions as a smart contract factory for the chain: it deploys other smart\ncontracts and maintains an on-chain registry of smart contracts.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It manages chain ownership. The ",(0,o.kt)("em",{parentName:"p"},"chain owner")," is a special ",(0,o.kt)("inlineCode",{parentName:"p"},"agentID"),"\n(L1 address or another smart contract). Initially the deployer of the chain\nbecomes the ",(0,o.kt)("em",{parentName:"p"},"chain owner"),". Certain functions on the chain can only be\nperformed by the ",(0,o.kt)("em",{parentName:"p"},"chain owner"),". That includes changing the chain ownership\nitself.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It manages default fees for the chain. There are two types of default fees:\n",(0,o.kt)("em",{parentName:"p"},"chain owner fees")," and ",(0,o.kt)("em",{parentName:"p"},"validator fees"),". Initially both are set to 0."))),(0,o.kt)("h3",{id:"entry-points"},"Entry points"),(0,o.kt)("p",null,"The following are the functions / entry points of the ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," contract. Some of\nthem may require authorisation, i.e. can only be invoked by a specific caller,\nfor example the ",(0,o.kt)("em",{parentName:"p"},"chain owner"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"init")," - The constructor. Automatically called immediately after deployment,\nas the first call."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Initializes base values of the chain according to parameters: chainID,\nchain color, chain address"),(0,o.kt)("li",{parentName:"ul"},"sets ",(0,o.kt)("em",{parentName:"li"},"chain owner")," to the caller"),(0,o.kt)("li",{parentName:"ul"},"sets chain fee color (default is ",(0,o.kt)("em",{parentName:"li"},"IOTA color"),")"),(0,o.kt)("li",{parentName:"ul"},"deploys all 4 core contracts"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"claimChainOwnership")," - The new chain owner can claim ownership if it was\ndelegated. Chain ownership changes.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"delegateChainOwnership")," - Prepares a successor (an agent ID) to become the\nowner of the chain. The ownership is not transferred until claimed.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"deployContract")," - Deploys a smart contract on the chain, if the caller has\ndeploy permission. Parameters:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"hash of the ",(0,o.kt)("em",{parentName:"li"},"blob")," with the binary of the program and VM type"),(0,o.kt)("li",{parentName:"ul"},"name of the instance. This is later used in the hashed form of ",(0,o.kt)("em",{parentName:"li"},"hname")),(0,o.kt)("li",{parentName:"ul"},"description of the instance"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"grantDeployPermission")," - Chain owner grants deploy permission to an agent\nID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"revokeDeployPermission")," - Chain owner revokes deploy permission from an\nagent ID")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"setContractFee")," - Sets fee values for a particular smart contract. There\nare two values for each smart contract: ",(0,o.kt)("inlineCode",{parentName:"p"},"validatorFee")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainOwnerFee"),". If\na value is 0, it means the chain's default fee will be taken.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"setDefaultFee")," - Sets chain-wide default fee values. There are two of\nthem: ",(0,o.kt)("inlineCode",{parentName:"p"},"validatorFee")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainOwnerFee"),". Initially both are 0."))),(0,o.kt)("h3",{id:"views"},"Views"),(0,o.kt)("p",null,"Can be called directly. Calling a view does not modify the state of the smart\ncontract."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"findContract")," - Returns the data of the provided smart contract (if it\nexists) in marshalled binary form.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"getChainInfo")," - Returns main values of the chain, such as chain ID, chain\nowner ID, and description. It also returns a registry of all smart contracts\nin marshalled binary form")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"getFeeInfo")," - Returns fee information for the particular smart\ncontract: ",(0,o.kt)("inlineCode",{parentName:"p"},"validatorFee")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"chainOwnerFee"),". It takes into account default\nvalues if specific values for the smart contract are not set."))))}h.isMDXComponent=!0}}]);