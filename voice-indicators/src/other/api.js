import { awaitResponse } from "../connection/websocket";
import { getUserVoiceStateShaped } from "./VoiceStates";

const cache = new Map();

setInterval(() => {
  cache.forEach((item, key) => {
    if (Date.now() - item.at > 1000) {
      cache.delete(key);
    }
  });
}, 1000);

export async function fetchUserVoiceStates(userId) {
  let state = getUserVoiceStateShaped(userId);
  if (!state) {
    let cached = cache.get(userId);
    if (cached && !(Date.now() - cached.at > 1000)) return cached.state;

    state = (await awaitResponse("voiceState", userId))?.data;
    cache.set(userId, { at: Date.now(), state });
  }
  return state;
}