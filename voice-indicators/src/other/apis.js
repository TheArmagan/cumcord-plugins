import webpack from "@cumcord/modules/webpack";
import common from "@cumcord/modules/common";

export const GuildStore = webpack.findByProps("getGuild", "getGuildCount");
export const ChannelStore = webpack.findByProps("getDMFromUserId", "getDMUserIds", "getChannel");
export const VoiceStateStore = webpack.findByProps("getVoiceState", "getUserVoiceChannelId");
export const Router = webpack.findByProps("transitionTo");
export const React = webpack.findByProps("createElement");
export const UserStore = webpack.findByProps("getUser", "getCurrentUser");
export const ModalComponents = webpack.findByProps("ModalCloseButton");
export const DiscordSwitch = webpack.findByDisplayName("Switch");
export const { openModal } = webpack.findByProps("openModal", "openModalLazy");
export const PermissionStore = webpack.findByProps("getChannelPermissions");
export const { Permissions } = common.constants;
export const { selectVoiceChannel } = webpack.findByProps("selectVoiceChannel", "disconnect");
export const { TooltipContainer: DiscordTooltip } = webpack.findByProps("TooltipContainer");
export const InviteStore = webpack.findByProps("acceptInvite", "acceptInviteAndTransitionToInviteChannel");
export const FluxDispatcher = webpack.findByProps("isDispatching", "dispatch");
export const { getUser: fetchUser } = webpack.findByProps("getUser", "fetchProfile");
