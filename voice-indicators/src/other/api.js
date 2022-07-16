import { awaitResponse } from "../connection/websocket";
import { getUserVoiceStateShaped } from "./VoiceStates";

export async function fetchUserVoiceStates(userId) {
  let state = getUserVoiceStateShaped(userId);
  if (!state) state = (await awaitResponse("voiceState", userId))?.data;
  return state;
}