// ===============================
// 1. ACTIVE MENU THEO TRANG
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


// ===============================
// 2. ĐĂNG NHẬP ĐƠN GIẢN
// ===============================
const loginForm = document.querySelector("form");

if (loginForm && loginForm.closest("body").innerHTML.includes("ĐĂNG NHẬP")) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = loginForm.querySelector("input[type='text']").value.trim();
        const password = loginForm.querySelector("input[type='password']").value.trim();

        if (username === "" || password === "") {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (username === "admin" && password === "123456") {
            alert("Đăng nhập thành công!");
            window.location.href = "index.html";
        } else {
            alert("Sai tài khoản hoặc mật khẩu!");
        }
    });
}


// ===============================
// 3. BÌNH LUẬN (GIẢ LẬP)
// ===============================
const commentSection = document.querySelector("textarea");

if (commentSection) {
    const button = commentSection.nextElementSibling;

    button.addEventListener("click", function () {
        const text = commentSection.value.trim();

        if (text === "") {
            alert("Vui lòng nhập bình luận!");
            return;
        }

        const newComment = document.createElement("p");
        newComment.textContent = "👤 " + text;

        commentSection.parentElement.appendChild(newComment);
        commentSection.value = "";
    });
}


// ===============================
// 4. HIỆU ỨNG CLICK MENU
// ===============================
document.querySelectorAll("nav a").forEach(item => {
    item.addEventListener("click", function () {
        this.style.transform = "scale(0.95)";
        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);
    });
});