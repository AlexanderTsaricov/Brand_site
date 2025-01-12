function sumCountProductForPay() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    let count = 0;
    const products = Object.values(cartData);
    products.forEach((element) => {
        count += element.count;
    });
    return count;
}
document.addEventListener("DOMContentLoaded", function () {
    const menuCartCount_count = document.querySelector(".menuCartCount_count");
    menuCartCount_count.textContent = sumCountProductForPay();
});
