import webpack from "@cumcord/modules/webpack";

import { ChannelStore, GuildStore, VoiceStateStore, React, Router } from "../other/apis";
import { COLORS } from "../other/constants";

import { DeafIcon } from "./DeafIcon";
import { MuteIcon } from "./MuteIcon";
import { VoiceIcon } from "./VoiceIcon";

const { TooltipContainer: Tooltip } = webpack.findByProps("TooltipContainer");

export function Indicator({ userId }) {
  let [data, setData] = React.useState({ guild: null, channel: null, state: null });

  function onChange() {
    let voiceState = VoiceStateStore.getVoiceStateForUser(userId);
    if (!voiceState) return setData({ guild: null, channel: null, state: null });
    let channel = ChannelStore.getChannel(voiceState?.channelId);
    let guild = GuildStore.getGuild(channel?.guild_id);
    setData({ guild, channel, state: voiceState });
  }

  React.useEffect(() => {
    onChange();
    VoiceStateStore.addChangeListener(onChange);
    return () => VoiceStateStore.removeChangeListener(onChange);
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