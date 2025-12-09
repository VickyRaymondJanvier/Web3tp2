import maplibregl from "maplibre-gl";

const carte = new maplibregl.Map({
  container: "map",
  style: "https://tiles.openfreemap.org/styles/bright",
  center: [-73.9693081, 45.4999267],
  zoom: 14,
  attributionControl: false,
});

new maplibregl.Marker({ color: "#6dd664ff" })
  .setLngLat([-73.9815964, 45.4978596])
  .addTo(carte);
new maplibregl.Marker({ color: "#3edfd1ff" })
  .setLngLat([-73.9724896, 45.4967258])
  .addTo(carte);
new maplibregl.Marker({ color: "#b082c5ff" })
  .setLngLat([-73.9667328, 45.5054048])
  .addTo(carte);
new maplibregl.Marker({ color: "#eb8a1bff" })
  .setLngLat([-73.9600393, 45.5073364])
  .addTo(carte);
new maplibregl.Marker({ color: "#eece17ff" })
  .setLngLat([-73.9714676, 45.4995832])
  .addTo(carte);
