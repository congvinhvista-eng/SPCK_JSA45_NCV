
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  const placeholders = document.querySelectorAll("[data-translate-placeholder]");
  placeholders.forEach(el => {
    const key = el.getAttribute("data-translate-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}
// Lắng nghe khi người dùng thay đổi ngôn ngữ
  document.getElementById("language-select").addEventListener("change", (e) => {
    console.log(e.target.value);
  changeLanguage(e.target.value);
  localStorage.setItem("language", e.target.value); 
  localStorage.getItem("language");
    changeLanguage(localStorage.getItem("language") || "vi");
});

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage = localStorage.getItem("language") || "vi";
    document.getElementById("language-select").value = savedLanguage;
    changeLanguage(savedLanguage);
});


document.addEventListener("DOMContentLoaded", () => {
const savedLanguage = localStorage.getItem("language") || "vi";
  changeLanguage(savedLanguage);
});

