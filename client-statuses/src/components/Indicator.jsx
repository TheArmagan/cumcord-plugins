import webpack from "@cumcord/modules/webpack";

import { React, PresenceStore, useStateFromStores } from "../other/apis";
import { COLORS } from "../other/constants";

const COLOR_MAP = {
  online: COLORS.SUCCESS,
  dnd: COLORS.DANGER,
  idle: COLORS.WARN
}

const ICON_MAP = {
  desktop: webpack.findByDisplayName("Monitor"),
  mobile: webpack.findByDisplayName("MobileDevice"),
  web: webpack.findByDisplayName("Globe")
}

const NAME_MAP = {
  desktop: "Desktop",
  mobile: "Mobile",
  web: "Web",
  online: "Online",
  dnd: "Do Not Disturb",
  idle: "Idle"
}

const { TooltipContainer: Tooltip } = webpack.findByProps("TooltipContainer");

export function Indicator({ userId }) {
  let states = useStateFromStores(
    [PresenceStore],
    () => Object.entries(PresenceStore.getState()?.clientStatuses?.[userId] || {}),
    [userId]
  );

  return !states?.length ? null : (
    <div className="cs--container">
      {
        states.map(([clientType, status]) => {
          let Element = ICON_MAP[clientType];
          return <div className="cs--icon-container">
            <Tooltip
              text={`${NAME_MAP[status]} on ${NAME_MAP[clientType]}`}
              position="top"
            >
              <Element style={{ color: COLOR_MAP[status] }} className="cs--icon" />
            </Tooltip>
          </div>
        })
      }
    </div>
  );
}