import { Settings } from "./components/Settings";
import { socket } from "./connection/socket";
import patchContainer from "./other/patchContainer";

import { patchStyles } from "./patches/styles";

import { logger } from "@acord/utils"; 
import { Indicator } from "./components/Indicator.jsx";
import { openModalByUserId } from "./methods/openModalByUserId.js";

export default {
  onLoad() {
    window.viOpenModalByUserId = openModalByUserId;
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
