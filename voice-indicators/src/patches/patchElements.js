import webpack from "@acord/modules/webpack";
import { getReactProps, createElement } from "@acord/utils";

export function patchElements() {
  const ClassNames = {
    MemberListItem: webpack.findByProps("wrappedName", "nameAndDecorators"),
    DirectMessage: webpack.findByProps("wrappedName", "nameAndDecorators", "selected")
  };


}