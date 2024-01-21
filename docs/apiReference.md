> **All** methods here are replicated to all the users!

## Shake
```js
ChromaticCanvas.shake(
  intensity: Number = 1,
  duration: Number = 500,
  iterations: Number = 1,
  target: Element = document.getElementById('board')) -> void
```
```js
// Example 1
ChromaticCanvas.shake();
// Will shake the canvas
```
```js
// Example 2
ChromaticCanvas.shake(1, 500, 1, document.getElementById('ui-bottom'));
// Wil shake the hotbar
```
Will shake the `target` based on `intensity`, `duration` (ms) and `iterations`.

## Pulsate
```js
ChromaticCanvas.pulsate(
  intensity: Number = 1,
  duration: Number = 500,
  iterations: Number = 3,
  target: Element = document.getElementById('board')) -> void
```
```js
// Example
ChromaticCanvas.pulsate(1, 1500, 1);
// Will do a long and slow pulsation
```
Will pulsate the `target` based on `intensity`, `duration` (ms) and `iterations`.

