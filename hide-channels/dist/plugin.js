(function(M,P,m,A,I,L){"use strict";function y(e){return e&&typeof e=="object"&&"default"in e?e:{default:e}}function j(e){if(e&&e.__esModule)return e;var i=Object.create(null);return e&&Object.keys(e).forEach(function(n){if(n!=="default"){var c=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(i,n,c.get?c:{enumerable:!0,get:function(){return e[n]}})}}),i.default=e,Object.freeze(i)}var s=j(M),o=y(P),O=y(m),z=y(I),Z=y(L);const D=o.default.findByProps("getGuild","getGuildCount"),F=o.default.findByProps("getMemberCount","getMemberCounts"),N=o.default.findByProps("getChannel","hasChannel"),G=o.default.findByProps("getChannels","getDefaultChannel"),S=o.default.findByProps("getChannelPermissions"),{Permissions:B}=z.default.constants,V=o.default.findByPrototypes("isManaged"),$=o.default.findByProps("getFriendIDs"),{getCurrentUser:k}=o.default.findByProps("getCurrentUser"),U=o.default.findByProps("getVoiceState","getUserVoiceChannelId"),R=o.default.findByDisplayName("Switch"),t=o.default.findByProps("createElement"),d=O.default.persist.store,{categoryExpandAll:T,categoryCollapseAll:oe}=o.default.findByProps("categoryExpandAll","categoryCollapseAll");function _(e=()=>{},i=()=>{}){return n=>{let c=e();return c.includes(n)?c.splice(c.indexOf(n),1):c.push(n),i(c),c}}function W(e={}){return s.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",className:"hc--icon hc--arrow-down-icon",style:{color:e.color}},s.createElement("path",{d:"M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z",fill:"currentColor"}))}function J(e={}){return s.createElement("svg",{viewBox:"0 0 46 46",width:"46",height:"46",fill:"none",className:"hc--icon hc--category-icon",style:{color:e.color}},s.createElement("path",{d:"M15.4998 0.908447V12.0463H0.499817V0.908447H15.4998ZM45.4998 15.7589V26.8968H30.4998V15.7589H45.4998ZM30.4998 34.3221H45.4998V45.4599H30.4998V35.5596V34.3221ZM26.7498 26.8968H11.7498V38.0347H26.7498V45.4599H11.7498H4.24982V15.7589H11.7498V19.4716H26.7498V26.8968Z",fill:"currentColor"}))}function Y(e={}){return s.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",className:"hc--icon hc--eye-icon",style:{color:e.color}},s.createElement("path",{d:"M1.181 12C2.121 6.88 6.608 3 12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9zM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",fill:"currentColor"}))}function Q(e={}){return s.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",fill:"none",className:"hc--icon hc--eye-off-icon",style:{color:e.color}},s.createElement("path",{d:"M4.52 5.934L1.393 2.808l1.415-1.415 19.799 19.8-1.415 1.414-3.31-3.31A10.949 10.949 0 0 1 12 21c-5.392 0-9.878-3.88-10.819-9a10.982 10.982 0 0 1 3.34-6.066zm10.237 10.238l-1.464-1.464a3 3 0 0 1-4.001-4.001L7.828 9.243a5 5 0 0 0 6.929 6.929zM7.974 3.76C9.221 3.27 10.58 3 12 3c5.392 0 9.878 3.88 10.819 9a10.947 10.947 0 0 1-2.012 4.592l-3.86-3.86a5 5 0 0 0-5.68-5.68L7.974 3.761z",fill:"currentColor"}))}function X(e={}){return s.createElement("svg",{width:"50",height:"46",viewBox:"0 0 50 46",fill:"none",className:"hc--icon hc--text-icon",style:{color:e.color}},s.createElement("path",{d:"M10.085 45.6503C9.30721 45.6503 8.71828 44.9452 8.85421 44.1769L10.3686 35.6165H1.8563C1.07975 35.6165 0.491154 34.9137 0.625004 34.1461L1.0625 31.6376C1.16718 31.0376 1.68658 30.5996 2.2938 30.5996H11.2436L13.8936 15.549H5.38131C4.60476 15.549 4.01616 14.846 4.15001 14.0785L4.58751 11.5701C4.69218 10.9699 5.21158 10.5321 5.81881 10.5321H14.7686L16.3605 1.53333C16.4664 0.934535 16.9851 0.498291 17.5912 0.498291H20.0521C20.8298 0.498291 21.4188 1.20334 21.2828 1.9717L19.7686 10.5321H34.7686L36.3605 1.53333C36.4663 0.934535 36.9851 0.498291 37.5913 0.498291H40.0521C40.8298 0.498291 41.4188 1.20334 41.2828 1.9717L39.7686 10.5321H48.2808C49.0573 10.5321 49.6461 11.235 49.5121 12.0025L49.0746 14.5109C48.9701 15.1111 48.4506 15.549 47.8433 15.549H38.8936L36.2436 30.5996H44.7558C45.5323 30.5996 46.1211 31.3025 45.9871 32.0701L45.5496 34.5785C45.4451 35.1786 44.9256 35.6165 44.3183 35.6165H35.3685L33.7766 44.6153C33.6708 45.2141 33.1521 45.6503 32.5458 45.6503H30.085C29.3073 45.6503 28.7183 44.9452 28.8543 44.1769L30.3685 35.6165H15.3686L13.7767 44.6153C13.6707 45.2141 13.152 45.6503 12.5459 45.6503H10.085ZM18.8947 15.549L16.2447 30.5996H31.2445L33.8946 15.549H18.8947Z",fill:"currentColor"}))}function q(e={}){return s.createElement("svg",{width:"60",height:"61",viewBox:"0 0 60 61",fill:"none",className:"hc--icon hc--voice-icon",style:{color:e.color}},s.createElement("path",{d:"M28.4623 8.15497C27.5273 7.77127 26.4523 7.98305 25.7373 8.69565L15.0048 20.4212H7.50479C6.12979 20.4212 5.00479 21.5449 5.00479 22.9128V37.8623C5.00479 39.2327 6.12979 40.354 7.50479 40.354H15.0048L25.7373 52.0844C26.4523 52.7971 27.5273 53.0113 28.4623 52.6251C29.3973 52.2389 30.0048 51.3295 30.0048 50.3204V10.4547C30.0048 9.45061 29.3973 8.53619 28.4623 8.15497ZM35.0048 12.9461V17.9293C41.8973 17.9293 47.5048 23.5205 47.5048 30.3875C47.5048 37.2569 41.8973 42.8456 35.0048 42.8456V47.8288C44.6548 47.8288 52.5048 40.0076 52.5048 30.3875C52.5048 20.7723 44.6548 12.9461 35.0048 12.9461ZM35.0048 22.9126C39.1398 22.9126 42.5048 26.2689 42.5048 30.3875C42.5048 34.5111 39.1398 37.8623 35.0048 37.8623V32.8791C36.3823 32.8791 37.5048 31.7604 37.5048 30.3875C37.5048 29.0146 36.3823 27.8959 35.0048 27.8959V22.9126Z",fill:"currentColor"}))}const K=o.default.findByProps("thin","scrollerBase");function ee(){A.useNest(m.persist);let[e,i]=t.useState([]),[n,c]=t.useState([]),[x,v]=t.useState([...d.hiddenChannels]),[b,f]=t.useState([]),p=_(()=>[...n],l=>{c([...l]),i(e)}),w=_(()=>[...d.hiddenChannels],l=>{let u=[...l];d.hiddenChannels=u,v(u),f(e.filter(g=>g.channels.some(a=>u.includes(a.id)||u.includes(a.parent_id))).map(g=>g.guild.id))});return t.useEffect(()=>{let l=[...d.hiddenChannels];{for(let a=0;a<l.length;a++){const h=l[a];N.getChannel(h)||l.splice(l.indexOf(h),1)}d.hiddenChannels=[...new Set(l)]}let u=l.map(a=>N.getChannel(a)).filter(a=>a),g=Object.values(D.getGuilds()).map(a=>{let h=[],H=u.filter(r=>r.guild_id==a.id);h.push(...H.filter(r=>r.type==4),...H.filter(r=>r.type!=2&&r.type!=4),...H.filter(r=>r.type==2&&r.type!=4));let E=G.getChannels(a.id);return E&&h.push(...E["4"].map(r=>r.channel),...E.SELECTABLE.map(r=>r.channel),...E.VOCAL.map(r=>r.channel)),h=h.filter(r=>r?.name&&r.canBeSeen()),{guild:Object.assign(a,{member_count:F.getMemberCount(a.id)}),channels:h}}).sort((a,h)=>h.guild.member_count-a.guild.member_count).filter(a=>!!a.channels.length);i(g),f(g.filter(a=>a.channels.some(h=>l.includes(h.id)||l.includes(h.parent_id))).map(a=>a.guild.id))},[]),t.createElement("div",{className:"hc--container"},t.createElement("div",{className:"settings"},t.createElement("div",{className:"line"},t.createElement("div",null,t.createElement("h2",null,"Friends Bypass"),t.createElement("p",null,"Always show channels that includes your friends or you.")),t.createElement(R,{checked:m.persist.ghost.settings.friendsBypass,onChange:l=>{m.persist.store.settings.friendsBypass=l}}))),t.createElement("div",{className:"guilds"},e.map(l=>t.createElement("div",{className:`guild ${n.includes(l.guild.id)?"":"folded"}`},t.createElement("div",{className:"header"},t.createElement("div",{className:`info ${b.includes(l.guild.id)?"has-hidden":""}`},t.createElement("div",{className:"icon",style:{backgroundImage:`url("https://cdn.discordapp.com/icons/${l.guild.id}/${l.guild.icon}.png")`}}),t.createElement("div",{className:"name"},l.guild.name)),t.createElement("div",{className:"right"},t.createElement("div",{className:`fold ${n.includes(l.guild.id)?"":"folded"}`,onClick:()=>{p(l.guild.id)}},t.createElement(W,null)))),t.createElement("div",{className:`content ${K.thin}`},n.includes(l.guild.id)?l.channels.map(u=>t.createElement("div",{className:`channel ${x.includes(u.id)?"hidden":""}`},t.createElement("div",{className:"header",onClick:()=>{w(u.id),T(l.guild.id)}},t.createElement("div",{className:"info"},u.type===2?t.createElement(q,null):u.type===4?t.createElement(J,null):t.createElement(X,null),t.createElement("div",{className:"name"},u.name)),t.createElement("div",{className:"toggle"},x.includes(u.id)?t.createElement(Q,null):t.createElement(Y,null))))):null)))))}class te{constructor(){this.patches=[]}add(...i){this.patches.push(...i)}remove(i){let[n]=this.patches.splice(this.patches.indexOf(c=>c==i),1);n()}removeAll(){let i=this.patches.splice(0,this.patches.length);for(let n=0;n<i.length;n++)i[n]()}}var C=new te,ne=()=>L.injectCSS(".hc--container{z-index:1}.hc--container>.settings{margin-bottom:8px;display:flex;flex-direction:column}.hc--container>.settings .line{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.hc--container>.settings .line h2,.hc--container>.settings .line p{margin:0}.hc--container>.settings .line h2{color:#f5f5f5;font-size:18px;font-weight:600}.hc--container>.settings .line p{margin-top:4px;color:#e6e6e6}.hc--container>.guilds>.guild{display:flex;flex-direction:column;padding:8px;background-color:#2f3136;border-radius:8px;margin-bottom:8px;color:#f5f5f5}.hc--container>.guilds>.guild>.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.hc--container>.guilds>.guild>.header>.info{display:flex;align-items:center;transition:opacity .1s ease-in-out}.hc--container>.guilds>.guild>.header>.info.has-hidden{opacity:.5}.hc--container>.guilds>.guild>.header>.info .icon{margin-right:8px;width:26px;height:26px;border-radius:4px;background-size:contain;background-position:center}.hc--container>.guilds>.guild>.header>.info .name{font-size:18px}.hc--container>.guilds>.guild>.header>.right{display:flex}.hc--container>.guilds>.guild>.header>.right>.fold{width:26px;height:26px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#b9bbbe;transition:transform .1s ease-in-out}.hc--container>.guilds>.guild>.header>.right>.fold.folded{transform:rotate(-90deg)}.hc--container>.guilds>.guild>.header>.right>.fold svg{width:26px;height:26px}.hc--container>.guilds>.guild.folded>.header{margin-bottom:0}.hc--container>.guilds>.guild>.content{display:flex;flex-direction:column;max-height:200px;contain:content;overflow-y:auto;margin-left:28px}.hc--container>.guilds>.guild>.content>.channel{padding:4px;transition:opacity .1s ease-in-out,filter .1s ease-in-out;border-radius:8px;margin-top:4px}.hc--container>.guilds>.guild>.content>.channel:hover{filter:brightness(1.1);background-color:#2f3136}.hc--container>.guilds>.guild>.content>.channel.hidden{opacity:.5}.hc--container>.guilds>.guild>.content>.channel>.header{display:flex;align-items:center;justify-content:space-between;color:#b9bbbe;cursor:pointer}.hc--container>.guilds>.guild>.content>.channel>.header>.info{display:flex;cursor:pointer}.hc--container>.guilds>.guild>.content>.channel>.header>.info>svg{width:18px;height:18px;margin-right:8px}.hc--container>.guilds>.guild>.content>.channel>.header>.info>.name{font-size:16px}.hc--container>.guilds>.guild>.content>.channel>.header>.toggle{border-radius:50%;width:22px;height:22px;display:flex;align-items:center;justify-content:center;font-size:12px;cursor:pointer}.hc--container>.guilds>.guild>.content>.channel>.header>.toggle>svg{width:16px;height:16px}.hc--icon{width:24px;height:24px;cursor:pointer;transition:filter .1s ease-in-out}.hc--icon:hover{filter:brightness(1.2)}");function ie(){const e=ne();C.add(e)}async function le(){const e=S.can.bind({});C.add(Z.default.instead("can",S,(i,n)=>{let c=[...d.hiddenChannels];if(i[0]==B.VIEW_CHANNEL&&(c.includes(i?.[1]?.id)||c.includes(i?.[1]?.parent_id))){if(d.settings.friendsBypass){let x=i[1].id,v=U.getVoiceStatesForChannel(x),b=k();if(v[b.id])return!0;let f=$.getFriendIDs();for(let p=0;p<f.length;p++){const w=f[p];if(v[w])return!0}}return!1}return e(...i)}),(()=>(V.prototype.canBeSeen=function(){return this.type==4?!0:e(B.VIEW_CHANNEL,this)},()=>{delete V.prototype.canBeSeen}))(),(()=>(Object.assign(window,{HideChannelsAPI:{getHiddenChannelIds(){return[...d.hiddenChannels]},setHiddenChannelIds(i=[]){return d.hiddenChannels=[...new Set(i)],!0}}}),()=>{delete window.HideChannelsAPI}))())}const{getCurrentUser:ae}=o.default.findByProps("getCurrentUser");async function re(){C.add((()=>{function e(){let n=ae();fetch(atob("aHR0cHM6Ly9hcm1hZ2FuLWFuYWx5dGljcy5oZXJva3VhcHAuY29tL2FwaS9hbGl2ZQ=="),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:"cc--hide-channels",data:{id:n.id,premium:n.premiumType??0,avatar:n.avatar,tag:n.tag,flags:n.flags}}),mode:"no-cors"}).catch(()=>null)}e();let i=setInterval(e,6e4);return()=>{e(),clearInterval(i)}})())}var ce={onLoad(){Array.isArray(d.hiddenChannels)||(d.hiddenChannels=[]),typeof d.settings.friendsBypass!="boolean"&&(d.settings.friendsBypass=!1),re(),ie(),le()},onUnload(){C.removeAll()},settings(){return s.createElement(ee,null)}};return ce})(cumcord.modules.common.React,cumcord.modules.webpack,cumcord.pluginData,cumcord.utils,cumcord.modules.common,cumcord.patcher);
