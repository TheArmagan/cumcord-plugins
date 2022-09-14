(function(se,m,H,oe,ae,Z){"use strict";function w(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}function ce(t){if(t&&t.__esModule)return t;var e=Object.create(null);return t&&Object.keys(t).forEach(function(n){if(n!=="default"){var i=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,i.get?i:{enumerable:!0,get:function(){return t[n]}})}}),e.default=t,Object.freeze(e)}var a=ce(se),le=w(H),c=w(oe),de=w(ae),v=w(Z);const fe=c.default.findByProps("getGuild","getGuildCount"),Y=c.default.findByProps("getDMFromUserId","getDMUserIds","getChannel"),I=c.default.findByProps("getVoiceState","getUserVoiceChannelId"),ue=c.default.findByProps("transitionTo"),l=c.default.findByProps("createElement"),g=c.default.findByProps("getUser","getCurrentUser"),C=c.default.findByProps("ModalCloseButton"),he=c.default.findByDisplayName("Switch"),{openModal:pe}=c.default.findByProps("openModal","openModalLazy"),z=c.default.findByProps("getChannelPermissions"),{Permissions:G}=de.default.constants,{selectVoiceChannel:me}=c.default.findByProps("selectVoiceChannel","disconnect"),{TooltipContainer:k}=c.default.findByProps("TooltipContainer"),ve=c.default.findByProps("acceptInvite","acceptInviteAndTransitionToInviteChannel"),ge=c.default.findByProps("isDispatching","dispatch"),{getUser:be}=c.default.findByProps("getUser","fetchProfile");function ye(){return H.useNest(m.persist),l.createElement("div",{className:"vi--settings-container"},l.createElement("div",{className:"settings"},l.createElement("div",{className:"line"},l.createElement("div",{class:"content"},l.createElement("h2",null,"Do Not Share Private Data"),l.createElement("p",null,"When this setting is on, your private information will not be shared with the other party. However, you will not be able to see other people's private information.")),l.createElement("div",{className:"switch"},l.createElement(he,{checked:m.persist.ghost.settings?.redacted??!1,onChange:t=>{m.persist.store.settings.redacted=t}})))))}var x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ee(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var F={},J={};Object.defineProperty(J,"__esModule",{value:!0});var M={};Object.defineProperty(M,"__esModule",{value:!0}),M.ConstantBackoff=void 0;var we=function(){function t(e){this.reset=function(){},this.backoff=e}return t.prototype.next=function(){return this.backoff},t}();M.ConstantBackoff=we;var L={};Object.defineProperty(L,"__esModule",{value:!0}),L.ExponentialBackoff=void 0;var Ce=function(){function t(e,n){this.initial=e,this.expMax=n,this.expCurrent=1,this.current=this.initial}return t.prototype.next=function(){var e=this.current;return this.expMax>this.expCurrent++&&(this.current=this.current*2),e},t.prototype.reset=function(){this.expCurrent=1,this.current=this.initial},t}();L.ExponentialBackoff=Ce;var N={};Object.defineProperty(N,"__esModule",{value:!0}),N.LinearBackoff=void 0;var ke=function(){function t(e,n,i){this.initial=e,this.increment=n,this.maximum=i,this.current=this.initial}return t.prototype.next=function(){var e=this.current,n=this.current+this.increment;return this.maximum===void 0?this.current=n:n<=this.maximum&&(this.current=n),e},t.prototype.reset=function(){this.current=this.initial},t}();N.LinearBackoff=ke;var q={};Object.defineProperty(q,"__esModule",{value:!0});var P={};Object.defineProperty(P,"__esModule",{value:!0}),P.LRUBuffer=void 0;var xe=function(){function t(e){this.writePtr=0,this.wrapped=!1,this.buffer=Array(e)}return t.prototype.len=function(){return this.wrapped?this.buffer.length:this.writePtr},t.prototype.cap=function(){return this.buffer.length},t.prototype.read=function(e){if(e==null||e.length===0||this.buffer.length===0||this.writePtr===0&&!this.wrapped)return 0;for(var n=this.wrapped?this.writePtr:0,i=n-1<0?this.buffer.length-1:n-1,r=0;r<e.length;r++){var o=(n+r)%this.buffer.length;if(e[r]=this.buffer[o],o===i)return r+1}return e.length},t.prototype.write=function(e){if(e==null||e.length===0||this.buffer.length===0)return 0;for(var n=e.length>this.buffer.length?e.length-this.buffer.length:0,i=0;i<e.length-n;i++)this.buffer[this.writePtr]=e[n+i],this.writePtr=(this.writePtr+1)%this.buffer.length,this.writePtr===0&&(this.wrapped=!0);return e.length},t.prototype.forEach=function(e){if(this.writePtr===0&&!this.wrapped)return 0;for(var n=this.wrapped?this.writePtr:0,i=this.wrapped?n-1<0?this.buffer.length-1:n-1:this.writePtr-1,r=this.len();e(this.buffer[n]),n!==i;)n=(n+1)%this.buffer.length;return r},t.prototype.clear=function(){this.writePtr=0,this.wrapped=!1},t}();P.LRUBuffer=xe;var _={};Object.defineProperty(_,"__esModule",{value:!0}),_.TimeBuffer=void 0;var Me=function(){function t(e){this.maxAge=e}return t.prototype.cap=function(){return Number.POSITIVE_INFINITY},t.prototype.len=function(){this.forwardTail();for(var e=this.tail,n=0;e!==void 0;)n++,e=e.n;return n},t.prototype.read=function(e){if(this.forwardTail(),e.length===0)return 0;for(var n=this.tail,i=0;n!==void 0&&(e[i++]=n.e,i!==e.length);)n=n.n;return i},t.prototype.write=function(e){for(var n=0;n<e.length;n++)this.putElement(e[n]);return e.length},t.prototype.forEach=function(e){this.forwardTail();for(var n=this.tail,i=0;n!==void 0;)e(n.e),i++,n=n.n;return i},t.prototype.putElement=function(e){var n={e,t:Date.now(),n:void 0};this.tail===void 0&&(this.tail=n),this.head===void 0?this.head=n:(this.head.n=n,this.head=n)},t.prototype.forwardTail=function(){if(this.tail!==void 0)for(var e=Date.now();e-this.tail.t>this.maxAge&&(this.tail===this.head?(this.tail=void 0,this.head=void 0):this.tail=this.tail.n,this.tail!==void 0););},t.prototype.clear=function(){},t}();_.TimeBuffer=Me;var R={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.Websocket=t.WebsocketEvents=void 0;var e;(function(i){i.open="open",i.close="close",i.error="error",i.message="message",i.retry="retry"})(e=t.WebsocketEvents||(t.WebsocketEvents={}));var n=function(){function i(r,o,s,d){var f=this;this.eventListeners={open:[],close:[],error:[],message:[],retry:[]},this.closedByUser=!1,this.retries=0,this.handleOpenEvent=function(u){return f.handleEvent(e.open,u)},this.handleCloseEvent=function(u){return f.handleEvent(e.close,u)},this.handleErrorEvent=function(u){return f.handleEvent(e.error,u)},this.handleMessageEvent=function(u){return f.handleEvent(e.message,u)},this.url=r,this.protocols=o,this.buffer=s,this.backoff=d,this.tryConnect()}return Object.defineProperty(i.prototype,"underlyingWebsocket",{get:function(){return this.websocket},enumerable:!1,configurable:!0}),i.prototype.send=function(r){var o;this.closedByUser||(this.websocket===void 0||this.websocket.readyState!==this.websocket.OPEN?(o=this.buffer)===null||o===void 0||o.write([r]):this.websocket.send(r))},i.prototype.close=function(r,o){var s;this.closedByUser=!0,(s=this.websocket)===null||s===void 0||s.close(r,o)},i.prototype.addEventListener=function(r,o,s){var d={listener:o,options:s},f=this.eventListeners[r];f.push(d)},i.prototype.removeEventListener=function(r,o,s){this.eventListeners[r]=this.eventListeners[r].filter(function(d){return d.listener!==o&&(d.options===void 0||d.options!==s)})},i.prototype.dispatchEvent=function(r,o){var s=this,d=this.eventListeners[r],f=[];d.forEach(function(u){u.listener(s,o),u.options!==void 0&&u.options.once&&f.push(u)}),f.forEach(function(u){return s.removeEventListener(r,u.listener,u.options)})},i.prototype.tryConnect=function(){this.websocket!==void 0&&(this.websocket.removeEventListener(e.open,this.handleOpenEvent),this.websocket.removeEventListener(e.close,this.handleCloseEvent),this.websocket.removeEventListener(e.error,this.handleErrorEvent),this.websocket.removeEventListener(e.message,this.handleMessageEvent),this.websocket.close()),this.websocket=new WebSocket(this.url,this.protocols),this.websocket.addEventListener(e.open,this.handleOpenEvent),this.websocket.addEventListener(e.close,this.handleCloseEvent),this.websocket.addEventListener(e.error,this.handleErrorEvent),this.websocket.addEventListener(e.message,this.handleMessageEvent)},i.prototype.handleEvent=function(r,o){var s,d,f;switch(r){case e.close:this.closedByUser||this.reconnect();break;case e.open:this.retries=0,(s=this.backoff)===null||s===void 0||s.reset(),(d=this.buffer)===null||d===void 0||d.forEach(this.send.bind(this)),(f=this.buffer)===null||f===void 0||f.clear();break}this.dispatchEvent(r,o)},i.prototype.reconnect=function(){var r=this;if(this.backoff!==void 0){var o=this.backoff.next();setTimeout(function(){r.dispatchEvent(e.retry,new CustomEvent(e.retry,{detail:{retries:++r.retries,backoff:o}})),r.tryConnect()},o)}},i}();t.Websocket=n})(R);var B={};Object.defineProperty(B,"__esModule",{value:!0}),B.WebsocketBuilder=void 0;var b=R,Le=function(){function t(e){this.ws=null,this.onOpenListeners=[],this.onCloseListeners=[],this.onErrorListeners=[],this.onMessageListeners=[],this.onRetryListeners=[],this.url=e}return t.prototype.withProtocols=function(e){return this.protocols=e,this},t.prototype.withBackoff=function(e){return this.backoff=e,this},t.prototype.withBuffer=function(e){return this.buffer=e,this},t.prototype.onOpen=function(e,n){return this.onOpenListeners.push({listener:e,options:n}),this},t.prototype.onClose=function(e,n){return this.onCloseListeners.push({listener:e,options:n}),this},t.prototype.onError=function(e,n){return this.onErrorListeners.push({listener:e,options:n}),this},t.prototype.onMessage=function(e,n){return this.onMessageListeners.push({listener:e,options:n}),this},t.prototype.onRetry=function(e,n){return this.onRetryListeners.push({listener:e,options:n}),this},t.prototype.build=function(){var e=this;return this.ws!==null?this.ws:(this.ws=new b.Websocket(this.url,this.protocols,this.buffer,this.backoff),this.onOpenListeners.forEach(function(n){var i;return(i=e.ws)===null||i===void 0?void 0:i.addEventListener(b.WebsocketEvents.open,n.listener,n.options)}),this.onCloseListeners.forEach(function(n){var i;return(i=e.ws)===null||i===void 0?void 0:i.addEventListener(b.WebsocketEvents.close,n.listener,n.options)}),this.onErrorListeners.forEach(function(n){var i;return(i=e.ws)===null||i===void 0?void 0:i.addEventListener(b.WebsocketEvents.error,n.listener,n.options)}),this.onMessageListeners.forEach(function(n){var i;return(i=e.ws)===null||i===void 0?void 0:i.addEventListener(b.WebsocketEvents.message,n.listener,n.options)}),this.onRetryListeners.forEach(function(n){var i;return(i=e.ws)===null||i===void 0?void 0:i.addEventListener(b.WebsocketEvents.retry,n.listener,n.options)}),this.ws)},t}();B.WebsocketBuilder=Le,function(t){var e=x&&x.__createBinding||(Object.create?function(i,r,o,s){s===void 0&&(s=o),Object.defineProperty(i,s,{enumerable:!0,get:function(){return r[o]}})}:function(i,r,o,s){s===void 0&&(s=o),i[s]=r[o]}),n=x&&x.__exportStar||function(i,r){for(var o in i)o!=="default"&&!Object.prototype.hasOwnProperty.call(r,o)&&e(r,i,o)};Object.defineProperty(t,"__esModule",{value:!0}),n(J,t),n(M,t),n(L,t),n(N,t),n(q,t),n(P,t),n(_,t),n(R,t),n(B,t)}(F);var S=Ee(F);function Ne(){return Object.fromEntries(Object.values(I.getAllVoiceStates()).map(t=>Object.values(t)).flat().map(t=>[t.userId,Q(t)]).filter(t=>t[1]))}function K(t){let e=I.getVoiceStatesForChannel(t);return e?Object.keys(e).map(n=>{let i=g.getUser(n);return{id:i?.id,tag:i?.tag,avatar:i?.avatar,states:j(i?.id)?.states}}).filter(n=>n?.id):[]}function j(t){let e=I.getVoiceStateForUser(t);return e?Q(e):null}function Q(t){let e=m.persist.ghost.settings?.redacted??!1,n=Y.getChannel(t.channelId),i=fe.getGuild(n?.guild_id),r=g.getUser(t.userId);return{states:{deaf:t.deaf,mute:t.mute,selfDeaf:t.selfDeaf,selfMute:t.selfMute,selfStream:t.selfStream,selfVideo:t.selfVideo,suppress:t.suppress},isPrivate:!i,user:{id:t.userId,tag:r.tag,avatar:r?.avatar},channel:n?{id:n.id,name:e?"Unknown":n.name||[...new Map([...n.recipients.map(o=>[o,g.getUser(o)]),[g.getCurrentUser().id,g.getCurrentUser()]]).values()].filter(o=>o).map(o=>o.username).sort((o,s)=>o>s).join(", ")||"Unknown",icon:e?void 0:n?.icon,redacted:e}:void 0,guild:i?{id:i.id,name:i.name,vanity:i?.vanityURLCode,icon:i?.icon}:void 0}}function O(){let t=g.getCurrentUser();return{id:t.id,tag:t.tag,avatar:t.avatar}}async function Pe(t,e,n){switch(t){case"ping":{n({ok:!0,data:"pong",from:O()});break}case"voiceStates":{n({ok:!0,data:Ne(),from:O()});break}case"voiceState":{n({ok:!0,data:j(e),from:O()});break}case"voiceMembers":{n({ok:!0,data:K(e),from:O()});break}}}const _e="wss://cc--voicestates.armagan.rest/ws",D=new S.WebsocketBuilder(_e).withBackoff(new S.LinearBackoff(0,1e3,1e4)).withBuffer(new S.TimeBuffer(6e4*5)).build(),V=new Map;setInterval(()=>{V.forEach((t,e)=>{Date.now()>t.at+t.timeout&&(V.delete(e),t.resolve({ok:!1,error:"timeout"}))})},1e3),D.addEventListener(S.WebsocketEvents.message,async(t,e)=>{let[n,i]=JSON.parse(e.data);switch(n){case":response":{let r=V.get(i[0]);if(!r)return;r.resolve(i[1]);break}case":request":{Pe(i[0]??"",i[1]??{},r=>{D.send(JSON.stringify([":response",[i[2],r]]))});break}}});function X(t,e,n=1/0){return new Promise(i=>{let r=Math.random().toString(36).slice(2);V.set(r,{at:Date.now(),timeout:n,resolve:i}),D.send(JSON.stringify([":request",[t,e,r]]))})}class Be{constructor(){this.patches=[]}add(...e){this.patches.push(...e)}remove(e){let[n]=this.patches.splice(this.patches.indexOf(i=>i==e),1);n()}removeAll(){let e=this.patches.splice(0,this.patches.length);for(let n=0;n<e.length;n++)e[n]()}}var p=new Be;class Se{constructor(){this.listeners=new Map}_prepareListenersMap(e){this.listeners.has(e)||this.listeners.set(e,new Map)}on(e,n){this._prepareListenersMap(e),this.listeners.get(e).set(n,{once:!1})}once(e,n){this._prepareListenersMap(e),this.listeners.get(e)?.set(n,{once:!0})}off(e,n){if(!e)return this.listeners=new Map;if(!n)return this.listeners?.delete(e);this.listeners.get(e)?.delete(n)}emit(e,...n){if(!this.listeners.has(e))return;let i=this.listeners.get(e);i.forEach(({once:r},o)=>{r&&i?.delete(o),o(...n)})}addEventListener(e,n,i={once:!1}){this[i.once?"once":"on"](e,n)}removeEventListener(e,n){this.off(e,n)}addListener(e,n,i={once:!1}){this[i.once?"once":"on"](e,n)}removeListener(e,n){this.off(e,n)}}const E=new Se;p.add((()=>{let t=setInterval(()=>{E.emit("check")},1e3);return()=>{clearInterval(t)}})());const y=new Map;setInterval(()=>{y.forEach((t,e)=>{Date.now()-t.at>t.ttl&&y.delete(e)})},1e3);async function Oe(t){let e=j(t);if(!e){let n=y.get(`Users:${t}`);if(n&&!(Date.now()-n.at>1e3))return n.state;e=(await X("voiceState",t))?.data,y.set(`Users:${t}`,{at:Date.now(),state:e,ttl:1e3})}return e}async function De(t){let e=K(t);if(!e.length){let n=y.get(`VoiceMembers:${t}`);if(n&&!(Date.now()-n.at>1e3))return n.members;e=(await X("voiceMembers",t))?.data,y.set(`VoiceMembers:${t}`,{at:Date.now(),members:e,ttl:1e3})}return e}const h={DANGER:"#eb3d47",SECONDARY:"#8a8e93",SUCCESS:"#3aa360",PRIMARY:"#5865f2"};function ee(t={}){return a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"vi--icon vi--arrow-icon",style:{color:t.color}},a.createElement("polygon",{fill:"currentColor","fill-rule":"nonzero",points:"13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"}))}function te(t={}){return a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"vi--icon vi--deaf-icon",style:{color:t.color}},a.createElement("path",{d:"M6.16204 15.0065C6.10859 15.0022 6.05455 15 6 15H4V12C4 7.588 7.589 4 12 4C13.4809 4 14.8691 4.40439 16.0599 5.10859L17.5102 3.65835C15.9292 2.61064 14.0346 2 12 2C6.486 2 2 6.485 2 12V19.1685L6.16204 15.0065Z",fill:"currentColor"}),a.createElement("path",{d:"M19.725 9.91686C19.9043 10.5813 20 11.2796 20 12V15H18C16.896 15 16 15.896 16 17V20C16 21.104 16.896 22 18 22H20C21.105 22 22 21.104 22 20V12C22 10.7075 21.7536 9.47149 21.3053 8.33658L19.725 9.91686Z",fill:"currentColor"}),a.createElement("path",{d:"M3.20101 23.6243L1.7868 22.2101L21.5858 2.41113L23 3.82535L3.20101 23.6243Z",fill:"currentColor"}))}function Ve(t={}){return a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"vi--icon vi--join-call-icon",style:{color:t.color}},a.createElement("path",{fill:"currentColor","fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 5V3C16.515 3 21 7.486 21 13H19C19 8.589 15.411 5 11 5ZM17 13H15C15 10.795 13.206 9 11 9V7C14.309 7 17 9.691 17 13ZM11 11V13H13C13 11.896 12.105 11 11 11ZM14 16H18C18.553 16 19 16.447 19 17V21C19 21.553 18.553 22 18 22H13C6.925 22 2 17.075 2 11V6C2 5.447 2.448 5 3 5H7C7.553 5 8 5.447 8 6V10C8 10.553 7.553 11 7 11H6C6.063 14.938 9 18 13 18V17C13 16.447 13.447 16 14 16Z"}))}function ne(t={}){return a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"vi--icon vi--mute-icon",style:{color:t.color}},a.createElement("path",{d:"M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z",fill:"currentColor"}),a.createElement("path",{d:"M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z",fill:"currentColor"}),a.createElement("path",{d:"M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z",fill:"currentColor"}),a.createElement("path",{d:"M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z",fill:"currentColor"}))}function ie(t={}){return a.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",className:"vi--icon vi--video-icon",style:{color:t.color}},a.createElement("path",{d:"M21.526 8.149C21.231 7.966 20.862 7.951 20.553 8.105L18 9.382V7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.104 2.897 19 4 19H16C17.103 19 18 18.104 18 17V14.618L20.553 15.894C20.694 15.965 20.847 16 21 16C21.183 16 21.365 15.949 21.526 15.851C21.82 15.668 22 15.347 22 15V9C22 8.653 21.82 8.332 21.526 8.149Z",fill:"currentColor"}))}function A(t={}){return a.createElement("svg",{width:"60",height:"61",viewBox:"0 0 60 61",fill:"none",className:"vi--icon vi--voice-icon",style:{color:t.color}},a.createElement("path",{d:"M28.4623 8.15497C27.5273 7.77127 26.4523 7.98305 25.7373 8.69565L15.0048 20.4212H7.50479C6.12979 20.4212 5.00479 21.5449 5.00479 22.9128V37.8623C5.00479 39.2327 6.12979 40.354 7.50479 40.354H15.0048L25.7373 52.0844C26.4523 52.7971 27.5273 53.0113 28.4623 52.6251C29.3973 52.2389 30.0048 51.3295 30.0048 50.3204V10.4547C30.0048 9.45061 29.3973 8.53619 28.4623 8.15497ZM35.0048 12.9461V17.9293C41.8973 17.9293 47.5048 23.5205 47.5048 30.3875C47.5048 37.2569 41.8973 42.8456 35.0048 42.8456V47.8288C44.6548 47.8288 52.5048 40.0076 52.5048 30.3875C52.5048 20.7723 44.6548 12.9461 35.0048 12.9461ZM35.0048 22.9126C39.1398 22.9126 42.5048 26.2689 42.5048 30.3875C42.5048 34.5111 39.1398 37.8623 35.0048 37.8623V32.8791C36.3823 32.8791 37.5048 31.7604 37.5048 30.3875C37.5048 29.0146 36.3823 27.8959 35.0048 27.8959V22.9126Z",fill:"currentColor"}))}const Te=c.default.findByProps("thin","scrollerBase");function Ie({e:t,data:e}){let[n,i]=a.useState([]),r=!1;async function o(){if(r)return;r=!0;let s=await De(e.state.channel.id);r=!1,i(s)}return a.useEffect(()=>(o(),E.on("check",o),()=>E.off("check",o)),[]),a.createElement(C.ModalRoot,{transitionState:t.transitionState,size:"large",className:"vi--modal"},a.createElement(C.ModalHeader,{separator:!1,className:"vi--modal-header"},a.createElement("div",{className:"title-container"},a.createElement("div",{className:"icon",style:{backgroundImage:e.state.guild?`url('https://cdn.discordapp.com/icons/${e.state.guild.id}/${e.state.guild.icon}.png?size=128')`:e.state.channel?`url('https://cdn.discordapp.com/channel-icons/${e.state.channel.id}/${e.state.channel.icon}.png?size=128')`:null}}),a.createElement("div",{className:"title"},a.createElement("div",{className:"guild"},e.state.isPrivate?"Private Call":e.state.guild.name),!e.state?.guild?.vanity||e.inMyChannels?null:a.createElement("div",{className:"vanity",onClick:s=>{s.preventDefault(),e.state?.guild?.vanity&&(ve.acceptInviteAndTransitionToInviteChannel({inviteKey:e.state?.guild?.vanity}),t.onClose())}},a.createElement(k,{key:"vi--tooltip-show-channel",text:"Join Guild",position:"top",className:"vi--tooltip"},a.createElement(ee,{color:h.PRIMARY}))))),a.createElement(C.ModalCloseButton,{onClick:t.onClose,className:"vi--modal-close"})),a.createElement(C.ModalContent,{className:"vi--modal-content"},a.createElement("div",{className:"channel"},a.createElement("div",{className:"name-container"},a.createElement("div",{className:"name"},a.createElement(A,null),e.state.channel?.name||"Unknown"),a.createElement("div",{className:"controls"},a.createElement("div",{className:`control ${e.isJoinable?"":"vi--cant-click vi--cant-join"}`,onClick:s=>{s.preventDefault(),e.isJoinable&&(me(e.state.channel.id),t.onClose())}},a.createElement(k,{key:"vi--tooltip-join-call",text:e.isJoinable?"Connect":"Can't Connect",position:"top",className:"vi--tooltip"},a.createElement(Ve,{color:h.SECONDARY}))),a.createElement("div",{className:`control ${e.inMyChannels?"":"vi--cant-click"}`,onClick:s=>{s.preventDefault(),e.inMyChannels&&(ue.transitionTo(`/channels/${e.state.guild?e.state.guild.id:"@me"}/${e.state.channel.id}`),t.onClose())}},a.createElement(k,{key:"vi--tooltip-show-channel",text:e.inMyChannels?"Show Channel":"Can't Show Channel",position:"top",className:"vi--tooltip"},a.createElement(ee,{color:h.SECONDARY}))))),a.createElement("div",{className:"members-container"},a.createElement("div",{className:`members ${Te.thin}`},n.map(s=>a.createElement("div",{className:"member",onClick:async d=>{d.preventDefault(),await be(s.id),ge.dispatch({type:"USER_PROFILE_MODAL_OPEN",userId:s.id})}},a.createElement("div",{className:"avatar",style:{backgroundImage:`url("${s.avatar?`https://cdn.discordapp.com/avatars/${s.id}/${s.avatar}.png?size=128`:`https://cdn.discordapp.com/embed/avatars/${Number(s.tag.split("#")[1])%5}.png`}")`}}),a.createElement("div",{className:"about"},a.createElement("div",{className:"name-container"},a.createElement("div",{className:"name"},s.tag.split("#")[0]),a.createElement("div",{className:"discriminator"},"#",s.tag.split("#")[1])),a.createElement("div",{className:"state vi--icon-container"},s.states.selfDeaf||s.states.deaf?a.createElement(te,{color:h[s.states.deaf?"DANGER":"SECONDARY"]}):s.states.selfMute||s.states.mute||s.states.suppress?a.createElement(ne,{color:h[s.states.mute?"DANGER":"SECONDARY"]}):s.states.selfVideo?a.createElement(ie,{color:h.SECONDARY}):s.states.selfStream?a.createElement("div",{className:"v--icon vi--red-dot"}):a.createElement(A,{color:h.SECONDARY}))))))))))}async function Re(t){pe(e=>a.createElement(Ie,{e,data:t}))}function T({userId:t}){let[e,n]=l.useState({state:null,inMyChannels:!1,isJoinable:!1}),i=!1;async function r(){if(i)return;i=!0;let o=await Oe(t);i=!1;let s=Y.getChannel(o?.channel?.id);n({state:o,inMyChannels:!!s,isJoinable:s?s.type==3?!0:z.can(G.CONNECT,s)&&z.can(G.VIEW_CHANNEL,s):!1})}return l.useEffect(()=>(r(),E.on("check",r),()=>E.off("check",r)),[]),e?.state?.states?l.createElement("div",{className:"vi--container"},l.createElement(k,{key:`vi--tooltip-${t}`,text:`${e.inMyChannels?"\u2705":"\u274C"} ${e.state.guild?e.state.guild?.name||"Unknown Guild":"Private Call"} > ${e.state.channel?.name||"Plugin Deprecated"}`,position:"top",className:"vi--tooltip"},l.createElement("span",{className:`vi--icon-container ${e.inMyChannels?"":"vi--cant-join"} ${m.persist.ghost.settings?.redacted||e.state.isPrivate&&e.state.channel?.redacted?"vi--cant-click":""}`,onClick:o=>{o.preventDefault(),!(m.persist.ghost.settings?.redacted||e.state.isPrivate&&e.state.channel?.redacted)&&Re(e)}},e.state.states.selfDeaf||e.state.states.deaf?l.createElement(te,{color:h[e.state.states.deaf?"DANGER":"SECONDARY"]}):e.state.states.selfMute||e.state.states.mute||e.state.states.suppress?l.createElement(ne,{color:h[e.state.states.mute?"DANGER":"SECONDARY"]}):e.state.states.selfVideo?l.createElement(ie,{color:h.SECONDARY}):e.state.states.selfStream?l.createElement("div",{className:"v--icon vi--red-dot"}):l.createElement(A,{color:h.SECONDARY})))):null}const{createElement:U,createContext:je}=l;function Ae(){const t=je(),e=c.default.find(o=>o?.default?.displayName==="AvatarWithText"),{default:n}=c.default.findByProps("DirectMessage"),i=v.default.after("render",n.prototype,function(o,s){return U(t.Provider,{value:this.props.user},s)}),r=v.default.before("default",e,([o])=>{o.decorators=[o.decorators,U(t.Consumer,{children:s=>s?U(T,{userId:s.id}):null})]});p.add(r,i)}const $=new Map;function Ue(t){const e=le.default.getReactInstance(t),n=[];let i=e;for(;i&&i.return&&typeof i.return.type!="string";)i.return.type&&n.push(i.return.type),i=i.return;return n}async function re(t=0){return new Promise(e=>setTimeout(e,t))}async function $e(t,e){if($.has(t))return $.get(t);let n;for(;;){const i=document.querySelectorAll(e);if(!i.length){await re(100);continue}for(const r of i)if(n=Ue(r).find(s=>s?.displayName==t),n)break;if(n)break;await re(100)}return $.set(t,n),n}const{createElement:We}=l;async function He(){const t=await $e("MemberListItem",'[class*="member-"][class*="container-"]'),e=v.default.after("renderDecorators",t.prototype,function(n,i){try{const r=i?.props?.children;if(!Array.isArray(r))return;r.unshift(We(T,{userId:this.props.user.id}))}catch(r){console.error("Error while patching MemberListItem:",r)}});p.add(e)}const{createElement:Ze}=l;function Ye(){const t=c.default.find(n=>n?.default?.displayName=="MessageHeader"),e=v.default.after("default",t,([n],i)=>{try{const r=i?.props?.username?.props?.children;if(!Array.isArray(r))return;r.splice(2,0,Ze(T,{userId:n.message.author.id}))}catch(r){console.error("Error while patching MessageTimestamp:",r)}});p.add(e)}const{createElement:W,createContext:ze}=a;function Ge(){const t=ze(),e=c.default.find(o=>o.default?.displayName==="DiscordTag"),n=c.default.find(o=>o.default?.displayName==="NameTag"),i=v.default.after("default",e,([{user:o}],s)=>W(t.Provider,{value:o},s)),r=v.default.after("default",n,([o],s)=>{const d=s?.props;if(!!Array.isArray(d.children)){try{d.children.push(W(t.Consumer,{children:f=>f?W(T,{userId:f.id}):null}))}catch(f){console.error(`Failed to inject into NameTag:
`,f)}return s}});p.add(i,r)}var Fe=()=>Z.injectCSS(".vi--icon-container{display:flex;align-items:center;justify-content:center;margin-left:4px;border-radius:50%;background-color:#18191c;cursor:pointer;width:20px;height:20px}.vi--container{display:flex;width:min-content}.vi--icon{display:flex;width:16px;height:16px;transition:filter .1s ease-in-out}.vi--icon:hover{filter:brightness(1.2)}.vi--red-dot{width:10px;height:10px;border-radius:50%;background-color:#ed4245;box-shadow:0 0 4px #ed4245}[class*=message-] [class*=headerText-],[class*=message-] h2[class*=header-],[class*=topSection-] [class*=nameTag-],[class*=headerTop-] [class*=nameTag-]{display:flex;align-items:center}[class*=topSection-] [class*=nameTag-] *,[class*=headerTop-] [class*=nameTag-] *{overflow:hidden}.vi--settings-container>.settings{margin-bottom:8px;display:flex;flex-direction:column}.vi--settings-container>.settings .line{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}.vi--settings-container>.settings .line .switch{min-width:50px;width:50px;display:flex;align-items:center;justify-content:center}.vi--settings-container>.settings .line h2,.vi--settings-container>.settings .line p{margin:0}.vi--settings-container>.settings .line h2{color:#f5f5f5;font-size:18px;font-weight:600}.vi--settings-container>.settings .line p{margin-top:4px;color:#d6d6d6}.vi--modal{display:flex;flex-direction:column}.vi--modal .vi--modal-header{display:flex;align-items:center;justify-content:space-between;padding:16px}.vi--modal .vi--modal-header>.title-container{display:flex;align-items:center;margin-bottom:8px}.vi--modal .vi--modal-header>.title-container .icon{width:64px;height:64px;background-position:center;background-size:contain;border-radius:50%;margin-right:8px;background-color:#5865f2}.vi--modal .vi--modal-header>.title-container .title{display:flex;align-items:center}.vi--modal .vi--modal-header>.title-container .title .guild{font-size:28px;font-weight:600;color:#efefef}.vi--modal .vi--modal-header>.title-container .title .vanity{margin-left:8px;cursor:pointer}.vi--modal .vi--modal-header>.title-container .title .vanity svg{width:24px;height:24px}.vi--modal .vi--modal-content>.channel>.name-container{display:flex;align-items:center;justify-content:space-between;background-color:#25272a;padding:8px;border-radius:8px}.vi--modal .vi--modal-content>.channel>.name-container>.name{display:flex;font-size:20px;font-weight:400;color:#efefef;align-items:center}.vi--modal .vi--modal-content>.channel>.name-container>.name svg{margin-right:8px;width:24px;height:24px;pointer-events:none}.vi--modal .vi--modal-content>.channel>.name-container>.controls{display:flex}.vi--modal .vi--modal-content>.channel>.name-container>.controls>.control{padding:4px;cursor:pointer}.vi--modal .vi--modal-content>.channel>.name-container>.controls>.control svg{width:24px;height:24px}.vi--modal .vi--modal-content>.channel>.members-container{padding:8px 8px 8px 40px}.vi--modal .vi--modal-content>.channel>.members-container>.members{display:flex;flex-direction:column}.vi--modal .vi--modal-content>.channel>.members-container>.members .member{display:flex;margin-bottom:4px;cursor:pointer;width:min-content;align-items:center}.vi--modal .vi--modal-content>.channel>.members-container>.members .member>.avatar{width:32px;height:32px;border-radius:50%;background-position:center;background-size:contain;margin-right:8px;background-color:#5865f2}.vi--modal .vi--modal-content>.channel>.members-container>.members .member>.about{border-radius:9999px;background-color:#272a2d;display:flex;align-items:center;padding:8px}.vi--modal .vi--modal-content>.channel>.members-container>.members .member>.about>.name-container{display:flex;align-items:center;width:max-content;font-size:16px;color:#dfdfdf}.vi--modal .vi--modal-content>.channel>.members-container>.members .member>.about>.name-container .name{width:100%}.vi--modal .vi--modal-content>.channel>.members-container>.members .member>.about>.name-container .discriminator{opacity:.5}.vi--modal .vi--modal-content>.channel>.members-container>.members .member>.about>.state{background-color:transparent}.vi--modal .vi--modal-content>.channel>.members-container>.members .member>.about>.state svg{width:16px;height:16px}.vi--cant-join{opacity:.75}.vi--cant-click{cursor:default!important}");function Je(){const t=Fe();p.add(t)}var qe={onLoad(){Ae(),He(),Ye(),Ge(),Je()},onUnload(){p.removeAll(),D.close()},settings(){return a.createElement(ye,null)}};return qe})(cumcord.modules.common.React,cumcord.pluginData,cumcord.utils,cumcord.modules.webpack,cumcord.modules.common,cumcord.patcher);
