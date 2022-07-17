import chillout from "chillout";
import { ChannelStore, GuildStore, UserStore, VoiceStateStore } from "./apis";

/**
 * @typedef {{states: {deaf:boolean,mute:boolean,selfDeaf:boolean,selfMute:boolean,selfStream:boolean,selfVideo:boolean,suppress:boolean},isPrivate:boolean,user:{id:string,tag:string},channel:{id:string,name:string},guild:{id:string,name:string}}} VoiceStateShaped
 */

/**
 * @returns {Promise<{[id:string]: VoiceStateShaped}>}
 */
export async function getAllVoiceStatesShaped() {
  let result = [];
  await chillout.forEach(Object.values(VoiceStateStore.getAllVoiceStates() || {}), async (usersObject) => {
    await chillout.forEach(Object.values(usersObject || {}), (state) => {
      let shape = makeShape(state);
      if (shape) result.push([state.userId, shape]);
    });
  });
  return Object.fromEntries(result);
}

/**
 * @returns {Promise<string[]>}
 */
export async function getAllVoiceUserIds() {
  let result = new Set();
  await chillout.forEach(Object.values(VoiceStateStore.getAllVoiceStates() || {}), async (usersObject) => {
    await chillout.forEach(Object.values(usersObject || {}), (state) => {
      result.add(state.userId);
    });
  });
  return [...result];
}

/** @returns {VoiceStateShaped?} */
export function getUserVoiceStateShaped(userId) {
  let state = VoiceStateStore.getVoiceStateForUser(userId);
  return state ? makeShape(state) : null;
}

/**
 * @param {VoiceStateShaped} state 
 * @return {string}
 */
export function shapedStateToString(state) {
  if (!state) return "null";
  let s = [
    `user:${state.user.id}`,
    `guild:${state.guild?.id || null}`,
    `channel:${state.channel?.id || null}`
  ];
  for (const key in state.states) {
    s.push(`${key}:${state.states[key]}`);
  }
  return s.join(";");
}

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