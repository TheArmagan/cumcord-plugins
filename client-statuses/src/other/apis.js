import webpack from "@cumcord/modules/webpack";

export const PresenceStore = webpack.findByProps("getAllApplicationActivities");
export const React = webpack.findByProps("createElement");
export const { useStateFromStores } = webpack.findByProps("useStateFromStores");