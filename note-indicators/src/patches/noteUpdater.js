import { loadNotes } from "../other/loadNotes";
import patchContainer from "../other/patchContainer";

export function noteUpdater() {
  patchContainer.add((() => {
    let interval = setInterval(() => {
      loadNotes();
    }, 60000 * 10);
    
    return () => {
      clearInterval(interval);
    };
  })());
}