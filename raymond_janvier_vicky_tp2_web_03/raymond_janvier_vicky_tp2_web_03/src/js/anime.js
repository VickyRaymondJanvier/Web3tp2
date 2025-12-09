import { animate, svg } from "animejs";

const drawable1 = svg.createDrawable(".path1");
animate(drawable1, {
  draw: ["0 0", "0 1"],
  loop: true,
  alternate: true,
  duration: 1000,
  loopDelay: 700,
});

const drawable2 = svg.createDrawable(".path2");
animate(drawable2, {
  draw: ["0 0", "0 1"],
  loop: true,
  alternate: true,
  duration: 1000,
  loopDelay: 700,
});

const drawable3 = svg.createDrawable(".path3");
animate(drawable3, {
  draw: ["0 0", "0 1"],
  loop: true,
  alternate: true,
  duration: 1000,
  loopDelay: 700,
});
