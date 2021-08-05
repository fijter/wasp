(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[3727],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9278:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),s=["components"],o={},c="Wasp Publisher",p={unversionedId:"misc/publisher",id:"misc/publisher",isDocsHomePage:!1,title:"Wasp Publisher",description:"Each Wasp node publishes important events via a Nanomsg message stream",source:"@site/docs/misc/publisher.md",sourceDirName:"misc",slug:"/misc/publisher",permalink:"/wasp/docs/misc/publisher",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/misc/publisher.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"On-chain accounts",permalink:"/wasp/docs/misc/accounts"}},l=[],m={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wasp-publisher"},"Wasp Publisher"),(0,i.kt)("p",null,"Each Wasp node publishes important events via a ",(0,i.kt)("a",{parentName:"p",href:"https://nanomsg.org/"},"Nanomsg")," message stream\n(just like ZMQ is used in IRI. Possibly in the future ZMQ and MQTT publishers will be supported too)."),(0,i.kt)("p",null,"Any Nanomsg client can subscribe to the message stream. In Go you can use the\n",(0,i.kt)("inlineCode",{parentName:"p"},"packages/subscribe")," package provided in Wasp for this."),(0,i.kt)("p",null,"The Publisher port can be configured in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.json")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"nanomsg.port"),"\nsetting."),(0,i.kt)("p",null,"Message format is simply a string consisting of a space separated list of tokens; and the first token\nis the message type. Below is a list of all message types published by Wasp. (You can search for\n",(0,i.kt)("inlineCode",{parentName:"p"},"publisher.Publish")," in the code to see the exact places where each message is published.)"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Format"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain record has been saved in the registry"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"chainrec <chain ID> <color>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain committee has been activated"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"active_committee <chain ID>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Chain committee dismissed"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"dismissed_committee <chain ID>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"A new SC request reached the node"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"request_in <chain ID> <request tx ID> <request block index>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"SC request has been processed (i.e. corresponding state update was confirmed)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"request_out <chain ID> <request tx ID> <request block index> <state index> <seq number in the block> <block size>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"State transition (new state has been committed to DB)"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"state <chain ID> <state index> <block size> <state tx ID> <state hash> <timestamp>"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Event generated by a SC"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vmmsg <chain ID> <contract hname> ..."))))))}u.isMDXComponent=!0}}]);