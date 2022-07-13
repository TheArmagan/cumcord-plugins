import patchContainer from "./other/patchContainer";

import { patchDirectMessageList } from "./patches/directMessageList";
import { patchMemberListItem } from "./patches/memberListItem";
import { patchMessageHeader } from "./patches/messageHeader";
import { patchVoiceUser } from "./patches/voiceUser";
import { noteUpdater } from "./patches/noteUpdater";
import { patchStyles } from "./patches/styles";
import { loadNotes } from "./other/loadNotes";

export default {
  onLoad() {
    patchDirectMessageList();
    patchMemberListItem();
    patchMessageHeader();
    patchVoiceUser();
    patchStyles();
    noteUpdater();
    loadNotes();
  },
  onUnload() {
    patchContainer.removeAll();
  }
}
