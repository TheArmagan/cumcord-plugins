import webpack from "@cumcord/modules/webpack";
import patcher from "@cumcord/patcher";

import { getCurrentUser, toggleLocalMute, toggleSelfMute } from "../other/apis";
import patchContainer from "../other/patchContainer";
export function patchVoiceUser() {
  const VoiceUser = webpack.find(m => m?.default?.displayName === "VoiceUser");

  const patch = patcher.after("render", VoiceUser.default.prototype, (_, returnValue) => {
    let userId = returnValue?.props?.value ? returnValue?.props?.value : returnValue?.props?.children?.props?.children?.[1]?.props?.style?.backgroundImage?.split("/")?.[4];
    let currentUserId = getCurrentUser()?.id;
    if (userId) {
      let ogClick = returnValue.props.onClick;
      returnValue.props.onClick = function(e) {
        if (!e.shiftKey) return ogClick.call(this, e);
        e.preventDefault();
        if (userId == currentUserId) {
          toggleSelfMute();
        } else {
          toggleLocalMute(userId);
        }
      }
    }
  });

  patchContainer.add(patch);
}