function addProductToCart(product) {
    const box = document.createElement("div");
    box.classList.add("cartProductBox_product");
    box.id = product.id;

    const imgTag = document.createElement("img");
    imgTag.classList.add("cartProductBox_product_img");
    imgTag.alt = "productImg";
    imgTag.src = product.srcImg;

    const textBox = document.createElement("div");
    textBox.classList.add("cartProductBox_product_textBox");

    const productName = document.createElement("h2");
    productName.classList.add("cartProductBox_product_textBox_nameProduct");
    productName.textContent = product.productName;

    const productPriceText = document.createElement("p");
    productPriceText.classList.add("cartProductBox_product_textBox_text");
    productPriceText.textContent = "Price: ";

    const productPrice = document.createElement("span");
    productPrice.classList.add("cartProductBox_product_textBox_text_priceSpan");
    productPrice.textContent = product.productPrice * product.count;

    productPriceText.appendChild(productPrice);

    const productColor = document.createElement("p");
    productColor.classList.add("cartProductBox_product_textBox_text");
    productColor.textContent = `Color: ${product.color}`;

    const productSize = document.createElement("p");
    productSize.classList.add("cartProductBox_product_textBox_text");
    productSize.textContent = `Size: ${product.size}`;

    const productCountText = document.createElement("p");
    productCountText.classList.add("cartProductBox_product_textBox_text");
    productCountText.textContent = "Quality: ";

    const productCount = document.createElement("span");
    productCount.classList.add(
        "cartProductBox_product_textBox_text_quantitySpan"
    );
    productCount.textContent = product.count;

    productCountText.appendChild(productCount);

    const productButton = document.createElement("button");
    productButton.classList.add("cartProductBox_product_buttonClose");
    productButton.innerHTML = `<svg class="cartProductBox_product_buttonClose_svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>
                            </svg>`;
    productButton.id = product.id;

    textBox.appendChild(productName);
    textBox.appendChild(productPriceText);
    textBox.appendChild(productColor);
    textBox.appendChild(productSize);
    textBox.appendChild(productCountText);

    box.appendChild(imgTag);
    box.appendChild(textBox);
    box.appendChild(productButton);

    return box;
}

const cartProductBox = document.querySelector(".cartProductBox");
const lastElement = cartProductBox.children[cartProductBox.children.length - 1];

function makeBoxesCart() {
    const cartDataDict = JSON.parse(localStorage.getItem("cartData"));
    if (cartDataDict != null) {
        let cartData = Object.values(cartDataDict);
        if (cartData != null) {
            cartData.forEach((element) => {
                if (element != null) {
                    cartProductBox.insertBefore(
                        addProductToCart(element),
                        cartProductBox.lastElementChild
                    );
                }
            });
        }
    }
}

function deleteElementInCart(id) {
    let cartData = JSON.parse(localStorage.getItem("cartData"));
    console.log(cartData);
    if (cartData[id].count > 1) {
        cartData[id].count -= 1;
    } else {
        delete cartData[id];
    }
    localStorage.setItem("cartData", JSON.stringify(cartData));
}

makeBoxesCart();

cartProductBox.addEventListener("click", function (e) {
    if (
        e.target.parentElement.parentElement.className ==
        "cartProductBox_product_buttonClose"
    ) {
        console.log("Нажал!");
        deleteElementInCart(e.target.parentElement.parentElement.id);
        cartProductBox.innerHTML = "";
        cartProductBox.innerHTML = `
        <div class="cartProductBox_buttonBox">
                    <button class="cartProductBox_buttonBox_button">CLEAR SHOPPING CART</button>
                    <a href="catalog.html" class="cartProductBox_buttonBox_button">CONTINUE SHOPPING</a>
                </div>`;
        makeBoxesCart();
        e.preventDefault();
    } else {
        console.log(e.target.parentElement.parentElement);
    }
});
