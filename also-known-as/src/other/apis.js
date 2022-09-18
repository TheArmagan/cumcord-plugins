import webpack from "@cumcord/modules/webpack";

export const GuildStore = webpack.findByProps("getGuild", "getGuildCount");
export const ChannelStore = webpack.findByProps("getDMFromUserId", "getDMUserIds", "getChannel");
export const UserStore = webpack.findByProps("getUser", "getCurrentUser");
export const FluxDispatcher = webpack.findByProps("isDispatching", "dispatch");
export const { fetchRelationships } = webpack.findByProps("fetchRelationships");
export const { getLastSelectedGuildId } = webpack.findByProps("getLastSelectedGuildId");
export const NicknameStore = webpack.findByProps("getNickname", "getName");
export const GuildMemberStore = webpack.findByProps("getMembers", "getMemberIds");
