import { dataStore } from "./other/apis";
import patchContainer from "./other/patchContainer";

import { patchHeaderBar } from "./patches/headerBar";
import { patchStyles } from "./patches/styles";
import { startAnalytics } from "./patches/analytics";

export default {
  onLoad() {
    if (!Array.isArray(dataStore.unFoldedGuilds)) dataStore.unFoldedGuilds = [];

    patchHeaderBar();
    patchStyles();
    startAnalytics();
  },
  onUnload() {
    patchContainer.removeAll();
  }
}
