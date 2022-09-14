import { UserStore } from "../other/apis";
import { getAllVoiceStatesShaped, getUserVoiceStateShaped, getVoiceChannelMembers } from "../other/VoiceStates";

function getCurrentUser() {
  let u = UserStore.getCurrentUser();
  return {
    id: u.id,
    tag: u.tag,
    avatar: u.avatar
  }
}

export async function onCallbackEvent(eventName, eventData, cb) {
  switch (eventName) {
    case "ping": {
      cb({ ok: true, data: "pong", from: getCurrentUser() });
      break;
    }
    case "voiceStates": {
      cb({ ok: true, data: getAllVoiceStatesShaped(), from: getCurrentUser() });
      break;
    }
    case "voiceState": {
      cb({ ok: true, data: getUserVoiceStateShaped(eventData), from: getCurrentUser() });
      break;
    }
    case "voiceMembers": {
      cb({ ok: true, data: getVoiceChannelMembers(eventData), from: getCurrentUser() })
      break;
    }
  }
}