import webpack from "@cumcord/modules/webpack";

export const GuildStore = webpack.findByProps("getGuild", "getGuildCount");
export const ChannelStore = webpack.findByProps("getDMFromUserId", "getDMUserIds", "getChannel");
export const VoiceStateStore = webpack.findByProps("getVoiceState", "getUserVoiceChannelId");
export const Router = webpack.findByProps("transitionTo");
export const React = webpack.findByProps("createElement");
export const UserStore = webpack.findByProps("getUser", "getCurrentUser");
export const ModalComponents = webpack.findByProps("ModalCloseButton");
export const { openModal } = webpack.findByProps("openModal", "openModalLazy");