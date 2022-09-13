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

/** @returns {{id: string, tag: string}[]} */
export function getVoiceChannelMembers(channelId) {
  let states = VoiceStateStore.getVoiceStatesForChannel(channelId);
  return states ? Object.keys(states).map(i => ({ id: i, tag: UserStore.getUser(i).tag })) : null;
}

/** @returns {VoiceStateShaped?} */
export function getUserVoiceStateShaped(userId) {
  let state = VoiceStateStore.getVoiceStateForUser(userId);
  return state ? makeShape(state) : null;
}

/** @returns {VoiceStateShaped} */
function makeShape(i) {
  let channel = ChannelStore.getChannel(i.channelId);
  let guild = GuildStore.getGuild(channel?.guild_id);
  let user = UserStore.getUser(i.userId);
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
      tag: user.tag,
      avatar: user?.avatar
    },
    channel: channel ? {
      id: channel.id,
      name: channel.name || [channel.rawRecipients, UserStore.getCurrentUser()].map(i=>`${i.username}#${i.discriminator}`).sort((a, b)=>a > b).join(", ") || "Unknown"
    } : undefined,
    guild: guild ? {
      id: guild.id,
      name: guild.name,
      vanity: guild?.vanityURLCode,
      icon: guild?.icon
    } : undefined
  }
}