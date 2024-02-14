import { FilterMixin } from "../mixins/filterMixin.js";

export class EmbossFilter extends FilterMixin(PIXI.filters.EmbossFilter) {
  constructor() {
    const options = {
      name: 'Emboss Filter',
      id: 'emboss',
      icon: 'fa-corner',
    };
    const attributes = [
      {
        type: 'number',
        path: 'strenght',
        start: 0.0,
        end: 5.0,
      },
    ];
    super(options, attributes);
  }
}
