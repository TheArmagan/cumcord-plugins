import utils from "@cumcord/utils";

const cachedComponents = new Map();

export function getComponentsByNode(node) {
  const instance = utils.getReactInstance(node);
  const components = [];
  let lastInstance = instance;
  while (lastInstance && lastInstance.return) {
    if (typeof lastInstance.return.type === "string") break;
    if (lastInstance.return.type) components.push(lastInstance.return.type);
    lastInstance = lastInstance.return;
  }
  return components;
}

export async function sleep(ms=0) { return new Promise(r => setTimeout(r, ms)) };

export async function findComponentByNameAndSelector(name, selector) {
  if (cachedComponents.has(name)) return cachedComponents.get(name);

  let component;

  while (true) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) {
      await sleep(100);
      continue;
    }

    for (const element of elements) {
      const componentsFound = getComponentsByNode(element);
      component = componentsFound.find(i => i?.displayName == name);
      if (component) break;
    }

    if (component) break;
    await sleep(100);
  }

  cachedComponents.set(name, component);
  return component;
}