// Ideer
// fat stroke probability

export function renderLines(
  p5,
  {
    WIDTH,
    NUMBER_OF_LINES,
    FAT_STROKE_CHANCE,
    LINE_BIRTH_CHANCE,
    VECTOR_WIDTH_STANDARD_DEVIATION,
    VECTOR_HEIGHT_STANDARD_DEVIATION,
  }
) {
  let basePositionVector = p5.createVector(500, 0);
  let initialVector = p5.createVector(0, 0);
  let line = new Line(basePositionVector, initialVector, WIDTH);
  for (let i = 0; i < NUMBER_OF_LINES; i++) {
    renderLine(
      line,
      p5,
      FAT_STROKE_CHANCE,
      VECTOR_WIDTH_STANDARD_DEVIATION,
      VECTOR_HEIGHT_STANDARD_DEVIATION
    );
    let hasNewLine = p5.random() < LINE_BIRTH_CHANCE; // Add line to array if hasNewline
  }
}

function renderLine(
  line,
  p5,
  FAT_STROKE_CHANCE,
  VECTOR_WIDTH_STANDARD_DEVIATION,
  VECTOR_HEIGHT_STANDARD_DEVIATION
) {
  line.updateTowardsCenter(
    p5,
    VECTOR_WIDTH_STANDARD_DEVIATION,
    VECTOR_HEIGHT_STANDARD_DEVIATION
  );

  drawLine(p5, line, "#b6ff9e", FAT_STROKE_CHANCE);
}

// draw a line for a vector at a given base position
function drawLine(p5, line, myColor, FAT_STROKE_CHANCE) {
  let base = line.pos;
  let vec = line.vector;
  let strokeWeight = p5.random() < FAT_STROKE_CHANCE ? 20 : 3;
  p5.push();
  p5.stroke(myColor);
  p5.strokeCap(p5.PROJECT);
  p5.strokeWeight(strokeWeight);
  p5.fill(myColor);
  p5.translate(base.x, base.y);
  p5.line(0, 0, vec.x, vec.y);
  p5.pop();
}

export class Line {
  constructor(basePositionVector, vector, canvasWidth) {
    this.pos = basePositionVector;
    this.vector = vector;
    this.canvasWidth = canvasWidth;
  }

  update(newVector) {
    let limitedVector = this.vectorWithinCanvas(newVector);
    this.pos.x += this.vector.x;
    this.pos.y += this.vector.y;
    this.vector = limitedVector;
  }

  updateTowardsCenter(
    p5,
    VECTOR_WIDTH_STANDARD_DEVIATION,
    VECTOR_HEIGHT_STANDARD_DEVIATION
  ) {
    let newVectorFromCenter = p5.createVector(
      p5.randomGaussian(p5.width / 2, VECTOR_WIDTH_STANDARD_DEVIATION),
      Math.abs(
        p5.randomGaussian(p5.height / 2, VECTOR_HEIGHT_STANDARD_DEVIATION) -
          p5.height / 2
      )
    );
    //p5.ellipse(newVectorFromCenter.x, this.pos.y, 10, 10);
    let newVectorFromCurrentPositionToNewVectorFromCenter = p5.createVector(
      newVectorFromCenter.x - (this.pos.x + this.vector.x),
      newVectorFromCenter.y
    );
    this.update(newVectorFromCurrentPositionToNewVectorFromCenter);
  }

  updateWithNoise() {
    random(1, pos - edgeInDirection);
    this.pos.x += p5.width;
  }

  vectorWithinCanvas(vector) {
    if (this.pos.x + this.vector.x + vector.x < 0) {
      return vector.limit(this.pos.x + this.vector.x);
    }
    if (this.pos.x + this.vector.x + vector.x > this.canvasWidth) {
      return vector.limit(this.canvasWidth - (this.pos.x + this.vector.x));
    }
    return vector;
  }
}
