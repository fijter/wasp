(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[4652],{9456:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=["components"],s={},c="Error handling",l={unversionedId:"guide/solo/error-handling",id:"guide/solo/error-handling",isDocsHomePage:!1,title:"Error handling",description:"The following test posts a request to the example1 smart contract without",source:"@site/docs/guide/solo/error-handling.md",sourceDirName:"guide/solo",slug:"/guide/solo/error-handling",permalink:"/wasp/docs/guide/solo/error-handling",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/solo/error-handling.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calling a view",permalink:"/wasp/docs/guide/solo/view-sc"},next:{title:"Account Balances",permalink:"/wasp/docs/guide/solo/balances"}},p=[],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"The following test posts a request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"example1")," smart contract without\nthe expected parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"paramString"),". The\nstatement ",(0,a.kt)("inlineCode",{parentName:"p"},'ctx.require(par.exists(), "string parameter not found");')," makes\nthe smart contract panic if the condition is not satisfied."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial4(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n\n    chain := env.NewChain(nil, "ex4")\n    // deploy the contract on chain\n    err := chain.DeployWasmContract(nil, "example1", "example_tutorial_bg.wasm")\n    require.NoError(t, err)\n\n    // call contract incorrectly (omit \'paramString\')\n    req := solo.NewCallParams("example1", "storeString").WithIotas(1)\n    _, err = chain.PostRequestSync(req, nil)\n    require.Error(t, err)\n}\n')),(0,a.kt)("p",null,"The fragments in the output of the test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"37:34.189474700 PANIC   TestTutorial4.ex4   vmcontext/log.go:12 string parameter not found\n\n37:34.192828900 INFO    TestTutorial4.ex4   solo/run.go:148 REQ: 'tx/[0]9r5zoeusdwTcWkDTEMYjeqNj8reiUsLiHF81vExPrvNW: 'panic in VM: string parameter not found''\n")),(0,a.kt)("p",null,"It shows that the panic indeed occurred. The test passes because the resulting\nerror was expected."),(0,a.kt)("p",null,"The log record"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-log"},"37:34.192828900 INFO    TestTutorial4.ex4   solo/run.go:148 REQ: 'tx/[0]9r5zoeusdwTcWkDTEMYjeqNj8reiUsLiHF81vExPrvNW: 'panic in VM: string parameter not found''\n")),(0,a.kt)("p",null,"is a printed receipt of the request. It is stored on the chain for each request processed."),(0,a.kt)("p",null,"Note that this test ends with the state ",(0,a.kt)("inlineCode",{parentName:"p"},"#4"),", despite the fact that the last\nrequest to the smart contract failed. This is important: ",(0,a.kt)("strong",{parentName:"p"},"whatever happens\nduring the execution of a smart contract's full entry point, processing of the\nrequest always results in the state transition"),"."),(0,a.kt)("p",null,"The VM context catches exceptions (panics) in the program. Its consequences are\nrecorded in the state of the chain during the fallback processing, no matter if\nthe panic was triggered by the logic of the smart contract or whether it was\ntriggered by the sandbox run-time code."),(0,a.kt)("p",null,"In the case of ",(0,a.kt)("inlineCode",{parentName:"p"},"example1")," the error event was recorded in the immutable record\nlog of the chain, aka ",(0,a.kt)("inlineCode",{parentName:"p"},"receipt"),", but the data state of the smart contract wasn't modified. In\nother cases the fallback actions may be more complex."))}d.isMDXComponent=!0},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);