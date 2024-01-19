////////////////////////////////////////////////////////////////////////////////
//          _____ _                               _   _                       //
//         / ____| |                             | | (_)                      //
//        | |    | |__  _ __ ___  _ __ ___   __ _| |_ _  ___                  //
//        | |    | '_ \| '__/ _ \| '_ ` _ \ / _` | __| |/ __| Canvas          //
//        | |____| | | | | | (_) | | | | | | (_| | |_| | (__                  //
//         \_____|_| |_|_|  \___/|_| |_| |_|\__,_|\__|_|\___| LIBRARY         //
//                                                              By ZotyDev    //
////////////////////////////////////////////////////////////////////////////////
// ? Main module class. All methods here will be exposed to the API.
//
// ? Disclaimer: I did not create these from the ground up, some are straight up
// ? copies of Kandashi's Fluid Canvas, some are improved versions, some got
// ? created from 0 but using Kandashi's work as reference :D.
import { Constants as C } from "./constants.js";

export class ChromaticCanvasLayer extends InteractionLayer {
    constructor() {
        super();

        if (game.release.generation == 10) {
            // Debug
            C.D.info('Detected FoundryVTT 10, making compatibility changes...');

            this.loader = new PIXI.loader();
        }

        this.mouseInteractionManager = undefined;
        this._interactiveChildren = false;
        this._dragging = false;
        this.options = this.constructor.layerOptions;
    }

    async _draw(options) {}

    ////////////////////////////////////////////////////////////////////////////
    // Shakes the screen
    ////////////////////////////////////////////////////////////////////////////
    static screenShake(intensity, duration, iterations) {
        // Debug
        C.D.info('ChromaticCanvas.screenShake()');

        // Check if arguments are valid
        if (!Toolbox.check(intensity, 'number')) {
            // Debug
            C.D.error('"intensity" is missing');

            return;
        }
        if (!Toolbox.check(duration, 'number')) {
            // Debug
            C.D.error('"duration" is missing');

            return;
        }
        if (!Toolbox.check(iterations, 'number')) {
            // Debug
            C.D.error('"iterations" is missing');

            return;
        }

        const a = 1 * intensity;
        const b = 2 * intensity;
        const c = 3 * intensity;

        document.getElementById('board').animate([
            { transform: `translate(${a}px, ${a}px) rotate(0deg)` },
            { transform: `translate(-${a}px, -${b}px) rotate(-${a}deg)` },
            { transform: `translate(-${c}px, 0px) rotate(${a}deg)` },
            { transform: `translate(${c}px, ${b}px) rotate(0deg)` },
            { transform: `translate(${a}px, -${a}px) rotate(${a}deg)` },
            { transform: `translate(-${a}px, ${b}px) rotate(-${a}deg)` },
            { transform: `translate(-${c}px, ${a}px) rotate(0deg)` },
            { transform: `translate(${c}px, ${a}px) rotate(-${a}deg)` },
            { transform: `translate(-${a}px, -${a}px) rotate(${a}deg)` },
            { transform: `translate(${a}px, ${b}px) rotate(0deg)` },
            { transform: `translate(${a}px, -${b}px) rotate(-${a}deg)` }
        ], {
            duration,
            iterations,
        });
    }
}
