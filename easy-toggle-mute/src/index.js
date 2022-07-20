import patchContainer from "./other/patchContainer";

import { patchVoiceUser } from "./patches/voiceUser";

export default {
  onLoad() {
    patchVoiceUser();
  },
  onUnload() {
    patchContainer.removeAll();
  },
}
