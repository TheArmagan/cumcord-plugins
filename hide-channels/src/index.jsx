import { Settings } from "./components/Settings";
import { dataStore } from "./other/apis";
import patchContainer from "./other/patchContainer";

import { patchStyles } from "./patches/styles";
import { patchAll } from "./patches/patchAll";
import { startAnalytics } from "./patches/analytics";

export default {
  onLoad() {
    if (!Array.isArray(dataStore.hiddenChannels)) dataStore.hiddenChannels = [];
    if (typeof dataStore.settings.friendsBypass != "boolean") dataStore.settings.friendsBypass = false;

    startAnalytics();
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
