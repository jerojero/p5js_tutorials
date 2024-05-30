# Overview

## The basic functions

The `setup()` block runs once and it's typically use for initialization.

The `draw()` block runs repeatedly and it's used for animation.

## A simple line

In the `setup()` function let's draw a simple line by doing:

```javascript
setup() {
    line(15, 25, 70, 90);
}
```

This draws one line. The arguments of the function are `(start x, start y, end x, end y)` that describe the position of the start and end of the line.

You can modify the weight of the line with the `strokeWeight()` function. To color the line you need to use the `stroke()` function as a line has no `fill` therefore `fill()` is useless.

## Drawing a moving circle

With the `draw()` function we can draw figures that update continously, using this we can draw an ellipse that will start at the middle of the draw area by using the `height` system variable and move towards the left of the screen.
