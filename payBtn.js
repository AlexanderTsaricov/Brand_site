function addToCart(id) {
    let cartData = JSON.parse(localStorage.getItem("cartData"));
    if (cartData == null) {
        cartData = {};
    }
    if (cartData[id] != undefined) {
        cartData[id].count += 1;
    } else {
        const productsData = JSON.parse(localStorage.getItem("productsData"));
        cartData[id] = productsData[id];
        cartData[id].count = 1;
    }
    const menuCartCount_count = document.querySelector(".menuCartCount_count");
    menuCartCount_count.textContent = sumCountProductForPay();
    localStorage.setItem("cartData", JSON.stringify(cartData));
}

const testCartBox = document.querySelector(".productCartBox_cartBox");
testCartBox.addEventListener("click", (e) => {
    if (e.target.className == "productCartBox_cartBox_cart_hover_payButton") {
        addToCart(e.target.id);
    }
    console.log(JSON.parse(localStorage.getItem("cartData")));
});

function sumCountProductForPay() {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    let count = 0;
    const products = Object.values(cartData);
    products.forEach((element) => {
        count += element.count;
    });
    return count;
}
