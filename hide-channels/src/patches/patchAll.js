import patchContainer from "../other/patchContainer";

import patcher from "@cumcord/patcher";
import { dataStore, GuildChannelStore, GuildReadStateStore } from "../other/apis";

import webpack from "@cumcord/modules/webpack";

export async function patchAll() {

  const ChannelItem = find(i => i?.default?.displayName == "ChannelItem");

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

  patchContainer.add(
    channelItemPatch,
    hasUnreadPatch
  );
}