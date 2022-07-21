import { ChannelStore, GuildStore, UserStore, VoiceStateStore } from "./apis";

/**
 * @typedef {{states: {deaf:boolean,mute:boolean,selfDeaf:boolean,selfMute:boolean,selfStream:boolean,selfVideo:boolean,suppress:boolean},isPrivate:boolean,user:{id:string,tag:string},channel:{id:string,name:string},guild:{id:string,name:string}}} VoiceStateShaped
 */

/**
 * @returns {{[id:string]: VoiceStateShaped}}
 */
export function getAllVoiceStatesShaped() {
  return Object.fromEntries(
    Object.values(VoiceStateStore.getAllVoiceStates())
      .map((i) => Object.values(i))
      .flat()
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

window.getUserVoiceStateShaped = getUserVoiceStateShaped;

/** @returns {VoiceStateShaped} */
function makeShape(i) {
  let channel = ChannelStore.getChannel(i.channelId);
  let guild = GuildStore.getGuild(channel?.guild_id);
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
    isPrivate: !guild,
    user: {
      id: i.userId,
      tag: UserStore.getUser(i.userId).tag
    },
    channel: channel ? {
      id: channel.id,
      name: channel.name
    } : undefined,
    guild: guild ? {
      id: guild.id,
      name: guild.name
    } : undefined
  }
}