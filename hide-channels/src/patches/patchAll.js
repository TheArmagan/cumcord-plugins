import patchContainer from "../other/patchContainer";

import patcher from "@cumcord/patcher";
import { dataStore, GuildChannelStore, GuildReadStateStore } from "../other/apis";

import webpack from "@cumcord/modules/webpack";
import { findComponentByNameAndSelector } from "../utils";

export async function patchAll() {
  
  const VoiceUsers = webpack.find(i => i?.default?.displayName == "VoiceUsers");
  const ChannelItem = webpack.find(i => i?.default?.displayName == "ChannelItem");

  const voiceUsersPatch = patcher.instead("render", VoiceUsers.default.prototype, function(args, ogMethod) {
    let hidden = [...dataStore.hiddenChannels];
    if (hidden.includes(this?.props?.channel?.id)) {
      return null;
    }
    return ogMethod.call(this, ...args);
  });

  const channelItemPatch = patcher.instead("default", ChannelItem, function(args, ogMethod) {
    let hidden = [...dataStore.hiddenChannels];
    if (hidden.includes(args[0]?.channel?.id)) {
      return null;
    }
    return ogMethod.call(this, ...args);
  });

  const hasUnreadPatch = patcher.instead("hasUnread", GuildReadStateStore, function(args, ogMethod) {
    let hidden = [...dataStore.hiddenChannels];
    if (hidden.includes(args[0])) {
      return false;
    }
    return ogMethod.call(this, ...args);
  });

  const windowAPIPatch = (() => {
    Object.assign(window, {
      HideChannelsAPI: {
        getHiddenChannelIds() {
          return [...dataStore.hiddenChannels];
        }
      }
    });
    return () => {
      delete window["HideChannelsAPI"];
    }
  })();

  patchContainer.add(
    voiceUsersPatch,
    channelItemPatch,
    hasUnreadPatch,
    windowAPIPatch
  );

  (async () => {
    let VoiceChannel = await findComponentByNameAndSelector("VoiceChannel", '[class*="containerDefault-"]');

    const voiceChannelPatch = patcher.instead("render", VoiceChannel.prototype, function(args, ogMethod) {
      let hidden = [...dataStore.hiddenChannels];
      if (hidden.includes(this?.props?.channel?.id)) {
        return null;
      }
      return ogMethod.call(this, ...args);
    });

    patchContainer.add(voiceChannelPatch);
  })();

  (async () => {
    let Channels = await findComponentByNameAndSelector("Channels", '#channels');

    const voiceChannelPatch = patcher.instead("render", Channels.prototype, function(args, ogMethod) {
      let hidden = [...dataStore.hiddenChannels];
      let hiddenLength = hidden.length;
      let res = ogMethod.call(this, ...args);
      if (this?.props?.voiceStates) {
        for (let i = 0; i < hiddenLength; i++) {
          const id = hidden[i];
          delete this.props.voiceStates[id];
        }
      }
      if (this?.props?.guildChannels?.sortedNamedCategories) {
        let cats = this?.props?.guildChannels?.sortedNamedCategories;
        let catsLength = cats.length;
        for (let i = 0; i < catsLength; i++) {
          const cat = cats[i];
          for (let j = 0; j < hiddenLength; j++) {
            const id = hidden[j];
            delete cat.channels[id];
          }
          if (!Object.keys(cat.channels).length)
            delete this?.props?.guildChannels?.sortedNamedCategories[i];
        }
      }
      return res;
    });

    patchContainer.add(voiceChannelPatch);
  })();
}