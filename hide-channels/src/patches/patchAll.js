import patchContainer from "../other/patchContainer";

import patcher from "@cumcord/patcher";
import { Channel, dataStore, Permissions, PermissionStore } from "../other/apis";

export async function patchAll() {
  const ogPermissionCan = PermissionStore.can.bind({});

  patchContainer.add(
    patcher.instead("can", PermissionStore, (args, ogMethod) => {
      let hidden = [...dataStore.hiddenChannels];
      if (args[0] == Permissions.VIEW_CHANNEL && (hidden.includes(args?.[1]?.id) || hidden.includes(args?.[1]?.parent_id))) return false;
      
      return ogPermissionCan(...args);
    }),
    (() => {
      Channel.prototype.canBeSeen = function() {
        return ogPermissionCan(Permissions.VIEW_CHANNEL, this);
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