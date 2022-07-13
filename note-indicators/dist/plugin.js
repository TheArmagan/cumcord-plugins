(function(N,v,x,I){"use strict";function m(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function S(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(t){if(t!=="default"){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}}),r.default=e,Object.freeze(r)}var i=m(N),d=m(v),b=S(x),_=m(I);class A{constructor(){this.patches=[]}add(...r){this.patches.push(...r)}remove(r){let[t]=this.patches.splice(this.patches.indexOf(n=>n==r),1);t()}removeAll(){let r=this.patches.splice(0,this.patches.length);for(let t=0;t<r.length;t++)r[t]()}}var l=new A;i.default.findByProps("transitionTo");const c=i.default.findByProps("createElement"),h=i.default.findByProps("getNote","getName"),D=i.default.findByProps("isDispatching","dispatch"),O=i.default.findByProps("get","post"),P={DANGER:"#eb3d47",SECONDARY:"#8a8e93",SUCCESS:"#3aa360"};function k(e={}){return b.createElement("svg",{width:"50",height:"51",viewBox:"0 0 50 51",fill:"none",className:"ni--icon ni--thread-icon",style:{color:e.color}},b.createElement("path",{d:"M5 0.268311C2.24 0.268311 0 2.50581 0 5.26831V35.2683C0 38.0283 2.24 40.2683 5 40.2683H12.5V50.2683L22.4999 40.2683H44.9999C47.7624 40.2683 49.9999 38.0283 49.9999 35.2683V5.26831C49.9999 2.50581 47.7624 0.268311 44.9999 0.268311H5Z",fill:"currentColor"}))}const{TooltipContainer:B}=i.default.findByProps("TooltipContainer");function u({userId:e,kind:r=null}){let[t,n]=c.useState({note:null});function a(){let o=h.getNote(e);n({note:o})}return c.useEffect(()=>(a(),h.addChangeListener(a),()=>h.removeChangeListener(a)),[]),t?.note?.note?c.createElement("div",{className:"ni--container"},c.createElement(B,{key:`ni--tooltip-${e}`,text:`${t.note.note}`,position:"top",className:"ni--tooltip"},c.createElement("span",{className:`ni--icon-container ni--kind-${r}`},c.createElement(k,{color:P.SECONDARY})))):null}const{createElement:y,createContext:L}=c;function M(){const e=L(),r=i.default.find(o=>o?.default?.displayName==="AvatarWithText"),{default:t}=i.default.findByProps("DirectMessage"),n=d.default.after("render",t.prototype,function(o,s){return y(e.Provider,{value:this.props.user},s)}),a=d.default.before("default",r,([o])=>{o.decorators=[o.decorators,y(e.Consumer,{children:s=>s?y(u,{userId:s.id,kind:"direct-message"}):null})]});l.add(a,n)}const g=new Map;function R(e){const r=_.default.getReactInstance(e),t=[];let n=r;for(;n&&n.return&&typeof n.return.type!="string";)n.return.type&&t.push(n.return.type),n=n.return;return t}async function E(e=0){return new Promise(r=>setTimeout(r,e))}async function T(e,r){if(g.has(e))return g.get(e);let t;for(;;){const n=document.querySelectorAll(r);if(!n.length){await E(100);continue}for(const a of n)if(t=R(a).find(o=>o?.displayName==e),t)break;if(t)break;await E(100)}return g.set(e,t),t}const{createElement:j}=c;async function U(){const e=await T("MemberListItem",'[class*="member-"][class*="container-"]'),r=d.default.after("renderDecorators",e.prototype,function(t,n){try{const a=n?.props?.children;if(!Array.isArray(a))return;a.unshift(j(u,{userId:this.props.user.id,kind:"member-list"}))}catch(a){console.error("Error while patching MemberListItem:",a)}});l.add(r)}const{createElement:V}=c;function $(){const e=i.default.find(t=>t?.default?.displayName=="MessageHeader"),r=d.default.after("default",e,([t],n)=>{try{const a=n?.props?.username?.props?.children;if(!Array.isArray(a))return;a.splice(2,0,V(u,{userId:t.message.author.id,kind:"message-header"}))}catch(a){console.error("Error while patching MessageTimestamp:",a)}});l.add(r)}const{createElement:f,createContext:H}=c;function Y(){const e=H(),r=i.default.find(o=>o?.default?.displayName==="VoiceUser"),t=cumcord.modules.webpack.findByProps("icons","usernameSpeaking"),n=d.default.after("render",r.default.prototype,(o,s)=>{let p=s?.props?.children?.props?.children?.[1]?.props?.style?.backgroundImage?.split("/")?.[4];return f(e.Provider,{value:p},s)}),a=d.default.after("renderIcons",r.default.prototype,(o,s)=>(window.returnValue=s,f(e.Consumer,{children:p=>{if(!p)return null;let C=f(u,{userId:p,kind:"voice-user"});return s?(s.props.children.unshift(C),s):f("div",{className:t.icons},[C])}})));l.add(n,a)}async function w(){try{let e=await O.get("/users/@me/notes");if(!e.ok)throw new Error(e?.body?.message);for(const r in e.body){let t=e.body[r];!t||D.dirtyDispatch({type:"USER_NOTE_LOADED",userId:r,note:{note:t,loading:!1}})}}catch(e){console.error("Unable to load notes!",e)}}function q(){l.add((()=>{let e=setInterval(()=>{w()},6e4*10);return()=>{clearInterval(e)}})())}var z=()=>v.injectCSS(".ni--icon-container{display:flex;align-items:center;justify-content:center;margin-left:4px;border-radius:50%;cursor:pointer;width:20px;height:20px}.ni--container{display:flex;width:min-width}.ni--icon{display:flex;width:14px;height:14px}[class*=message-] [class*=headerText-],[class*=message-] h2[class*=header-],[class*=voiceUser-] [class*=content-]{display:flex;align-items:center}");function F(){const e=z();l.add(e)}var G={onLoad(){M(),U(),$(),Y(),F(),q(),w()},onUnload(){l.removeAll()}};return G})(cumcord.modules.webpack,cumcord.patcher,cumcord.modules.common.React,cumcord.utils);
