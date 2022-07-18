import { Settings } from "./components/Settings";
import { dataStore } from "./other/apis";
import patchContainer from "./other/patchContainer";

import { patchStyles } from "./patches/styles";
import { patchAll } from "./patches/patchAll";

export default {
  onLoad() {
    if (!Array.isArray(dataStore.hiddenChannels)) dataStore.hiddenChannels = [];
    if (typeof dataStore.settings.friendsBypass != "boolean") dataStore.settings.friendsBypass = false;

    patchStyles();
    patchAll();
  },
  onUnload() {
    patchContainer.removeAll();

  },
  settings() {
    return <Settings />
  }
}
