import { Settings } from "./components/Settings";
import { socket } from "./connection/socket";
import patchContainer from "./other/patchContainer";

import { patchStyles } from "./patches/styles";

import { logger } from "@acord/utils"; 
import { Indicator } from "./components/Indicator.jsx";

export default {
  onLoad() {
    console.log(Indicator("707309693449535599"))
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
