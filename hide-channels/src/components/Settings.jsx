import webpack from "@cumcord/modules/webpack";

import { categoryExpandAll, ChannelStore, dataStore, GuildChannelStore, GuildMemberCountStore, GuildStore, React } from "../other/apis";
import { arrayToggler } from "../utils";
import { ArrowDownIcon } from "./ArrowDownIcon";
import { CategoryIcon } from "./CategoryIcon";
import { EyeIcon } from "./EyeIcon";
import { EyeOffIcon } from "./EyeOffIcon";
import { TextIcon } from "./TextIcon";
import { ToggleIcon } from "./ToggleIcon";
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
  );


  let toggleAllGuildChannels = (guildId) => {
    let allChIds = data.find(i => i.guild.id == guildId).channels.map(i => i.id);
    let allChIdsLength = allChIds.length;
    let hidden = [...dataStore.hiddenChannels];
    for (let i = 0; i < allChIdsLength; i++) {
      const chId = allChIds[i];
      if (hidden.includes(chId)) {
        hidden.splice(hidden.indexOf(chId), 1);
      } else {
        hidden.push(chId);
      }
    }
    dataStore.hiddenChannels = hidden;
    setHiddenChannels([...dataStore.hiddenChannels]);
    setHasHiddenChannels(data.filter(i => i.channels.some(j => hidden.includes(j.id))).map(i => i.guild.id));
  }

  React.useEffect(() => {
    let hiddenIds = [...dataStore.hiddenChannels];
    
    {
      // clear unused ones
      for (let i = 0; i < hiddenIds.length; i++) {
        const hId = hiddenIds[i];
        if (!ChannelStore.getChannel(hId)) {
          hiddenIds.splice(hiddenIds.indexOf(hId), 1);
        }
      }
      dataStore.hiddenChannels = [...new Set(hiddenIds)];
    }
    
    let hiddenChannels = hiddenIds.map(i => ChannelStore.getChannel(i)).filter(i=>i);
    let guilds = Object.values(GuildStore.getGuilds())
      .map(g => {
        let channels = [];
        let hiddenOnes = hiddenChannels.filter(i => i.guild_id == g.id);
        channels.push(...hiddenOnes.filter(i => i.type == 4), ...hiddenOnes.filter(i => i.type != 2 && i.type != 4), ...hiddenOnes.filter(i => i.type == 2 && i.type != 4));
        let visibleOnes = GuildChannelStore.getChannels(g.id);
        if (visibleOnes) channels.push(...visibleOnes["4"].map(i => i.channel),...visibleOnes.SELECTABLE.map(i => i.channel), ...visibleOnes.VOCAL.map(i => i.channel));
        let allChs = [...channels];
        channels = channels.filter((item) => item?.name && (item.type == 4 ? true : item.canBeSeen()));
        return {
          guild: Object.assign(g, {
            member_count: GuildMemberCountStore.getMemberCount(g.id)
          }),
          channels
        }
      })
      .sort((a, b) => b.guild.member_count - a.guild.member_count)
      .filter(i=>!!i.channels.length)
    setData(guilds);
    setHasHiddenChannels(guilds.filter(i => i.channels.some(j => hiddenIds.includes(j.id))).map(i => i.guild.id));
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
                className={`toggle-all ${!unFoldedGuilds.includes(guild.guild.id) ? "hide" : "" }`}
                onClick={() => {
                  toggleAllGuildChannels(guild.guild.id);
                  categoryExpandAll(guild.guild.id);
                }}
              >
                <ToggleIcon />
              </div>
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
                    categoryExpandAll(guild.guild.id);
                  }}
                >
                  <div className="info">
                    {channel.type === 2 ? <VoiceIcon /> : channel.type === 4 ? <CategoryIcon /> : <TextIcon />}
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