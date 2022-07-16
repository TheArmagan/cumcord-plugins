import { getAllVoiceStatesShaped, getUserVoiceStateShaped } from "../other/VoiceStates";

export async function onCallbackEvent(eventName, eventData, cb) {
  switch (eventName) {
    case "ping": {
      cb({ ok: true, data: "pong" });
      break;
    }
    case "voiceStates": {
      cb({ ok: true, data: getAllVoiceStatesShaped() });
      break;
    }
    case "voiceState": {
      cb({ ok: true, data: getUserVoiceStateShaped(eventData) });
    }
  }
}