import { AsciiFilter } from "./filters/asciiFilter.js";
import { BlurFilter } from "./filters/blurFilter.js";
import { DotFilter } from "./filters/dotFilter.js";
import { EmbossFilter } from "./filters/embossFilter.js";
import { GrayFilter } from "./filters/grayFilter.js";
import { OldFilmFilter } from "./filters/oldFilmFilter.js";
import { PixelateFilter } from "./filters/pixelateFilter.js";

export const EffectsDatabase = {
  'blur': new BlurFilter(),
  'dot': new DotFilter(),
  'ascii': new AsciiFilter(),
  'gray': new GrayFilter(),
  'old-film': new OldFilmFilter(),
  'emboss': new EmbossFilter(),
  'pixelate': new PixelateFilter(),
}
