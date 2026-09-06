const currentUserElement = document.getElementById("currentUser");
const logoutBtn = document.getElementById("logoutBtn");

const savedUser = JSON.parse(localStorage.getItem("currentUser"));

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