(()=>{var e={};e.id=974,e.ids=[974],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},35888:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>l});var s=t(70260),n=t(28203),a=t(25155),o=t.n(a),i=t(67292),d={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>i[e]);t.d(r,d);let l=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,61377)),"C:\\Users\\hassa\\Desktop\\Currently Running Campaign Project Backened and frontened\\Dashboard-main\\Dashboard-main\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,71354)),"C:\\Users\\hassa\\Desktop\\Currently Running Campaign Project Backened and frontened\\Dashboard-main\\Dashboard-main\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,19937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,69116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,41485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,70440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\hassa\\Desktop\\Currently Running Campaign Project Backened and frontened\\Dashboard-main\\Dashboard-main\\src\\app\\page.tsx"],u={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},31387:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,13219,23)),Promise.resolve().then(t.t.bind(t,34863,23)),Promise.resolve().then(t.t.bind(t,25155,23)),Promise.resolve().then(t.t.bind(t,40802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,48530,23)),Promise.resolve().then(t.t.bind(t,88921,23))},91475:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,66959,23)),Promise.resolve().then(t.t.bind(t,33875,23)),Promise.resolve().then(t.t.bind(t,88903,23)),Promise.resolve().then(t.t.bind(t,57174,23)),Promise.resolve().then(t.t.bind(t,84178,23)),Promise.resolve().then(t.t.bind(t,87190,23)),Promise.resolve().then(t.t.bind(t,61365,23))},45032:(e,r,t)=>{Promise.resolve().then(t.bind(t,53069))},8584:(e,r,t)=>{Promise.resolve().then(t.bind(t,15193))},8130:(e,r,t)=>{Promise.resolve().then(t.bind(t,61377))},42634:(e,r,t)=>{Promise.resolve().then(t.bind(t,80029))},79334:(e,r,t)=>{"use strict";var s=t(58686);t.o(s,"redirect")&&t.d(r,{redirect:function(){return s.redirect}}),t.o(s,"usePathname")&&t.d(r,{usePathname:function(){return s.usePathname}}),t.o(s,"useRouter")&&t.d(r,{useRouter:function(){return s.useRouter}})},15193:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});var s=t(45512),n=t(90993);function a({children:e}){return(0,s.jsx)(n.SessionProvider,{children:e})}},80029:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>i});var s=t(45512),n=t(79334),a=t(90993),o=t(33809);function i(){let e=(0,n.useRouter)(),{data:r}=(0,a.useSession)();r&&(console.log("Session User ",r.user),e.push("/dashboard"));let t=async r=>{r.preventDefault();let t=new FormData(r.currentTarget),s=t.get("username"),n=t.get("password");try{let r=await (0,a.signIn)("credentials",{username:s,password:n,redirect:!1});r&&!r.error?((0,o.M8)("Login Successfull",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},style:{backgroundColor:"#00ff00",color:"#ffffff",fontWeight:"bold"}}),e.push("/dashboard")):r?.error?(0,o.M8)("Incorrect Username or Password",{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},style:{backgroundColor:"#ff0000",color:"#ffffff",fontWeight:"bold"}}):console.error("Login failed: Unknown error")}catch(e){console.error("Error logging in:",e)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.n,{maxSnack:3}),(0,s.jsx)("div",{className:"flex justify-center mt-16",children:(0,s.jsx)("div",{style:{minWidth:"30%"},children:(0,s.jsxs)("div",{className:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white shadow-lg",children:[(0,s.jsxs)("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[(0,s.jsx)("img",{className:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",alt:"Your Company"}),(0,s.jsx)("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})]}),(0,s.jsx)("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:(0,s.jsxs)("form",{className:"space-y-6",action:"#",onSubmit:t,method:"POST",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"username",className:"block text-sm font-medium leading-6 text-gray-900",children:"User Name"}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("input",{id:"username",name:"username",type:"text",autoComplete:"username",required:!0,className:"block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"}),(0,s.jsx)("div",{className:"text-sm",children:(0,s.jsx)("a",{href:"#",className:"font-semibold text-indigo-600 hover:text-indigo-500",children:"Forgot password?"})})]}),(0,s.jsx)("div",{className:"mt-2",children:(0,s.jsx)("input",{id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,s.jsx)("div",{children:(0,s.jsx)("button",{type:"submit",className:"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Sign in"})})]})})]})})})]})}},53069:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\hassa\\\\Desktop\\\\Currently Running Campaign Project Backened and frontened\\\\Dashboard-main\\\\Dashboard-main\\\\src\\\\app\\\\context\\\\Authprovider.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\hassa\\Desktop\\Currently Running Campaign Project Backened and frontened\\Dashboard-main\\Dashboard-main\\src\\app\\context\\Authprovider.tsx","default")},71354:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>i});var s=t(62740),n=t(85041),a=t.n(n),o=t(53069);t(61135);let i={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:a().className,children:(0,s.jsx)(o.default,{children:e})})})}},61377:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});let s=(0,t(46760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\hassa\\\\Desktop\\\\Currently Running Campaign Project Backened and frontened\\\\Dashboard-main\\\\Dashboard-main\\\\src\\\\app\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\hassa\\Desktop\\Currently Running Campaign Project Backened and frontened\\Dashboard-main\\Dashboard-main\\src\\app\\page.tsx","default")},70440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var s=t(88077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},61135:()=>{}};var r=require("../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[994,867,77,809],()=>t(35888));module.exports=s})();