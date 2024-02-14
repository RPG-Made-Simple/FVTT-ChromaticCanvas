////////////////////////////////////////////////////////////////////////////////
//          _____ _                               _   _                       //
//         / ____| |                             | | (_)                      //
//        | |    | |__  _ __ ___  _ __ ___   __ _| |_ _  ___                  //
//        | |    | '_ \| '__/ _ \| '_ ` _ \ / _` | __| |/ __| Canvas          //
//        | |____| | | | | | (_) | | | | | | (_| | |_| | (__                  //
//         \_____|_| |_|_|  \___/|_| |_| |_|\__,_|\__|_|\___| LIBRARY         //
//                                                              By ZotyDev    //
////////////////////////////////////////////////////////////////////////////////
// ? Main module class.
import anime from "../dependencies/anime.es.js";
import { Constants as C } from "./constants.js";
import { EffectsDatabase } from "./effectsDatabase.js";

export class ChromaticCanvas {
  static ActiveEffects = {};
  static StarredEffects = new Set();

  ////////////////////////////////////////////////////////////////////////////
  // Initializes the module
  ////////////////////////////////////////////////////////////////////////////
  static initialize() {
    // Get currently set effects
    const activeEffects = canvas.scene?.getFlag(C.ID, 'effects') ?? {};
    this.ActiveEffects = activeEffects;

    // Initialize and insert all the filters
    let filters = [];
    for (const [key, value] of Object.entries(EffectsDatabase)) {
      filters.push(value);
    }
    game.canvas.stage.filters = filters;
    game.canvas.app.ticker.add(ChromaticCanvas.tick, this);

    window['animejs'] = anime;
  }

  ////////////////////////////////////////////////////////////////////////////
  // Dispatch a effect
  ////////////////////////////////////////////////////////////////////////////
  static dispatch(effect, options) {
    const defaultOptions = {
      intensity: 1,
      duration: 500,
      iterations: 1,
      target: 'board',
      everyone: true,
      users: [game.user],
    };

    const mergedOptions = foundry.utils.mergeObject(defaultOptions, options);
    const relevantOptions = {
      intensity: mergedOptions.intensity,
      duration: mergedOptions.duration,
      iterations: mergedOptions.iterations,
      target: mergedOptions.target,
    }

    // Check if the effect should be played to everyone
    if (mergedOptions.everyone) {
      C.SOCKET.executeForEveryone(effect, relevantOptions);
    } else {
      for (const user of mergedOptions.users) {
        C.SOCKET.executeAsUser(effect, user.id, relevantOptions);
      }
    }
  }

  static tick() {
    for (const [key, value] of Object.entries(EffectsDatabase)) {
      if (value.enabled) {
        value.step();
      }
    }
  }
}
