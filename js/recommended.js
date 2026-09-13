const places = {
  anime: [
    {
      name: {
        en: "Akihabara",
        vi: "Akihabara",
        ja: "秋葉原"
      },

      description: {
        en: "Tokyo's most famous anime and gaming district. Explore anime stores, arcades, manga shops, and themed cafés.",
        vi: "Khu anime và trò chơi điện tử nổi tiếng nhất Tokyo. Du khách có thể khám phá các cửa hàng anime, trung tâm game, cửa hàng manga và quán cà phê theo chủ đề.",
        ja: "東京で最も有名なアニメとゲームの街です。アニメショップやゲームセンター、マンガ専門店、テーマカフェなどを楽しめます。"
      },

      map: "https://maps.app.goo.gl/WqCCNQmF7GtsfseTA"
    },

    {
      name: {
        en: "Ikebukuro",
        vi: "Ikebukuro",
        ja: "池袋"
      },

      description: {
        en: "A popular destination for anime fans, featuring Animate, Sunshine City, and many character-themed stores.",
        vi: "Điểm đến nổi tiếng dành cho người yêu anime với Animate, Sunshine City và nhiều cửa hàng nhân vật nổi tiếng.",
        ja: "アニメファンに人気のエリアで、アニメイトやサンシャインシティ、多くのキャラクターショップがあります。"
      },

      map: "https://maps.app.goo.gl/rzvHKkzLjLEEwkjk8"
    },

    {
      name: {
        en: "Nakano Broadway",
        vi: "Nakano Broadway",
        ja: "中野ブロードウェイ"
      },

      description: {
        en: "A shopping complex filled with rare manga, anime collectibles, figures, and vintage merchandise.",
        vi: "Trung tâm mua sắm nổi tiếng với manga hiếm, figure anime và nhiều món đồ sưu tầm độc đáo.",
        ja: "レアなマンガやフィギュア、アニメグッズが集まる有名なショッピング施設です。"
      },

      map: "https://maps.app.goo.gl/kY3WV8H76eWX5BFG9"
    },

    {
      name: {
        en: "Odaiba",
        vi: "Odaiba",
        ja: "お台場"
      },

      description: {
        en: "A futuristic waterfront area with the Unicorn Gundam Statue, shopping malls, and entertainment attractions.",
        vi: "Khu vực ven biển hiện đại với tượng Unicorn Gundam, trung tâm mua sắm và nhiều điểm vui chơi.",
        ja: "ユニコーンガンダム像やショッピングモール、観光スポットがある近未来的なエリアです。"
      },

      map: "https://maps.app.goo.gl/HPcbvQ7KWZDCtNCw5"
    }
  ],


food: [
  {
    name: {
      en: "Tsukiji Market",
      vi: "Chợ Tsukiji",
      ja: "築地市場"
    },
    description: {
      en: "One of Tokyo's most famous food markets, known for fresh seafood, sushi, and Japanese street food.",
      vi: "Một trong những khu chợ ẩm thực nổi tiếng nhất Tokyo, nổi tiếng với hải sản tươi sống, sushi và đồ ăn đường phố Nhật Bản.",
      ja: "新鮮な海産物や寿司、日本の屋台料理で有名な東京の人気市場です。"
    },
    map: "https://maps.app.goo.gl/2Sw89JWFaPAfa5pV9"
  },

  {
    name: {
      en: "Dotonbori",
      vi: "Dotonbori",
      ja: "道頓堀"
    },
    description: {
      en: "Osaka's food paradise, famous for takoyaki, okonomiyaki, and vibrant nightlife.",
      vi: "Thiên đường ẩm thực của Osaka, nổi tiếng với takoyaki, okonomiyaki và cuộc sống về đêm sôi động.",
      ja: "たこ焼きやお好み焼きで有名な大阪のグルメスポットです。"
    },
    map: "https://maps.app.goo.gl/uHFfohjWNvtFtTkL7"
  },

  {
    name: {
      en: "Shin-Yokohama Ramen Museum",
      vi: "Bảo tàng Mì Ramen Shin-Yokohama",
      ja: "新横浜ラーメン博物館"
    },
    description: {
      en: "A unique museum where visitors can learn about ramen and try regional varieties.",
      vi: "Bảo tàng độc đáo nơi du khách có thể tìm hiểu về ramen và thưởng thức nhiều loại ramen từ khắp Nhật Bản.",
      ja: "日本各地のラーメンを楽しみながら学べるユニークな博物館です。"
    },
    map: "https://maps.app.goo.gl/Efzsgf4vDWE3Mp1m8"
  }
],


shopping: [
  {
    name: {
      en: "Shibuya",
      vi: "Shibuya",
      ja: "渋谷"
    },
    description: {
      en: "A modern shopping district famous for Shibuya Crossing and trendy stores.",
      vi: "Khu mua sắm hiện đại nổi tiếng với ngã tư Shibuya và các cửa hàng thời trang.",
      ja: "渋谷スクランブル交差点や流行のショップで有名なエリアです。"
    },
    map: "https://maps.app.goo.gl/8DJfLxRu3NtwQVKf9"
  },

  {
    name: {
      en: "Harajuku",
      vi: "Harajuku",
      ja: "原宿"
    },
    description: {
      en: "The center of Japanese youth fashion and street culture.",
      vi: "Trung tâm thời trang giới trẻ và văn hóa đường phố của Nhật Bản.",
      ja: "日本の若者ファッションとストリートカルチャーの中心地です。"
    },
    map: "https://maps.app.goo.gl/7e7xBUep6pjEsL4G7"
  },

  {
    name: {
      en: "Ginza",
      vi: "Ginza",
      ja: "銀座"
    },
    description: {
      en: "Tokyo's luxury shopping district filled with designer brands and department stores.",
      vi: "Khu mua sắm cao cấp của Tokyo với nhiều thương hiệu nổi tiếng và trung tâm thương mại lớn.",
      ja: "高級ブランド店や百貨店が集まる東京屈指のショッピング街です。"
    },
    map: ""
  }
],

history: [
  {
    name: {
      en: "Asakusa",
      vi: "Asakusa",
      ja: "浅草"
    },
    description: {
      en: "One of Tokyo's most historic neighborhoods with traditional Japanese atmosphere.",
      vi: "Một trong những khu phố cổ nổi tiếng nhất Tokyo với không khí Nhật Bản truyền thống.",
      ja: "東京の伝統的な雰囲気を残す歴史ある街です。"
    },
    map: "https://maps.app.goo.gl/VXxnjsVVRtj92i258"
  },

  {
    name: {
      en: "Senso-ji Temple",
      vi: "Đền Senso-ji",
      ja: "浅草寺"
    },
    description: {
      en: "Tokyo's oldest Buddhist temple and one of its most important landmarks.",
      vi: "Ngôi chùa cổ nhất Tokyo và là một trong những địa danh nổi tiếng nhất thành phố.",
      ja: "東京最古の寺院であり、有名な観光名所の一つです。"
    },
    map: "https://maps.app.goo.gl/G2eeW4CjMUWJKFDL9"
  },

  {
    name: {
      en: "Fushimi Inari Shrine",
      vi: "Đền Fushimi Inari",
      ja: "伏見稲荷大社"
    },
    description: {
      en: "Kyoto's iconic shrine known for thousands of red torii gates.",
      vi: "Ngôi đền nổi tiếng của Kyoto với hàng nghìn cổng torii màu đỏ.",
      ja: "何千もの赤い鳥居で有名な京都の神社です。"
    },
    map: "https://maps.app.goo.gl/JgyDMoFuNhVUvMzo7"
  },

  {
    name: {
      en: "Kiyomizu-dera",
      vi: "Chùa Kiyomizu-dera",
      ja: "清水寺"
    },
    description: {
      en: "A UNESCO World Heritage temple with stunning views of Kyoto.",
      vi: "Ngôi chùa được UNESCO công nhận với tầm nhìn tuyệt đẹp ra thành phố Kyoto.",
      ja: "京都の美しい景色を楽しめる世界遺産の寺院です。"
    },
    map: "https://maps.app.goo.gl/Y14c2C31LjD4iiVM6"
  }
],

nature: [
  {
    name: {
      en: "Mount Fuji",
      vi: "Núi Phú Sĩ",
      ja: "富士山"
    },
    description: {
      en: "Japan's highest mountain and a symbol of the country.",
      vi: "Ngọn núi cao nhất Nhật Bản và là biểu tượng nổi tiếng của đất nước.",
      ja: "日本で最も高い山であり、日本の象徴です。"
    },
    map: "https://maps.app.goo.gl/1UMgGU2SL8nENqoB6"
  },

  {
    name: {
      en: "Arashiyama",
      vi: "Arashiyama",
      ja: "嵐山"
    },
    description: {
      en: "A scenic district famous for its bamboo forest and beautiful landscapes.",
      vi: "Khu vực nổi tiếng với rừng tre và phong cảnh thiên nhiên tuyệt đẹp.",
      ja: "竹林と美しい自然景観で有名な観光地です。"
    },
    map: "https://maps.app.goo.gl/PQfq9E3wSCnEW4uS7"
  },

  {
    name: {
      en: "Ueno Park",
      vi: "Công viên Ueno",
      ja: "上野公園"
    },
    description: {
      en: "A large public park known for cherry blossoms, museums, and festivals.",
      vi: "Công viên lớn nổi tiếng với hoa anh đào, bảo tàng và các lễ hội.",
      ja: "桜や博物館、イベントで有名な大きな公園です。"
    },
    map: "https://maps.app.goo.gl/QLD9EFvw1VL2cM9UA"
  },

  {
    name: {
      en: "Odaiba",
      vi: "Odaiba",
      ja: "お台場"
    },
    description: {
      en: "A waterfront district with parks, sea views, and modern attractions.",
      vi: "Khu vực ven biển với công viên, cảnh biển và nhiều điểm tham quan hiện đại.",
      ja: "海辺の景色や近代的な観光スポットを楽しめるエリアです。"
    },
    map: "https://maps.app.goo.gl/bycdJW3gWEmQNXUMA"
  }
]
};
let selectedDays = 0;
let currentPlaces = [];

