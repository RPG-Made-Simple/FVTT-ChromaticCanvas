import { FilterMixin } from "../mixins/filterMixin.js";

export class AsciiFilter extends FilterMixin(PIXI.filters.AsciiFilter) {
  constructor() {
    const options = {
      name: 'ASCII Filter',
      icon: 'fa-font',
      id: 'ascii',
    };
    const attributes = [
      {
        type: 'number',
        path: 'size',
        start: 0,
        end: 8.0,
      }
    ];
    super(options, attributes);
  }
}
