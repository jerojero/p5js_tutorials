// Store vector points
let particles = [];
const NUM_PARTICLES = 5000;
const NOISE_SCALE = 0.01;

// Setup points
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NUM_PARTICLES; i++) {
    particles.push(createVector(random(width), random(height)));
  }
  stroke(255);
}

// Draw points updated by perlin noise
function draw() {
  background(0, 10);
  for (let i = 0; i < particles.length; i ++) {
    let p = particles[i];
    point(p.x, p.y);
    let n = noise(p.x * NOISE_SCALE, p.y * NOISE_SCALE);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);
    if (!isOnScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  }
}

// Check if point is on the screen
function isOnScreen(p) {
  return p.x > 0 && p.x < width && p.y > 0 && p.y < height;
}

// Mouse release to change seed
function mouseReleased() {
  noiseSeed(millis());
}