//dịch ngôn ngữu
const translations = {
  vi: {
    dangKy: "Đăng Ký",
    tenDangNhap: "Tên đăng nhập",
    matKhau: "Mật khẩu",
    taoTaiKhoan: "Tạo tài khoản",
    daCoTaiKhoan: "Đã có tài khoản? Đăng nhập",
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
    taoTaiKhoan: "アカウントを作成",
    daCoTaiKhoan: "すでにアカウントをお持ちですか？ログイン",
    dangNhap: "ログイン",
    trangChu: "ホーム",
    moTaDangKy: "日本を探索する旅を始めましょう",
    viDuTenDangNhap: "例：nguyenvana",
    nhapMatKhau: "6文字以上入力してください",
    khamPhaNhatBan: "JapaneseTourist – 日本を探索する",
    gioiThieu: "紹介",
    moTa: "JapaneseTouristは、旅行者が日本をより簡単かつ快適に観光できるようサポートするウェブサイトです。インタラクティブマップ、観光地情報、天気予報、ご当地グルメ情報などを提供し、旅行の計画から観光までを便利にサポートします。"
  },
  en: {
    dangKy: "Sign Up",
    tenDangNhap: "Username",
    matKhau: "Password",
    taoTaiKhoan: "Create account",
    daCoTaiKhoan: "Already have an account? Log in",
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


// 1. Lấy các phần tử (elements) từ giao diện để thao tác
    const registerForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    // 2. Lắng nghe sự kiện "submit" khi người dùng nhấn nút Đăng ký
    registerForm.addEventListener('submit', function (e) {
        // Ngăn chặn trình duyệt load lại trang (hành động mặc định của form)
        e.preventDefault();

        // 3. Thu thập giá trị người dùng nhập vào và xóa khoảng trắng thừa (trim)
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // --- BƯỚC VALIDATE (KIỂM TRA DỮ LIỆU) ---
        
        // Kiểm tra xem có ô nào bị bỏ trống không
        if (username === "" || password === "") {
            alert("Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu!");
            return; // Dừng hàm lại, không chạy tiếp các bước bên dưới
        }

        // Kiểm tra độ dài mật khẩu (ví dụ: tối thiểu 6 ký tự)
        if (password.length < 6) {
            alert("Mật khẩu phải có ít nhất 6 ký tự!");
            return;
        }

        // --- BƯỚC XỬ LÝ LOCALSTORAGE ---

        // Lấy danh sách tài khoản đã có từ localStorage (nếu chưa có thì tạo mảng rỗng [])
        // Dữ liệu trong localStorage là chuỗi (string), nên cần dùng JSON.parse để chuyển về mảng (array)
        const listAccounts = JSON.parse(localStorage.getItem('accounts')) || [];

        // Kiểm tra xem username đã tồn tại trong mảng chưa (tính duy nhất)
        const isUserExist = listAccounts.some(account => account.username === username);

        if (isUserExist) {
            alert("Tên đăng nhập này đã tồn tại. Vui lòng chọn tên khác!");
        } else {
            // Nếu chưa tồn tại, tạo đối tượng người dùng mới
            const newUser = {
                username: username,
                password: password
            };

            // Thêm người dùng mới vào danh sách
            listAccounts.push(newUser);

            // Lưu mảng mới ngược lại vào localStorage (phải dùng JSON.stringify để chuyển về chuỗi)
            localStorage.setItem('accounts', JSON.stringify(listAccounts));

            // Thông báo thành công
            alert("Đăng ký tài khoản thành công!");

            // --- BƯỚC SAU KHI THÀNH CÔNG ---
            
            // 1. Xóa sạch dữ liệu trên form
            registerForm.reset();

            // 2. Chuyển hướng sang trang đăng nhập (Thay 'login.html' bằng file thực tế của bạn)
            // Lưu ý: Nếu bạn chưa có file login.html, trình duyệt sẽ báo lỗi 404
            window.location.href = 'login.html';
        }
    });