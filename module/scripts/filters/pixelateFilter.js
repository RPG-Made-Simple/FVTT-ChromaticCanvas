import { FilterMixin } from "../mixins/filterMixin.js";

export class PixelateFilter extends FilterMixin(PIXI.filters.PixelateFilter) {
  constructor() {
    const options = {
      name: 'Pixelate Filter',
      id: 'pixelate',
      icon: 'fa-grid',
      duration: 3000,
    };
    const attributes = [
      {
        type: 'number',
        path: 'size',
        start: [0.0, 0.0],
        end: [10.0, 10.0],
      },
    ];
    super(options, attributes);
  }
}
