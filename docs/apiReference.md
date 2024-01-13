!> **All** methods here do not replicate to users, they are executed **locally**
## Screen Shake
```js
ChromaticCanvas.screenShake(intensity: Number, duration: Number,
  iterations: Number) -> void
```
```js
// Example
ChromaticCanvas.screenShake(1, 500, 1);
// Will animate a screen shake similar to a powerful impact
```
Will shake the screen based on `intensity`, `duration` (ms) and `iterations`.
