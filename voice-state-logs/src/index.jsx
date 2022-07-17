import { Settings } from "./components/Settings";
import patchContainer from "./other/patchContainer";
import { startAnalytics } from "./patches/analytics";
import { startStateLogger } from "./patches/stateLogger";

import { patchStyles } from "./patches/styles";

export default {
  onLoad() {
    patchStyles();
    startAnalytics();
    startStateLogger();
  },
  onUnload() {
    patchContainer.removeAll();
  },
  settings() {
    return <Settings />
  }
}
