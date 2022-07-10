import * as webpack from "@cumcord/modules/webpack";

export const GuildStore = webpack.findByProps("getGuild", "getGuildCount");
export const ChannelStore = webpack.findByProps("getChannel", "hasChannel");
export const VoiceStateStore = webpack.findByProps("getVoiceState", "getUserVoiceChannelId");
export const Router = webpack.findByProps("transitionTo");
export const React = webpack.findByProps("createElement");