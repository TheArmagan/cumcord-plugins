(function(I,k,E,S){"use strict";function h(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function _(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var t=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,t.get?t:{enumerable:!0,get:function(){return e[n]}})}}),r.default=e,Object.freeze(r)}var g=_(I),c=h(k),d=h(E),P=h(S);class O{constructor(){this.patches=[]}add(...r){this.patches.push(...r)}remove(r){let[n]=this.patches.splice(this.patches.indexOf(t=>t==r),1);n()}removeAll(){let r=this.patches.splice(0,this.patches.length);for(let n=0;n<r.length;n++)r[n]()}}var l=new O;c.default.findByProps("transitionTo");const s=c.default.findByProps("createElement"),p=c.default.findByProps("getNote","getName"),b=c.default.findByProps("isDispatching","dispatch");c.default.findByProps("getUser","getUsers");const A=c.default.findByProps("get","post"),D={DANGER:"#eb3d47",SECONDARY:"#8a8e93",SUCCESS:"#3aa360"};function L(e={}){return g.createElement("svg",{width:"50",height:"51",viewBox:"0 0 50 51",fill:"none",className:"ni--icon ni--thread-icon",style:{color:e.color}},g.createElement("path",{d:"M5 0.268311C2.24 0.268311 0 2.50581 0 5.26831V35.2683C0 38.0283 2.24 40.2683 5 40.2683H12.5V50.2683L22.4999 40.2683H44.9999C47.7624 40.2683 49.9999 38.0283 49.9999 35.2683V5.26831C49.9999 2.50581 47.7624 0.268311 44.9999 0.268311H5Z",fill:"currentColor"}))}const{TooltipContainer:$}=c.default.findByProps("TooltipContainer");function u({userId:e,kind:r=null}){let[n,t]=s.useState({note:null});function a(){let o=p.getNote(e);t({note:o})}return s.useEffect(()=>(a(),p.addChangeListener(a),()=>p.removeChangeListener(a)),[]),n?.note?.note?s.createElement("div",{className:"ni--container"},s.createElement($,{key:`ni--tooltip-${e}`,text:`${n.note.note}`,position:"top",className:"ni--tooltip"},s.createElement("span",{className:`ni--icon-container ni--kind-${r}`},s.createElement(L,{color:D.SECONDARY})))):null}const{createElement:y,createContext:B}=s;function U(){const e=B(),r=c.default.find(o=>o?.default?.displayName==="AvatarWithText"),{default:n}=c.default.findByProps("DirectMessage"),t=d.default.after("render",n.prototype,function(o,i){return y(e.Provider,{value:this.props.user},i)}),a=d.default.before("default",r,([o])=>{o.decorators=[o.decorators,y(e.Consumer,{children:i=>i?y(u,{userId:i.id,kind:"direct-message"}):null})]});l.add(a,t)}const v=new Map;function M(e){const r=P.default.getReactInstance(e),n=[];let t=r;for(;t&&t.return&&typeof t.return.type!="string";)t.return.type&&n.push(t.return.type),t=t.return;return n}async function x(e=0){return new Promise(r=>setTimeout(r,e))}async function R(e,r){if(v.has(e))return v.get(e);let n;for(;;){const t=document.querySelectorAll(r);if(!t.length){await x(100);continue}for(const a of t)if(n=M(a).find(o=>o?.displayName==e),n)break;if(n)break;await x(100)}return v.set(e,n),n}const{createElement:j}=s;async function T(){const e=await R("MemberListItem",'[class*="member-"][class*="container-"]'),r=d.default.after("renderDecorators",e.prototype,function(n,t){try{const a=t?.props?.children;if(!Array.isArray(a))return;a.unshift(j(u,{userId:this.props.user.id,kind:"member-list"}))}catch(a){console.error("Error while patching MemberListItem:",a)}});l.add(r)}const{createElement:V}=s;function H(){const e=c.default.find(n=>n?.default?.displayName=="MessageHeader"),r=d.default.after("default",e,([n],t)=>{try{const a=t?.props?.username?.props?.children;if(!Array.isArray(a))return;a.splice(2,0,V(u,{userId:n.message.author.id,kind:"message-header"}))}catch(a){console.error("Error while patching MessageTimestamp:",a)}});l.add(r)}const{createElement:f,createContext:z}=s;function F(){const e=z(),r=c.default.find(o=>o?.default?.displayName==="VoiceUser"),n=cumcord.modules.webpack.findByProps("icons","usernameSpeaking"),t=d.default.after("render",r.default.prototype,(o,i)=>{let m=i?.props?.value?i?.props?.value:i?.props?.children?.props?.children?.[1]?.props?.style?.backgroundImage?.split("/")?.[4];return f(e.Provider,{value:m},i)}),a=d.default.after("renderIcons",r.default.prototype,(o,i)=>(window.returnValue=i,f(e.Consumer,{children:m=>{if(!m)return null;let C=f(u,{userId:m,kind:"voice-user"});return i?(i.props.children.unshift(C),i):f("div",{className:n.icons},[C])}})));l.add(t,a)}let N={notes:{}};async function w(){try{let e=await A.get("/users/@me/notes");if(!e.ok)throw new Error(e?.body?.message);N.notes=e.body;for(const r in e.body){let n=e.body[r];!n||b.dispatch({type:"USER_NOTE_LOADED",userId:r,note:{note:n,loading:!1}})}}catch(e){console.error("Unable to load notes!",e)}}function W(){l.add((()=>{let e=setInterval(()=>{w()},6e4*10);return()=>{clearInterval(e)}})())}var Y=()=>E.injectCSS(".ni--icon-container{display:flex;align-items:center;justify-content:center;margin-left:4px;border-radius:50%;width:20px;height:20px}.ni--container{display:flex;width:min-width}.ni--icon{display:flex;width:14px;height:14px}[class*=message-] [class*=headerText-],[class*=message-] h2[class*=header-],[class*=voiceUser-] [class*=content-]{display:flex;align-items:center}.ni--settings{padding:16px;display:flex;flex-direction:column}.ni--settings>.loading{width:100%;text-align:center;color:#f5f5f5}.ni--settings>.user{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:8px;background-color:#2f3136;border-radius:8px;margin-bottom:8px;cursor:pointer;color:#f5f5f5}.ni--settings>.user>.info{display:flex;align-items:center}.ni--settings>.user>.info .icon{margin-right:8px;width:26px;height:26px;border-radius:4px;background-size:contain;background-position:center}.ni--settings>.user>.info .name{font-size:18px}.ni--settings>.user .indicator{display:flex}");function q(){const e=Y();l.add(e)}const{getUser:G}=c.default.findByProps("getUser");function Z(){let[e,r]=s.useState([]);async function n(){let t=[];for(const a in N.notes){let o=p.getNote(a)?.note;if(!o)continue;let i=await G(a);!i||t.push({user:i,note:o})}r(t)}return s.useEffect(async()=>{n()},[]),s.createElement("div",{className:"ni--settings"},e.length?e.map(t=>s.createElement("div",{className:"user",onClick:a=>{a.preventDefault(),b.dispatch({type:"USER_PROFILE_MODAL_OPEN",userId:t.user.id})}},s.createElement("div",{className:"info"},s.createElement("div",{className:"icon",style:{backgroundImage:`url("${t.user.avatar?`https://cdn.discordapp.com/avatars/${t.user.id}/${t.user.avatar}.${t.user.avatar.startsWith("a_")?"gif":"png"}`:`https://cdn.discordapp.com/embed/avatars/${Number(t.user.discriminator)%5}.png`}")`}}),s.createElement("div",{className:"name"},t.user.username,"#",t.user.discriminator)),s.createElement("div",{className:"indicator"},s.createElement(u,{userId:t.user.id,kind:"list"})))):s.createElement("h2",{className:"loading"},"Loading.."))}var J={onLoad(){U(),T(),H(),F(),q(),W(),w()},onUnload(){l.removeAll()},settings(){return g.createElement(Z,null)}};return J})(cumcord.modules.common.React,cumcord.modules.webpack,cumcord.patcher,cumcord.utils);
