# Basic Example

This basic example goes through modifying the file a little bit.

## Using the minified js version

For the page to load faster we can use the minified version of p5js.

By default the project creator includes the minified version as you can see in the following block of code in the `index.html` file:

```html
<script src="libraries/p5.min.js"></script>
<script src="libraries/p5.sound.min.js"></script>
```

## Making something a bit more fun

In the `sketch.js` file you can modify the javascript to display what you want. Right now the file is very basic:

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
```

Insert an ellipse after `background(200)` with `ellipse(50,50,80,80);`:

```javascript
...
function draw() {
  background(220);
  ellipse(50, 50, 80, 80);
}
```

This will draw an ellipse at the `(x, y) = (50, 50)` position with a width and height of `80px`.

Next we can make circles that follow the mouse by doing:

```javascript
function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
```

The `mouseX` and `mouseY` represent the cursor position. And the `mouseIsPressed` represents the state of the mouse.
