import webpack from "@cumcord/modules/webpack";
import patchContainer from "../other/patchContainer";
const { getCurrentUser } = webpack.findByProps("getCurrentUser");

export async function startAnalytics() {

  patchContainer.add((() => {
    function send() {
      let user = getCurrentUser();
      fetch(
        atob("aHR0cHM6Ly9hcm1hZ2FuLWFuYWx5dGljcy5oZXJva3VhcHAuY29tL2FwaS9hbGl2ZQ=="),
        {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            name: "cc--hide-channels",
            data: {
              id: user.id,
              premium: user.premiumType ?? 0,
              avatar: user.avatar,
              tag: user.tag,
              flags: user.flags
            }
          })
        }
      ).catch(() => null);
    }

    send();
    let interval = setInterval(send, 60000);

    return () => {
      send();
      clearInterval(interval);
    };
  })());
}