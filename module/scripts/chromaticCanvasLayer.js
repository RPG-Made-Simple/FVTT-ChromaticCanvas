////////////////////////////////////////////////////////////////////////////////
//          _____ _                               _   _                       //
//         / ____| |                             | | (_)                      //
//        | |    | |__  _ __ ___  _ __ ___   __ _| |_ _  ___                  //
//        | |    | '_ \| '__/ _ \| '_ ` _ \ / _` | __| |/ __| Canvas          //
//        | |____| | | | | | (_) | | | | | | (_| | |_| | (__                  //
//         \_____|_| |_|_|  \___/|_| |_| |_|\__,_|\__|_|\___| LIBRARY         //
//                                                              By ZotyDev    //
////////////////////////////////////////////////////////////////////////////////
// ? All methods here will be exposed to the API.
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
    // Shakes the target
    ////////////////////////////////////////////////////////////////////////////
    static shake(options) {
        // Debug
        C.D.info('ChromaticCanvasLayer.shake()');

        const a = 1 * options.intensity;
        const b = 2 * options.intensity;
        const c = 3 * options.intensity;

        document.getElementById(options.target).animate([
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
            duration: options.duration,
            iterations: options.iterations,
        });
    }

    ////////////////////////////////////////////////////////////////////////////
    // Pulsates the target
    ////////////////////////////////////////////////////////////////////////////
    static pulsate(options) {
        // Debug
        C.D.info('ChromaticCanvasLayer.pulsate()');

        const a = options.intensity > 1 ? 1.2 : options.intensity < 1 ? 1.05 : 1.1;
        const b = options.intensity > 1 ? 1.1 : options.intensity < 1 ? 1.025 : 1.05;

        document.getElementById(options.target).animate([
            { transform: `scale(1)` },
            { transform: `scale(${a})` },
            { transform: `scale(1)` },
            { transform: `scale(${b})` },
            { transform: `scale(1)` }
        ], {
            duration: options.duration,
            iterations: options.iterations,
            ease: "ease",
        });
    }

    ////////////////////////////////////////////////////////////////////////////
    // Spins the target
    ////////////////////////////////////////////////////////////////////////////
    static spin(options) {
        // Debug
        C.D.info('ChromaticCanvasLayer.spin()');

        document.getElementById(options.target).animate([
            { transform: `rotate(0deg)` },
            { transform: `rotate(360deg)` },
        ], {
            duration: options.duration / options.intensity,
            iterations: options.iterations,
        });
    }

    ////////////////////////////////////////////////////////////////////////////
    // Applies color fringing to the target
    ////////////////////////////////////////////////////////////////////////////
    static colorFringing(options) {
        // Debug
        C.D.info('ChromaticCanvasLayer.colorFringing()');

        const a = 1 * options.intensity;
        const b = 2 * options.intensity;

        const animationIn = document.getElementById(options.target).animate([
            { filter: `hue-rotate(0deg) blur(0px)`, transform: `rotate(0deg)` },
            { filter: `hue-rotate(45deg) blur(${a}px)`, transform: `rotate(${a}deg)` },
        ], {
            duration: options.duration,
            iterations: 1,
            ease: 'ease',
        });

        animationIn.finished.then(() => {
            const animation = document.getElementById(options.target).animate([
                { filter: `hue-rotate(45deg) blur(${a}px)`, transform: `rotate(${a}deg)` },
                { filter: `hue-rotate(-45deg) blur(${b}px)`, transform: `rotate(-${a}deg)` },
                { filter: `hue-rotate(45deg) blur(${a}px)`, transform: `rotate(${a}deg)` },
            ], {
                duration: options.duration * 3,
                iterations: options.iterations,
                ease: 'ease',
            });

            animation.finished.then(() => {
                const animationOut = document.getElementById(options.target).animate([
                    { filter: `hue-rotate(45deg) blur(${a}px)`, transform: `rotate(${a}deg)` },
                    { filter: `hue-rotate(0deg) blur(0px)`, transform: `rotate(0deg)` },
                ], {
                    duration: options.duration,
                    iterations: 1,
                    ease: 'ease',
                })
            })
        })
    }
}
