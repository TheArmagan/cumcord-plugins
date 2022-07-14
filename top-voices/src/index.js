import { dataStore } from "./other/apis";
import patchContainer from "./other/patchContainer";

import { patchHeaderBar } from "./patches/headerBar";
import { patchStyles } from "./patches/styles";

export default {
  onLoad() {
    if (!Array.isArray(dataStore.unFoldedGuilds)) dataStore.unFoldedGuilds = [];

    patchHeaderBar();
    patchStyles();
  },
  onUnload() {
    patchContainer.removeAll();
  }
}
