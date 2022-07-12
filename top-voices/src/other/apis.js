import webpack from "@cumcord/modules/webpack";
import data from "@cumcord/pluginData";

export const UserStore = webpack.findByProps("getUser", "findByTag");
export const GuildStore = webpack.findByProps("getGuild", "getGuildCount");
export const ChannelStore = webpack.findByProps("getChannel", "hasChannel");
export const VoiceStateStore = webpack.findByProps("getVoiceState", "getUserVoiceChannelId");
export const Router = webpack.findByProps("transitionTo");
export const React = webpack.findByProps("createElement");
export const ModalComponents = findByProps("ModalCloseButton");
export const { openModal } = findByProps("openModal", "openModalLazy");
export const { TooltipContainer: Tooltip } = webpack.findByProps("TooltipContainer");
export const FluxDispatcher = webpack.findByProps("isDispatching", "dispatch");
/** @type {{foldedGuilds: string[]}} */
export const dataStore = data.persist.store;