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
import { ChromaticCanvasLayer } from "./chromaticCanvasLayer.js";

////////////////////////////////////////////////////////////////////////////////
// Entry-point for everything
////////////////////////////////////////////////////////////////////////////////
Hooks.once('init', () => {
    Hooks.once('toolbox.ready', () => {
        Toolbox.showcaseModule(C.NAME_FLAT);

        // Setup the API and methods
        window['ChromaticCanvas'] = {
            screenShake: (intensity = 1, duration = 500, iterations = 1) => {
                C.SOCKET.executeForEveryone('screenShake', intensity, duration, iterations);
            }
        }

        Hooks.call('chromatic-canvas.ready');
        C.D.info('Ready!!');
    })

    // Debug info
    Hooks.once('debugger.ready', () => {
        C.D = new Debugger(C.ID, C.NAME, false, false);
        C.D.info('Module Information:');
        C.D.info(`Version ${game.modules.get(C.ID).version}`);
        C.D.info('Library By ZotyDev');
    });

    // Setup the layer where the effects will be played
    CONFIG.Canvas.layers['chromaticCanvas'] = {
        group: 'interface',
        layerClass: ChromaticCanvasLayer,
    }

    Hooks.on('getSceneControlButtons', (controls) => {
        // Setup listener for the module tools
        if (!canvas.scene) return;

        const screenShakeTool = {
            name: 'screen-shake',
            title: game.i18n.localize('chromatic-canvas.tool.screen-shake.title'),
            icon: 'fas fa-waveform',
            onClick: async () => {
                C.SOCKET.executeForEveryone('screenShake', 1, 500, 1);
            },
            button: true
        }

        controls.push({
            name: C.ID,
            title: C.NAME_FLAT,
            layer: 'chromaticCanvas',
            icon: 'fas fa-panorama',
            visible: game.user.isGM,
            tools: [
                screenShakeTool
            ]
        });
    });
});

// Setup the socket
Hooks.once('socketlib.ready', () =>
{
    C.SOCKET = socketlib.registerModule(C.ID);

    // Tags
    C.SOCKET.register('screenShake', ChromaticCanvasLayer.screenShake);
})
