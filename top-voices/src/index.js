import { dataStore } from "./other/apis";
import patchContainer from "./other/patchContainer";

import { patchHeaderBar } from "./patches/headerBar";
import { patchStyles } from "./patches/styles";

export default {
  onLoad() {
    if (!Array.isArray(dataStore.foldedGuilds)) dataStore.foldedGuilds = [];

    patchHeaderBar();
    patchStyles();
  },
  onUnload() {
    patchContainer.removeAll();
  }
}
