import Zdog from "zdog";

const illo = new Zdog.Illustration({
  element: ".zdog",
  resize: true,
});

new Zdog.Hemisphere({
  addTo: illo,
  diameter: 150,
  stroke: 0,
  color: "#BB0",
  backface: "#161920",
});

function animate() {
  illo.rotate.y += 0.01;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}
animate();
