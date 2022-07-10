import patchContainer from "./other/patchContainer";

import { patchDirectMessageList } from "./patches/directMessageList";
import { patchMemberListItem } from "./patches/memberListItem";
import { patchMessageHeader } from "./patches/messageHeader";
import { patchStyles } from "./patches/styles";

export default {
  onLoad() {
    patchDirectMessageList();
    patchMemberListItem();
    patchMessageHeader();
    patchStyles();
  },
  onUnload() {
    patchContainer.removeAll();
  }
}
