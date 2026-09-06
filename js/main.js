
 const translations = {
  vi: {
    heroTitle: "Khám Phá Vẻ Đẹp Nhật Bản",
    heroDesc: "Khám phá những điểm đến tuyệt vời, ẩm thực hấp dẫn, văn hóa độc đáo và những chuyến phiêu lưu khó quên.",
    startExplore: "Bắt đầu khám phá",
    map: "Bản Đồ",
    exploreEasy: "Khám phá Nhật Bản dễ dàng",
    japanStory: "Một quốc gia. Vô vàn câu chuyện.",
    mapTitle: "Khám Phá Nhật Bản Trên Bản Đồ",
    mapDesc: "Khám phá những điểm đến nổi tiếng, di sản văn hóa và các địa điểm ẩn mình trên khắp Nhật Bản.",
    moTa: "JapaneseTourist là một trang web du lịch được thiết kế để giúp du khách khám phá Nhật Bản một cách dễ dàng và thuận tiện hơn. Trang web cung cấp bản đồ tương tác, thông tin về các điểm du lịch, dự báo thời tiết, hướng dẫn ẩm thực địa phương và nhiều công cụ hữu ích giúp việc lên kế hoạch cho chuyến đi trở nên đơn giản và hiệu quả hơn. 🇯🇵"
    
  },

  ja: {
    heroTitle: "日本の美しさを探検しよう",
    heroDesc: "素晴らしい観光地、美味しい料理、独特な文化、そして忘れられない冒険を発見しましょう。",
    startExplore: "探索を始める",
    map: "地図",
    exploreEasy: "簡単に日本を探検",
    japanStory: "一つの国。無限の物語。",
    mapTitle: "地図で日本を探検",
    mapDesc: "日本各地の有名な観光地、文化遺産、隠れた名所を発見しましょう。",
    moTa: "JapaneseTouristは、旅行者が日本をより簡単かつ便利に観光できるよう支援する旅行ウェブサイトです。インタラクティブマップ、観光地情報、天気予報、地域ごとのグルメガイド、そして便利なツールを提供し、旅行計画をより簡単で効率的にします。 🇯🇵"
  },

  en: {
    heroTitle: "Explore The Beauty Of Japan",
    heroDesc: "Discover amazing destinations, delicious cuisine, unique culture and unforgettable adventures.",
    startExplore: "Start Exploring",
    map: "Map",
    exploreEasy: "Exploring Japan Easy",
    japanStory: "One Country. Infinite Stories.",
    mapTitle: "Explore Japan On The Map",
    mapDesc: "Discover famous destinations, cultural landmarks and hidden gems across Japan.",
    moTa: "JapaneseTourist is a travel website designed to help visitors explore Japan more easily and conveniently. It provides interactive maps, tourist destination information, weather forecasts, local food guides, and useful tools that make trip planning simpler and more efficient."
  }
  };

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