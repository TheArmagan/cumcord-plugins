import webpack from "@cumcord/modules/webpack";

import { useNest } from "@cumcord/utils";
import { DiscordTextInput, React, Router, Tooltip, UserStore } from "../other/apis";
import nest from "../other/nest";
import { COLORS } from "../other/constants";

import { DeafIcon } from "./DeafIcon";
import { MuteIcon } from "./MuteIcon";
import { VideoIcon } from "./VideoIcon";
import { VoiceIcon } from "./VoiceIcon";
import { LoginIcon } from "./LoginIcon";
import { LogoutIcon } from "./LogoutIcon";
import { DotCircleIcon } from "./DotCircleIcon";

const scrollClasses = webpack.findByProps("thin", "scrollerBase");

export function Settings() {
  let [data, setData] = React.useState([]);
  let [searchText, setSearchText] = React.useState(nest.store.searchText);

  function onChange() {
    let value = nest.ghost.stateHistory
      .filter(state => {
        let search = nest.store.searchText.trim();
        if (!search) return true;
        return state.guild?.name?.toLowerCase?.()?.includes(search)
          || state?.guild?.id == search
          || state?.channel?.name?.toLowerCase?.()?.includes(search)
          || state?.channel?.id == search
          || state?.user?.tag?.toLowerCase?.()?.includes(search)
          || state?.user?.id == search;
      })
      .slice(0, 50)
      .map(state => {
        state.user = UserStore.getUser(state.user.id);
        return state;
      }).filter(i=>i.user);
    console.log(value);
    setData(value);
  }

  React.useEffect(() => {
    onChange();
    let interval = setInterval(() => {
      onChange();
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return <div className="vsl--container">
    <div className="top">
      <DiscordTextInput
        value={searchText}
        onChange={(v) => {
          nest.store.searchText = v;
          setSearchText(v)
        }}
        placeholder="Search..."
        className="search-input"
      />
    </div>
    <div className={`bottom ${scrollClasses.thin}`}>
      {
        data
          .map(state => <div className="state">
            <div className="left">
              <div className="time">{new Date(state.at).toLocaleTimeString()}</div>
            </div>
            <div className="right">
              <div className="top">
                <div className="left">
                  <div className="avatar" style={{ backgroundImage: `url("${state.user.avatar ? `https://cdn.discordapp.com/avatars/${state.user.id}/${state.user.avatar}.${state.user.avatar.startsWith("a_") ? "gif" : "png"}` : `https://cdn.discordapp.com/embed/avatars/${Number(state.user.discriminator) % 5}.png`}")` }}></div>
                  <div className="tag">
                    <span>{state.user.tag.split("#")[0]}</span>
                    <span className="discriminator">#{state.user.tag.split("#")[1]}</span>
                  </div>
                </div>
                {
                  state.states ?
                    <div className="right">
                      {(state.states.selfMute || state.states.mute || state.states.suppress) ? <Tooltip text={`${state.states.mute ? "Server " : ""}Mute`}><MuteIcon color={COLORS[state.states.mute ? "DANGER" : "SECONDARY"]} /></Tooltip> : null}
                      {(state.states.selfDeaf || state.states.deaf) ? <Tooltip text={`${state.states.deaf ? "Server " : ""}Deaf`}><DeafIcon color={COLORS[state.states.deaf ? "DANGER" : "SECONDARY"]} /></Tooltip> : null}
                      {state.states.selfVideo ? <Tooltip text="Video"><VideoIcon color={COLORS.SECONDARY} /></Tooltip> : null}
                      {state.states.selfStream ? <Tooltip text="Stream"><div className="vsl--icon vsl--red-dot" /></Tooltip> : null}
                    </div>
                    : null
                }
              </div>
              <div className="bottom">
                <div className="left">
                  <div className="action">
                    {
                      state.action == "join"
                        ? <Tooltip text="Join"><LoginIcon color={COLORS.SUCCESS} /></Tooltip>
                        : state.action == "leave"
                          ? <Tooltip text="Leave"><LogoutIcon color={COLORS.DANGER} /></Tooltip>
                          : <Tooltip text="Stay"><DotCircleIcon color={COLORS.SECONDARY} /></Tooltip>
                    }
                  </div>
                  <div
                    className="channel"
                    onClick={() => {
                      Router.transitionTo(`/channels/${state.guild.id}/${state.channel.id}`);
                    }}
                  >
                    {state.channel.name}
                  </div>
                </div>
                <div className="right">
                  <div className="guild">
                    {state.guild.name}
                  </div>
                </div>
              </div>
            </div>
          </div>)
      }
    </div>
  </div>
}