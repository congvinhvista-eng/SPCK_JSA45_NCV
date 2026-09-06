// Translation data
 
 const translations = {
    vi: {
      dangKy: "Đăng Ký",
      tenDangNhap: "Tên đăng nhập",
      matKhau: "Mật khẩu",
      taoTaiKhoan: "Tạo tài khoản",
      chuaCoTaiKhoan: "Chưa có tài khoản? Đăng ký",
      dangNhap: "Đăng Nhập",
      trangChu: "Trang Chủ",
      moTaDangKy: "Bắt đầu hành trình khám phá Nhật Bản",
      viDuTenDangNhap: "Ví dụ: nguyenvana",
      nhapMatKhau: "Nhập ít nhất 6 ký tự",
      khamPhaNhatBan: "JapaneseTourist – Khám Phá Nhật Bản",
      gioiThieu: "Giới thiệu",
      moTa: "JapaneseTourist là website hỗ trợ du khách khám phá Nhật Bản một cách dễ dàng và thuận tiện hơn. Website cung cấp bản đồ tương tác, thông tin địa điểm du lịch, thời tiết, ẩm thực địa phương và nhiều công cụ hữu ích giúp người dùng lên kế hoạch cho chuyến đi một cách hiệu quả."
    },
    ja: {
      dangKy: "登録",
      tenDangNhap: "ユーザー名",
      matKhau: "パスワード",
      taoTaiKhoan: "アカウント作成",
      chuaCoTaiKhoan: "アカウントをお持ちでない方はこちら",
      dangNhap: "ログイン",
      trangChu: "ホーム",
      moTaDangKy: "日本を巡る旅を始めましょう",
      viDuTenDangNhap: "例：nguyenvana",
      nhapMatKhau: "6文字以上入力してください",
      khamPhaNhatBan: "JapaneseTourist – 日本を旅しよう",
      gioiThieu: "紹介",
      moTa: "JapaneseTouristは、日本旅行をより簡単で便利にするためのウェブサイトです。観光地情報、インタラクティブマップ、天気予報、ご当地グルメ情報などを提供し、旅行計画をサポートします。"
    },
    en: {
      dangKy: "Sign Up",
      tenDangNhap: "Username",
      matKhau: "Password",
      taoTaiKhoan: "Create account",
      chuaCoTaiKhoan: "Don't have an account? Sign up",
      dangNhap: "Log In",
      trangChu: "Home",
      moTaDangKy: "Start your journey to explore Japan",
      viDuTenDangNhap: "Example: nguyenvana",
      nhapMatKhau: "Enter at least 6 characters",
      khamPhaNhatBan: "JapaneseTourist – Explore Japan",
      gioiThieu: "About us",
      moTa: "JapaneseTourist is a travel website designed to help visitors explore Japan more easily and conveniently. It provides interactive maps, tourist destination information, weather forecasts, local food guides, and useful tools that make trip planning simpler and more efficient."
    }
  };


const loginForm = document.querySelector("form");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
  const account = accounts.find(
    (item) => item.username === username && item.password === password,
  );

  if (!account) {
    alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify({ username: account.username }));
  alert(`Đăng nhập thành công. Chào mừng ${account.username}!`);
  loginForm.reset();
  window.location.href = "index.html";
  });
}


const currentUser = JSON.parse(localStorage.getItem("currentUser"));

const userElement = document.querySelector(".user-name");

if (currentUser && userElement) {
    userElement.textContent = currentUser.username;
}

