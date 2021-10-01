(self.webpackChunkdoc_ops=self.webpackChunkdoc_ops||[]).push([[5695],{7044:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={keywords:["ISCP","Smart Contracts","Running a node","Go-lang","GoShimmer","Requirements","Configuration","Dashborad","Grafana","Prometheus"],description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",image:"/img/logo/WASP_logo_dark.png"},l="Running a Node",d={unversionedId:"guide/chains_and_nodes/running-a-node",id:"guide/chains_and_nodes/running-a-node",isDocsHomePage:!1,title:"Running a Node",description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",source:"@site/docs/guide/chains_and_nodes/running-a-node.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/running-a-node",permalink:"/wasp/docs/guide/chains_and_nodes/running-a-node",editUrl:"https://github.com/iotaledger/chronicle.rs/tree/main/docs/docs/guide/chains_and_nodes/running-a-node.md",version:"current",frontMatter:{keywords:["ISCP","Smart Contracts","Running a node","Go-lang","GoShimmer","Requirements","Configuration","Dashborad","Grafana","Prometheus"],description:"How to run a node. Requirements, configuration parameters, dashboard configuration and tests.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Sending tokens from ISCP to the Tangle",permalink:"/wasp/docs/guide/solo/sending-funds-sc"},next:{title:"Configuring wasp-cli",permalink:"/wasp/docs/guide/chains_and_nodes/wasp-cli"}},p=[{value:"Requirements",id:"requirements",children:[{value:"Microsoft Windows Installation Errors",id:"microsoft-windows-installation-errors",children:[]}]},{value:"Compile",id:"compile",children:[]},{value:"Test",id:"test",children:[]},{value:"Configuration",id:"configuration",children:[{value:"Peering",id:"peering",children:[]},{value:"Goshimmer Connection Settings",id:"goshimmer-connection-settings",children:[]},{value:"Publisher",id:"publisher",children:[]},{value:"Web API",id:"web-api",children:[]},{value:"Dashboard",id:"dashboard",children:[]},{value:"Prometheus",id:"prometheus",children:[]},{value:"Grafana",id:"grafana",children:[]}]},{value:"Goshimmer Provider",id:"goshimmer-provider",children:[]},{value:"Running the Node",id:"running-the-node",children:[]}],m={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-node"},"Running a Node"),(0,r.kt)("p",null,"In the following sections we describe how to use Wasp by cloning the repository and building the application.\nIf you prefer to use a docker image, you can find instructions on how to build it ",(0,r.kt)("a",{parentName:"p",href:"/wasp/docs/misc/docker"},"here")," (official images will be provided in the future)."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go 1.16"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/linxGnu/grocksdb"},"RocksDB")),(0,r.kt)("li",{parentName:"ul"},"Access to a ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer"},"GoShimmer")," node for\nproduction operation")),(0,r.kt)("p",null,"Note: The Wasp node requires the Goshimmer node to have the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/master/plugins/txstream"},"TXStream"),"\nplugin enabled. Being an experimental plugin, it is currently disabled by default and can\nbe enabled via configuration."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md"},"RocksDB"))),(0,r.kt)("h3",{id:"microsoft-windows-installation-errors"},"Microsoft Windows Installation Errors"),(0,r.kt)("p",null,"If the go install command is telling you it cannot find gcc you will need to\ninstall ",(0,r.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/mingw-w64/"},"MinGW-w64"),". When you do\nmake sure to select ",(0,r.kt)("em",{parentName:"p"},"x86_64")," architecture instead of the preselected ",(0,r.kt)("em",{parentName:"p"},"i686"),"\narchitecture. After the installation make sure to add this folder to your PATH variable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"C:\\Program Files\\mingw-w64\\x86_64-8.1.0-posix-seh-rt_v6-rev0\\mingw64\\bin\n")),(0,r.kt)("h2",{id:"compile"},"Compile"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build the ",(0,r.kt)("inlineCode",{parentName:"li"},"wasp")," binary (Wasp node): ",(0,r.kt)("inlineCode",{parentName:"li"},"go build -tags rocksdb")),(0,r.kt)("li",{parentName:"ul"},"Build the ",(0,r.kt)("inlineCode",{parentName:"li"},"wasp-cli")," binary (CLI client): ",(0,r.kt)("inlineCode",{parentName:"li"},"go build -tags rocksdb ./tools/wasp-cli"))),(0,r.kt)("p",null,"Alternatively, you can build and install everything with ",(0,r.kt)("inlineCode",{parentName:"p"},"go install -tags rocksdb ./...")),(0,r.kt)("p",null,"On Windows you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"go install -tags rocksdb -buildmode=exe ./...")," instead."),(0,r.kt)("h2",{id:"test"},"Test"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run all tests (including integration tests which may take several minutes): ",(0,r.kt)("inlineCode",{parentName:"li"},"go test -tags rocksdb -timeout 20m ./...")),(0,r.kt)("li",{parentName:"ul"},"Run only unit tests: ",(0,r.kt)("inlineCode",{parentName:"li"},"go test -tags rocksdb -short ./..."))),(0,r.kt)("p",null,"Note: Integration tests require the ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," commands\nin the system path (i.e. you need to run ",(0,r.kt)("inlineCode",{parentName:"p"},"go install ./...")," before running\ntests)."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Below we explain some settings in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," you may need to adjust. You\nwill need to adjust ports especially if you plan to run several nodes in the\nsame host."),(0,r.kt)("h3",{id:"peering"},"Peering"),(0,r.kt)("p",null,"Wasp nodes connect to other Wasp peers to form committees. There is exactly one\nTCP connection between two Wasp nodes participating in the same committee. Each\nnode uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"peering.port")," setting to specify the port for peering."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"peering.netid")," must have the form ",(0,r.kt)("inlineCode",{parentName:"p"},"host:port"),", with ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," equal to\n",(0,r.kt)("inlineCode",{parentName:"p"},"peering.port"),", and where ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," must resolve to the machine where the node is\nrunning, and must be reachable by other nodes in the committee. Each node in a\ncommittee must have a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"netid"),"."),(0,r.kt)("h3",{id:"goshimmer-connection-settings"},"Goshimmer Connection Settings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nodeconn.address")," specifies the Goshimmer host and port (exposed by the TXStream plugin) to\nconnect to (more information about the goshimmer node ",(0,r.kt)("a",{parentName:"p",href:"#goshimmer-provider"},"below"),")."),(0,r.kt)("h3",{id:"publisher"},"Publisher"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nanomsg.port")," specifies the port for the Nanomsg event publisher. Wasp nodes\npublish important events happening in smart contracts, such as state\ntransitions, incoming and processed requests and similar. Any Nanomsg client\ncan subscribe to these messages."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"More Information"),(0,r.kt)("div",null,(0,r.kt)("br",null),"Each Wasp node publishes important events via a [Nanomsg](https://nanomsg.org/) message stream (just like ZMQ is used in IRI. Possibly, in the future, ZMQ and MQTT publishers will be supported too).",(0,r.kt)("p",null,"  Any Nanomsg client can subscribe to the message stream. In Go you can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"packages/subscribe")," package provided in Wasp for this."),(0,r.kt)("p",null,"  The Publisher port can be configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"nanomsg.port"),"\nsetting."),(0,r.kt)("p",null,"  The Message format is simply a string consisting of a space separated list of tokens; and the first token\nis the message type. Below is a list of all message types published by Wasp (you can search for\n",(0,r.kt)("inlineCode",{parentName:"p"},"publisher.Publish")," in the code to see the exact places where each message is published)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain record has been saved in the registry"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chainrec <chain ID> <color>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain committee has been activated"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"active_committee <chain ID>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain committee dismissed"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dismissed_committee <chain ID>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"A new SC request reached the node"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request_in <chain ID> <request tx ID> <request block index>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SC request has been processed (i.e. corresponding state update was confirmed)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request_out <chain ID> <request tx ID> <request block index> <state index> <seq number in the block> <block size>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"State transition (new state has been committed to DB)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state <chain ID> <state index> <block size> <state tx ID> <state hash> <timestamp>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Event generated by a SC"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"vmmsg <chain ID> <contract hname> ..."))))))),(0,r.kt)("h3",{id:"web-api"},"Web API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"webapi.bindAddress")," specifies the bind address/port for the Web API, used by\n",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," and other clients to interact with the Wasp node."),(0,r.kt)("h3",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.bindAddress")," specifies the bind address/port for the node dashboard,\nwhich can be accessed with a web browser."),(0,r.kt)("h3",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.bindAddress")," specifies the bind address/port for the prometheus server, where its possible to get multiple system metrics.\nBy default Prometheus is disabled and should be enabled by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h3",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"Grafana provides a dashboard to visualize system metrics, it can use the prometheus metrics as a data source.\n// TODO"),(0,r.kt)("h2",{id:"goshimmer-provider"},"Goshimmer Provider"),(0,r.kt)("p",null,"For the Wasp node to communicate with the L1 (Tangle/Goshimmer Network), it needs access to a Goshimmer node with the TXStream plugin enabled.\nYou can use any publicly available node, but the instructions on how to run your own node follows:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"goshimmer")," command must be compiled from the Goshimmer repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/goshimmer.git\ncd goshimmer\ngo install -tags rocksdb\n")),(0,r.kt)("p",null,"Create an empty working directory for Goshimmer, and download the ",(0,r.kt)("inlineCode",{parentName:"p"},"snapshot.bin")," file needed for bootstrap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir goshimmer-node\ncd goshimmer-node\nwget -O snapshot.bin https://dbfiles-goshimmer.s3.eu-central-1.amazonaws.com/snapshots/nectar/snapshot-latest.bin\n")),(0,r.kt)("p",null,"Start the Goshimmer node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ goshimmer \\\n        --skip-config=true \\\n        --analysis.client.serverAddress=ressims.iota.cafe:21888 \\\n        --autopeering.port=14626 \\\n        --dashboard.bindAddress=0.0.0.0:8081 \\\n        --gossip.port=14666 \\\n        --webapi.bindAddress=0.0.0.0:8080 \\\n        --profiling.bindAddress=0.0.0.0:6061 \\\n        --networkdelay.originPublicKey=9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd \\\n        --fpc.bindAddress=0.0.0.0:10895 \\\n        --prometheus.bindAddress=0.0.0.0:9311 \\\n        --autopeering.entryNodes=2PV5487xMw5rasGBXXWeqSi4hLz7r19YBt8Y1TGAsQbj@ressims.iota.cafe:15626,5EDH4uY78EA6wrBkHHAVBWBMDt7EcksRq6pjzipoW15B@entryshimmer.tanglebay.com:14646 \\\n        --node.disablePlugins= \\\n        --node.enablePlugins=remotelog,networkdelay,spammer,prometheus,faucet,txstream \\\n        --faucet.seed=7R1itJx5hVuo9w9hjg5cwKFmek4HMSoBDgJZN8hKGxih \\\n        --logger.level=info \\\n        --logger.disableEvents=false \\\n        --logger.remotelog.serverAddress=ressims.iota.cafe:5213 \\\n        --drng.pollen.instanceId=1 \\\n        --drng.pollen.threshold=3 \\\n        --drng.pollen.committeeMembers=AheLpbhRs1XZsRF8t8VBwuyQh9mqPHXQvthV5rsHytDG,FZ28bSTidszUBn8TTCAT9X1nVMwFNnoYBmZ1xfafez2z,GT3UxryW4rA9RN9ojnMGmZgE2wP7psagQxgVdA4B9L1P,4pB5boPvvk2o5MbMySDhqsmC2CtUdXyotPPEpb7YQPD7,64wCsTZpmKjRVHtBKXiFojw7uw3GszumfvC4kHdWsHga \\\n        --drng.xteam.instanceId=1339 \\\n        --drng.xteam.threshold=4 \\\n        --drng.xteam.committeeMembers=GUdTwLDb6t6vZ7X5XzEnjFNDEVPteU7tVQ9nzKLfPjdo,68vNzBFE9HpmWLb2x4599AUUQNuimuhwn3XahTZZYUHt,Dc9n3JxYecaX3gpxVnWb4jS3KVz1K1SgSK1KpV1dzqT1,75g6r4tqGZhrgpDYZyZxVje1Qo54ezFYkCw94ELTLhPs,CN1XLXLHT9hv7fy3qNhpgNMD6uoHFkHtaNNKyNVCKybf,7SmttyqrKMkLo5NPYaiFoHs8LE6s7oCoWCQaZhui8m16,CypSmrHpTe3WQmCw54KP91F5gTmrQEL7EmTX38YStFXx\n")),(0,r.kt)("p",null,"Note: Argument values are adapted from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/wiki/Setup-up-a-GoShimmer-node-%28Joining-the-pollen-testnet%29"},"these instructions"),".\nWe do not provide Docker images yet."),(0,r.kt)("p",null,"Note: By default the TXStream plugin will be listening for Wasp connections on port ",(0,r.kt)("inlineCode",{parentName:"p"},"5000"),".\nTo change this setting you can add the argument ",(0,r.kt)("inlineCode",{parentName:"p"},"--txstream.port: 12345"),"."),(0,r.kt)("h2",{id:"running-the-node"},"Running the Node"),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," is tweaked as necessary you can simply start a Wasp node by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp")," on the same directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir wasp-node\ncp config.json wasp-node\ncd wasp-node\n#<edit config.json as desired>\nwasp\n")),(0,r.kt)("p",null,"You can verify that your node is running by opening the dashboard with a web browser at ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1:7000")," (default url)."),(0,r.kt)("p",null,"Repeat this process to launch as many nodes as you want for your committee."))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);