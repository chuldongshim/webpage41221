"use strict";(self.webpackChunkwebpage_re=self.webpackChunkwebpage_re||[]).push([[792],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),m=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=m(t.components);return a.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=m(r),p=n,b=d["".concat(s,".").concat(p)]||d[p]||u[p]||l;return r?a.createElement(b,i(i({ref:e},c),{},{components:r})):a.createElement(b,i({ref:e},c))}));function b(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[d]="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2289:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const l={id:"algorithm",title:"FFT & Kalman"},i=void 0,o={unversionedId:"history/mbd/study/algorithm",id:"history/mbd/study/algorithm",title:"FFT & Kalman",description:"2021 ~",source:"@site/docs/2_history/2_mbd/2_study/2_algorithm.md",sourceDirName:"2_history/2_mbd/2_study",slug:"/history/mbd/study/algorithm",permalink:"/webpage/docs/history/mbd/study/algorithm",draft:!1,editUrl:"https://github.com/chuldongshim/webpage/docs/2_history/2_mbd/2_study/2_algorithm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"algorithm",title:"FFT & Kalman"},sidebar:"history",previous:{title:"\uc628\ub3c4PID\uc81c\uc5b4",permalink:"/webpage/docs/history/mbd/study/tempPID"},next:{title:"\ub17c\ubb38",permalink:"/webpage/docs/history/mbd/paper"}},s={},m=[{value:"Kalman Filter\ud559\uc2b5 \ubc0f \uc2dc\ubbac\ub808\uc774\uc158",id:"mymbd-bldc-kalman-simulation-study",level:3},{value:"Kalman Filter\uc774\ub860\ud559\uc2b5(Self_Study)",id:"mymbd-kalman-therom-study",level:3},{value:"FFT MCU \uad6c\ud604 \ubc0f Matlab \uc5f0\ub3d9",id:"mymbd-wiper-fft",level:3}],c={toc:m},d="wrapper";function u(t){let{components:e,...l}=t;return(0,n.kt)(d,(0,a.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"right"},(0,n.kt)("font",{size:"4"},"2021 ~ ",(0,n.kt)("br",null),"about 12 weeks (3 month)")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"mymbd-bldc-kalman-simulation-study"},"Kalman Filter\ud559\uc2b5 \ubc0f \uc2dc\ubbac\ub808\uc774\uc158"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uce7c\ub9cc\ud544\ud130 \uc774\ub860 \ud559\uc2b5 \ubc0f \uce7c\ub9cc\ud544\ud130\ub97c \ud1b5\ud55c Noisy DC\ubaa8\ud130 \uc18d\ub3c4\uce21\uc815 : ",(0,n.kt)("a",{href:"/assets/kalman/Webpage_Maxon_Motor_3_Kalman_.html",target:"_blank"},"Kalman Filter ","[\u261c click for more]")),(0,n.kt)("li",{parentName:"ul"},"\uce7c\ub9cc\ud544\ud130\ub97c \ud1b5\ud55c \uc0c1\ud0dc\ud53c\ub4dc\ubc31 \uc81c\uc5b4 : ",(0,n.kt)("a",{href:"/assets/kalman/Webpage_Maxon_Motor_4_Stochastic_.html",target:"_blank"},"Stochastic Estimation Control by LQG ","[\u261c click for more]")),(0,n.kt)("li",{parentName:"ul"},"\uc678\ub780\uad00\uce21\uae30(TBD) : ",(0,n.kt)("a",{href:"/assets/kalman/Q_filter.html",target:"_blank"},"Q-Filter ","[\u261c click for more]"))),(0,n.kt)("div",{style:{width:"100%",textAlign:"center"}},(0,n.kt)("img",{src:r(7259).Z,style:{width:"100%"},alt:"Example banner"}),(0,n.kt)("br",null),(0,n.kt)("em",null,"<Simulink \ubaa8\ub378\uc744 \ud1b5\ud55c \uce7c\ub9cc\ud544\ud130 \uc2dc\ubbac\ub808\uc774\uc158>")),(0,n.kt)("h3",{id:"mymbd-kalman-therom-study"},"Kalman Filter\uc774\ub860\ud559\uc2b5(Self_Study)"),(0,n.kt)("p",null,"\uace0\uc804\uc81c\uc5b4\ub9cc \uacbd\ud5d8\ud558\uace0 \ud604\ub300\uc81c\uc5b4\uc774\ub860\uc744 \uacbd\ud5d8\ud574 \ubcf4\uc9c0 \ubabb\ud55c\ubd80\ubd84\uc5d0 \ub300\ud55c \uc544\uc26c\uc6c0\uc73c\ub85c \ud604\ub300\uc81c\uc5b4\uc774\ub860\uacfc \uc774\ub97c \uc751\uc6a9\ud558\ub294 \uce7c\ub9cc\ud544\ud130\uc774\ub860\uc744 \ucc45\uc744 \ud1b5\ud574 \ud559\uc2b5\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,n.kt)("div",{style:{width:"100%"}},(0,n.kt)("img",{src:r(3771).Z,style:{width:"100%"},alt:"Example banner"})),(0,n.kt)("p",null,"\ucc98\uc74c\uc5d0\ub294 \ub300\ubd80\ubd84\uc774 \uc774\ud574\uac00 \ub418\uc9c0 \uc54a\uc558\uc9c0\ub9cc \ubaa8\ub974\ub294 \uac83\uc744 \ud558\ub098\ud558\ub098 \uc815\ub9ac\ud558\uace0 \uc774\ud574\ud558\ub294 \uacfc\uc815\uc744 \ud1b5\ud574 \ud604\ub300\uc81c\uc5b4 \uc774\ub860\uc774 \uc5b4\ub5a4 \uac83\uc774\ub77c\ub294 \uac83\uc744 \uc595\uac8c\ub098\ub9c8 \uc774\ud574\ud560 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4."),(0,n.kt)("div",{style:{width:"100%"}},(0,n.kt)("img",{src:r(8394).Z,style:{width:"100%"},alt:"Example banner"})),(0,n.kt)("h3",{id:"mymbd-wiper-fft"},"FFT MCU \uad6c\ud604 \ubc0f Matlab \uc5f0\ub3d9"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/assets/mbd/Webpage_Ews_S32K1_FFT.html",target:"_blank"},"MCU\uc5d0\uc11c \uc0dd\uc131\ud55c \uc0d8\ud50c\uc2e0\ud638\uc5d0 \ub300\ud558\uc5ec FFT\uc5f0\uc0b0\uc744 \uc218\ud589\ud55c \ub2e4\uc74c Serial\ud1b5\uc2e0\uc744 \ud1b5\ud574 Matlab Realtime Plot [\u261c click for more detail]"))),(0,n.kt)("div",{style:{width:"100%"}},(0,n.kt)("img",{src:r(1264).Z,style:{width:"100%"},alt:"Example banner"})))}u.isMDXComponent=!0},8394:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/mymbd-kalman-selfstudy-note-6ea365a58c9651683fbfb39d064d3aec.png"},3771:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/mymbd-kalman-selfstudy-cfe1081f8fe7eedb2cc65ec8a6c04eb4.png"},7259:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/mymbd-kalman-simulation-dde3ac51ffaba81e019c20edd9982f43.png"},1264:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/mymbd-wiper-fft_1-4fafb59aadaa714b68af5b4797b4b8a3.png"}}]);