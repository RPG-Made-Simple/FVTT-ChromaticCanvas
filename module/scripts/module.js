////////////////////////////////////////////////////////////////////////////////
//          _____ _                               _   _                       //
//         / ____| |                             | | (_)                      //
//        | |    | |__  _ __ ___  _ __ ___   __ _| |_ _  ___                  //
//        | |    | '_ \| '__/ _ \| '_ ` _ \ / _` | __| |/ __| Canvas          //
//        | |____| | | | | | (_) | | | | | | (_| | |_| | (__                  //
//         \_____|_| |_|_|  \___/|_| |_| |_|\__,_|\__|_|\___| LIBRARY         //
//                                                              By ZotyDev    //
////////////////////////////////////////////////////////////////////////////////
// ? Chromatic Canvas is a simple library that exposes a API with methods to
// ? apply special effects to the canvas.
import { Constants as C } from "./constants.js";
import { ChromaticCanvas } from "./chromaticCanvas.js";

////////////////////////////////////////////////////////////////////////////////
// Entry-point for everything
////////////////////////////////////////////////////////////////////////////////
Hooks.once('init', () => {
    Hooks.once('toolbox.ready', () => {
        Toolbox.showcaseModule(C.NAME_FLAT);

        // Setup the layer where the effects will be played
        CONFIG.Canvas.layers['chromaticCanvas'] = {
            group: 'interface',
            layerClass: ChromaticCanvas,
        }

        // Setup the API and methods
        window['ChromaticCanvas'] = {
            screenShake: ChromaticCanvas.screenShake,
        }

        Hooks.call('chromatic-canvas.ready');
        C.D.info('Ready!!');
    })

    // Debug info
    Hooks.once('debugger.ready', () => {
        C.D = new Debugger(C.ID, C.NAME, true, true);
        C.D.info('Module Information:');
        C.D.info(`Version ${game.modules.get(C.ID).version}`);
        C.D.info('Library By ZotyDev');
    });
})
