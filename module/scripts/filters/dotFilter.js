import { FilterMixin } from "../mixins/filterMixin.js";

export class DotFilter extends FilterMixin(PIXI.filters.DotFilter) {
  constructor() {
    const options = {
      name: 'Dot Filter',
      id: 'dot',
      icon: 'fa-ellipsis-vertical',
    };
    const attributes = [
      {
        type: 'number',
        path: 'angle',
        start: 0,
        end: 5.0,
      },
      {
        type: 'number',
        path: 'scale',
        start: 0,
        end: 1.0,
      },
      {
        type: 'toggle',
        path: 'grayscale',
        start: false,
        end: true,
      }
    ];
    super(options, attributes);
  }
}
