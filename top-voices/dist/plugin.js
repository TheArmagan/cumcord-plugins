(function(w,L,C,M){"use strict";function f(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}function V(t){if(t&&t.__esModule)return t;var r=Object.create(null);return t&&Object.keys(t).forEach(function(i){if(i!=="default"){var d=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(r,i,d.get?d:{enumerable:!0,get:function(){return t[i]}})}}),r.default=t,Object.freeze(r)}var c=f(w),S=f(L),B=f(C),l=V(M);const O=c.default.findByProps("getUser","findByTag"),j=c.default.findByProps("getGuild","getGuildCount"),k=c.default.findByProps("getChannel","hasChannel"),g=c.default.findByProps("getVoiceState","getUserVoiceChannelId"),D=c.default.findByProps("transitionTo"),e=c.default.findByProps("createElement"),p=findByProps("ModalCloseButton"),{openModal:G}=findByProps("openModal","openModalLazy"),{TooltipContainer:b}=c.default.findByProps("TooltipContainer"),$=c.default.findByProps("isDispatching","dispatch"),s=S.default.persist.store;class P{constructor(){this.patches=[]}add(...r){this.patches.push(...r)}remove(r){let[i]=this.patches.splice(this.patches.indexOf(d=>d==r),1);i()}removeAll(){let r=this.patches.splice(0,this.patches.length);for(let i=0;i<r.length;i++)r[i]()}}var v=new P;function y(t={}){return l.createElement("svg",{width:"60",height:"61",viewBox:"0 0 60 61",fill:"none",className:"tv--icon tv--voice-icon",style:{color:t.color}},l.createElement("path",{d:"M28.4623 8.15497C27.5273 7.77127 26.4523 7.98305 25.7373 8.69565L15.0048 20.4212H7.50479C6.12979 20.4212 5.00479 21.5449 5.00479 22.9128V37.8623C5.00479 39.2327 6.12979 40.354 7.50479 40.354H15.0048L25.7373 52.0844C26.4523 52.7971 27.5273 53.0113 28.4623 52.6251C29.3973 52.2389 30.0048 51.3295 30.0048 50.3204V10.4547C30.0048 9.45061 29.3973 8.53619 28.4623 8.15497ZM35.0048 12.9461V17.9293C41.8973 17.9293 47.5048 23.5205 47.5048 30.3875C47.5048 37.2569 41.8973 42.8456 35.0048 42.8456V47.8288C44.6548 47.8288 52.5048 40.0076 52.5048 30.3875C52.5048 20.7723 44.6548 12.9461 35.0048 12.9461ZM35.0048 22.9126C39.1398 22.9126 42.5048 26.2689 42.5048 30.3875C42.5048 34.5111 39.1398 37.8623 35.0048 37.8623V32.8791C36.3823 32.8791 37.5048 31.7604 37.5048 30.3875C37.5048 29.0146 36.3823 27.8959 35.0048 27.8959V22.9126Z",fill:"currentColor"}))}const E={DANGER:"#eb3d47",SECONDARY:"#8a8e93",SUCCESS:"#3aa360"};function _(t={}){return l.createElement("svg",{viewBox:"0 0 24 24",width:"24",height:"24",className:"tv--icon tv--arrow-down-icon",style:{color:t.color}},l.createElement("path",{d:"M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z",fill:"currentColor"}))}function R(t={}){return l.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"tv--icon tv--deaf-icon",style:{color:t.color}},l.createElement("path",{d:"M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z",fill:"currentColor"}),l.createElement("path",{d:"M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z",fill:"currentColor"}),l.createElement("path",{d:"M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z",fill:"currentColor"}))}function z(t={}){return l.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"tv--icon tv--mute-icon",style:{color:t.color}},l.createElement("path",{d:"M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z",fill:"currentColor"}),l.createElement("path",{d:"M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z",fill:"currentColor"}),l.createElement("path",{d:"M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z",fill:"currentColor"}),l.createElement("path",{d:"M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z",fill:"currentColor"}))}const N=c.default.findByProps("thin","scrollerBase");function A({e:t}){let[r,i]=e.useState([]),[d,x]=e.useState([...s.foldedGuilds]);function m(){let a=Object.entries(g.getAllVoiceStates()).filter(o=>o[0]!="@me").map(o=>({guild:j.getGuild(o[0]),users:Object.entries(o[1]).map(n=>({user:O.getUser(n[0]),state:Object.assign(n[1],{channel:k.getChannel(n[1].channelId)})}))})).sort((o,n)=>n.users.length-o.users.length);a.forEach(o=>{o.channels=[...o.users.reduce((n,u)=>(u.state.channel&&(n.has(u.state.channelId)||n.set(u.state.channelId,{channel:u.state.channel,users:[]}),n.get(u.state.channelId).users.push(u)),n),new Map).values()].sort((n,u)=>u.users.length-n.users.length)}),i(a.filter(o=>!!o.users?.length&&!!o.guild?.id))}function Y(a){s.foldedGuilds.includes(a)?s.foldedGuilds.splice(s.foldedGuilds.indexOf(a),1):s.foldedGuilds.push(a),s.foldedGuilds=[...s.foldedGuilds],x([...s.foldedGuilds])}return e.useEffect(()=>(m(),g.addChangeListener(m),()=>g.removeChangeListener(m)),[]),e.createElement(p.ModalRoot,{transitionState:t.transitionState,size:"large",className:"tv--modal"},e.createElement(p.ModalHeader,{separator:!1,className:"tv--modal-header"},e.createElement("h2",null,"Top Voices"),e.createElement(p.ModalCloseButton,{onClick:t.onClose,className:"tv--modal-close"})),e.createElement(p.ModalContent,{className:"tv--modal-content"},r.map(a=>e.createElement("div",{className:`guild ${d.includes(a.guild.id)?"folded":""}`},e.createElement("div",{className:"header"},e.createElement("div",{class:"info"},e.createElement("div",{className:"icon",style:{backgroundImage:`url("https://cdn.discordapp.com/icons/${a.guild.id}/${a.guild.icon}.png")`}}),e.createElement("div",{className:"name"},a.guild.name)),e.createElement("div",{className:"right"},e.createElement("div",{className:`fold ${d.includes(a.guild.id)?"folded":""}`,onClick:()=>{Y(a.guild.id)}},e.createElement(_,null)),e.createElement("div",{className:"user-count"},a.users.length))),e.createElement("div",{className:`content ${N.thin}`},d.includes(a.guild.id)?null:a.channels.map(o=>e.createElement("div",{className:"channel"},e.createElement("div",{className:"header"},e.createElement("div",{className:"info",onClick:n=>{n.preventDefault(),D.transitionTo(`/channels/${a.guild.id}/${o.channel.id}`),t.onClose()}},e.createElement(y,null),e.createElement("div",{className:"name"},o.channel.name)),e.createElement("div",{className:"user-count"},o.users.length)),e.createElement("div",{className:`content ${N.thin}`},o.users.map(n=>e.createElement("div",{className:"user",onClick:u=>{u.preventDefault(),$.dispatch({type:"USER_PROFILE_MODAL_OPEN",userId:n.user.id})}},e.createElement(b,{key:`tv--user-tooltip-${a.guild.id}-${n.user.id}`,text:`${n.user.username}#${n.user.discriminator}`,position:"top"},e.createElement("div",{className:"avatar",style:{backgroundImage:`url("${n.user.avatar?`https://cdn.discordapp.com/avatars/${n.user.id}/${n.user.avatar}.${n.user.avatar.startsWith("a_")?"gif":"png"}`:`https://cdn.discordapp.com/embed/avatars/${Number(n.user.discriminator)%5}.png`}")`}},n.state.isVoiceDeafened()?e.createElement("div",{className:"icon-container"},e.createElement(R,{color:E[n.state.deaf?"DANGER":"SECONDARY"]})):n.state.isVoiceMuted()?e.createElement("div",{className:"icon-container"},e.createElement(z,{color:E[n.state.mute?"DANGER":"SECONDARY"]})):null))))))))))))}async function I(){G(t=>l.createElement(A,{e:t}))}const{createElement:h}=e;function H(){const t=c.default.find(d=>d?.default?.displayName=="HeaderBar"),r=findByProps("divider","hamburger","container"),i=B.default.after("default",t,([d],x)=>{try{let m=x.props.children.props.children[1].props.children.props.children;console.log(m),m[1]==null&&m.push(h("div",{className:r.divider}),h("div",{className:"tv--button-container",onClick(){I()}},[h(b,{className:"tv--tooltip",text:"Top Voices"},[h(y,{color:"#b9bbbe"})])]))}catch(m){console.error(m)}});v.add(i)}var Z=()=>C.injectCSS(".tv--button-container{display:flex;align-items:center;margin:0 8px;z-index:1}.tv--button-container .tv--icon{width:24px;height:24px;cursor:pointer;transition:filter .1s ease-in-out}.tv--button-container .tv--icon:hover{filter:brightness(1.2)}.tv--tooltip{display:flex}.tv--modal{max-height:600px;max-width:1000px;height:100%;width:100%;margin:16px;border-radius:8px;background-color:#36393f;z-index:2}.tv--modal .tv--modal-header{display:flex;align-items:center;justify-content:space-between;padding:16px}.tv--modal .tv--modal-header h2{font-size:25px;font-weight:600;color:#b9bbbe}.tv--modal .tv--modal-content{padding:16px;display:flex;flex-direction:column}.tv--modal .tv--modal-content>.guild{display:flex;flex-direction:column;padding:8px;background-color:#2f3136;border-radius:8px;margin-bottom:8px;color:#f5f5f5}.tv--modal .tv--modal-content>.guild>.header{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.tv--modal .tv--modal-content>.guild>.header>.info{display:flex;align-items:center}.tv--modal .tv--modal-content>.guild>.header>.info .icon{margin-right:8px;width:26px;height:26px;border-radius:4px;background-size:contain;background-position:center}.tv--modal .tv--modal-content>.guild>.header>.info .name{font-size:18px}.tv--modal .tv--modal-content>.guild>.header>.right{display:flex}.tv--modal .tv--modal-content>.guild>.header>.right>.user-count{border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;background-color:#202225;font-size:12px;color:#f5f5f5}.tv--modal .tv--modal-content>.guild>.header>.right>.fold{border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;margin-right:4px;cursor:pointer;color:#b9bbbe;transition:transform .1s ease-in-out}.tv--modal .tv--modal-content>.guild>.header>.right>.fold.folded{transform:rotate(-90deg)}.tv--modal .tv--modal-content>.guild>.header>.right>.fold svg{width:26px;height:26px}.tv--modal .tv--modal-content>.guild.folded>.header{margin-bottom:0}.tv--modal .tv--modal-content>.guild>.content{display:flex;flex-direction:column;max-height:200px;contain:content;overflow-y:auto;margin-left:28px}.tv--modal .tv--modal-content>.guild>.content>.channel{padding:4px}.tv--modal .tv--modal-content>.guild>.content>.channel>.header{display:flex;align-items:center;justify-content:space-between;color:#b9bbbe}.tv--modal .tv--modal-content>.guild>.content>.channel>.header>.info{display:flex;cursor:pointer}.tv--modal .tv--modal-content>.guild>.content>.channel>.header>.info>svg{width:18px;height:18px;margin-right:8px}.tv--modal .tv--modal-content>.guild>.content>.channel>.header>.info>.name{font-size:16px}.tv--modal .tv--modal-content>.guild>.content>.channel>.header>.user-count{border-radius:50%;width:20px;height:20px;display:flex;align-items:center;justify-content:center;background-color:#202225;font-size:12px}.tv--modal .tv--modal-content>.guild>.content>.channel>.content{display:flex;flex-wrap:wrap;margin-bottom:4px;margin-left:24px}.tv--modal .tv--modal-content>.guild>.content>.channel>.content>.user{cursor:pointer}.tv--modal .tv--modal-content>.guild>.content>.channel>.content>.user .avatar{width:25px;height:25px;background-position:center;background-size:contain;border-radius:50%;display:flex;align-items:flex-end;justify-content:flex-end;margin-right:4px;margin-top:4px;border:2px solid #202225;background-color:#131416}.tv--modal .tv--modal-content>.guild>.content>.channel>.content>.user .avatar .icon-container{width:14px;height:14px;display:flex;align-items:center;justify-content:center;background-color:#202225;border-radius:50%;margin-right:-2px;margin-bottom:-2px}.tv--modal .tv--modal-content>.guild>.content>.channel>.content>.user .avatar .icon-container .tv--icon{width:12px;height:12px}");function T(){const t=Z();v.add(t)}var U={onLoad(){Array.isArray(s.foldedGuilds)||(s.foldedGuilds=[]),H(),T()},onUnload(){v.removeAll()}};return U})(cumcord.modules.webpack,cumcord.pluginData,cumcord.patcher,cumcord.modules.common.React);
