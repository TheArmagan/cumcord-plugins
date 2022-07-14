import webpack from "@cumcord/modules/webpack";
import data from "@cumcord/pluginData";
import common from "@cumcord/modules/common"

export const GuildStore = webpack.findByProps("getGuild", "getGuildCount");
export const GuildMemberCountStore = webpack.findByProps("getMemberCount", "getMemberCounts");
export const ChannelStore = webpack.findByProps("getChannel", "hasChannel");
export const GuildChannelStore = webpack.findByProps("getChannels", "getDefaultChannel");
export const PermissionStore = webpack.findByProps("getChannelPermissions");
export const { Permissions } = common.constants;
export const Channel = webpack.findByPrototypes("isManaged");
export const React = webpack.findByProps("createElement");
/** @type {{hiddenChannels: string[]}} */
export const dataStore = data.persist.store;
export const { categoryExpandAll, categoryCollapseAll } = findByProps("categoryExpandAll", "categoryCollapseAll");