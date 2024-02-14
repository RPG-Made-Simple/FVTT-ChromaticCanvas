import { FilterMixin } from "./filterMixin.js";

export function FadingFilterMixin(Filter) {
  return class extends FilterMixin(Filter) {
    constructor(options, attributes) {
      super(options, attributes);
    }

    getAnimationData() {
      let animation = [];
      for (const attribute of this.attributes) {
        let from;
        let to;
        switch (this.state) {
          case 'start': {
            from = attribute.start;
            to = attribute.end;
            this.state = 'playing';
            break;
          }
          case 'playing': {
            from = this[attribute.path];
            to = attribute.start;
            this.state = 'reverse';
            break;
          }
          case 'reverse': {
            from = this[attribute.path];
            to = attribute.end;
            this.state = 'playing';
            break;
          }
          case 'end': {
            from = attribute.end;
            to = attribute.start;
            this.state = 'reverse';
            break;
          }
        };
        animation.push({
          parent: this,
          attribute: attribute.path,
          from: from,
          to: to,
        })
      }
      return animation;
    }

    getAnimation() {
      const animation = CanvasAnimation.getAnimation(this.id);
      return animation;
    }

    stopAnimation() {
      CanvasAnimation.terminateAnimation(this.id);
    }

    async animate(options) {
      this.stopAnimation();
      return CanvasAnimation.animate(options, {
        duration: this.duration,
        name: this.id,
      });
    }

    async play() {
      this.enabled = true;
      let animation = this.getAnimationData();
      return this.animate(animation).then((completed) => {
        if (completed) {
          this.state = 'end';
        }
      });
    }

    async stop() {
      let animation = this.getAnimationData();
      return this.animate(animation).then((completed) => {
        if (completed) {
          this.enabled = false;
          this.state = 'start';
        }
      });
    }
  }
}
