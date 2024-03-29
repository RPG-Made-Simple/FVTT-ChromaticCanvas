# 🎴 Chromatic Canvas Changelog

## Version 2.0.0

- *Internal* - Added [`anime.js`](https://github.com/juliangarnier/anime) to included dependencies.
- *Internal* - Added [`pixi-filters.js`](https://github.com/pixijs/filters) to included dependencies.
- *Internal* - Animations got a rework, they are way more fluid now.
- *Internal* - Removed `module/branding/title.png` since it was a duplicate of `branding/title.png`.
- *Internal* - Changed indentation from `4` spaces to `2`.
- *Effect* - Added [`blur`()]().
- *Effect* - Added [`dot()`]().
- *Effect* - Added [`ascii()`]().
- *Effect* - Added [`gray()`]().
- *Effect* - Added [`oldFilm()`]().
- *Effect* - Added [`emboss()`]().
- *Effect* - Added [`pixelate()`]().
- *Interface* - Added an effect manager.

## Version 1.2.0

- *Internal* - Removed redundant argument checks.
- *Internal* - Effects now support any HTML `Element` that has an `id`. (note that some elements do not work and I have no idea why)
- *API* - Methods now have an `options` argument instead of many different arguments.
- *API* - Renamed `screenShake()` to `shake()`.
- *Effect* - Added [`pulsate()`](https://docs.rpgmadesimple.com/FVTT-ChromaticCanvas/#/apiReference?id=pulsate).
- *Effect* - Added [`spin()`](https://docs.rpgmadesimple.com/FVTT-ChromaticCanvas/#/apiReference?id=spin).
- *Effect* - Added [`hyperColor()`](https://docs.rpgmadesimple.com/FVTT-ChromaticCanvas/#/apiReference?id=hyper-color).
- *Docs* - Updated to reflect the new **API** standards of the module.

## Version 1.1.0

- *Internal* - Added [socketlib](https://foundryvtt.com/packages/socketlib) as a dependency.
- *Internal* - Added replication to effects.
- *Interface* - Added an interface tool to execute the effects.
- *API* - [`screenShake()`](https://docs.rpgmadesimple.com/FVTT-ChromaticCanvas/#/apiReference?id=shake) now replicates to all users.
- *Docs* - Removed warning about effects working only locally.

## Version 1.0.1

- *Internal* - Added proper `InteractionLayer` for the module.

## Version 1.0.0

This module was part of [OIF](https://foundryvtt.com/packages/object-interaction-fx), which got the functionality from [Kandashi's Fluid Canvas](https://github.com/kandashi/kandashis-fluid-canvas) (MIT license before someone says something). My original intention was to keep this code contained inside **OIF** forever, but as I've developed new module ideas, making this functionality into a standalone module makes more sense now.

- *API* - Added [`screenShake()`](https://docs.rpgmadesimple.com/FVTT-ChromaticCanvas/#/apiReference?id=shake)

##
