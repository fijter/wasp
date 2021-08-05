(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[660],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=l(a),p=o,u=m["".concat(c,".").concat(p)]||m[p]||h[p]||r;return a?n.createElement(u,s(s({ref:t},d),{},{components:a})):n.createElement(u,s({ref:t},d))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2836:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),s=["components"],i={},c=void 0,l={unversionedId:"in_progress/todo/dwf",id:"in_progress/todo/dwf",isDocsHomePage:!1,title:"dwf",description:"Obsolete. To be adjusted to the new version",source:"@site/docs/in_progress/todo/dwf.md",sourceDirName:"in_progress/todo",slug:"/in_progress/todo/dwf",permalink:"/docs/in_progress/todo/dwf",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/in_progress/todo/dwf.md",version:"current",frontMatter:{}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"The state",id:"the-state",children:[]},{value:"The address and program of smart contract",id:"the-address-and-program-of-smart-contract",children:[]},{value:"Balance of the smart contract account",id:"balance-of-the-smart-contract-account",children:[]},{value:"Requests to the smart contract",id:"requests-to-the-smart-contract",children:[]},{value:"Processing the request",id:"processing-the-request",children:[]},{value:"The state: more details",id:"the-state-more-details",children:[{value:"Conclusion",id:"conclusion",children:[]}]}],h={toc:d};function m(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Obsolete. To be adjusted to the new version")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"main-concepts-with-donatewithfeedback"},"Main concepts with ",(0,r.kt)("em",{parentName:"h1"},"DonateWithFeedback")),(0,r.kt)("p",null,"We will explain main concepts of IOTA smart contracts using deployed PoC smart contract called ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback"),".\nWe wrote this article as a part of the ",(0,r.kt)("em",{parentName:"p"},"PoC release of the Wasp"),".\nThe ",(0,r.kt)("a",{parentName:"p",href:"http://waspdev01.iota.cafe:10000"},"demo dashboard"),"\nof the instance of the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," SC and ",(0,r.kt)("em",{parentName:"p"},"wwallet"),",\na smart contract wallet, can be used as a visual aid for the text below. "),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," is the simplest of all 3 hard coded smart contracts, included into the PoC release of the Wasp.\nYou may see it as a \u201cHello, world\u201d example. We will go along all main concepts of the IOTA Smart Contracts using\nit as an example."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," is a dApp which performs a very common function: it handles an IOTA donation\naddress and user\u2019s feedback log for the owner of a web page.  "),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(You may want to follow the Go ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/iotaledger/wasp"},"code of this smart contract TODO"),"\nwhich currently is embedded right into the Wasp. This approach is not typical for the smart contracts\nin general, however it is very convenient for testing the protocol.\nIn the future all smart contract programs will be run on wasm VM)"),"   "),(0,r.kt)("p",null,"The common practice is to display the donation address on a web page for anyone wanting to send us a donation,\nfor example with their Trinity wallet.\nWhat if we also want each donor to attach some feedback/comment text to the donation? For example,\n\u201cHere I send you 2 MIOTA because I like your site\u201d?\nTo support that possibility, we would need some kind of application, or an extension of the existing IOTA wallet\nwith a database for comment messages behind and so on (of course, there is more than one way to do that, including\nembedding the text right into the transaction)."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract takes responsibility to handle both the donation\naccount (the address) and the log of feedback messages. The log of feedback messages will be kept in the\nimmutable storage of the smart contract\u2019s ledger (the state).\nSome may say it is an overkill, and yes, it may be a bit artificial, but why not?\nOnce the smart contract is fee-less anyway? Do not try this with Ethereum \ud83d\ude0f."),(0,r.kt)("h2",{id:"the-state"},"The state"),(0,r.kt)("p",null,"Let\u2019s open a ",(0,r.kt)("a",{parentName:"p",href:"http://waspdev01.iota.cafe:10000/dwf"},"dashboard")," of the demo instance of ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback"),".\nThe dashboard displays the ",(0,r.kt)("em",{parentName:"p"},"state of the smart contract")," instance, i.e. what is contained in its tamper proof storage. "),(0,r.kt)("p",null,"The following are the main properties of any smart contract. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"smart contract address (",(0,r.kt)("em",{parentName:"li"},"SC address"),")"),(0,r.kt)("li",{parentName:"ul"},"Program hash"),(0,r.kt)("li",{parentName:"ul"},"smart contract color (",(0,r.kt)("em",{parentName:"li"},"Color"),")"),(0,r.kt)("li",{parentName:"ul"},"description")),(0,r.kt)("p",null,"It is displayed in the section ",(0,r.kt)("em",{parentName:"p"},"Smart contract details")," of the demo dashboard.\nThese values of the state normally do not change throughout the life of the smart contract."),(0,r.kt)("p",null,"The state of any smart contract consists of two parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("em",{parentName:"li"},"Balance")," part displays balances of digital assets contained in the smart contract account address.\nIt is an ",(0,r.kt)("strong",{parentName:"li"},"on-tangle")," part of the state."),(0,r.kt)("li",{parentName:"ul"},"The collection of ",(0,r.kt)("em",{parentName:"li"},"key-value pairs")," which can be interpreted as variables and their values.\nIt is an ",(0,r.kt)("strong",{parentName:"li"},"off-tangle")," part of the state. In general, it can contain any data of arbitrary size.\nIn the ",(0,r.kt)("em",{parentName:"li"},"DonateWithFeedback")," smart contract the dashboard displays the generic data of the state in\nan SC-specific and user-friendly format:\nthe statistics of donations and list of feedback messages stored in the log. ")),(0,r.kt)("p",null,"(note that we use ",(0,r.kt)("a",{parentName:"p",href:"https://en.bitcoinwiki.org/wiki/Base58"},"Base58 encoding")," for binary data of fixed size, like\ntransaction hashes and addresses displayed on the dashboard). "),(0,r.kt)("h2",{id:"the-address-and-program-of-smart-contract"},"The address and program of smart contract"),(0,r.kt)("p",null,"Naturally, we can have many instances of the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract. Each instance will correspond to\na specific donation address and its owner. The demo dashboard is displaying the state of one particular instance. "),(0,r.kt)("p",null,"Two things define instance of any smart contract:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Program code"),", represented by the 32-byte long ",(0,r.kt)("em",{parentName:"li"},"program hash")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Smart contract address"),", an address on the Tangle")),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"program hash")," is a globally unique identifier of the program.\nThe program itself encodes algorithms of the smart contract in some language. In IOTA smart contracts we will use\nWebAssembly (a.k.a. ",(0,r.kt)("em",{parentName:"p"},"Wasm"),") as the binary format of the smart contract program.\nThe hash of Wasm binary ensures the program code cannot be modified without changing the hash."),(0,r.kt)("p",null,"For the hard coded PoC smart contract such as ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback"),", the program hash is just\nan ID statically embedded into the Wasp code.\nFor the builtin program of ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," program hash is equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"5ydEfDeAJZX6dh6Fy7tMoHcDeh42gENeqVDASGWuD64X"),".\nFor a WebAssembly smart contract code it will be the hash of its binary code. "),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"smart contract address")," is a 33-byte long address as it is implemented in Goshimmer,\nfor example ",(0,r.kt)("inlineCode",{parentName:"p"},"pxsUocho2dJQ8EX5PxHUHY7e4qfVmcu7K4dGRrrFrwaG"),"."),(0,r.kt)("p",null,"The SC address is a global unique identifier of the smart contract instance:\nthe smart contract can always be located on the Tangle by its address.\nThe address scheme we use in ISCP is a BLS address, a kind of multi-signature address.\nTokens, contained in the address, can be moved only with the corresponding private keys. "),(0,r.kt)("p",null,"The smart contract program always \u201chides\u201d behind the smart contract address, which\nis otherwise just a normal address. The ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," program is attached to each instance of\n",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," program. "),(0,r.kt)("p",null,"Unlike ordinary addresses on the Tangle, we can send ",(0,r.kt)("em",{parentName:"p"},"requests")," to the SC address, not just tokens.\nThe attached program processes requests sent to it and updates the state of\nthe smart contract. The state can be updated only if the processor which runs the program\nhas access to the corresponding private keys."),(0,r.kt)("p",null,"Whenever we ",(0,r.kt)("a",{parentName:"p",href:"/docs/in_progress/todo/deploy"},"deploy")," a smart contract instance on the Tangle you have to specify its program hash, among other things.\nWasp node will find the program code by the hash and will link the program with the instance. "),(0,r.kt)("p",null,"Just like the usual ",(0,r.kt)("inlineCode",{parentName:"p"},"Ed25519")," address is generated from its private key,\nthe smart contract address is generated during the deployment process of the smart contract. "),(0,r.kt)("p",null,"In ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," we use the smart contract address as a donation address to display on the web page.\nWe use this address to send donations. This is just an address on the Tangle,\nso you can send iotas and other tokens to it using ordinary wallet. "),(0,r.kt)("p",null,"However, this is not what we want to achieve here. The important thing is you can send ",(0,r.kt)("strong",{parentName:"p"},"requests")," to the\nsmart contract address, value transactions with metadata attached to it:\n",(0,r.kt)("em",{parentName:"p"},"smart contract transactions")," (",(0,r.kt)("em",{parentName:"p"},"SC transactions"),").\nSpecifically, you can send a ",(0,r.kt)("inlineCode",{parentName:"p"},"donate")," request to the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract which encapsulates\nboth donated iotas and the feedback message in a single transaction."),(0,r.kt)("h2",{id:"balance-of-the-smart-contract-account"},"Balance of the smart contract account"),(0,r.kt)("p",null,"SC transactions are value transactions, i.e. they move tokens from addresses to addresses.\nIt is because ISCP is a protocol on top of the Goshimmer's UTXO Ledger.\nHere you can find a ",(0,r.kt)("a",{parentName:"p",href:"/docs/misc/utxo"},"short introduction")," to main concepts of it."),(0,r.kt)("p",null,"The smart contract account balance consists of all UTXOs contained in the smart contract address.\nOn the demo dashboards it is displayed in the simplified 1-dimensional form by skipping the containing transaction\nIDs and summing up number of tokens for each color:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ColorCode1: balance1\nColorCode2: balance2\n")),(0,r.kt)("p",null,"The smart contract balance is an ",(0,r.kt)("em",{parentName:"p"},"on-tangle")," part of the smart contract\u2019s state.\nIt means the UTXO Ledger takes care of the consistency and immutability of the smart contract balance."),(0,r.kt)("p",null,"Tokens of the smart contract balances can be moved only by the smart contract instance,\nwhich is the only entity which owns private keys.\nActually, the tokens can be moved by the smart contract program of the instance as a result of processing the request."),(0,r.kt)("p",null,"For example, the account balance of ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract instance contains all tokens sent\nto its address. Only the smart contract can move those tokens. "),(0,r.kt)("p",null,"If the owner of the site wants to withdraw donated iotas from the donation\naddress, he or she will have to ",(0,r.kt)("em",{parentName:"p"},"nicely ask")," the smart contract to do it for them."),(0,r.kt)("h2",{id:"requests-to-the-smart-contract"},"Requests to the smart contract"),(0,r.kt)("p",null,"\u201cNicely asking\u201d the smart contract to do something means sending a request to its instance.\nA request to the smart contract always has the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Request code, Arguments --\x3e SC address\n")),(0,r.kt)("p",null,"Here ",(0,r.kt)("inlineCode",{parentName:"p"},"SC address")," is the address of the target smart contract instance.\n",(0,r.kt)("inlineCode",{parentName:"p"},"Request code")," is analogous to a function/method name, ",(0,r.kt)("inlineCode",{parentName:"p"},"Arguments")," are parameters.\nSo, sending a request to a smart contract is equivalent to a method call in the object-oriented paradigm,\nexcept that caller doesn't wait for the result."),(0,r.kt)("p",null,"Upon receiving the request, the smart contract finds the function in the smart contract program\nwhich implements the request code and, if the function exists, it executes it.\nThe program function moves tokens and does all other things a smart contract program is supposed to do."),(0,r.kt)("p",null,"Some request codes may be marked as ",(0,r.kt)("em",{parentName:"p"},"protected requests"),". These requests will only be processed by the smart\ncontract if the sender of the request is the ",(0,r.kt)("em",{parentName:"p"},"owner")," of the smart contract (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/in_progress/todo/deploy"},"deployment"),").\nProtected requests sent by other than owner address will be equivalent to ",(0,r.kt)("em",{parentName:"p"},"no operation"),"\nand attached funds won't be returned. "),(0,r.kt)("p",null,"For the user of the smart contract, however, sending a request is not complicated at all, because it is usually\nis implemented as a feature the wallet."),(0,r.kt)("p",null,"For example, you may try the two types of requests implemented by the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"donate")," request donates iotas to the address and gives a feedback message. "),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"withdraw")," request allows the owner to take the iotas out from the smart contract account. ")),(0,r.kt)("p",null,"Let\u2019s say address of our donation smart contract is ",(0,r.kt)("inlineCode",{parentName:"p"},"pxsUocho2dJQ8EX5PxHUHY7e4qfVmcu7K4dGRrrFrwaG"),".\nHere are full sequence of commands to ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," to donate some iotas to our project:"),(0,r.kt)("p",null,"Initialize your demo wallet.\nIt will create the ",(0,r.kt)("em",{parentName:"p"},"wwallet.json")," file in the current directory with the private and public keys of the the address:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli init")),(0,r.kt)("p",null,"Request some demo iotas from the Goshimmer\u2019s faucet: "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli request-funds")),(0,r.kt)("p",null,"Check balance of your newly created wallet:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli balance")),(0,r.kt)("p",null,"It will display something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  Address: YyVP3g9B7YfvHCEzLaeD4M3iqKSawyuf8NsXxggghFhP\n  Balance:\n    IOTA: 1000000\n    ------\n    Total: 1000000\n")),(0,r.kt)("p",null,"Now let the wallet know the specific address of our demo ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback"),"\nsmart contract instance (",(0,r.kt)("em",{parentName:"p"},"dwf")," here stands for ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback"),", the command below associates\nit with the specific address):"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli dwf set address pxsUocho2dJQ8EX5PxHUHY7e4qfVmcu7K4dGRrrFrwaG")),(0,r.kt)("p",null,"Now we can send a ",(0,r.kt)("inlineCode",{parentName:"p"},"donate")," request to the demo ",(0,r.kt)("inlineCode",{parentName:"p"},"DonateWithFeedback")," smart contract instance:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli dwf donate 42 \u201cThis is my first donation to the IOTA Smart Contract Project"),"  "),(0,r.kt)("p",null,"In approximately 15-20 seconds the dashboard of ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," will show you the new state\nof the smart contract: with 42 iotas more in the balance and your message in the log."),(0,r.kt)("h2",{id:"processing-the-request"},"Processing the request"),(0,r.kt)("p",null,"What is going on when the we send the request like the one aboveto the smart contract address?\nLet's look at it step-by-step:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," command creates a value transaction containing the smart contract request.\nIt takes 42 iotas from the address of the wallet, signs the transaction with the private key of the wallet.\nThen it posts it to the UTXO Ledger, i.e to Goshimmer node, running on the Pollen network.\n(there's a bit more of a token manipulation behind scenes but we skip it here)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Pollen network confirms the transaction containing the request.\nIt takes some ~10 seconds. After confirmation the request it becomes part of the immutable backlog for\nthe smart contract instance, represented by the target SC address.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Smart contract instance picks up the request and runs the smart contract program. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The smart contract program computes a state update, which includes new outputs in the UTXO ledger and a\nrecord in the log of feedback messages. Then the smart contract produces another transaction,\ncalled ",(0,r.kt)("em",{parentName:"p"},"state or anchor transaction")," which carries all the information about the new state of the SC. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The smart contract committee multi-signs the new state transaction. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The smart contract posts the state transaction to the tangle and Pollen network confirms\nit in yet another ~10 seconds. This is how state transition occurs. "))),(0,r.kt)("p",null,"So, all in all, it takes to produce and confirm 2 subsequent transactions to\nupdate the state of the smart contract, i.e. about 20 seconds in the Pollen network. "),(0,r.kt)("p",null,"It may not look very fast, however, each state update can contain hundreds of (batched) requests,\nso even one smart contract instance is able to process many requests per second on the average.\nWe normally do not expect too many donations per\nsecond (although it would be nice!), however for other use cases TPS for one smart contract may be very important."),(0,r.kt)("h2",{id:"the-state-more-details"},"The state: more details"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"State details")," section of the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," dashboard shows values, which are changing with each donation."),(0,r.kt)("p",null,"The current state of any smart contract has:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state index"),". Smart contract state is a chain of batches of state updates (think: blocks).\nEach batch has an index (think: block index). The origin state has index 0, it is incremented with each new batch\nof updates."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state hash")," It is the result of hashing all state values since origin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"anchor transaction")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"state transaction"),") which secures state on the tangle"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"batch of requests")," (a block) which resulted in the current state from the previous. "),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp")," of the state. The timestamp of the state is a timestamp\n",(0,r.kt)("em",{parentName:"li"},"consistent with the local clocks")," of all committee nodes (see below) and\nall committee nodes have consensus on it. So, it is an ",(0,r.kt)("em",{parentName:"li"},"objective")," timestamp, not just some logical value.")),(0,r.kt)("p",null,"As mentioned above, the ",(0,r.kt)("em",{parentName:"p"},"on-tangle")," part of the state of the smart contract is the balance of its account address.\nIt contains tagged (colored) tokens. You can see it as the Balance in the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," dashboard."),(0,r.kt)("p",null,"The state of the smart contract also contains arbitrary key/value pairs which can be interpreted as variables with values.\nThis part of the state is stored ",(0,r.kt)("em",{parentName:"p"},"off-tangle"),", i.e. is not a part of transactions on the Pollen network\nbut instead it stored in ",(0,r.kt)("em",{parentName:"p"},"smart contract ledger"),", the distributed database run by\nthe Wasp nodes for each smart contract. "),(0,r.kt)("p",null,"The log of feedback messages in the ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract state is a collection of key/value pairs in\nthe database. The size of the data contained in the smart contract state is limited only by the underlying database,\ni.e. is unlimited in most practical use cases. Think about Oracle with historical temperature data for months\nand years in its temper-proof state. "),(0,r.kt)("p",null,"Just like the balances are locked in the smart contract address, the whole state of the smart contract,\nincluding the ",(0,r.kt)("em",{parentName:"p"},"off-tangle")," part, is locked into the account address and can be updated only by the smart\ncontract instances with its private keys and the program.\nWe won\u2019t go into details here, but the base principle is anchoring the hash of the off-tangle part of the\nstate in the on-tangle transaction."),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," smart contract state contains the endless log of objectively time stamped donation\nfeedback messages, also state variables such as ",(0,r.kt)("em",{parentName:"p"},"totalDonatedSum")," and ",(0,r.kt)("em",{parentName:"p"},"maxDonationSoFar"),".\nEach donation not only brings iotas to the smart contract account, but also it adds records to\nthe time stamped log of messages. The ",(0,r.kt)("em",{parentName:"p"},"time stamped log")," is an immutable append-only data structure\nin the state of the smart contract which can be queried by the time parameter, for example extracting records\nbetween two moments of time. "),(0,r.kt)("p",null,"In this article we went through the main concepts of IOTA smart contracts, such as ",(0,r.kt)("em",{parentName:"p"},"SC address"),",\n",(0,r.kt)("em",{parentName:"p"},"program hash"),", ",(0,r.kt)("em",{parentName:"p"},"SC state"),", ",(0,r.kt)("em",{parentName:"p"},"requests")," and ",(0,r.kt)("em",{parentName:"p"},"SC transaction")," using a simple yet typical\nsmart contract ",(0,r.kt)("em",{parentName:"p"},"DonateWithFeedback")," as an example."))}m.isMDXComponent=!0}}]);