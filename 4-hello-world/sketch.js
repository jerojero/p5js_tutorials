let x = 0;

function drawGrid(color = 200, weight = 1) {
  stroke(color); // Set the stroke color to a lighter gray
  strokeWeight(weight); // Set the stroke weight to 1
  for (let i = 0; i <= width; i += 50) {
    for (let j = 0; j <= height; j += 50) {
      line(i, 0, i, height); // Draw vertical lines
      line(0, j, width, j); // Draw horizontal lines
    }
  }
}

function drawPoint(x, y, color = [0, 0, 255], weight = 1) {
  stroke(color[0], color[1], color[2]);
  strokeWeight(weight);
  point(x, y);
}

// The setup function runs once when the program starts
function setup() {
  createCanvas(1200, 800); // Create a canvas with width 1200 and height 800
  drawGrid();
  strokeWeight(5); // Set the stroke weight to 5
  stroke(0, 0, 255); // Set the stroke color to blue
  line(15, 25, 70, 90); // Draws the actual line
  // Draw an arc at position (x, y) (65, 55) with a radius of 50
  // The arc starts at angle 0 and ends at angle PI + QUARTER_PI
  arc(65, 55, 50, 50, 0, PI + QUARTER_PI);
  circle(100, 100, 50); // Draw a circle at position (100, 100) with a radius of 50
  // drawPoint(200, 200);
  // point(198, 198);
}

// The draw function runs continuously

function draw() {
  // the height system variable stores the height of the canvas
  ellipse(x, height/2, 20, 20); // Draw an ellipse at x position
  x = x + 1; // Move the ellipse to the right
}