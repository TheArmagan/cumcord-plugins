import webpack from "@cumcord/modules/webpack";

import { ChannelStore, dataStore, FluxDispatcher, GuildStore, ModalComponents, React, Router, Tooltip, UserStore, VoiceStateStore } from "../other/apis";
import { COLORS } from "../other/constants";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { DeafIcon } from "./DeafIcon";
import { MuteIcon } from "./MuteIcon";
import { VoiceIcon } from "./VoiceIcon";

const scrollClasses = webpack.findByProps("thin", "scrollerBase");

export function Modal({ e }) {
  /** @type {[{guild: any, users: {user: any, state:any}[], channels: {channel: any, users: {user: any, state: any}[]}[]}[], any]} */
  let [data, setData] = React.useState([]);

  let [unFoldedGuilds, setUnFoldedGuilds] = React.useState([...dataStore.unFoldedGuilds]);

  function onChange() {
    let hiddenChannels = !!window["HideChannelsAPI"] ? HideChannelsAPI.getHiddenChannelIds() : [];
    let guildStates = Object.entries(VoiceStateStore.getAllVoiceStates());
    /** @type {{guild: any, users: {user: any, state:any}[], channels: {channel: any, users: {user: any, state: any}[]}[]}[]} */
    let states = guildStates.filter(i=>i[0]!="@me").map(i => ({
      guild: GuildStore.getGuild(i[0]),
      users: Object.entries(i[1]).map(j => {
        let channel = hiddenChannels.includes(j[1].channelId) ? ChannelStore.getChannel(j[1].channelId) : [];
        return {
          user: UserStore.getUser(j[0]),
          state: channel ? Object.assign(j[1], {
            channel: channel
          }) : null
        }
      }).filter(i => i.state)
    })).sort((a, b)=>b.users.length-a.users.length);
    states.forEach((state) => {
      state.channels = [...(state.users.reduce(
        (all, current) => {
          if (!current.state.channel) return all;
          if (!all.has(current.state.channelId)) all.set(current.state.channelId, { channel: current.state.channel, users: [] });
          all.get(current.state.channelId).users.push(current);
          return all;
        },
        new Map()
      )).values()].sort((a, b)=>b.users.length-a.users.length);
    });
    setData(states.filter(i=>!!i.users?.length && !!i.guild?.id));
  }

  function toggleFold(guildId) {
    if (dataStore.unFoldedGuilds.includes(guildId)) {
      dataStore.unFoldedGuilds.splice(dataStore.unFoldedGuilds.indexOf(guildId), 1);
    } else {
      dataStore.unFoldedGuilds.push(guildId);
    }
    dataStore.unFoldedGuilds = [...dataStore.unFoldedGuilds]; // nest save
    setUnFoldedGuilds([...dataStore.unFoldedGuilds]);
  }
  
  React.useEffect(() => {
    onChange();
    let interval = setInterval(() => {
      onChange();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  
  return (
    <ModalComponents.ModalRoot
      transitionState={e.transitionState}
      size="large"
      className="tv--modal">
      <ModalComponents.ModalHeader separator={false} className="tv--modal-header" >
        <h2>Top Voices</h2>
        <ModalComponents.ModalCloseButton onClick={e.onClose} className="tv--modal-close" />
      </ModalComponents.ModalHeader>
      <ModalComponents.ModalContent className="tv--modal-content">
        {
          data.map((guild) => <div className={`guild ${!unFoldedGuilds.includes(guild.guild.id) ? "folded" : ""}`}>
            <div className="header">
              <div class="info">
                <div className="icon" style={{ backgroundImage: `url("https://cdn.discordapp.com/icons/${guild.guild.id}/${guild.guild.icon}.png")` }}></div>
                <div className="name">
                  {guild.guild.name}
                </div>
              </div>
              <div className="right">
                <div
                  className={`fold ${unFoldedGuilds.includes(guild.guild.id) ? "folded" : ""}`}
                  onClick={() => {
                    toggleFold(guild.guild.id);
                  }}
                >
                  <ArrowDownIcon />
                </div>
                <div className="user-count">{guild.users.length}</div>
              </div>
            </div>
            <div className={`content ${scrollClasses.thin}`}>
              {
                unFoldedGuilds.includes(guild.guild.id) ? null : guild.channels.map(channel => <div className="channel">
                  <div className="header">
                    <div
                      className="info"
                      onClick={(e2) => {
                      e2.preventDefault();
                      Router.transitionTo(`/channels/${guild.guild.id}/${channel.channel.id}`);
                      e.onClose();
                    }}>
                      <VoiceIcon />
                      <div className="name">
                        {channel.channel.name}
                      </div>
                    </div>
                    <div className="user-count">{channel.users.length}</div>
                  </div>
                  <div className={`content ${scrollClasses.thin}`}>
                    {
                      channel.users.map(user => <div
                        className="user"
                        onClick={(e2) => {
                          e2.preventDefault();
                          FluxDispatcher.dispatch({
                            type: "USER_PROFILE_MODAL_OPEN",
                            userId: user.user.id
                          })
                        }}
                      >
                        <Tooltip
                          key={`tv--user-tooltip-${guild.guild.id}-${user.user.id}`}
                          text={`${user.user.username}#${user.user.discriminator}`}
                          position="top"
                        >
                          <div className="avatar" style={{ backgroundImage: `url("${user.user.avatar ? `https://cdn.discordapp.com/avatars/${user.user.id}/${user.user.avatar}.${user.user.avatar.startsWith("a_") ? "gif" : "png"}` : `https://cdn.discordapp.com/embed/avatars/${Number(user.user.discriminator) % 5}.png`}")` }}>
                            {
                              user.state.isVoiceDeafened()
                                ? <div className="icon-container">
                                  <DeafIcon color={COLORS[user.state.deaf ? "DANGER" : "SECONDARY"]}></DeafIcon>
                                </div>
                                : user.state.isVoiceMuted()
                                  ? <div className="icon-container">
                                    <MuteIcon color={COLORS[user.state.mute ? "DANGER" : "SECONDARY"]}></MuteIcon>
                                  </div>
                                  : null
                            }
                          </div>
                        </Tooltip>
                      </div>)
                    }
                  </div>
                </div>)
              }
            </div>
          </div>)
        }
      </ModalComponents.ModalContent>
    </ModalComponents.ModalRoot>
  )
}