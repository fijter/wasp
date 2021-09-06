(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[5364],{9772:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={},l="Tokens and the UTXO Ledger",d={unversionedId:"tutorial/02",id:"tutorial/02",isDocsHomePage:!1,title:"Tokens and the UTXO Ledger",description:"The Nectar release of the GoShimmer node implements the IOTA UTXO Ledger, a",source:"@site/docs/tutorial/02.md",sourceDirName:"tutorial",slug:"/tutorial/02",permalink:"/wasp/docs/tutorial/02",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/tutorial/02.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"The Solo package",permalink:"/wasp/docs/tutorial/01"},next:{title:"Creating a Chain; Core Contracts",permalink:"/wasp/docs/tutorial/03"}},c=[],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tokens-and-the-utxo-ledger"},"Tokens and the UTXO Ledger"),(0,a.kt)("p",null,"The Nectar release of the GoShimmer node implements the IOTA ",(0,a.kt)("em",{parentName:"p"},"UTXO Ledger"),", a\ndistributed ledger of tokens. We won't go into the details of the UTXO Ledger.\nThe specification of the ",(0,a.kt)("em",{parentName:"p"},"UTXO Ledger")," can be found ",(0,a.kt)("a",{parentName:"p",href:"https://goshimmer.docs.iota.org/docs/protocol_specification/ledgerstate/"},"here"),".\nWe only have to know that the ",(0,a.kt)("em",{parentName:"p"},"UTXO Ledger")," contains balances of colored tokens locked in\naddresses, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Address: Yk85765qdrwheQ4udj6RihxtPxudTSWF9qYe4NsAfp6K\n   IOTA: 1000\n   Red: 15\n   Green: 200\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"IOTA")," is the color code of IOTA tokens and ",(0,a.kt)("inlineCode",{parentName:"p"},"Red")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Green")," are other\ncolor codes (color codes are 32-byte hashes, as defined by Goshimmer).\nTokens can only be moved on the UTXO Ledger by unlocking the corresponding\naddress with its private key."),(0,a.kt)("p",null,"(In this tutorial we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"private key"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"signature scheme")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet")," as\nsynonyms)."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Solo")," environment implements a detailed in-memory ",(0,a.kt)("em",{parentName:"p"},"UTXO Ledger"),". For example,\nyou can only move tokens in the ",(0,a.kt)("em",{parentName:"p"},"Solo")," environment by creating and submitting\nvalid and signed transactions. You can also create new wallets on the ",(0,a.kt)("em",{parentName:"p"},"UTXO\nLedger")," and request iotas from the faucet to your wallet."),(0,a.kt)("p",null,"The following code shows how to do it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial2(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n    _, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(1))\n    t.Logf("address of the userWallet is: %s", userAddress.Base58())\n    numIotas := env.GetAddressBalance(userAddress, colored.IOTA) // how many iotas the address contains\n    t.Logf("balance of the userWallet is: %d iota", numIotas)\n    env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n}\n')),(0,a.kt)("p",null,"The deterministic output of the test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"=== RUN   TestTutorial2\n53:47.437253000 INFO    TestTutorial2.db    dbmanager/dbmanager.go:54   creating new registry database. Persistent: false\n53:47.438906800 INFO    TestTutorial2   solo/solo.go:166    Solo environment has been created with initial logical time 00:01.000000000\n    tutorial_test.go:39: address of the userWallet is: 1Haybtqv1SdB8SWTKpWLLuREXf3q7uRePBoVCEMZnCHJF\n    tutorial_test.go:41: balance of the userWallet is: 1000000 iota\n--- PASS: TestTutorial2 (0.00s)\n")),(0,a.kt)("p",null,"The UTXO Ledger in ",(0,a.kt)("em",{parentName:"p"},"Solo"),' "lives" in the global environment ',(0,a.kt)("inlineCode",{parentName:"p"},"env")," of the test.\nIt is shared among all chains, which are deployed on that environment. It serves as a\nmedium for transactions between smart contracts on different chains. This way\n",(0,a.kt)("em",{parentName:"p"},"Solo")," makes it possible to test transacting between chains."),(0,a.kt)("p",null,"Note that in the test above we didn\u2019t deploy any chains: the UTXO Ledger exists\nindependently of any chains."))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);