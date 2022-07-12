import webpack from "@cumcord/modules/webpack";
import patcher from "@cumcord/patcher";

import { VoiceIcon } from "../components/VoiceIcon";
import { openVoicesModal } from "../methods/openVoicesModal";
import { React, Tooltip } from "../other/apis";
import { COLORS } from "../other/constants";
import patchContainer from "../other/patchContainer";

const { createElement: h } = React;

export function patchHeaderBar() {
  const HeaderBar = webpack.find(m => m?.default?.displayName == "HeaderBar");
  const classes = findByProps("divider", "hamburger", "container");;

  const patch = patcher.after("default", HeaderBar, ([props], returnValue) => {
    try {
      let tree = returnValue.props.children.props.children[1].props.children.props.children;
      console.log(tree);
      if (tree[1] == null) {
        tree.push(
          h("div", { className: classes.divider }),
          h("div", {
            className: "tv--button-container",
            onClick() {
              openVoicesModal();
            }
          }, [
            h(Tooltip, {
              className: "tv--tooltip",
              text: "Top Voices"
            }, [
              h(VoiceIcon, {
                color: "#b9bbbe"
              })
            ])
          ])
        )
      }
    } catch (err) {
      console.error(err)
    };
  });

  patchContainer.add(patch);
}