import webpack from "@cumcord/modules/webpack";

import { ChannelStore, dataStore, GuildChannelStore, GuildMemberCountStore, GuildStore, React } from "../other/apis";
import { arrayToggler } from "../utils";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { EyeIcon } from "./EyeIcon";
import { EyeOffIcon } from "./EyeOffIcon";
import { TextIcon } from "./TextIcon";
import { VoiceIcon } from "./VoiceIcon";

const scrollClasses = webpack.findByProps("thin", "scrollerBase");

export function Settings() {
  let [data, setData] = React.useState([]);

  let [unFoldedGuilds, setUnFoldedGuilds] = React.useState([]);
  let [hiddenChannels, setHiddenChannels] = React.useState([...dataStore.hiddenChannels]);
  let [hasHiddenChannels, setHasHiddenChannels] = React.useState([]);

  let toggleFold = arrayToggler(
    () => [...unFoldedGuilds],
    (arr) => {
      setUnFoldedGuilds([...arr]);
      setData(data);
    }
  );

  let toggleHidden = arrayToggler(
    () => [...dataStore.hiddenChannels],
    (arr) => {
      let hidden = [...arr];
      dataStore.hiddenChannels = hidden; // nest save
      setHiddenChannels(hidden);
      setHasHiddenChannels(data.filter(i => i.channels.some(j => hidden.includes(j.id))).map(i => i.guild.id));
    }
  )



  React.useEffect(() => {
    let guilds = Object.values(GuildStore.getGuilds())
      .map(g => ({
        guild: Object.assign(g, {
          member_count: GuildMemberCountStore.getMemberCount(g.id)
        }),
        channels:
          [...GuildChannelStore.getSelectableChannelIds(g.id), ...GuildChannelStore.getVocalChannelIds(g.id)]
            .map(cId => ChannelStore.getChannel(cId)).filter(i=>i?.name)
      }))
      .sort((a, b) => b.guild.member_count - a.guild.member_count)
      .filter(i=>!!i.channels.length)
    setData(guilds);
    {
      let hidden = [...dataStore.hiddenChannels];
      setHasHiddenChannels(guilds.filter(i => i.channels.some(j => hidden.includes(j.id))).map(i => i.guild.id));
    }
  }, []);

  return (
    <div className="hc--container">
      {
        data.map((guild) => <div className={`guild ${!unFoldedGuilds.includes(guild.guild.id) ? "folded" : ""}`}>
          <div className="header">
            <div className={`info ${hasHiddenChannels.includes(guild.guild.id) ? "has-hidden" : ""}`}>
              <div className="icon" style={{ backgroundImage: `url("https://cdn.discordapp.com/icons/${guild.guild.id}/${guild.guild.icon}.png")` }}></div>
              <div className="name">
                {guild.guild.name}
              </div>
            </div>
            <div className="right">
              <div
                className={`fold ${!unFoldedGuilds.includes(guild.guild.id) ? "folded" : ""}`}
                onClick={() => {
                  toggleFold(guild.guild.id);
                }}
              >
                <ArrowDownIcon />
              </div>
            </div>
          </div>
          <div className={`content ${scrollClasses.thin}`}>
            {
              !unFoldedGuilds.includes(guild.guild.id) ? null : guild.channels.map(channel => <div className={`channel ${hiddenChannels.includes(channel.id) ? "hidden" : ""}`}>
                <div
                  className="header"
                  onClick={() => {
                    toggleHidden(channel.id);
                  }}
                >
                  <div className="info">
                    {channel.type === 2 ? <VoiceIcon /> : <TextIcon />}
                    <div className="name">
                      {channel.name}
                    </div>
                  </div>
                  <div className="toggle">
                    {hiddenChannels.includes(channel.id) ? <EyeOffIcon /> : <EyeIcon />}
                  </div>
                </div>
              </div>)
            }
          </div>
        </div>)
      }
    </div>
  )
}