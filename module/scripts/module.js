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
import { ChromaticCanvasLayer } from "./chromaticCanvasLayer.js";

////////////////////////////////////////////////////////////////////////////////
// Entry-point for everything
////////////////////////////////////////////////////////////////////////////////
Hooks.once('init', () => {
    Hooks.once('toolbox.ready', () => {
        Toolbox.showcaseModule(C.NAME_FLAT);

        ChromaticCanvas.initialize();

        // Setup the API and methods
        window['ChromaticCanvas'] = {
            // Deprecated
            screenShake: (options) => {
                ChromaticCanvas.dispatch('shake', options);
            },

            shake: (options) => {
                ChromaticCanvas.dispatch('shake', options);
            },

            pulsate: (options) => {
                ChromaticCanvas.dispatch('pulsate', options);
            },

            spin: (options) => {
                ChromaticCanvas.dispatch('spin', options);
            },

            hyperColor: (options) => {
                ChromaticCanvas.dispatch('hyperColor', options);
            },
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

    // Setup listener for the module tools
    Hooks.on('getSceneControlButtons', (controls) => {
        if (!canvas.scene) return;

        const shakeTool = {
            name: 'shake',
            title: game.i18n.localize('chromatic-canvas.tool.shake.title'),
            icon: 'fas fa-waveform',
            onClick: async () => {
                ChromaticCanvas.dispatch('shake', {
                    intensity: 1,
                    duration: 500,
                    iterations: 1,
                    target: 'board',
                    everyone: true,
                });
            },
            button: true,
        }

        const pulsateTool = {
            name: 'pulsate',
            title: game.i18n.localize('chromatic-canvas.tool.pulsate.title'),
            icon: 'fas fa-wave-pulse',
            onClick: async () => {
                ChromaticCanvas.dispatch('pulsate', {
                    intensity: 1,
                    duration: 500,
                    iterations: 3,
                    target: 'board',
                    everyone: true,
                })
            },
            button: true,
        }

        const spinTool = {
            name: 'spin',
            title: game.i18n.localize('chromatic-canvas.tool.spin.title'),
            icon: 'fas fa-rotate-right',
            onClick: async () => {
                ChromaticCanvas.dispatch('spin', {
                    intensity: 1,
                    duration: 500,
                    iterations: 1,
                    target: 'board',
                    everyone: true,
                })
            },
            button: true,
        }

        const colorFringingTool = {
            name: 'hyper-color',
            title: game.i18n.localize('chromatic-canvas.tool.hyper-color.title'),
            icon: 'fas fa-arrows-to-eye',
            onClick: async () => {
                ChromaticCanvas.dispatch('hyperColor', {
                    intensity: 1,
                    duration: 1000,
                    iterations: 10,
                    target: 'board',
                    everyone: true,
                })
            },
            button: true,
        }

        controls.push({
            name: C.ID,
            title: C.NAME_FLAT,
            layer: 'chromaticCanvas',
            icon: 'fas fa-panorama',
            visible: game.user.isGM,
            tools: [
                shakeTool,
                pulsateTool,
                spinTool,
                colorFringingTool,
            ]
        });
    });
});

// Setup the socket
Hooks.once('socketlib.ready', () =>
{
    C.SOCKET = socketlib.registerModule(C.ID);

    C.SOCKET.register('shake', ChromaticCanvasLayer.shake);
    C.SOCKET.register('pulsate', ChromaticCanvasLayer.pulsate);
    C.SOCKET.register('spin', ChromaticCanvasLayer.spin);
    C.SOCKET.register('hyperColor', ChromaticCanvasLayer.hyperColor);
})
