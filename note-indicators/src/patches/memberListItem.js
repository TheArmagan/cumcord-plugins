import patcher from "@cumcord/patcher";

import { Indicator } from "../components/Indicator";
import { React } from "../other/apis";
import patchContainer from "../other/patchContainer";
import { findComponentByNameAndSelector } from "../utils";

const { createElement: h } = React;

export async function patchMemberListItem() {
  const MemberListItem = await findComponentByNameAndSelector("MemberListItem", '[class*="member-"][class*="container-"]');

  const patch = patcher.after("renderDecorators", MemberListItem.prototype, function(_, returnValue) {
    try {
      const tree = returnValue?.props?.children;
      if (!Array.isArray(tree)) return;

      tree.unshift(
        h(Indicator, {
          userId: this.props.user.id,
          kind: "member-list"
        })
      );
    }
    catch (error) {
      console.error("Error while patching MemberListItem:", error);
    }
  })

  patchContainer.add(patch);
}