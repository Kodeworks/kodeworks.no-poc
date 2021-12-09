import { controls, initiateControlGUI } from "./controls.js";
import { renderLines } from "./line.js";

const sketch = (p5) => {
  let simplex;
  let SEED = 124;
  initiateControlGUI(p5);

  p5.setup = () => {
    p5.createCanvas(controls.WIDTH, controls.HEIGHT);
    p5.pixelDensity(1);
    p5.background("#000000");
    p5.randomSeed(controls.SEED);

    simplex = new SimplexNoise(SEED);

    renderLines(p5, {
      WIDTH: controls.WIDTH,
      FAT_STROKE_CHANCE: controls.FAT_STROKE_CHANCE,
      LINE_BIRTH_CHANCE: controls.LINE_BIRTH_CHANCE,
      NUMBER_OF_LINES: controls.NUMBER_OF_LINES,
      VECTOR_WIDTH_STANDARD_DEVIATION: controls.VECTOR_WIDTH_STANDARD_DEVIATION,
      VECTOR_HEIGHT_STANDARD_DEVIATION:
        controls.VECTOR_HEIGHT_STANDARD_DEVIATION,
    });
  };
};

new p5(sketch);
