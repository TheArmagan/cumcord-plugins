import webpack from "@cumcord/modules/webpack";
import { events } from "../connection/events";
import { fetchVoiceMembers } from "../other/api";
import { DiscordTooltip, fetchUser, FluxDispatcher, InviteStore, ModalComponents, Router, selectVoiceChannel } from "../other/apis";
import { COLORS } from "../other/constants";
import { ArrowIcon } from "./ArrowIcon";
import { DeafIcon } from "./DeafIcon";
import { JoinCallIcon } from "./JoinCallIcon";
import { MuteIcon } from "./MuteIcon";
import { VideoIcon } from "./VideoIcon";
import { VoiceIcon } from "./VoiceIcon";

const scrollClasses = webpack.findByProps("thin", "scrollerBase");

export function Modal({ e, data }) {
  let [members, setMembers] = React.useState([]);
  let fetching = false;

  async function onChange() {
    if (fetching) return;
    fetching = true;
    let d = await fetchVoiceMembers(data.state.channel.id);
    fetching = false;
    setMembers(d || []);
  }

  React.useEffect(() => {
    onChange();
    events.on("check", onChange);
    return () => events.off("check", onChange);
  }, []);

  return (
    <ModalComponents.ModalRoot
      transitionState={e.transitionState}
      size="large"
      className="vi--modal">
      <ModalComponents.ModalHeader separator={false} className="vi--modal-header" >
        <div className="title-container">
          <div className="icon" style={{ backgroundImage: data.state.guild ? `url('https://cdn.discordapp.com/icons/${data.state.guild.id}/${data.state.guild.icon}.png?size=128')` : (data.state.channel ? `url('https://cdn.discordapp.com/channel-icons/${data.state.channel.id}/${data.state.channel.icon}.png?size=128')` : null) }}></div>
          <div className="title">
            <div className="guild">
              {data.state.isPrivate ? "Private Call" : data.state.guild.name}
            </div>
            {
              !data.state?.guild?.vanity || data.inMyChannels ? null : <div
                className="vanity"
                onClick={(ev) => {
                  ev.preventDefault();
                  if (!data.state?.guild?.vanity) return;
                  InviteStore.acceptInviteAndTransitionToInviteChannel({ inviteKey: data.state?.guild?.vanity });
                  e.onClose();
                }}
              >
                <DiscordTooltip
                  key={`vi--tooltip-show-channel`}
                  text="Join Guild"
                  position="top"
                  className="vi--tooltip"
                >
                  <ArrowIcon color={COLORS.PRIMARY} />
                </DiscordTooltip>
              </div>
            }
          </div>
        </div>
        <ModalComponents.ModalCloseButton onClick={e.onClose} className="vi--modal-close" />
      </ModalComponents.ModalHeader>
      <ModalComponents.ModalContent className="vi--modal-content">
        <div className="channel">
          <div className="name-container">
            <div className="name">
              <VoiceIcon />
              {data.state.channel?.name || "Unknown"}
            </div>
            <div className="controls">
              <div
                className={`control ${!data.isJoinable ? "vi--cant-click vi--cant-join" : ""}`}
                onClick={(ev) => {
                  ev.preventDefault();
                  if (!data.isJoinable) return;
                  selectVoiceChannel(data.state.channel.id)
                  e.onClose();
                }}
              >
                <DiscordTooltip
                  key={`vi--tooltip-join-call`}
                  text={data.isJoinable ? "Connect" : "Can't Connect"}
                  position="top"
                  className="vi--tooltip"
                >
                  <JoinCallIcon color={COLORS.SECONDARY} />
                </DiscordTooltip>
              </div>
              <div
                className={`control ${!data.inMyChannels ? "vi--cant-click" : ""}`}
                onClick={(ev) => {
                  ev.preventDefault();
                  if (!data.inMyChannels) return;
                  Router.transitionTo(`/channels/${data.state.guild ? data.state.guild.id : "@me"}/${data.state.channel.id}`);
                  e.onClose();
                }}
              >
                <DiscordTooltip
                  key={`vi--tooltip-show-channel`}
                  text={data.inMyChannels ? "Show Channel" : "Can't Show Channel"}
                  position="top"
                  className="vi--tooltip"
                >
                  <ArrowIcon color={COLORS.SECONDARY} />
                </DiscordTooltip>
              </div>
            </div>
          </div>
          <div className="members-container">
            <div className={`members ${scrollClasses.thin}`}>
              {members.map(member => (
                <div
                  className="member"
                  onClick={async (ev) => {
                    ev.preventDefault();
                    await fetchUser(member.id);
                    FluxDispatcher.dispatch({
                      type: "USER_PROFILE_MODAL_OPEN",
                      userId: member.id
                    });
                  }}
                >
                  <div className="avatar" style={{ backgroundImage: `url("${member.avatar ? `https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png?size=128` : `https://cdn.discordapp.com/embed/avatars/${Number(member.tag.split("#")[1]) % 5}.png`}")` }}></div>
                  <div className="about">
                    <div className="name-container">
                      <div className="name">{member.tag.split("#")[0]}</div>
                      <div className="discriminator">#{member.tag.split("#")[1]}</div>
                    </div>
                    {member?.states ? 
                      <div className="state vi--icon-container">
                        {
                          (member.states.selfDeaf || member.states.deaf)
                            ? <DeafIcon color={COLORS[member.states.deaf ? "DANGER" : "SECONDARY"]} />
                            : (member.states.selfMute || member.states.mute || member.states.suppress)
                              ? <MuteIcon color={COLORS[member.states.mute ? "DANGER" : "SECONDARY"]} />
                              : member.states.selfVideo
                                ? <VideoIcon color={COLORS.SECONDARY} />
                                : member.states.selfStream
                                  ? <div className="v--icon vi--red-dot" />
                                  : <VoiceIcon color={COLORS.SECONDARY} />
                        }
                      </div> 
                      : null
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ModalComponents.ModalContent>
    </ModalComponents.ModalRoot>
  );
}