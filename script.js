// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Xử lý sự kiện khi nhấn vào nút "Mua ngay"
    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.getAttribute("data-product");
            alert(`Bạn đã chọn mua: ${product}`);
        });
    });

    // Smooth scroll đến phần được chọn khi nhấn vào menu
    const menuLinks = document.querySelectorAll("nav .menu > li > a, nav .submenu li a");

    menuLinks.forEach(link => {
        link.addEventListener("click", event => {
            // Ngăn chặn hành động mặc định
            event.preventDefault();

            // Lấy ID của phần cần cuộn tới
            const sectionID = link.getAttribute("href").substring(1);
            const section = document.getElementById(sectionID);

            if (section) {
                section.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Hiển thị thông báo khi hover vào sản phẩm (ví dụ)
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        product.addEventListener("mouseover", () => {
            const productName = product.querySelector("h4").textContent;
            console.log(`Đang xem sản phẩm: ${productName}`);
        });
    });
});
