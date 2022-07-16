import patchContainer from "../other/patchContainer";
import { BasicEventEmitter } from "../utils/BasicEventEmitter";

export const events = new BasicEventEmitter();

patchContainer.add((() => {
  
  let interval = setInterval(() => {
    events.emit("check");
  }, 1000);
  
  return () => {
    clearInterval(interval);
  }
})());