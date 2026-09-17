const itinerary =
  JSON.parse(localStorage.getItem("itinerary")) || [];

const container =
  document.getElementById("itinerary-list");

if (itinerary.length === 0) {

  container.innerHTML =
    "<p>No places added yet.</p>";

} else {

const language =
  localStorage.getItem("language") || "vi";
  console.log("Language:", language);
console.log("First place:", itinerary[0]);
console.log("Rendered name:", itinerary[0].name[language]);
itinerary.forEach(place => {
  
  container.innerHTML += `
    <div class="place-card">

      <h3>${place.name[language]}</h3>

      <p>
        ${place.description[language]}
      </p>

      <a
        href="${place.map}"
        target="_blank"
        class="map-btn"
      >
        📍 Google Maps
      </a>

      <button
        onclick="removePlace('${place.name.en}')"
      >
        ❌ Remove
      </button>

    </div>
  `;
});

}

function removePlace(placeName) {

  let itinerary =
    JSON.parse(localStorage.getItem("itinerary")) || [];

  itinerary = itinerary.filter(
    p => p.name.en !== placeName
  );

  localStorage.setItem(
    "itinerary",
    JSON.stringify(itinerary)
  );

  location.reload();

}