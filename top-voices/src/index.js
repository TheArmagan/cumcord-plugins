import patchContainer from "./other/patchContainer";

import { patchHeaderBar } from "./patches/headerBar";
import { patchStyles } from "./patches/styles";

export default {
  onLoad() {
    patchHeaderBar();
    patchStyles();
  },
  onUnload() {
    patchContainer.removeAll();
  }
}
