import WSts from "websocket-ts";
import { onCallbackEvent } from "./listener";

const WEBSOCKET_URI = "wss://cc--voicestates.armagan.rest/ws";

export const websocket =
  new WSts.WebsocketBuilder(WEBSOCKET_URI)
    .withBackoff(new WSts.LinearBackoff(0, 1000, 10000))
    .withBuffer(new WSts.TimeBuffer(60000 * 5))
    .build();

const promises = new Map();

setInterval(() => {
  promises.forEach((value, key) => {
    if (Date.now() > value.at + value.timeout) {
      promises.delete(key);
      value.resolve({ ok: false, error: "timeout" });
    }
  });
}, 1000);

websocket.addEventListener(WSts.WebsocketEvents.message, async (_, ev) => {
  let [eventName, eventData] = JSON.parse(ev.data);

  switch (eventName) {
    case ":response": {
      let promise = promises.get(eventData[0]);
      if (!promise) return;
      promise.resolve(eventData[1]);
      break;
    }
    case ":request": {
      onCallbackEvent(eventData[0] ?? "", eventData[1] ?? {}, (cbData) => {
        websocket.send(JSON.stringify(
          [
            ":response",
            [
              eventData[2],
              cbData
            ]
          ]
        ));
      });
      break;
    }
  }
});

export function awaitResponse(name, data, timeout = Infinity) {
  return new Promise((resolve) => {
    let id = Math.random().toString(36).slice(2);
    promises.set(id, {
      at: Date.now(),
      timeout,
      resolve
    });
    websocket.send(JSON.stringify(
      [
        ":request",
        [
          name,
          data,
          id
        ]
      ]
    ));
  });
}



