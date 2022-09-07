import webpack from "@cumcord/modules/webpack";

import { FluxDispatcher, NoteStore, React } from "../other/apis";
import { cache } from "../other/cache";
import { Indicator } from "./Indicator";

const { getUser } = webpack.findByProps("getUser");

export function Settings() {
  let [data, setData] = React.useState([]);

  async function onChange() {
    let notes = [];
    for (const key in cache.notes) {
      let note = NoteStore.getNote(key)?.note;
      if (!note) continue;
      let user = await getUser(key);
      if (!user) continue;
      notes.push({
        user,
        note
      });
    }
    setData(notes);
  }

  React.useEffect(async () => {
    onChange();
  }, []);

  return <div className="ni--settings">
    {
      !data.length ? <h2 className="loading">Loading..</h2> : data.map((note) => <div
        className="user"
        onClick={(e2) => {
          e2.preventDefault();
          FluxDispatcher.dispatch({
            type: "USER_PROFILE_MODAL_OPEN",
            userId: note.user.id
          });
        }}
      >
        <div className="info">
          <div className="icon" style={{ backgroundImage: `url("${note.user.avatar ? `https://cdn.discordapp.com/avatars/${note.user.id}/${note.user.avatar}.${note.user.avatar.startsWith("a_") ? "gif" : "png"}` : `https://cdn.discordapp.com/embed/avatars/${Number(note.user.discriminator) % 5}.png`}")` }}></div>
          <div className="name">
            {note.user.username}#{note.user.discriminator}
          </div>
        </div>
        <div className="indicator">
          <Indicator userId={note.user.id} kind="list" />
        </div>
      </div>)
    }
  </div>
}