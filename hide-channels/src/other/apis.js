import webpack from "@cumcord/modules/webpack";
import data from "@cumcord/pluginData";


export const GuildStore = webpack.findByProps("getGuild", "getGuildCount");
export const GuildMemberCountStore = webpack.findByProps("getMemberCount", "getMemberCounts");
export const ChannelStore = webpack.findByProps("getChannel", "hasChannel");
export const GuildChannelStore = webpack.findByProps("getChannels", "getDefaultChannel");
export const GuildReadStateStore = webpack.findByProps("hasUnread", "getMentionCount");
export const Router = webpack.findByProps("transitionTo");
export const React = webpack.findByProps("createElement");
/** @type {{hiddenChannels: string[]}} */
export const dataStore = data.persist.store;