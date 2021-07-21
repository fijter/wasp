(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[2437],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4434:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={},c="Installation (TBD)",s={unversionedId:"misc/install",id:"misc/install",isDocsHomePage:!1,title:"Installation (TBD)",description:"Solo tests are written in Go. The tutorial assumes you are familiar with and",source:"@site/docs/misc/install.md",sourceDirName:"misc",slug:"/misc/install",permalink:"/wasp/docs/misc/install",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/misc/install.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using `wasp-cli` to deploy a chain and a contract",permalink:"/wasp/docs/misc/deploy"},next:{title:"General scheme of invoking an entry point",permalink:"/wasp/docs/misc/invoking"}},p=[],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-tbd"},"Installation (TBD)"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Solo")," tests are written in Go. The tutorial assumes you are familiar with and\nhave installed the Go 1.16 environment. The ",(0,a.kt)("em",{parentName:"p"},"Solo")," package can be installed by\ncloning the Wasp repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/iotaledger/wasp.git\n")),(0,a.kt)("p",null,"Note: the Solo package can be installed separately using this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get github.com/iotaledger/wasp/packages/solo\n")),(0,a.kt)("p",null,"In Windows, use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"go get -buildmode=exe github.com/iotaledger/wasp/packages/solo\n")),(0,a.kt)("p",null,"To run Rust/Wasm smart contracts you will also need ",(0,a.kt)("inlineCode",{parentName:"p"},"Rust")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wasm-pack"),"\ninstalled. You can use any development environment for Rust and Go. The GoLand\nenvironment with the Rust plugin is a good combination."),(0,a.kt)("p",null,"You can find example implementations of smart contracts (including source code\nand tests) in the Wasp repository, in the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/rust"},"contracts/rust folder"),"."))}m.isMDXComponent=!0}}]);