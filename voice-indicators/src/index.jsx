import { Settings } from "./components/Settings";
import { socket } from "./connection/socket";
import patchContainer from "./other/patchContainer";

import { patchDirectMessageList } from "./patches/directMessageList";
import { patchMemberListItem } from "./patches/memberListItem";
import { patchMessageHeader } from "./patches/messageHeader";
import { patchDiscordTag } from "./patches/patchDiscordTag";
import { patchStyles } from "./patches/styles";

import { logger } from "@acord/utils"; 

export default {
  onLoad() {
    try { patchDirectMessageList(); } catch (err) { logger.error(err) };
    try { patchMemberListItem(); } catch (err) { logger.error(err) };
    try { patchMessageHeader(); } catch (err) { logger.error(err) };
    try { patchDiscordTag(); } catch (err) { logger.error(err) };
    patchStyles();
  },
  onUnload() {
    patchContainer.removeAll();
    socket.disconnect();
  },
  settings() {
    return <Settings />
  }
}
