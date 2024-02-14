import anime from "../dependencies/anime.es.js";
import { ChromaticCanvas } from "./chromaticCanvas.js";
import { Constants as C } from "./constants.js";
import { EffectsDatabase } from "./effectsDatabase.js";

export class CanvasEffectsWindow extends FormApplication {
  static get defaultOptions() {
    const defaultOptions = super.defaultOptions;

    const overrides = {
      closeOnSubmit: false,
      submitOnChange: false,
      submitOnClose: false,
      popOut: true,
      height: 'auto',
      id: 'canvas-effects',
      template: `modules/${C.ID}/module/templates/canvasEffects.hbs`,
      title: game.i18n.localize('chromatic-canvas.window.canvas-effects.title'),
    }

    defaultOptions.classes = ['chromatic-canvas-window', 'window-content']

    const mergedOptions = foundry.utils.mergeObject(defaultOptions, overrides);
    return mergedOptions;
  }

  #handleExpandClick(html, event) {
    let expand = $(event.currentTarget)[0];
    let expandIcon = expand.children[0].classList;
    let content = expand.parentElement.parentElement.children[1].classList;
    if (expandIcon.contains('fa-caret-right')) {
      expandIcon.remove('fa-caret-right');
      expandIcon.add('fa-caret-down');

      content.remove('off');
      content.add('on');
    } else if (expandIcon.contains('fa-caret-down')) {
      expandIcon.remove('fa-caret-down');
      expandIcon.add('fa-caret-right');

      content.remove('on');
      content.add('off');
    }
  }

  #handleStarClick(html, event) {
    let star = $(event.currentTarget)[0];
    if (star.classList.contains('off')) {
      ChromaticCanvas.StarredEffects.add(star.dataset.id);
      ui.controls.initialize();
      anime({
        targets: star,
        duration: 50,
        keyframes: [
          { scale: 1.15},
        ],
        easing: 'easeInOutQuad',
        color: '#ffdd88',
        complete: () => {
          star.classList.remove('off');
          star.classList.add('on');
        }
      });
    } else if (star.classList.contains('on')) {
      ChromaticCanvas.StarredEffects.delete(star.dataset.id);
      ui.controls.initialize();
      anime({
        targets: star,
        duration: 50,
        keyframes: [
          { scale: 1.0},
        ],
        easing: 'easeInOutQuad',
        color: '#646464',
        complete: () => {
          star.classList.remove('on');
          star.classList.add('off');
        }
      });
    }
  }

  activateListeners(html) {
    super.activateListeners(html);

    html.on('click', '.star', this.#handleStarClick.bind(this, html));
    html.on('click', '.expand', this.#handleExpandClick.bind(this, html));

    html[0].parentElement.parentElement.children[0].children[1].lastChild.textContent = '';
  }

  getData(options) {
    return {
      effects: EffectsDatabase,
    }
  }

  async _updateObject(event, formData) {}
}
