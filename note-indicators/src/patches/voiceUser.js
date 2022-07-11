import webpack from "@cumcord/modules/webpack";
import patcher from "@cumcord/patcher";

import { Indicator } from "../components/Indicator";
import { React } from "../other/apis";
import patchContainer from "../other/patchContainer";

const { createElement: h, createContext } = React;

export function patchVoiceUser() {
  const UserContext = createContext();
  const VoiceUser = webpack.find(m => m?.default?.displayName === "VoiceUser");
  const classes = cumcord.modules.webpack.findByProps("icons", "usernameSpeaking");

  const patch = patcher.after("render", VoiceUser.default.prototype, (_, returnValue) => {
    let tree = returnValue?.props?.children?.props?.children;
    let userId = tree?.[1]?.props?.style?.backgroundImage?.split("/")?.[4];
    return h(UserContext.Provider, {
      value: userId
    }, returnValue);
  });

  const patch2 = patcher.after("renderIcons", VoiceUser.default.prototype, (_, returnValue) => {
    window.returnValue = returnValue;
    return h(UserContext.Consumer, {
      children: userId => {
        if (!userId) return null;
        let element = h(Indicator, {
          userId,
          kind: "voice-user"
        });
        if (returnValue) {
          returnValue.props.children.unshift(element);
          return returnValue;
        } else {
          return h("div", {
            className: classes.icons
          }, [element]);
        }
      }
    })
  });

  patchContainer.add(patch, patch2);
}