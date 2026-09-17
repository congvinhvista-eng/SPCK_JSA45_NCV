
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

  const selectedPlace =
    currentPlaces.find(
      place => place.name.en === placeName
    );

  if (!selectedPlace) return;

  if (
    !itinerary.some(
      item => item.name.en === placeName
    )
  ) {

    itinerary.push(selectedPlace);

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
        location.reload();
    });
  }

})