(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[4542],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8296:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],s={},l="UTXO Ledger and Digital Assets",c={unversionedId:"misc/utxo",id:"misc/utxo",isDocsHomePage:!1,title:"UTXO Ledger and Digital Assets",description:"(we use tokens and digital assets as synonyms)",source:"@site/docs/misc/utxo.md",sourceDirName:"misc",slug:"/misc/utxo",permalink:"/wasp/docs/misc/utxo",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/misc/utxo.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"General scheme of invoking an entry point",permalink:"/wasp/docs/misc/invoking"},next:{title:"Core types",permalink:"/wasp/docs/misc/coretypes"}},p=[],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"utxo-ledger-and-digital-assets"},"UTXO Ledger and Digital Assets"),(0,r.kt)("p",null,"(we use ",(0,r.kt)("inlineCode",{parentName:"p"},"tokens")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"digital assets")," as synonyms)"),(0,r.kt)("p",null,"It is not our goal here to describe the UTXO Ledger in detail, however, in order\nto follow other articles more easily we will introduce the main concepts of\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"UTXO Ledger")," here."),(0,r.kt)("p",null,"Goshimmer implements a ",(0,r.kt)("em",{parentName:"p"},"UTXO Ledger")," with ",(0,r.kt)("em",{parentName:"p"},"colored balances"),"."),(0,r.kt)("p",null,"UTXO stands for ",(0,r.kt)("inlineCode",{parentName:"p"},"Unspent Transaction (TX) Output"),". ",(0,r.kt)("em",{parentName:"p"},"Colored balances")," means that\ntokens in the ledger have a 32-byte attribute called a ",(0,r.kt)("em",{parentName:"p"},"color"),". The default\ncolor is ",(0,r.kt)("em",{parentName:"p"},"iota-color")," which corresponds to normal iotas. In the genesis of the\nIOTA ledger all tokens were assigned ",(0,r.kt)("em",{parentName:"p"},"iota-color"),". The number of all tokens on\nthe ledger is constant, no matter the ",(0,r.kt)("em",{parentName:"p"},"color"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"UTXO Ledger")," contains unspent transaction outputs (UTXOs) rather than just\naddresses and balances of tokens, like in the current IOTA 1.0 and some other\nledgers, like Ethereum. Each unspent output of a transaction has the following\nform:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Address: {colorCode1: balance1, colorCode2: balance2, ...}. \n")),(0,r.kt)("p",null,"Here ",(0,r.kt)("em",{parentName:"p"},"colorCodeN")," is the ",(0,r.kt)("em",{parentName:"p"},"color")," of the token, and ",(0,r.kt)("em",{parentName:"p"},"balanceM")," is the number of\ntokens of that ",(0,r.kt)("em",{parentName:"p"},"color")," in the output."),(0,r.kt)("p",null,"Each UTXO is always contained in some transaction, i.e. it is an ",(0,r.kt)("em",{parentName:"p"},"output of some\ntransaction"),". So, each output in the ledger is always booked together with the\nID (the hash) of its containing transaction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TxID: Address: {colorCode1: balance1, colorCode2: balance2, ...}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"address balance")," is a collection of UTXOs with the same address. So,\ncompared to the account-based ledger, the address balance in an UTXO ledger\nbecomes a rather complicated thing: it contains a 2D collection of outputs: each\noutput contains the transaction ID of the output and token balances for each\ncolor."),(0,r.kt)("p",null,"We transfer tokens by spending UTXOs, i.e. by posting a transaction with those\noutputs. The spending transaction takes UTXOs as inputs and produces new UTXOs.\nIt must contain valid signatures corresponding to the addresses of its inputs."),(0,r.kt)("h4",{id:"value-transaction-validation-rules"},"Value transaction validation rules"),(0,r.kt)("p",null,"Let\u2019s say C is a non-iota color with positive balance in outputs. The general\nvalidation rules of value transactions are the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The number of tokens of all colors in inputs and outputs in a transaction\nmust be equal (the number of tokens in the ledger is constant)"),(0,r.kt)("li",{parentName:"ol"},"The total of tokens with color C in outputs must be equal or less than the\ntotal of C tokens in inputs. In the ",(0,r.kt)("em",{parentName:"li"},"strictly less")," case we say some ",(0,r.kt)("em",{parentName:"li"},"tokens\nof color C are destroyed (uncolored)"),"."),(0,r.kt)("li",{parentName:"ol"},"Some balances in outputs can contain the special color code ",(0,r.kt)("inlineCode",{parentName:"li"},"new-color"),". This\ncode means that some tokens in the input acquire the color of the ",(0,r.kt)("em",{parentName:"li"},"hash of\nthe containing transaction"),". In the new UTXOs they will be booked with the\nhash of that transaction as their color attribute. This is called\n",(0,r.kt)("em",{parentName:"li"},"minting")," of new digital assets (colored balance, colored supply, tokens)"),(0,r.kt)("li",{parentName:"ol"},"The number of tokens with ",(0,r.kt)("inlineCode",{parentName:"li"},"iota-color")," in the outputs can be smaller or\nlarger than iotas in inputs, provided condition (1) is satisfied.")),(0,r.kt)("p",null,'The ISCP relies heavily on the logic of the tokens in the UTXO Ledger. In later\ndocumentation we will describe exactly how. Meanwhile, to simplify our thinking,\nwe can represent a 2D address balance as its 1-dimensional "projection to the\ncolor axis": a collection of sub balances per color, like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"color1: balance1\ncolor2: balance2\n...\n")),(0,r.kt)("p",null,"You can find the smart contract address balance displayed in this form in the\ndashboard of the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract example as well as in other\nPoC smart contracts."))}d.isMDXComponent=!0}}]);