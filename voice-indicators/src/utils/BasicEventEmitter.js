// @ts-nocheck
// The MIT License (MIT)
//
// Copyright © 2021-2022 Kıraç Armağan Önal
//
// Permission is hereby granted, free of charge, to any person obtaining a copy 
// of this software and associated documentation files(the “Software”), to deal 
// in the Software without restriction, including without limitation the rights 
// to use, copy, modify, merge, publish, distribute, sublicense, and / or sell 
// copies of the Software, and to permit persons to whom the Software is furnished 
// to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
// OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

export class BasicEventEmitter {

  constructor () {
    /** @type {Map<string, Map<(...args: any[])=>void, {once: boolean}>>} */
    this.listeners = new Map();
  }

  _prepareListenersMap(eventName) {
    if (!this.listeners.has(eventName)) this.listeners.set(eventName, new Map());
  }

  /**
   * @param {string} eventName 
   * @param {(...args: any[])=>void} listener
   */
  on(eventName, listener) {
    this._prepareListenersMap(eventName);
    this.listeners.get(eventName).set(listener, { once: false });
  }

  /**
   * @param {string} eventName
   * @param {(...args: any[])=>void} listener
   */
  once(eventName, listener) {
    this._prepareListenersMap(eventName);
    this.listeners.get(eventName)?.set(listener, { once: true });
  }

  /**
   * @param {string?} eventName
   * @param {((...args: any[])=>void)?} listener
   */
  off(eventName, listener) {
    if (!eventName) return this.listeners = new Map();
    if (!listener) return this.listeners?.delete(eventName);
    this.listeners.get(eventName)?.delete(listener)
  }

  /**
   * @param {string} eventName 
   * @param  {...any} args 
   */
  emit(eventName, ...args) {
    if (!this.listeners.has(eventName)) return;
    let eventMap = this.listeners.get(eventName);
    eventMap.forEach(({ once }, listener) => {
      if (once) eventMap?.delete(listener);
      listener(...args);
    });
  }

  // Aliases:
  /**
   * @param {string} eventName 
   * @param {(...args: any[])=>void} listener 
   * @param {{once: boolean}} opts 
   */
  addEventListener(eventName, listener, opts = { once: false }) {
    this[opts.once ? "once" : "on"](eventName, listener);
  }

  /**
   * @param {string} eventName 
   * @param {((...args: any[])=>void)?} listener
   */
  removeEventListener(eventName, listener) {
    this.off(eventName, listener);
  }

  // More aliases:
  /**
   * @param {string} eventName 
   * @param {(...args: any[])=>void} listener 
   * @param {{once: boolean}} opts 
   */
  addListener(eventName, listener, opts = { once: false }) {
    this[opts.once ? "once" : "on"](eventName, listener);
  }

  /**
   * @param {string} eventName 
   * @param {((...args: any[])=>void)?} listener
   */
  removeListener(eventName, listener) {
    this.off(eventName, listener);
  }
}