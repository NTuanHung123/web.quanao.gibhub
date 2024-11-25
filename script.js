// script.js
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".buy-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.getAttribute("data-product");
            alert(`Bạn đã chọn mua: ${product}`);
        });
    });
});
