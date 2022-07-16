import { ChannelStore, GuildStore, UserStore, VoiceStateStore } from "./apis";

/**
 * @typedef {{states: {deaf:boolean,mute:boolean,selfDeaf:boolean,selfMute:boolean,selfStream:boolean,selfVideo:boolean,suppress:boolean},user:{id:string,tag:string},channel:{id:string,name:string},guild:{id:string,name:string}}} VoiceStateShaped
 */

/**
 * @returns {{[id:string]: VoiceStateShaped}}
 */
export function getAllVoiceStatesShaped() {
  return Object.fromEntries(
    Object.values(VoiceStateStore.getAllVoiceStates())
      .map((i) => Object.values(i))
      .flat()
      .filter((i) => i.channel?.guild_id)
      .map((i) => [
        i.userId,
        makeShape(i)
      ]).filter(i=>i[1])
  );
}

/** @returns {VoiceStateShaped?} */
export function getUserVoiceStateShaped(userId) {
  let state = VoiceStateStore.getVoiceStateForUser(userId);
  return state ? makeShape(state) : null;
}

/** @returns {VoiceStateShaped} */
function makeShape(i) {
  let channel = ChannelStore.getChannel(i.channelId);
  if (!channel) return null;
  let guild = GuildStore.getGuild(channel.guild_id);
  if (!guild) return null;
  return {
    states: {
      deaf: i.deaf,
      mute: i.mute,
      selfDeaf: i.selfDeaf,
      selfMute: i.selfMute,
      selfStream: i.selfStream,
      selfVideo: i.selfVideo,
      suppress: i.suppress
    },
    user: {
      id: i.userId,
      tag: UserStore.getUser(i.userId).tag
    },
    channel: {
      id: channel.id,
      name: channel.name
    },
    guild: {
      id: guild.id,
      name: guild.name
    }
  }
}