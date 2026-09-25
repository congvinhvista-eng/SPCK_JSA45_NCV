const currentUserElement = document.getElementById("currentUser");
const logoutBtn = document.getElementById("logoutBtn");
const currentLang = localStorage.getItem("language") || "en";
const savedUser = JSON.parse(localStorage.getItem("currentUser"));


document.querySelectorAll("[data-translate]").forEach(el => {
    if (el.id === "currentUser" && savedUser?.username) {
        return;
    }

    const key = el.dataset.translate;
    el.textContent = translations[currentLang][key];
});

if (savedUser?.username) {
  currentUserElement.textContent = savedUser.username;
  logoutBtn.style.display = "block";
} else {
  currentUserElement.textContent = "Đăng nhập";
  logoutBtn.style.display = "none";

  currentUserElement.onclick = () => {
    window.location.href = "login.html";
  };
}

logoutBtn.onclick = () => {
  localStorage.removeItem("currentUser");
  location.reload();
};