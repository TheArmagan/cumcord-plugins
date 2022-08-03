import patchContainer from "../other/patchContainer";
import webpack from "@cumcord/modules/webpack";

import patcher from "@cumcord/patcher";

import { DiscordMenu, FluxDispatcher, getCurrentUser, GuildStore, SelectedGuildStore } from "../other/apis";

export async function patchAll() {

  let PrivacyAndSafetyShield = webpack.findByDisplayName("PrivacyAndSafetyShield")

  let patch = patcher.before("default", DiscordMenu, function([props]) {

    if (
      props?.navId == "guild-header-popout"
      && !props?.children?.some(i => i?.props?.children?.some?.(j => j?.props?.id == "settings"))
      && !props?.children?.some(i => i?.props?.id == "becomeMod")
    ) {
      let guildId = SelectedGuildStore.getLastSelectedGuildId();
      props.children.push(
        <DiscordMenu.MenuSeparator />,
        <DiscordMenu.MenuItem
          id="becomeMod"
          label="Become Mod"
          icon={PrivacyAndSafetyShield}
          action={() => {
            let guild = GuildStore.getGuild(guildId);
            let memberDispatch = { type: "GUILD_MEMBER_UPDATE", guildId, roles: Object.keys(guild.roles), user: getCurrentUser() };
            FluxDispatcher.dispatch(memberDispatch);
            setTimeout(() => {
              FluxDispatcher.dispatch({ type: "VIEW_AS_ROLES_UPDATE", guildId, roles: [], options: {} });
              setTimeout(() => FluxDispatcher.dispatch(memberDispatch), 10);
            }, 10);
          }}
        />
      );
    }

  });

  patchContainer.add(patch);
}