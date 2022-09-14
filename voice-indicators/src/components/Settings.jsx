import { persist } from "@cumcord/pluginData";
import { useNest } from "@cumcord/utils";

import { DiscordSwitch, React } from "../other/apis";

export function Settings() {
  useNest(persist);

  return (
    <div className="vi--settings-container">
      <div className="settings">
        <div className="line">
          <div class="content">
            <h2>Do Not Share Private Data</h2>
            <p>When this setting is on, your private information will not be shared with the other party. However, you will not be able to see other people's private information.</p>
          </div>
          <div className="switch">
            <DiscordSwitch
              checked={persist.ghost.settings?.redacted ?? false}
              onChange={(v) => {
                persist.store.settings.redacted = v;
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}