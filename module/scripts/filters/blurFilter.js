import { FadingFilterMixin } from "../mixins/fadingFilterMixin.js";

export class BlurFilter extends FadingFilterMixin(PIXI.filters.BlurFilter) {
  constructor() {
    const options = {
      name: 'Blur Filter',
      id: 'blur',
      icon: 'fa-droplet',
      duration: 3000,
    };
    const attributes = [
      {
        type: 'number',
        path: 'blur',
        start: 0,
        end: 4.0,
      },
      {
        type: 'number',
        path: 'quality',
        start: 4.0,
        end: 4.0,
      }
    ];
    super(options, attributes);
  }
}
