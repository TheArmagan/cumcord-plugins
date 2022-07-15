import patchContainer from "./other/patchContainer";

import { patchDirectMessageList } from "./patches/directMessageList";
import { patchMemberListItem } from "./patches/memberListItem";
import { patchMessageHeader } from "./patches/messageHeader";
import { patchVoiceUser } from "./patches/voiceUser";
import { noteUpdater } from "./patches/noteUpdater";
import { patchStyles } from "./patches/styles";
import { loadNotes } from "./other/loadNotes";

import { Settings } from "./components/Settings";
import { startAnalytics } from "./patches/analytics";

export default {
  onLoad() {
    patchDirectMessageList();
    patchMemberListItem();
    patchMessageHeader();
    patchVoiceUser();
    patchStyles();
    noteUpdater();
    loadNotes();
    startAnalytics();
  },
  onUnload() {
    patchContainer.removeAll();
  },
  settings() {
    return <Settings />
  }
}
