import webpack from "@acord/modules/webpack";
import patcher from "@acord/patcher";
import { Indicator } from "../components/Indicator";
import patchContainer from "../other/patchContainer";

const { createElement: h, createContext } = React;

export function patchDiscordTag() {
  const UserContext = createContext();
  const DiscordTag = webpack.find(m => m.default?.displayName === "DiscordTag");
  const NameTag = webpack.find(m => m.default?.displayName === "NameTag");

  
  const providerPatch = patcher.after("default", DiscordTag, ([{ user }], returnValue) => {
    return h(UserContext.Provider, { value: user }, returnValue);
  });

  const nameTagProvider = patcher.after("default", NameTag, ([args], returnValue) => {
    const tree = returnValue?.props;
    if (!Array.isArray(tree.children)) return;

    try {
      tree.children.push(
        h(UserContext.Consumer, {
          children: user => {
            if (!user) return null;
            return h(Indicator, {
              userId: user.id
            })
          }
        })
      );
    }
    catch (error) {
      console.error("Failed to inject into NameTag:\n", error);
    }

    return returnValue;
  });

  patchContainer.add(providerPatch, nameTagProvider);
}