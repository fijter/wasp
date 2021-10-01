(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[8670],{3912:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),s=["components"],i={},c="Accounts: deposit and withdraw tokens",l={unversionedId:"tutorial/08",id:"tutorial/08",isDocsHomePage:!1,title:"Accounts: deposit and withdraw tokens",description:"Each chain in ISCP is a separate ledger, different from the UTXO ledger.",source:"@site/docs/tutorial/08.md",sourceDirName:"tutorial",slug:"/tutorial/08",permalink:"/wasp/docs/tutorial/08",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/tutorial/08.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Invoking smart contracts. Calling a view",permalink:"/wasp/docs/tutorial/07"},next:{title:"Sending tokens to the smart contract",permalink:"/wasp/docs/tutorial/09"}},d=[],u={toc:d};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"accounts-deposit-and-withdraw-tokens"},"Accounts: deposit and withdraw tokens"),(0,o.kt)("p",null,"Each chain in ",(0,o.kt)("em",{parentName:"p"},"ISCP")," is a separate ledger, different from the UTXO ledger.\nMultiple chains adds another dimension on top of the UTXO Ledger. Smart contracts\ncan exchange assets between themselves on the same chain and also between different chains as well as with\naddresses on the UTXO Ledger. We will skip explaining the whole picture for time\nbeing and will concentrate on one specific use case."),(0,o.kt)("p",null,"Let's say we have a wallet, the private key (with the address) and some tokens on\nthat address on the UTXO Ledger, the Tangle. The use case is about sending those tokens to a smart contract on a chain\nand receiving these tokens back to the address."),(0,o.kt)("p",null,"Here we explore the concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"on-chain account")," a.k.a. just ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),". On the UTXO\nLedger the private key is represented by the address (the hash of the public\nkey). That address holds balances of colored tokens. Those tokens are\n",(0,o.kt)("em",{parentName:"p"},"controlled")," by the private key."),(0,o.kt)("p",null,"In ISCP we extend the concept of ",(0,o.kt)("em",{parentName:"p"},"address")," with the concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"account"),". An\n",(0,o.kt)("inlineCode",{parentName:"p"},"account")," contains colored tokens just like an ",(0,o.kt)("inlineCode",{parentName:"p"},"address"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"account")," is\nlocated on some chain, and it is controlled by the same private key as the\nassociated address. So, an address can control tokens on the UTXO Ledger\n(Level 1 or ",(0,o.kt)("inlineCode",{parentName:"p"},"L1"),") and on each chain (Level 2 or ",(0,o.kt)("inlineCode",{parentName:"p"},"L2"),")."),(0,o.kt)("p",null,"So, the chain essentially is a custodian of the tokens deposited in its ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts"),"."),(0,o.kt)("p",null,"The following test demonstrates how a wallet can deposit tokens in a chain\naccount and then withdraw them back."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial5(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n    chain := env.NewChain(nil, "ex5")\n    // create a wallet with 1000000 iotas.\n    // the wallet has address and it is globally identified\n    // through a universal identifier: the agent ID\n    userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(5))\n    userAgentID := iscp.NewAgentID(userAddress, 0)\n\n    env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n    chain.AssertAccountBalance(userAgentID, colored.IOTA, 0) // empty on-chain\n\n    t.Logf("Address of the userWallet is: %s", userAddress.Base58())\n    numIotas := env.GetAddressBalance(userAddress, colored.IOTA)\n    t.Logf("balance of the userWallet is: %d iota", numIotas)\n    env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n\n    // send 42 iotas from wallet to own account on-chain, controlled by the same wallet\n    req := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name).WithIotas(42)\n    _, err := chain.PostRequestSync(req, userWallet)\n    require.NoError(t, err)\n\n    // check address balance: must be 42 iotas less\n    env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo-42)\n    // check the on-chain account. Must contain 42 iotas\n    chain.AssertAccountBalance(userAgentID, colored.IOTA, 42)\n\n    // withdraw all iotas back to the sender\n    req = solo.NewCallParams(accounts.Contract.Name, accounts.FuncWithdraw.Name).WithIotas(1)\n    _, err = chain.PostRequestSync(req, userWallet)\n    require.NoError(t, err)\n\n    // we are back to initial situation: IOTA is fee-less!\n    env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n    chain.AssertAccountBalance(userAgentID, colored.IOTA, 0) // empty\n}\n')),(0,o.kt)("p",null,"The example above creates a chain, then creates a wallet with ",(0,o.kt)("inlineCode",{parentName:"p"},"solo.Saldo")," iotas (1 Mi) and\nsends (deposits) 42 iotas to the corresponding on-chain account by posting\na ",(0,o.kt)("inlineCode",{parentName:"p"},"deposit")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," core contract on that chain. That account\nwill now contain 42 iotas. The address on the UTXO Ledger will contain 42 iotas\nless, of course."),(0,o.kt)("p",null,"In the next step the same wallet (",(0,o.kt)("inlineCode",{parentName:"p"},"userWallet"),") will withdraw all 42 iotas back\nto the address by sending a ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts")," contract on\nthe same chain."),(0,o.kt)("p",null,"If the same request would be posted from another user wallet (another private\nkey), the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdraw")," request would fail. Try it! Only the owner of the address\ncan move those funds from the on-chain account."))}p.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);