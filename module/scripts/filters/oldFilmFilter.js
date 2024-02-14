import { FadingFilterMixin } from "../mixins/fadingFilterMixin.js";
import { FilterMixin } from "../mixins/filterMixin.js";

export class OldFilmFilter extends FilterMixin(PIXI.filters.OldFilmFilter) {
  constructor() {
    const options = {
      name: 'Old Film Filter',
      id: 'old-film',
      icon: 'fa-film',
      duration: 3000,
    };
    const attributes = [
      {
        type: 'number',
        path: 'noise',
        start: 0.0,
        end: 0.3,
      },
      {
        type: 'number',
        path: 'noiseSize',
        start: 0.0,
        end: 1.0,
      },
      {
        type: 'number',
        path: 'scratch',
        start: 0.0,
        end: 0.5,
      },
      {
        type: 'number',
        path: 'scratchDensity',
        start: 0.0,
        end: 0.3,
      },
      {
        type: 'number',
        path: 'scratchWidth',
        start: 0.0,
        end: 1.0,
      },
      {
        type: 'number',
        path: 'sepia',
        start: 0.0,
        end: 0.3,
      },
      {
        type: 'number',
        path: 'vignetting',
        start: 0.0,
        end: 0.3,
      },
      {
        type: 'number',
        path: 'vignettingAlpha',
        start: 0.0,
        end: 1.0,
      },
      {
        type: 'number',
        path: 'vignettingBlur',
        start: 0.0,
        end: 0.3,
      },
    ];
    super(options, attributes);
  }

  async step() {
    this.seed = Math.random();
    await super.step();
  }
}
