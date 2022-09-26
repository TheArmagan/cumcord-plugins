import { awaitResponse, socket } from "../connection/socket";

const cache = new Map();

setInterval(() => {
  cache.forEach((item, key) => {
    if (Date.now() - item.at > item.ttl) {
      cache.delete(key);
    }
  });
}, 1000);

/**
 * @param {string} id 
 * @param {"ALL"|"GUILD"|"USER"} type
 * @returns {string[]}
 */
export async function fetchNames(id, type, offset=0, limit=50) {
  let cached = cache.get(`Names:${id}`);
  if (cached && !(Date.now() - cached.at > 10000)) return cached.names;

  let names = (await awaitResponse("names", { id, offset, limit, type }))?.data;
  cache.set(`Names:${id}`, { at: Date.now(), names, ttl: 10000 });
  return names || [];
}

/**
 * 
 * @param {{ userId: string, name: string, from: "USER"|"GUILD", fromId: string }} names 
 */
export async function updateNames(names = []) {
  await awaitResponse("update", { names });
}