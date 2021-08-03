(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[772],{6803:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={},l="The `eventlog` contract",s={unversionedId:"contract_core/eventlog",id:"contract_core/eventlog",isDocsHomePage:!1,title:"The `eventlog` contract",description:"The eventlog contract is one of the core contracts on each ISCP",source:"@site/docs/contract_core/eventlog.md",sourceDirName:"contract_core",slug:"/contract_core/eventlog",permalink:"/docs/contract_core/eventlog",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/contract_core/eventlog.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The `blocklog` contract",permalink:"/docs/contract_core/blocklog"},next:{title:"How to run a Wasp node on Pollen",permalink:"/docs/misc/runwasp"}},p=[{value:"Entry points",id:"entry-points",children:[]},{value:"Views",id:"views",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-eventlog-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"eventlog")," contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"eventlog")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/contract_core/overview"},"core contracts")," on each ISCP\nchain."),(0,a.kt)("p",null,"The function of the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventlog")," contract is to record an immutable on-chain log\nof events."),(0,a.kt)("p",null,"Each event is emitted by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Event()")," sandbox call from the smart contract.\nThis is the only way to create ",(0,a.kt)("inlineCode",{parentName:"p"},"eventlog")," records and publish events. VM core\nlogic emits event records when deploying a contract, settling the request,\nconfirming a block (state transition), and on other occasions."),(0,a.kt)("p",null,"An event contains arbitrary data, typically a string."),(0,a.kt)("p",null,"Emitting an event means the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Recording the event data into the ",(0,a.kt)("inlineCode",{parentName:"li"},"eventlog")," core contract under the emitting\ncontract's ",(0,a.kt)("inlineCode",{parentName:"li"},"hname")," and timestamped with the current timestamp of the contract."),(0,a.kt)("li",{parentName:"ul"},"Logging the event on the node with sandbox's ",(0,a.kt)("inlineCode",{parentName:"li"},"Log().Info()")),(0,a.kt)("li",{parentName:"ul"},"Sending the event over the ",(0,a.kt)("inlineCode",{parentName:"li"},"nanomsg")," publisher to subscribers of the node\nevents (in the future other publishers, like ",(0,a.kt)("inlineCode",{parentName:"li"},"zmq")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"mqtt"),") will be\nsupported")),(0,a.kt)("h3",{id:"entry-points"},"Entry points"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"eventlog")," core contract does not contain any entry points which modify its\nstate."),(0,a.kt)("p",null,"The only way to modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"eventlog")," state is by adding an event record from\nanother smart contract by calling sandbox method ",(0,a.kt)("inlineCode",{parentName:"p"},"Event()"),"."),(0,a.kt)("h3",{id:"views"},"Views"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"getNumRecords")," - Returns the total number of records recorded by the smart\ncontract with specified ",(0,a.kt)("inlineCode",{parentName:"p"},"hname")," (parameter)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"getRecords")," - Queries log records according to filter criteria specified in\nthe parameters. The records are returned in descending order of timestamp,\ni.e. the latest is returned first. The filter parameters:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hname")," of a contract. Mandatory"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from timestamp")," timestamp in Unix nanoseconds. Default is 0"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"to timestamp")," timestamp in Unix nanoseconds. Default is ",(0,a.kt)("inlineCode",{parentName:"li"},"now")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max records")," maximum number of records to return. Default is 50")))))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);