> **All** methods here are replicated to all the users!

# Options
Before calling the API you shoul know that all methods utilize the same type of argument, an `Object` called `options`, which looks like this (includes default values):
```js
const defaultOptions = {
  intensity: 1, // Effect strenght
  duration: 500, // How much time it lasts (ms)
  iterations: 1, // How many times will it repeat. Can also be set to 'Infinity'
  target: 'board', // The HTML Id of the target Element
  everyone: true, // Will it be played to everyone?
  users: [game.user], // If everyone is not true, replicate to these users
};
```

## Shake
```js
ChromaticCanvas.shake(options: Object = defaultOptions) -> void
```
```js
// Example 1
ChromaticCanvas.shake();
// Will shake the canvas
```
```js
// Example 2
ChromaticCanvas.shake({
    intensity: 1,
    duration: 500,
    iterations: 1,
    target: 'ui-bottom',
  });
// Wil shake the hotbar
```

## Pulsate
```js
ChromaticCanvas.pulsate(options: Object = defaultOptions) -> void
```
```js
// Example
ChromaticCanvas.pulsate({
  intensity: 1,
  duration: 1500,
  iterations: 1,
});
// Will do a long and slow pulsation
```

## Spin
```js
ChromaticCanvas.spin(options: Object = defaultOptions) -> void
```
```js
// Example
ChromaticCanvas.spin({
  intesity: 1,
  duration: 10000,
  iterations: Infinity,
});
// Will rotate the canvas forever (or until you reload)
```

## Hyper Color
```js
ChromaticCanvas.hyperColor(options: Object = defaultOptions) -> void
```
```js
// Example
ChromaticCanvas.hyperColor({
  intesity: 1,
  duration: 100,
  iterations: 500,
});
// Will apply a fast hyper color effect that will last for some time
```
