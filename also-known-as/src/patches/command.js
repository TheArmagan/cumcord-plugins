import patchContainer from "../other/patchContainer";
import commands from "@cumcord/commands";
import { fetchNames } from "../other/api";
import { UserStore } from "../other/apis";


export function patchCommand() {
  let patch = commands.addCommand({
    name: "aka",
    description: "Get other nicknames of a user.",
    args: [
      {
        name: "user",
        description: "Target user",
        type: "user",
        required: true
      },
      {
        name: "page",
        description: "Page to show.",
        type: "string",
        required: false
      },
      {
        name: "mode",
        description: "Allowed modes: ALL, GUILD, USER",
        type: "string",
        required: false
      }
    ],
    async handler(ctx, reply) {
      let user = UserStore.getUser(ctx.args.user);
      let page = Math.max(~~((Number(ctx.args.page) || 0) - 1), 0);
      let mode = ["ALL", "GUILD", "USER"].includes(ctx.args.mode) ? ctx.args.mode : "ALL";
      let names = await fetchNames(ctx.args.user, mode, page * 50, 50);
      reply({
        embeds: [
          {
            title: `AKA for ${user?.tag || ctx.args.user} (${mode})`,
            description: names.length ? names.join("\n") : "No history was found. Try again later.",
            footer: {
              text: `Page ${page + 1}`
            }
          }
        ]
      })
      return;
    }
  });

  patchContainer.add(patch);
}