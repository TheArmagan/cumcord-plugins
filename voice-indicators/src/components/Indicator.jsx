import webpack from "@cumcord/modules/webpack";
import { events } from "../connection/events";
import { fetchUserVoiceStates } from "../other/api";

import { GuildStore, React, Router } from "../other/apis";
import { COLORS } from "../other/constants";

import { DeafIcon } from "./DeafIcon";
import { MuteIcon } from "./MuteIcon";
import { VideoIcon } from "./VideoIcon";
import { VoiceIcon } from "./VoiceIcon";

const { TooltipContainer: Tooltip } = webpack.findByProps("TooltipContainer");

export function Indicator({ userId }) {
  /** @type {[{state: import("../other/VoiceStates").VoiceStateShaped, inMyGuilds: boolean}, any]} */
  let [data, setData] = React.useState({ state: null, inMyGuilds: false });
  let fetching = false;

  async function onChange() {
    if (fetching) return;
    fetching = true;
    let state = await fetchUserVoiceStates(userId);
    fetching = false;
    setData({ state, inMyGuilds: !!GuildStore.getGuild(state?.guild?.id) });
  }

  React.useEffect(() => {
    onChange();
    events.on("check", onChange);
    return () => events.off("check", onChange);
  }, []);

  return !data?.state ? null : (
    <div className="vi--container">
      <Tooltip
        key={`vi--tooltip-${userId}`}
        text={`${data.inMyGuilds ? "✅" : "❌"} ${data.state.guild ? (data.state.guild?.name || "Unknown Guild") : "In Private Call"} > ${data.state.channel?.name || "Plugin Deprecated"}`}
        position="top"
        className="vi--tooltip"
      >
        <span
          className={`vi--icon-container ${(!data.inMyGuilds || data.state.isPrivate) ? "vi--cant-join" : ""}`}
          onClick={(e) => {
            if (!data.inMyGuilds || data.state.isPrivate) return;
            e.preventDefault();
            Router.transitionTo(`/channels/${data.state.guild.id}/${data.state.channel.id}`);
          }}
        >
          {
            (data.state.states.selfDeaf || data.state.states.deaf)
              ? <DeafIcon color={COLORS[data.state.states.deaf ? "DANGER" : "SECONDARY"]} />
              : (data.state.states.selfMute || data.state.states.mute || data.state.states.suppress)
                ? <MuteIcon color={COLORS[data.state.states.mute ? "DANGER" : "SECONDARY"]} />
                : data.state.states.selfVideo
                  ? <VideoIcon color={COLORS.SECONDARY} />
                  : data.state.states.selfStream
                    ? <div className="v--icon vi--red-dot" />
                    : <VoiceIcon color={COLORS.SECONDARY} />
          }
        </span>
      </Tooltip>
    </div>
  );
}