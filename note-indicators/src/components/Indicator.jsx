import webpack from "@cumcord/modules/webpack";

import { NoteStore, React, Router } from "../other/apis";
import { COLORS } from "../other/constants";
import { ThreadIcon } from "./ThreadIcon";

const { TooltipContainer: Tooltip } = webpack.findByProps("TooltipContainer");

export function Indicator({ userId, kind=null }) {
  let [data, setData] = React.useState({ note: null });

  function onChange() {
    let note = NoteStore.getNote(userId);
    setData({ note });
  }

  React.useEffect(() => {
    onChange();
    NoteStore.addChangeListener(onChange);
    return () => NoteStore.removeChangeListener(onChange);
  }, []);

  return !data?.note?.note ? null : (
    <div className="ni--container">
      <Tooltip
        key={`ni--tooltip-${userId}`}
        text={`${data.note.note}`}
        position="top"
        className="ni--tooltip"
      >
        <span
          className={`ni--icon-container ni--kind-${kind}`}
        >
          <ThreadIcon color={COLORS.SECONDARY}></ThreadIcon>
        </span>
      </Tooltip>
    </div>
  );
}