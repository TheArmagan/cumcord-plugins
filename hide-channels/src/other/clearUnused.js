import { dataStore, GuildChannelStore, GuildStore } from "./apis";

export function clearUnused() {
  let hidden = [...dataStore.hiddenChannels];
  let guilds = Object.values(GuildStore.getGuilds());
  let chIds = [];
  
  for (let i = 0; i < guilds.length; i++) {
    const g = guilds[i];
    chIds.push(...GuildChannelStore.getSelectableChannelIds(g.id), ...GuildChannelStore.getVocalChannelIds(g.id));
  }

  for (let j = 0; j < hidden.length; j++) {
    const hId = hidden[j];
    if (!chIds.includes(hId)) hidden.splice(hidden.indexOf(hId), 1);
  }

  dataStore.hiddenChannels = hidden;
  return hidden;
}