const cities = {
  Tokyo: {
    lat: 35.6762,
    lon: 139.6503
  },

  Osaka: {
    lat: 34.6937,
    lon: 135.5023
  },

  Kyoto: {
    lat: 35.0116,
    lon: 135.7681
  },

  Hokkaido: {
    lat: 43.0618,
    lon: 141.3545
  },

  Okinawa: {
    lat: 26.2124,
    lon: 127.6809
  }
};

async function getWeather(city) {

  const { lat, lon } = cities[city];

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`
  );

  const data = await response.json();

  document.getElementById("weather-card").innerHTML = `
    <h2>${city}</h2>

    <p>🌡️ Temperature:
      ${data.current.temperature_2m}°C
    </p>

    <p>💧 Humidity:
      ${data.current.relative_humidity_2m}%
    </p>

    <p>🌬️ Wind:
      ${data.current.wind_speed_10m} km/h
    </p>
  `;
}

getWeather("Tokyo");

document
  .getElementById("citySelect")
  .addEventListener("change", (e) => {

    getWeather(e.target.value);

  });