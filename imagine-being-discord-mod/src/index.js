import patchContainer from "./other/patchContainer";

import { patchAll } from "./patches/patchAll";

export default {
  onLoad() {
    patchAll();
  },
  onUnload() {
    patchContainer.removeAll();
  }
}
