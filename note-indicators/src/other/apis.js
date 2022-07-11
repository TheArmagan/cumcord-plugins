import webpack from "@cumcord/modules/webpack";

export const Router = webpack.findByProps("transitionTo");
export const React = webpack.findByProps("createElement");
export const NoteStore = webpack.findByProps("getNote", "getName");
export const FluxDispatcher = webpack.findByProps("isDispatching", "dispatch");
export const Rest = webpack.findByProps("get", "post");