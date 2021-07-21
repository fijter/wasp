(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[3156],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),m=r,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||o;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5969:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={},c="ISCP accounts. Controlling token balances",l={unversionedId:"tutorial/12",id:"tutorial/12",isDocsHomePage:!1,title:"ISCP accounts. Controlling token balances",description:"ISCP provides secure, trustless transfers of digitized assets:",source:"@site/docs/tutorial/12.md",sourceDirName:"tutorial",slug:"/tutorial/12",permalink:"/wasp/docs/tutorial/12",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/tutorial/12.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sending tokens from smart contract to address",permalink:"/wasp/docs/tutorial/11"},next:{title:"Core smart contracts",permalink:"/wasp/docs/contract_types/overview"}},p=[{value:"Smart contract ID",id:"smart-contract-id",children:[]},{value:"Agent ID",id:"agent-id",children:[]},{value:"On-chain accounts",id:"on-chain-accounts",children:[]}],d={toc:p};function h(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iscp-accounts-controlling-token-balances"},"ISCP accounts. Controlling token balances"),(0,o.kt)("p",null,"ISCP provides secure, trustless transfers of digitized assets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"between smart contracts on the same or on different chains"),(0,o.kt)("li",{parentName:"ul"},"between smart contracts and L1 addresses on the UTXO Ledger.")),(0,o.kt)("p",null,"On the UTXO Ledger, just like with any DLT, we have ",(0,o.kt)("strong",{parentName:"p"},"trustless")," and ",(0,o.kt)("strong",{parentName:"p"},"atomic"),"\ntransfers of assets between addresses on the ledger. The tokens contained in an\naddress can be moved to another address by providing a valid signature using the\nprivate key which controls the source address."),(0,o.kt)("p",null,"In ISCP, the smart contracts which reside on chains are also owners of their\ntokens. Each smart contract can receive tokens that are transferred to it and\ncan send tokens that it controls to any other owner, be it another smart\ncontract, or an ordinary L1 address on the UTXO Ledger."),(0,o.kt)("p",null,"So, there are 2 types of entities which can control tokens:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"L1 addresses on the UTXO Ledger"),(0,o.kt)("li",{parentName:"ul"},"Smart contracts on ISCP chains")),(0,o.kt)("p",null,"There are 3 different types of trustless token transfers possible between those\nentities. Each type involves a different mechanism of transfer:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Between L1 address and smart contract."),(0,o.kt)("li",{parentName:"ul"},"Between smart contracts on the same chain."),(0,o.kt)("li",{parentName:"ul"},"Between smart contracts on different chains.")),(0,o.kt)("p",null,"To make the system homogenous, we introduce the following two concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Agent ID"),", which represents a token owner ID independent of the type of\nowning entity."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"On-chain account"),", which represents the unit of ownership on the chain.")),(0,o.kt)("h2",{id:"smart-contract-id"},"Smart contract ID"),(0,o.kt)("p",null,"Unlike with blockchain systems like Ethereum, we cannot simply represent the\nsmart contract by a blockchain address: ISCP can have many blockchains, not just\na single one. Each chain in ISCP is identified by its ",(0,o.kt)("em",{parentName:"p"},"chain ID"),". A chain can\ncontain many smart contracts on it. So, in ISCP each contract is identified by\nan identifier that consists of the chain ID, and the ",(0,o.kt)("em",{parentName:"p"},"hname")," of the smart\ncontract. In human-readable form, the smart ",(0,o.kt)("em",{parentName:"p"},"contract ID")," looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"RJNmyghMeM4Yr3UtBnric8mmBBwWdt9yVifetdpCQj7J::cebf5908\n")),(0,o.kt)("p",null,"The part before ",(0,o.kt)("inlineCode",{parentName:"p"},"::")," is the ",(0,o.kt)("em",{parentName:"p"},"chain ID"),", the part after ",(0,o.kt)("inlineCode",{parentName:"p"},"::")," is the ",(0,o.kt)("em",{parentName:"p"},"hname")," of\nthe smart contract."),(0,o.kt)("h2",{id:"agent-id"},"Agent ID"),(0,o.kt)("p",null,"The agent ID is an identifier which generalizes and represents one of the two\nagent types in one identifier: either an L1 address on the UTXO Ledger, or a\nsmart contract ID."),(0,o.kt)("p",null,"It is easy to determine which one is represented by the particular agent ID: an\nL1 address always has the ",(0,o.kt)("em",{parentName:"p"},"hname")," part all zero."),(0,o.kt)("p",null,"Address is a data type\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/master/packages/ledgerstate/address.go#L43"},"defined by Goshimmer"),"\n."),(0,o.kt)("p",null,"Agent ID is a data types\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/master/packages/iscp/agentid.go#L25"},"defined by Wasp"),"\n."),(0,o.kt)("h2",{id:"on-chain-accounts"},"On-chain accounts"),(0,o.kt)("p",null,"Each chain contains any number of accounts. Each account contains colored\ntokens: a collection of ",(0,o.kt)("inlineCode",{parentName:"p"},"color: balance")," pairs."),(0,o.kt)("p",null,"Each account on the chain is controlled by some ",(0,o.kt)("inlineCode",{parentName:"p"},"agent ID"),". It means that tokens\ncontained in the account can only be moved by the entity behind that agent ID:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("em",{parentName:"li"},"agent ID")," represents an address on the UTXO Ledger, the tokens can\nonly be moved by a request signed by the private key of that address."),(0,o.kt)("li",{parentName:"ul"},"If the ",(0,o.kt)("em",{parentName:"li"},"agent ID")," represents a smart contract, the tokens can only be moved by\nthat smart contract. Note that the smart contract may reside on the same chain\nor on another chain.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8884).Z})),(0,o.kt)("p",null,"The picture illustrates an example situation. There are two chains deployed,\nwith respective IDs ",(0,o.kt)("inlineCode",{parentName:"p"},"Pmc7iH8b..")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Klm314noP8.."),". The pink chain ",(0,o.kt)("inlineCode",{parentName:"p"},"Pmc7iH8b.."),"\nhas two smart contracts on it (",(0,o.kt)("inlineCode",{parentName:"p"},"3037")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"2225"),") and the blue chain\n",(0,o.kt)("inlineCode",{parentName:"p"},"Klm314noP8..")," has one smart contract (",(0,o.kt)("inlineCode",{parentName:"p"},"7003"),")."),(0,o.kt)("p",null,"The UTXO Ledger has 1 address ",(0,o.kt)("inlineCode",{parentName:"p"},"P6ZxYXA2.."),". The address ",(0,o.kt)("inlineCode",{parentName:"p"},"P6ZxYXA2..")," controls\nsolo.Saldo iotas and 42 red tokens on the UTXO Ledger. The same address also controls\n42 iotas on the pink chain and 8 green tokens on the blue chain. So, the owner\nof the private key behind the address controls 3 different accounts: 1 on the L1\nUTXO Ledger and 2 accounts on 2 different chains on L2."),(0,o.kt)("p",null,"At the same time, smart contract ",(0,o.kt)("inlineCode",{parentName:"p"},"7003")," on the blue chain has 5 iotas on its\nnative chain and controls 11 iotas on the pink chain."),(0,o.kt)("p",null,"Note that \u201ccontrol over account\u201d means the entity which has the private key can\nmove funds from it. For an ordinary address it means the private key of the\naddress. For a smart contract it means the private keys of the committee which\nruns the chain (the smart contract program can only be executed with those\nprivate keys)."))}h.isMDXComponent=!0},8884:function(e,t,n){"use strict";t.Z=n.p+"assets/images/accounts-8cd3b45af8331f061b4583acb528d2d4.png"}}]);