// Chọn số ngày tour
function showTour(days) {

  selectedDays = days;

  document.getElementById("interest-section").style.display = "block";

  const content = document.getElementById("tour-content");

  content.innerHTML = `
    <h2>${days} Day Tour Selected</h2>
    <p>Now choose your interests below.</p>
  `;
}

// Tạo tour
function generateTour() {

  const interests = [];

  document
    .querySelectorAll('#interest-section input:checked')
    .forEach(item => {
      interests.push(item.value);
    });

  let results = [];

  interests.forEach(interest => {

    if (places[interest]) {
      results.push(...places[interest]);
    }

  });

  const uniquePlaces = [];

  results.forEach(place => {

    if (
      !uniquePlaces.some(
        p => p.name.en === place.name.en
      )
    ) {
      uniquePlaces.push(place);
    }

  });

  currentPlaces = uniquePlaces;

  displayPlaces(currentPlaces);
}

// Hiển thị địa điểm
function displayPlaces(placeList) {

  const language =
    localStorage.getItem("language") || "vi";

  const content =
    document.getElementById("tour-content");

  content.innerHTML = "";

  if (placeList.length === 0) {

    content.innerHTML = `
      <p>Please select at least one interest.</p>
    `;

    return;
  }

  placeList.forEach(place => {
    
    content.innerHTML += `
      <div class="place-card">

        <h3>${place.name[language]}</h3>

        <p>${place.description[language]}</p>

        ${
          place.map
            ? `
              <a
                href="${place.map}"
                target="_blank"
                class="map-btn"
              >
                📍 Google Maps
              </a>
            `
            : ""
        }

        <button
          class="itinerary-btn"
          data-translate="addTo"
          onclick="addToItinerary('${place.name.en}')"
        >
          ➕ Add to Itinerary
        </button>

  </div>
`;

})
}


function addToItinerary(placeName) {

  let itinerary =
    JSON.parse(localStorage.getItem("itinerary")) || [];

  if (!itinerary.includes(placeName)) {

    itinerary.push(placeName);

    localStorage.setItem(
      "itinerary",
      JSON.stringify(itinerary)
    );

    alert(placeName + " added to itinerary!");
  } else {

    alert("Already added!");

  }
}


// Đổi ngôn ngữ và render lại card
function updateRecommendedLanguage() {
    console.log("language updated");
  if (currentPlaces.length > 0) {
    displayPlaces(currentPlaces);
  }

}

function updateRecommendedLanguage() {

  if (currentPlaces.length > 0) {
    displayPlaces(currentPlaces);
  }

}

// Khi load trang
document.addEventListener("DOMContentLoaded", () => {

  const savedLanguage =
    localStorage.getItem("language") || "vi";

  const languageSelect =
    document.getElementById("language-select");

  if (languageSelect) {

    languageSelect.value = savedLanguage;

    languageSelect.addEventListener("change", () => {

      updateRecommendedLanguage();

    });
  }

})