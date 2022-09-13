import patchContainer from "../other/patchContainer";
import stylesPatcher from "../styles/style.scss";

export function patchStyles() {
  const patch = stylesPatcher();
  patchContainer.add(patch);
}