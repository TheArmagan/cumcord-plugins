import patchContainer from "../other/patchContainer";

import patcher from "@cumcord/patcher";
import { ChannelStore, dataStore, GuildChannelStore, GuildReadStateStore, React } from "../other/apis";

import webpack from "@cumcord/modules/webpack";
import { findComponentByNameAndSelector } from "../utils";

export async function patchAll() {
  
  // const VoiceUsers = webpack.find(i => i?.default?.displayName == "VoiceUsers");
  // const ChannelItem = webpack.find(i => i?.default?.displayName == "ChannelItem");

  // const voiceUsersPatch = patcher.instead("render", VoiceUsers.default.prototype, function(args, ogMethod) {
  //   let hidden = [...dataStore.hiddenChannels];
  //   if (hidden.includes(this?.props?.channel?.id)) {
  //     return null;
  //   }
  //   return ogMethod.call(this, ...args);
  // });

  // const channelItemPatch = patcher.instead("default", ChannelItem, function(args, ogMethod) {
  //   let hidden = [...dataStore.hiddenChannels];
  //   if (hidden.includes(args[0]?.channel?.id)) {
  //     return null;
  //   }
  //   return ogMethod.call(this, ...args);
  // });

  let filerAllChannel = (o) => {
    let hidden = [...dataStore.hiddenChannels];
    let chFilter = i => !hidden.includes(i.channel.id);
    let SELECTABLE = o.SELECTABLE.filter(chFilter);
    let VOCAL = o.VOCAL.filter(chFilter);
    return Object.assign(o, {
      SELECTABLE,
      VOCAL,
      count: SELECTABLE.length + VOCAL.length + o["4"].length
    });
  }

  patchContainer.add(
    patcher.after("getChannel", ChannelStore, function(args, ret) {
      if ([...dataStore.hiddenChannels].includes(args[0])) return;
      return ret;
    }),
    patcher.after("getBasicChannel", ChannelStore, function(args, ret) {
      if ([...dataStore.hiddenChannels].includes(args[0])) return;
      return ret;
    }),
    patcher.after("getChannels", GuildChannelStore, function(args, ret) {
      return filerAllChannel(ret);
    }),
    patcher.after("getAllGuilds", GuildChannelStore, function(args, ret) {
      for (const key in ret) {
        if (ret[key]) {
          ret[key] = filerAllChannel(ret[key]);
        }
      }
      return ret;
    }),
    patcher.after("getTextChannelNameDisambiguations", GuildChannelStore, function(args, ret) {
      let hidden = [...dataStore.hiddenChannels];
      for (let i = 0; i < hidden.length; i++) {
        const hId = hidden[i];
        delete ret[hId];
      }
      return ret;
    }),
    patcher.after("getSelectableChannelIds", GuildChannelStore, function(args, ret) {
      let hidden = [...dataStore.hiddenChannels];
      return ret.filter(i => !hidden.includes(i));
    }),
    patcher.after("getVocalChannelIds", GuildChannelStore, function(args, ret) {
      let hidden = [...dataStore.hiddenChannels];
      return ret.filter(i => !hidden.includes(i));
    }),
    patcher.instead("hasUnread", GuildReadStateStore, function(args, ogMethod) {
      let hidden = [...dataStore.hiddenChannels];
      if (hidden.includes(args[0])) {
        return false;
      }
      return ogMethod.call(this, ...args);
    }),
    (() => {
      Object.assign(window, {
        HideChannelsAPI: {
          getHiddenChannelIds() {
            return [...dataStore.hiddenChannels];
          },
          setHiddenChannelIds(ids=[]) {
            dataStore.hiddenChannels = ids;
            return true;
          }
        }
      });
      return () => {
        delete window["HideChannelsAPI"];
      }
    })()
  );

  // (async () => {
  //   let VoiceChannel = await findComponentByNameAndSelector("VoiceChannel", '[class*="containerDefault-"]');

  //   const voiceChannelPatch = patcher.instead("render", VoiceChannel.prototype, function(args, ogMethod) {
  //     let hidden = [...dataStore.hiddenChannels];
  //     if (hidden.includes(this?.props?.channel?.id)) {
  //       return null;
  //     }
  //     return ogMethod.call(this, ...args);
  //   });

  //   patchContainer.add(voiceChannelPatch);
  // })();

  (async () => {
    let Channels = await findComponentByNameAndSelector("Channels", '#channels');
    window.Channels = Channels;

    // const voiceChannelPatch0 = patcher.instead("render", Channels.prototype, function(args, ogMethod) {
    //   let hidden = [...dataStore.hiddenChannels];
    //   let hiddenLength = hidden.length;

    //   let res = ogMethod.call(this, ...args);

    //   window.res = res;
    //   window.args = args;
    //   window._this = this;
    //   console.log(1);

    //   return res;
    // });

    // patchContainer.add(voiceChannelPatch0);

    const categoryClasses = findByProps("containerDefault", "muted");
    const channelClasses = findByProps("containerDefault", "subtitleHasThreads");

    const voiceChannelPatch = patcher.instead("render", Channels.prototype, function(args, ogMethod) {
      // let hidden = [...dataStore.hiddenChannels];
      // let hiddenLength = hidden.length;

      // let child = this.context?.ref?.current?.children?.[0];
      // if (child) {
      //   child.style.height = "";
      //   child.style.height = child.getBoundingClientRect().height + "px";
      //   Object.defineProperty(child.style, "height", {
      //     set() {
      //       child.style.setProperty("height", child.getClientRects().height + "px");
      //     }
      //   });
      // }
      

      // window.args = args;
      // window._this = this;

      // if (this?.props?.voiceStates) {
      //   for (let i = 0; i < hiddenLength; i++) {
      //     const id = hidden[i];
      //     delete this.props.voiceStates[id];
      //   }
      // }

      // let clearCats = [];
      // if (this?.props?.guildChannels?.sortedNamedCategories) {
      //   let cats = this?.props?.guildChannels?.sortedNamedCategories;
      //   let catsLength = cats.length;
      //   for (let i = 0; i < catsLength; i++) {
      //     const cat = cats[i];
      //     if (!cat?.channels) continue;
      //     for (let j = 0; j < hiddenLength; j++) {
      //       const id = hidden[j];
      //       delete chs[id];
      //     }
      //     if (!Object.keys(chs).length) {
      //       clearCats.push(cat);
      //       cat.shownChannelIds = [];
      //     }
      //   }
      // }

      // {
      //   let channelsUl = document.querySelector("#channels > ul");
      //   if (channelsUl) {
      //     let categoryChilds = [...channelsUl.querySelectorAll(`.${categoryClasses.containerDefault}`)];
      //     let allChilds = [...channelsUl.children];

      //     for (let i = 0; i < categoryChilds.length; i++) {
      //       let categoryChild = categoryChilds[i];
      //       let childIndex = allChilds.indexOf(categoryChild);
            
      //       let siblings = [];
      //       for (let j = 1; true; j++) {
      //         let child = allChilds[childIndex + j];
      //         if (!child) break;
      //         if (child.classList.contains(channelClasses.containerDefault) && child.children.length) {
      //           siblings.push(child);
      //         } else if (child.classList.contains(categoryClasses.containerDefault) || (childIndex + j) > allChilds.length){
      //           break;
      //         }
      //       }

      //       if (!siblings.length && categoryChild.querySelector(`[aria-expanded="true"]`)) {
      //         categoryChild.setAttribute("style", "display: none;");
      //       } else {
      //         categoryChild.removeAttribute("style");
      //       }
      //     }
      //   }
      // }

      // let catSelector = `[data-list-item-id*="channels___"]`;
      // document.querySelectorAll(catSelector).forEach(elm => {
      //   let p2 = elm.parentElement.parentElement;
      //   let p3 = p2.parentElement;
      //   let containerChild = [...p3.children];
      //   let childIndex = containerChild.indexOf(p2);
      //   let nextNeighbor = containerChild[childIndex];
      //   let i = 0;
      //   while (true) {
      //     if ((nextNeighbor?.children?.length || 0) == 0) {
      //       nextNeighbor = [childIndex + (++i)];
      //     } else {
      //       break;
      //     }
      //   }
      //   // console.log("uh",nextNeighbor)
      //   if (!!nextNeighbor?.querySelector?.(catSelector)) {
      //     if (nextNeighbor.className.indexOf("iconVisibility-") != -1) {
      //       nextNeighbor.parentElement.style.display = "none";
      //     } else {
      //       nextNeighbor.style.display = "none";
      //     }
      //   } else if (nextNeighbor?.querySelector){
      //     if (nextNeighbor.className.indexOf("iconVisibility-") != -1) {
      //       nextNeighbor.parentElement.style.display = "";
      //     } else {
      //       nextNeighbor.style.display = "";
      //     }
      //   }
      // });
      
      return ogMethod.call(this, ...args);;
    });

    patchContainer.add(voiceChannelPatch);

    // const voiceChannelPatch2 = patcher.instead("renderList", Channels.prototype, function(args, ogMethod) {
    //   let hidden = [...dataStore.hiddenChannels];
    //   let hiddenLength = hidden.length;

    //   if (this?.props?.voiceStates) {
    //     for (let i = 0; i < hiddenLength; i++) {
    //       const id = hidden[i];
    //       delete this.props.voiceStates[id];
    //     }
    //   }
    //   let clearCats = [];
    //   if (this?.props?.guildChannels?.sortedNamedCategories) {
    //     let cats = this?.props?.guildChannels?.sortedNamedCategories;
    //     let catsLength = cats.length;
    //     for (let i = 0; i < catsLength; i++) {
    //       const cat = cats[i];
    //       if (!cat?.channels) continue;
    //       for (let j = 0; j < hiddenLength; j++) {
    //         const id = hidden[j];
    //         delete cat.channels[id];
    //       }
    //       if (!Object.keys(cat.channels).length) clearCats.push(i);
    //     }
    //   }
    //   for (let i = 0; i < clearCats.length; i++) {
    //     const catId = clearCats[i];
    //     delete this.props.guildChannels.categories[catId];
    //     delete this.props.guildChannels.collapsedCategoryIds[catId];
    //     delete this.props.guildChannels.sortedNamedCategories[catId];
    //   }

    //   return ogMethod.call(this, ...args);
    // });

    // patchContainer.add(voiceChannelPatch2);
  })();
}