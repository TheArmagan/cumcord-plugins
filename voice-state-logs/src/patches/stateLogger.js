import nest from "../other/nest";
import patchContainer from "../other/patchContainer";
import { getAllVoiceStatesShaped, shapedStateToString, getAllVoiceUserIds, getUserVoiceStateShaped } from "../other/VoiceStates";
import chillout from "chillout";

export function startStateLogger() {

  patchContainer.add((() => {
    let userIdsToScan = [];
    let stateCache = {};

    let STOP = false;

    (async () => {
      userIdsToScan = await getAllVoiceUserIds();
      stateCache = await getAllVoiceStatesShaped();
      
      async function _f() {
        if (STOP) return;

        await chillout.forEach(userIdsToScan, (userId) => {
          if (STOP) return chillout.StopIteration;
          try {
            let state = getUserVoiceStateShaped(userId);
            if (state?.isPrivate) return;
            let oldState = stateCache[userId];

            if (
              shapedStateToString(oldState)
              == shapedStateToString(state)
            ) return;

            if (!oldState?.channel && state?.channel) {
              nest.store.stateHistory.unshift({ ...state, at: Date.now(), action: "join" });
            } else if (oldState?.states && state?.states && oldState.channel.id != state.channel.id) {
              nest.store.stateHistory.unshift(
                { ...state, at: Date.now(), action: "join" },
                { ...oldState, at: Date.now(), action: "leave" },
              );
            } else if (oldState?.states && !state?.states) {
              nest.store.stateHistory.unshift({ ...oldState, at: Date.now(), action: "leave" });
            } else {
              nest.store.stateHistory.unshift({ ...state, at: Date.now(), action: "stay" });
            }

            state ? (stateCache[userId] = state) : (delete stateCache[userId]);

            if (nest.ghost.stateHistory.length > 2048)
              nest.store.stateHistory.length = 2048;
          } catch {}
        });

        userIdsToScan = await getAllVoiceUserIds();

        await new Promise(r => setTimeout(r, 1000));

        _f();
      }

      _f();
    })();

    return () => {
      STOP = true;
      userIdsToScan = [];
      stateCache = {};
    };
  })());

} 