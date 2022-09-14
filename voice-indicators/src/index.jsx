import { Settings } from "./components/Settings";
import { websocket } from "./connection/websocket";
import patchContainer from "./other/patchContainer";

import { patchDirectMessageList } from "./patches/directMessageList";
import { patchMemberListItem } from "./patches/memberListItem";
import { patchMessageHeader } from "./patches/messageHeader";
import { patchDiscordTag } from "./patches/patchDiscordTag";
import { patchStyles } from "./patches/styles";

export default {
  onLoad() {
    patchDirectMessageList();
    patchMemberListItem();
    patchMessageHeader();
    patchDiscordTag();
    patchStyles();
  },
  onUnload() {
    patchContainer.removeAll();
    websocket.close();
  },
  settings() {
    return <Settings />
  }
}
