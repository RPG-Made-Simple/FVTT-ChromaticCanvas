import { Constants as C } from "../constants.js";

export function FilterMixin(Filter) {
  return class extends Filter {
    constructor({name, id, icon, duration = 0, state = "start", enabled = false} = {}, attributes = []) {
      super();
      this.name = name;
      this.id = id;
      this.icon = icon;
      this.duration = duration;
      this.state = state;
      this.attributes = attributes;
      this.enabled = enabled;
    }

    name;
    id;
    icon;
    duration;
    state;
    attributes;

    set attributes(attributes) {
      this.attributes = attributes;
    }

    set duration(duration) {
      this.duration = duration;
    }

    async play() {
      this.enabled = true;
      this.state = 'end';
    }

    async stop() {
      this.enabled = false;
      this.state = 'start';
    }

    async step() {}
  }
}
