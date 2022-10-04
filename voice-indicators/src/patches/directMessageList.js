import webpack from "@acord/modules/webpack";
import patcher from "@acord/patcher";

import { Indicator } from "../components/Indicator";
import { React } from "../other/apis";
import patchContainer from "../other/patchContainer";

const { createElement: h, createContext } = React;

export function patchDirectMessageList() {
  const UserContext = createContext();
  const AvatarWithText = webpack.find(m => m?.default?.displayName === "AvatarWithText");
  const { default: PrivateChannel } = webpack.findByProps("DirectMessage");

  const providerPatch = patcher.after("render", PrivateChannel.prototype, function(_, ret) {
    return h(UserContext.Provider, {
      value: this.props.user
    }, ret);
  });

  const consumerPatch = patcher.before("default", AvatarWithText, ([props]) => {
    props.decorators = [
      props.decorators,
      h(UserContext.Consumer, {
        children: user => {
          if (!user) return null;
          return h(Indicator, {
            userId: user.id
          })
        }
      })
    ]
  });

  patchContainer.add(consumerPatch, providerPatch);
}