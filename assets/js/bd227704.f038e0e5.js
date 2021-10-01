(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[6020],{5723:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],c={},s="Exploring IOTA Smart Contracts",l={unversionedId:"tutorial/readme",id:"tutorial/readme",isDocsHomePage:!1,title:"Exploring IOTA Smart Contracts",description:"This document is an introductory tutorial of the IOTA Smart Contract Platform",source:"@site/docs/tutorial/readme.md",sourceDirName:"tutorial",slug:"/tutorial/readme",permalink:"/wasp/docs/tutorial/readme",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/tutorial/readme.md",version:"current",frontMatter:{}},u=[],p={toc:u};function d(t){var e=t.components,r=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"exploring-iota-smart-contracts"},"Exploring IOTA Smart Contracts"),(0,a.kt)("p",null,"This document is an introductory tutorial of the IOTA Smart Contract Platform\n(ISCP) for developers."),(0,a.kt)("p",null,"The level of this document is technical. Its target audience is software\nengineers who want to understand the ISCP, and the direction it is taking, in\norder to develop their own dApps and/or contribute to the development of the\nISCP and Wasp nodes."),(0,a.kt)("p",null,"There are two ways of seeing the same thing, a smart contract: as a program of a state machine and as a distributed,\nfault-tolerant and decentralized system. Both views are correct."),(0,a.kt)("p",null,"In this tutorial we look at the smart contract as a deterministic program, which read and updates its state, the ledger.\nWe will not discuss how to run smart contract on a chain, which, in turn, is run by a distributed network validator nodes.\nThe latter is transparent to the logic of the smart contract."),(0,a.kt)("p",null,"The approach in this tutorial is to introduce main concepts through writing\nunit tests for several example smart contracts. We use a Go testing package\ncodenamed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/packages/solo"},"Solo")," in all examples of the\ntutorial."),(0,a.kt)("p",null,"Knowledge of Go programming and basic knowledge of Rust programming are prerequisites."))}d.isMDXComponent=!0},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),l=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:e},u),{},{components:r})):n.createElement(f,i({ref:e},u))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);