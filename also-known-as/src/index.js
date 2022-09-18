import { socket } from "./connection/socket";
import patchContainer from "./other/patchContainer";


import { patchCommand } from "./patches/command";
import { patchNicknames } from "./patches/nicknames";
import { patchRelationships } from "./patches/relationships";

export default {
  onLoad() {
    patchRelationships();
    patchNicknames();
    patchCommand();
  },
  onUnload() {
    patchContainer.removeAll();
    socket.disconnect();
  }
}
