import { Settings } from "./components/Settings";
import patchContainer from "./other/patchContainer";
import { startStateLogger } from "./patches/stateLogger";

import { patchStyles } from "./patches/styles";

export default {
  onLoad() {
    patchStyles();
    startStateLogger();
  },
  onUnload() {
    patchContainer.removeAll();
  },
  settings() {
    return <Settings />
  }
}
