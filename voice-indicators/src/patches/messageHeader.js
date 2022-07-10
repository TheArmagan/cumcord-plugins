import * as webpack from "@cumcord/modules/webpack";
import * as patcher from "@cumcord/patcher";

import { Indicator } from "../components/Indicator";
import { React } from "../other/apis";
import patchContainer from "../other/patchContainer";

const { createElement: h } = React;

export function patchMessageHeader() {
  const MessageHeader = webpack.find(m => m?.default?.displayName == "MessageHeader");

  const patch = patcher.after("default", MessageHeader, ([props], returnValue) => {
    try {
      const tree = returnValue?.props?.username?.props?.children;
      if (!Array.isArray(tree)) return;
      tree.splice(2, 0, h(Indicator, {
        userId: props.message.author.id
      }));
    }
    catch (error) {
      console.error("Error while patching MessageTimestamp:", error);
    }
  });

  patchContainer.add(patch);
}