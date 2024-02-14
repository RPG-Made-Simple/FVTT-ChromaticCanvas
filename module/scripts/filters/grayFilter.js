import { FilterMixin } from "../mixins/filterMixin.js";

export class GrayFilter extends FilterMixin(PIXI.filters.GrayscaleFilter) {
  constructor() {
    const options = {
      name: 'Gray Filter',
      id: 'gray',
      icon: 'fa-circle-half-stroke',
    }
    super(options);
  }
}
