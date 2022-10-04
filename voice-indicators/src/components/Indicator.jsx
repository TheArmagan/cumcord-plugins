import { events } from "../connection/events";
import { openInfoModal } from "../methods/openInfoModal";
import { fetchUserVoiceStates } from "../other/api";
import { persist } from "@acord/pluginData";


import { ChannelStore, DiscordTooltip, Permissions, PermissionStore, React } from "../other/apis";
import { COLORS } from "../other/constants";

import { DeafIcon } from "./DeafIcon";
import { MuteIcon } from "./MuteIcon";
import { VideoIcon } from "./VideoIcon";
import { VoiceIcon } from "./VoiceIcon";



export function Indicator({ userId }) {
  /** @type {[{state: import("../other/VoiceStates").VoiceStateShaped, inMyChannels: boolean, isJoinable: boolean}, any]} */
  let [data, setData] = React.useState({ state: null, inMyChannels: false, isJoinable: false });
  let fetching = false;

  async function onChange() {
    if (fetching) return;
    fetching = true;
    let state = await fetchUserVoiceStates(userId);
    fetching = false;
    let channel = ChannelStore.getChannel(state?.channel?.id);
    setData({
      state,
      inMyChannels: !!channel,
      isJoinable: !channel ? false : (channel.type == 3 ? true : (PermissionStore.can(Permissions.CONNECT, channel) && PermissionStore.can(Permissions.VIEW_CHANNEL, channel)))
    });
  }

  React.useEffect(() => {
    onChange();
    events.on("check", onChange);
    return () => events.off("check", onChange);
  }, []);

  return !data?.state?.states ? null : (
    <div className="vi--container">
      <DiscordTooltip
        key={`vi--tooltip-${userId}`}
        text={`${data.inMyChannels ? "✅" : "❌"} ${data.state.guild ? (data.state.guild?.name || "Unknown Guild") : "Private Call"} > ${data.state.channel?.name || "Plugin Deprecated"}`}
        position="top"
        className="vi--tooltip"
      >
        <span
          className={`vi--icon-container ${!data.inMyChannels ? "vi--cant-join" : ""} ${persist.ghost.settings?.redacted || (data.state.isPrivate && data.state.channel?.redacted) ? "vi--cant-click" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            if (persist.ghost.settings?.redacted || (data.state.isPrivate && data.state.channel?.redacted)) return;
            openInfoModal(data);
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
      </DiscordTooltip>
    </div>
  );
}