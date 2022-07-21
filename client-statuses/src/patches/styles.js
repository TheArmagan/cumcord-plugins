import patchContainer from "../other/patchContainer";
import stylesPatcher from "../styles/style.css";

export function patchStyles() {
  const patch = stylesPatcher();
  patchContainer.add(patch);
}