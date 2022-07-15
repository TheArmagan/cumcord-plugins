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
export const RelationshipStore = webpack.findByProps("getFriendIDs");
export const { getCurrentUser } = webpack.findByProps("getCurrentUser");
export const VoiceStateStore = webpack.findByProps("getVoiceState", "getUserVoiceChannelId");
export const DiscordSwitch = webpack.findByDisplayName("Switch");
export const React = webpack.findByProps("createElement");
/** @type {{hiddenChannels: string[], settings: {friendsBypass: boolean}}} */
export const dataStore = data.persist.store;
export const { categoryExpandAll, categoryCollapseAll } = webpack.findByProps("categoryExpandAll", "categoryCollapseAll");