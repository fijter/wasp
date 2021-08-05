(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[4332],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(c,".").concat(b)]||u[b]||m[b]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8334:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={},c="The `blob` contract",p={unversionedId:"contract_core/blob",id:"contract_core/blob",isDocsHomePage:!1,title:"The `blob` contract",description:"The blob contract is one of the core contracts on each ISCP chain.",source:"@site/docs/contract_core/blob.md",sourceDirName:"contract_core",slug:"/contract_core/blob",permalink:"/docs/contract_core/blob",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/contract_core/blob.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The `accounts` contract",permalink:"/docs/contract_core/accounts"},next:{title:"The `blocklog` contract",permalink:"/docs/contract_core/blocklog"}},s=[{value:"Entry points",id:"entry-points",children:[]},{value:"Views",id:"views",children:[]}],m={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-blob-contract"},"The ",(0,o.kt)("inlineCode",{parentName:"h1"},"blob")," contract"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"blob")," contract is one of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/contract_core/overview"},"core contracts")," on each ISCP chain."),(0,o.kt)("p",null,"The function of the ",(0,o.kt)("inlineCode",{parentName:"p"},"blob")," contract is to maintain an on-chain registry of\n",(0,o.kt)("em",{parentName:"p"},"blobs"),", a collections of arbitrary binary data. The ",(0,o.kt)("em",{parentName:"p"},"blobs")," are referenced from\nsmart contracts via their hashes."),(0,o.kt)("p",null,"A ",(0,o.kt)("em",{parentName:"p"},"blob")," is a collection of named pieces of arbitrary binary data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    <fieldName1> : <binaryChunk1>\n    <fieldName2> : <binaryChunk2>\n    ...\n    <fieldNameN> : <binaryChunkN>\n")),(0,o.kt)("p",null,"Here the ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldNameK")," is an arbitrary binary (a string) used as a name for the\nbinary data ",(0,o.kt)("inlineCode",{parentName:"p"},"binaryChunkK"),". Usually ",(0,o.kt)("inlineCode",{parentName:"p"},"fieldNameK")," is not long. Its interpretation\nis use-case specific."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"binaryChunkK")," may be of arbitrary size (practical limits apply, of course)."),(0,o.kt)("p",null,"The order of the field-chunk pairs is essential because the hash of the blob depends on the oder."),(0,o.kt)("p",null,"The hash of the ",(0,o.kt)("em",{parentName:"p"},"blob")," is equal to the hash of concatenation of all pieces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    blobHash = hash( fieldName1 || binaryChunk1 || fieldName2 || binaryChunk2 || ... || fieldNameN || binaryChunkN)\n")),(0,o.kt)("p",null,"There are two predefined field names which are interpreted by the VM while\ndeploying smart contracts from binary:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"fieldname")," = ",(0,o.kt)("inlineCode",{parentName:"li"},'"v"')," is interpreted as a ",(0,o.kt)("em",{parentName:"li"},"VM type")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"fieldname")," = ",(0,o.kt)("inlineCode",{parentName:"li"},'"p"')," is interpreted as a ",(0,o.kt)("em",{parentName:"li"},"smart contract program binary"))),(0,o.kt)("p",null,"If the field ",(0,o.kt)("inlineCode",{parentName:"p"},'"v"')," is equal to the string ",(0,o.kt)("inlineCode",{parentName:"p"},'"wasmtimevm"'),", the binary chunk\nof ",(0,o.kt)("inlineCode",{parentName:"p"},'"p""')," is interpreted as WebAssembly binary, loadable into the ",(0,o.kt)("em",{parentName:"p"},"Wasmtime"),"\nWasm VM."),(0,o.kt)("p",null,"Another use",(0,o.kt)("em",{parentName:"p"},"case for a _blob")," may be a full collection of self-described\nimmutable data of a smart contract program:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    "v" : VM type\n    "p" : smart contract program binary\n    "d" : data schema for data exchange between smart contract and outside sources and consumers\n    "s" : program sources in .zip format\n')),(0,o.kt)("h3",{id:"entry-points"},"Entry points"),(0,o.kt)("p",null,"There's only one full entry point which allows us to submit a ",(0,o.kt)("em",{parentName:"p"},"blob")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"blob")," contract:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"storeBlob"),". In the current implementation the data of the ",(0,o.kt)("em",{parentName:"li"},"blob")," is passed\nas parameters to the call of the entry point. It may be practically impossible\nto submit very large ",(0,o.kt)("em",{parentName:"li"},"blobs")," to the chain. In the future we plan to implement\na special mechanism which allows for the nodes to download big data chunks as\npart of the committee consensus.")),(0,o.kt)("h3",{id:"views"},"Views"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"getBlobInfo")," - Returns information about fields of the blob with specific\nhash and sizes of its data chunks:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    <fieldName1>: <size of the dataChunk1>\n    ...\n    <fieldNameN>: <size of the dataChunkN>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"getBlobField")," - Returns the data of the specified ",(0,o.kt)("em",{parentName:"p"},"blob")," field.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"listBlobs")," - Returns a list of pairs ",(0,o.kt)("inlineCode",{parentName:"p"},"blob hash"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"total size of chunks"),"\nfor all blobs in the registry."))))}u.isMDXComponent=!0}}]);