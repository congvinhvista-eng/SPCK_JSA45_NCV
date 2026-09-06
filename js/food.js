// Danh sách nhà hàng
const restaurants = {
  Tokyo: [
    {
      name: {
        vi: "Ichiran Shibuya",
        en: "Ichiran Shibuya",
        ja: "一蘭 渋谷店"
      },
      subtitle: {
        vi: "Tonkotsu ramen nổi tiếng với quầy ăn riêng",
        en: "Famous tonkotsu ramen with private dining booths",
        ja: "個室席で有名な豚骨ラーメン店"
      },
      address: {
        vi: "1-22-7 Jinnan, Shibuya City, Tokyo",
        en: "1-22-7 Jinnan, Shibuya City, Tokyo",
        ja: "東京都渋谷区神南1-22-7"
      },
      rating: 4.6
    },
    {
      name: {
        vi: "Gyukatsu Motomura Shibuya",
        en: "Gyukatsu Motomura Shibuya",
        ja: "牛かつもと村 渋谷店"
      },
      subtitle: {
        vi: "Gyukatsu bò chiên giòn rất nổi tiếng",
        en: "Very popular crispy beef gyukatsu restaurant",
        ja: "人気の牛かつ専門店"
      },
      address: {
        vi: "3-18-10 Shibuya, Tokyo",
        en: "3-18-10 Shibuya, Tokyo",
        ja: "東京都渋谷区3-18-10"
      },
      rating: 4.7
    },
    {
      name: {
        vi: "Sushi Dai",
        en: "Sushi Dai",
        ja: "寿司大"
      },
      subtitle: {
        vi: "Một trong những quán sushi nổi tiếng nhất Tokyo",
        en: "One of Tokyo's most famous sushi restaurants",
        ja: "東京で最も有名な寿司店の一つ"
      },
      address: {
        vi: "Toyosu Market, Koto City, Tokyo",
        en: "Toyosu Market, Koto City, Tokyo",
        ja: "東京都江東区豊洲市場"
      },
      rating: 4.8
    }
  ],

  Osaka: [
    {
      name: {
        vi: "Mizuno",
        en: "Mizuno",
        ja: "美津の"
      },
      subtitle: {
        vi: "Okonomiyaki kiểu Osaka truyền thống",
        en: "Traditional Osaka-style okonomiyaki",
        ja: "大阪風お好み焼きの名店"
      },
      address: {
        vi: "1-4-15 Dotonbori, Chuo Ward, Osaka",
        en: "1-4-15 Dotonbori, Chuo Ward, Osaka",
        ja: "大阪府大阪市中央区道頓堀1-4-15"
      },
      rating: 4.5
    },
    {
      name: {
        vi: "Ajinoya",
        en: "Ajinoya",
        ja: "味乃家"
      },
      subtitle: {
        vi: "Okonomiyaki được người địa phương yêu thích",
        en: "A local favorite okonomiyaki restaurant",
        ja: "地元で人気のお好み焼き店"
      },
      address: {
        vi: "1-7-16 Namba, Chuo Ward, Osaka",
        en: "1-7-16 Namba, Chuo Ward, Osaka",
        ja: "大阪府大阪市中央区難波1-7-16"
      },
      rating: 4.7
    }
  ],

  Kyoto: [
    {
      name: {
        vi: "Men-ya Inoichi",
        en: "Men-ya Inoichi",
        ja: "麺屋 猪一"
      },
      subtitle: {
        vi: "Ramen nổi tiếng với nước dùng hải sản",
        en: "Famous ramen with seafood broth",
        ja: "魚介スープで有名なラーメン店"
      },
      address: {
        vi: "542 Enomiyacho, Shimogyo Ward, Kyoto",
        en: "542 Enomiyacho, Shimogyo Ward, Kyoto",
        ja: "京都府京都市下京区恵美須之町542"
      },
      rating: 4.8
    },
    {
      name: {
        vi: "Honke Owariya",
        en: "Honke Owariya",
        ja: "本家尾張屋"
      },
      subtitle: {
        vi: "Nhà hàng soba hơn 500 năm tuổi",
        en: "A soba restaurant with over 500 years of history",
        ja: "500年以上の歴史を持つそば店"
      },
      address: {
        vi: "322 Kurumayacho, Nakagyo Ward, Kyoto",
        en: "322 Kurumayacho, Nakagyo Ward, Kyoto",
        ja: "京都府京都市中京区車屋町322"
      },
      rating: 4.6
    }
  ],

  Hokkaido: [
    {
      name: {
        vi: "Sumire",
        en: "Sumire",
        ja: "すみれ"
      },
      subtitle: {
        vi: "Sapporo miso ramen huyền thoại",
        en: "Legendary Sapporo miso ramen",
        ja: "伝説的な札幌味噌ラーメン"
      },
      address: {
        vi: "Sapporo, Hokkaido",
        en: "Sapporo, Hokkaido",
        ja: "北海道札幌市"
      },
      rating: 4.7
    }
  ],

  Okinawa: [
    {
      name: {
        vi: "Shuri Soba",
        en: "Shuri Soba",
        ja: "首里そば"
      },
      subtitle: {
        vi: "Okinawa soba truyền thống",
        en: "Traditional Okinawa soba",
        ja: "伝統的な沖縄そば"
      },
      address: {
        vi: "1-7 Shuritonokuracho, Naha",
        en: "1-7 Shuritonokuracho, Naha",
        ja: "沖縄県那覇市首里鳥堀町1-7"
      },
      rating: 4.6
    }
  ],

  Nara: [
    {
      name: {
        vi: "Maguro Koya",
        en: "Maguro Koya",
        ja: "まぐろ小屋"
      },
      subtitle: {
        vi: "Chuyên các món cá ngừ tươi",
        en: "Specializing in fresh tuna dishes",
        ja: "新鮮なマグロ料理専門店"
      },
      address: {
        vi: "Naramachi, Nara",
        en: "Naramachi, Nara",
        ja: "奈良県奈良市奈良町"
      },
      rating: 4.7
    }
  ],

  Hiroshima: [
    {
      name: {
        vi: "Reichan",
        en: "Reichan",
        ja: "麗ちゃん"
      },
      subtitle: {
        vi: "Okonomiyaki nổi tiếng gần ga Hiroshima",
        en: "Famous okonomiyaki restaurant near Hiroshima Station",
        ja: "広島駅近くの有名なお好み焼き店"
      },
      address: {
        vi: "Asse Building, Hiroshima Station",
        en: "Asse Building, Hiroshima Station",
        ja: "広島駅ASSEビル"
      },
      rating: 4.5
    }
  ],

  Fukuoka: [
    {
      name: {
        vi: "Hakata Issou",
        en: "Hakata Issou",
        ja: "博多一双"
      },
      subtitle: {
        vi: "Hakata tonkotsu ramen đậm vị",
        en: "Rich Hakata tonkotsu ramen",
        ja: "濃厚な博多豚骨ラーメン"
      },
      address: {
        vi: "3-1-6 Hakataekihigashi, Fukuoka",
        en: "3-1-6 Hakataekihigashi, Fukuoka",
        ja: "福岡県福岡市博多区博多駅東3-1-6"
      },
      rating: 4.8
    },
    {
      name: {
        vi: "Shin Shin Ramen",
        en: "Shin Shin Ramen",
        ja: "博多らーめん ShinShin"
      },
      subtitle: {
        vi: "Ramen địa phương rất nổi tiếng",
        en: "A very famous local ramen restaurant",
        ja: "地元で非常に人気のラーメン店"
      },
      address: {
        vi: "Tenjin, Chuo Ward, Fukuoka",
        en: "Tenjin, Chuo Ward, Fukuoka",
        ja: "福岡県福岡市中央区天神"
      },
      rating: 4.7
    }
  ]
};
// API giả làm chỉ cho đẹp th ae
function searchRestaurants() {
  const city = document.getElementById("food-select").value;
  const restaurantList = restaurants[city] || [];
  const container = document.getElementById("load-restaurants");
  const lang = document.getElementById("language-select").value || "en";
// để kiểm tra lại dữ liệu xem có đúng ko
//   console.log("LANG =", lang);
//   console.log("DATA =", restaurantList[0]);
//   console.log("CITY =", city);
//     console.log(restaurants);
//     console.log(restaurants[city]);

  container.innerHTML = "";

  restaurantList.forEach((restaurant) => {
    console.log("NAME =", restaurant.name[lang]);

    container.innerHTML += `
      <div class="restaurant-card">
        <h3>${restaurant.name[lang]}</h3>
        <p>${restaurant.subtitle[lang]}</p>
        <p>📍 ${restaurant.address[lang]}</p>
        <p>⭐ ${restaurant.rating}</p>
      </div>
    `;
  });
}

// food js