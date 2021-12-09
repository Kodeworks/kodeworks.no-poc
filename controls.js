export let controls = {
  WIDTH: 1000,
  HEIGHT: 1400,
  NUMBER_OF_LINES: 45,
  VECTOR_WIDTH_STANDARD_DEVIATION: 200,
  VECTOR_HEIGHT_STANDARD_DEVIATION: 35,
  FAT_STROKE_CHANCE: 0.1,
  LINE_BIRTH_CHANCE: 0.1,
  SEED: 2034,
  SAVE: () => saveForPrint(),
};

let p;
const controllers = {};

const saveForPrint = () => {
  p.setup();
  p.saveCanvas(controls.SEED.toString());
  p.setup();
};

export const initiateControlGUI = (p5) => {
  p = p5;
  controls.SEED = p5.random(10000);
  const gui = new dat.GUI({ width: 400 });

  const f0 = gui.addFolder("General");
  controllers["WIDTH"] = f0
    .add(controls, "WIDTH", 1000, 8000, 5)
    .name("Width")
    .onChange(() => p.setup());
  controllers["HEIGHT"] = f0
    .add(controls, "HEIGHT", 1000, 8000, 5)
    .name("Height")
    .onChange(() => p.setup());
  f0.open();
  const f1 = gui.addFolder("Line algorithm");
  controllers["NUMBER_OF_LINES"] = f1
    .add(controls, "NUMBER_OF_LINES", 1, 300, 1)
    .name("Number of lines")
    .onChange(() => p.setup());
  controllers["FAT_STROKE_CHANCE"] = f1
    .add(controls, "FAT_STROKE_CHANCE", 0, 1, 0.05)
    .name("Fat stroke chance")
    .onChange(() => p.setup());
  controllers["LINE_BIRTH_CHANCE"] = f1
    .add(controls, "LINE_BIRTH_CHANCE", 0, 1, 0.05)
    .name("Line birth chance")
    .onChange(() => p.setup());
  controllers["VECTOR_WIDTH_STANDARD_DEVIATION"] = f1
    .add(controls, "VECTOR_WIDTH_STANDARD_DEVIATION", 1, controls.WIDTH / 2, 1)
    .name("Vector Width SD")
    .onChange(() => p.setup());
  controllers["VECTOR_HEIGHT_STANDARD_DEVIATION"] = f1
    .add(
      controls,
      "VECTOR_HEIGHT_STANDARD_DEVIATION",
      1,
      controls.HEIGHT / 2,
      1
    )
    .name("Vector Height SD")
    .onChange(() => p.setup());
  f1.open();
  controllers["SEED"] = gui
    .add(controls, "SEED", 1, 10000, 1)
    .name("Seed")
    .onChange(() => p.setup());
  gui.add(controls, "SAVE").name("Lagre bildet");
};
