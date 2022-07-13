import { Settings } from "./components/Settings";
import { dataStore } from "./other/apis";
import patchContainer from "./other/patchContainer";

import { patchStyles } from "./patches/styles";
import { patchAll } from "./patches/patchAll";
import { clearUnused } from "./other/clearUnused";

export default {
  onLoad() {
    if (!Array.isArray(dataStore.hiddenChannels)) dataStore.hiddenChannels = [];

    clearUnused();
    patchAll();
    patchStyles();
  },
  onUnload() {
    patchContainer.removeAll();

  },
  settings() {
    return <Settings />
  }
}
