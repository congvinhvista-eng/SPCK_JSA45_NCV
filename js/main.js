
const userElement = document.getElementById("currentUser");
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const mapDiv = document.getElementById("leaflet-map");
const map = L.map("leaflet-map",
  {
  scrollWheelZoom: false,
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  boxZoom: false,
  keyboard: false
}).setView([35.6762, 139.6503], 5);


let active = false;

mapDiv.addEventListener("click", () => {
  active = true;

  map.dragging.enable();
  map.scrollWheelZoom.enable();
  map.touchZoom.enable();
  map.doubleClickZoom.enable();
  map.boxZoom.enable();
  map.keyboard.enable();
});

mapDiv.addEventListener("mouseleave", () => {
  if (!active) return;

  active = false;

  map.dragging.disable();
  map.scrollWheelZoom.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.boxZoom.disable();
  map.keyboard.disable();
});

console.log(currentUser);

if (currentUser) {
  console.log(currentUser.username);
}

const japanBounds = L.latLngBounds([
  [18, 115],
  [52, 155]
]);


L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap"
}).addTo(map);

const cities = [
  { name: "Tokyo", coords: [35.6762, 139.6503] },
  { name: "Kyoto", coords: [35.0116, 135.7681] },
  { name: "Osaka", coords: [34.6937, 135.5023] },
  { name: "Sapporo", coords: [43.0618, 141.3545] }
];

cities.forEach(city => {
  L.marker(city.coords)
    .addTo(map)
    .bindPopup(city.name);
});