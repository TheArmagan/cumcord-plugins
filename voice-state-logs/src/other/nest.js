import * as nests from "nests";

const nest = nests.make({ stateHistory: [], searchText: "" }, { nestArrays: false });

window.voiceStateNest = nest;

export default nest;