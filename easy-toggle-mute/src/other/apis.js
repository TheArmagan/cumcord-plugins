import webpack from "@cumcord/modules/webpack";

export const { toggleLocalMute, toggleSelfMute } = webpack.findByProps("toggleLocalMute");
export const { getCurrentUser } = webpack.findByProps("getCurrentUser");