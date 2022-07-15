import patchContainer from "../other/patchContainer";

import patcher from "@cumcord/patcher";
import { Channel, dataStore, getCurrentUser, Permissions, PermissionStore, RelationshipStore, VoiceStateStore } from "../other/apis";

export async function patchAll() {
  const ogPermissionCan = PermissionStore.can.bind({});

  patchContainer.add(
    patcher.instead("can", PermissionStore, (args, ogMethod) => {
      let hidden = [...dataStore.hiddenChannels];
      if (args[0] == Permissions.VIEW_CHANNEL && (hidden.includes(args?.[1]?.id) || hidden.includes(args?.[1]?.parent_id))) {
        if (dataStore.settings.friendsBypass) {
          let channelId = args[1].id;
          let channelStates = VoiceStateStore.getVoiceStatesForChannel(channelId);
          let currentUser = getCurrentUser();
          if (channelStates[currentUser.id]) return true;
          let friendIds = RelationshipStore.getFriendIDs();
          for (let i = 0; i < friendIds.length; i++) {
            const friendId = friendIds[i];
            if (channelStates[friendId]) return true;
          }
        }
        
        return false;
      }
      
      return ogPermissionCan(...args);
    }),
    (() => {
      Channel.prototype.canBeSeen = function() {
        return this.type == 4 ? true : ogPermissionCan(Permissions.VIEW_CHANNEL, this);
      };
      return () => {
        delete Channel.prototype.canBeSeen;
      }
    })(),
    (() => {
      Object.assign(window, {
        HideChannelsAPI: {
          getHiddenChannelIds() {
            return [...dataStore.hiddenChannels];
          },
          setHiddenChannelIds(ids=[]) {
            dataStore.hiddenChannels = [...new Set(ids)];
            return true;
          }
        }
      });
      return () => {
        delete window["HideChannelsAPI"];
      }
    })()
  );
}