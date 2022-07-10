import * as webpack from "@cumcord/modules/webpack";
import * as patcher from "@cumcord/patcher";

import * as utils from "./utils";

const GuildStore = webpack.findByProps("getGuild", "getGuildCount");
const ChannelStore = webpack.findByProps("getChannel", "hasChannel");
const VoiceStateStore = webpack.findByProps("getVoiceState", "getUserVoiceChannelId");
const Router = webpack.findByProps("transitionTo");
const React = webpack.findByProps("createElement");
const h = React.createElement;
const { TooltipContainer: Tooltip } = webpack.findByProps("TooltipContainer");

import { MuteIcon, DeafIcon, VoiceIcon } from "./icons"

const COLORS = {
  DANGER: "#eb3d47",
  SECONDARY: "#8a8e93",
  SUCCESS: "#3aa360"
}

const unPatchList = [];

function Indicator({ userId }) {
  let [data, setData] = React.useState({ guild: null, channel: null, state: null });

  React.useEffect(() => {
    function update() {
      let voiceState = VoiceStateStore.getVoiceStateForUser(userId);
      if (!voiceState) return setData({ guild: null, channel: null, state: null });
      let channel = ChannelStore.getChannel(voiceState.channelId);
      let guild = GuildStore.getGuild(channel.guild_id);
      setData({ guild, channel, state: voiceState });
    }

    let interval = setInterval(update, 500);
    update();
    return () => {
      clearInterval(interval);
    }
  }, [])

  return !data?.guild ? null : (
    <div className="vi--container">
      <Tooltip
        key={`vi--tooltip-${userId}`}
        text={`${data.guild.name} > ${data.channel.name}`}
        position="top"
        className="vi--tooltip"
      >
        <span
          className="vi--icon-container"
          onClick={(e) => {
            e.preventDefault();
            Router.transitionTo(`/channels/${data.guild.id}/${data.channel.id}`);
          }}
        >
          {
            data.state.isVoiceDeafened()
            ? <DeafIcon color={COLORS[data.state.deaf ? "DANGER" : "SECONDARY"]}></DeafIcon>
              : data.state.isVoiceMuted()
                ? <MuteIcon color={COLORS[data.state.mute ? "DANGER" : "SECONDARY"]}></MuteIcon>
                  : <VoiceIcon color={COLORS.SECONDARY}></VoiceIcon> 
          }
        </span>
      </Tooltip>
    </div>
  );
}

function patchDMList() {
  const UserContext = React.createContext();
  const AvatarWithText = webpack.find(m => m?.default?.displayName === "AvatarWithText");
  const { default: PrivateChannel } = webpack.findByProps("DirectMessage");

  unPatchList.push(patcher.after("render", PrivateChannel.prototype, function(_, ret) {
    return h(UserContext.Provider, {
      value: this.props.user
    }, ret);
  }));

  unPatchList.push(patcher.before("default", AvatarWithText, ([props]) => {
    props.decorators = [
      props.decorators,
      h(UserContext.Consumer, {
        children: user => {
          if (!user) return null;
          return h(Indicator, {
            userId: user.id
          })
        }
      })
    ]
  }));
}

async function patchMemberListItem() {
  const MemberListItem = await utils.getComponentByNameAndSelector("MemberListItem", '[class*="member-"][class*="container-"]');

  unPatchList.push(patcher.after("renderDecorators", MemberListItem.prototype, function(_, returnValue) {
    try {
      const tree = returnValue?.props?.children;
      if (!Array.isArray(tree)) return;

      tree.unshift(
        h(Indicator, {
          userId: this.props.user.id
        })
      );
    }
    catch (error) {
      console.error("Error while patching MemberListItem:", error);
    }
  }));

}

function patchMessageHeader() {
  const MessageHeader = webpack.find(m => m?.default?.displayName == "MessageHeader");
  
  unPatchList.push(patcher.after("default", MessageHeader, ([props], returnValue) => {
    try {
      const tree = returnValue?.props?.username?.props?.children;
      if (!Array.isArray(tree)) return;
      tree.splice(2, 0, h(Indicator, {
        userId: props.message.author.id
      }));
    }
    catch (error) {
      console.error("Error while patching MessageTimestamp:", error);
    }
  }));
}

let PLUGIN_LOADED = false;
async function loadPlugin() {
  if (PLUGIN_LOADED) return;
  PLUGIN_LOADED = true;

  unPatchList.push(patcher.injectCSS(`
    .vi--icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 4px;
      border-radius: 50%;
      background-color: #18191c;
      cursor: pointer;
      width: 20px;
      height: 20px;
    }

    .vi--container {
      display: flex;
      width: min-width;
    }

    .vi--icon {
      display: flex;
      width: 16px;
      height: 16px;
      transition: filter 100ms ease-in-out;
    }

    .vi--icon:hover {
      filter: brightness(1.2);
    }

    [class*="message-"] [class*="headerText-"],
    [class*="message-"] h2[class*="header-"] {
      display: flex;
      align-items: center;
    }

  `))

  patchDMList();
  patchMessageHeader();
  patchMemberListItem();

  // unPatchList.push((() => { 
  //   let selector = '[class*="nameAndDecorators-"], [class*="message-"] [class*="header-"]';
  //   forceUpdate(selector);
  //   let interval = setInterval(() => {
  //     forceUpdate(selector);
  //   }, 1000)
  //   return () => {
  //     clearInterval(interval);
  //   }
  // })())
}

async function unloadPlugin() {
  if (!PLUGIN_LOADED) return;
  PLUGIN_LOADED = false;

  unPatchList.forEach(p => p());
}




export default {
  onLoad() {
    loadPlugin();
  },
  onUnload() {
    unloadPlugin();
  }
}
