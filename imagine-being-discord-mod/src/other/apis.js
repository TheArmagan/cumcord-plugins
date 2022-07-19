import webpack from "@cumcord/modules/webpack";
import common from "@cumcord/modules/common"

export const DiscordMenu = webpack.findByDisplayName("Menu", false);
export const SelectedGuildStore = webpack.findByProps("getLastSelectedGuildId");
export const FluxDispatcher = common.FluxDispatcher;
export const { getCurrentUser } = webpack.findByProps("getCurrentUser");
export const GuildStore = webpack.findByProps("getGuild");