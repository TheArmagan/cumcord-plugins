import { fetchUserVoiceStates } from "../other/api.js";
import { ChannelStore } from "../other/apis.js";
import { openInfoModal } from "./openInfoModal.jsx";

export async function openModalByUserId(userId) {
  let state = await fetchUserVoiceStates(userId);
  let channel = ChannelStore.getChannel(state?.channel?.id);
  openInfoModal({
    state,
    inMyChannels: !!channel,
    isJoinable: !channel ? false : (channel.type == 3 ? true : (PermissionStore.can(Permissions.CONNECT, channel) && PermissionStore.can(Permissions.VIEW_CHANNEL, channel)))
  })
}