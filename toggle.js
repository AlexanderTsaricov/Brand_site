document.querySelector("#menuButton").addEventListener("click", function () {
    let menu = document.getElementById("menu");

    if (menu.classList.contains("toggleMenu_of")) {
        menu.classList.remove("toggleMenu_of");
    } else {
        menu.classList.add("toggleMenu_of");
    }
});

class product {
    constructor(imgLink) {
        this.imgLink = imgLink;
    }
    productName = "ELLERY X M'O CAPSULE";
    productDiscription = `
        Known for her sculptural takes on traditional tailoring, 
        Australian arbiter of cool Kym Ellery teams up with Moda Operandi.`;
    productPrice = "$52.00";
}

let productArr = [];
let tegProductList = [];
let imgList = [
    "cart/manInBlueJacet.png",
    "catalogCart/manInRed.png",
    "cart/manInBlueSweater.png",
    "cart/manInBlueT-shirt.png",
    "catalogCart/manInWhiteT-Shirt.png",
    "catalogCart/manInBlueCap.png",
    "catalogCart/manInWhiteShirt.png",
    "catalogCart/manInBlackJacet.png",
    "catalogCart/manInGreenT-Shirt.png",
];
let minProduct = 9;
let remainderCart = productArr.length - 9;

function addProduct(imgLink) {
    productArr.push(new product(imgLink));
}

for (let index = 0; index < imgList.length; index++) {
    addProduct(imgList[index]);
}

function addProductTeg(product) {
    let divCart = document.createElement("div");
    divCart.className = "productCartBox_cartBox_cart";
    divCart.classList.add("catalogCarts");

    let img = document.createElement("img");
    img.className = "productCartBox_cartBox_cart_img";
    img.src = product.imgLink;
    img.alt = "cart pic";

    divCart.appendChild(img);

    let divHover = document.createElement("div");
    divHover.className = "productCartBox_cartBox_cart_hover";

    let teg_a = document.createElement("a");
    teg_a.href = "#";
    teg_a.className = "productCartBox_cartBox_cart_hover_payButton";
    teg_a.innerHTML = `
        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.9521 23.2662H21.8397C21.2306 23.2662 20.7188 22.7666 20.6746 22.1289C20.6302 21.4602 21.1187 20.8781 21.7637 20.8341C21.7891 20.8324 21.8156 20.8315 21.8417 20.8315C22.4587 20.8315 22.9755 21.3214 23.0213 21.9482C23.0331 22.1967 22.9926 22.5509 22.7371 22.8434L22.7312 22.8502L22.7254 22.8571C22.5287 23.0907 22.2619 23.2316 21.9521 23.2662ZM8.22003 23.2599C7.56946 23.2599 7.04022 22.7169 7.04022 22.0496C7.04022 21.3827 7.56946 20.8401 8.22003 20.8401C8.87061 20.8401 9.39984 21.3827 9.39984 22.0496C9.39984 22.7169 8.87061 23.2599 8.22003 23.2599Z" fill="white"/>
                                <path d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z" fill="white"/>
                                <path d="M21.8765 22.2662C21.9215 22.2549 21.9428 22.2339 21.9605 22.2129C21.9683 22.2037 21.9761 22.1946 21.9839 22.1855C22.0204 22.1438 22.0237 22.0553 22.0229 22.0105C22.0097 21.9044 21.9189 21.8315 21.8417 21.8315C21.838 21.8315 21.8341 21.8317 21.8317 21.8318C21.7536 21.8372 21.6658 21.9409 21.6724 22.0625C21.6818 22.1793 21.7679 22.2662 21.8397 22.2662H21.8765ZM8.22003 22.2599C8.31921 22.2599 8.39984 22.1655 8.39984 22.0496C8.39984 21.9341 8.31921 21.8401 8.22003 21.8401C8.12091 21.8401 8.04022 21.9341 8.04022 22.0496C8.04022 22.1655 8.12091 22.2599 8.22003 22.2599ZM21.9999 24.2662C21.9522 24.2662 21.8883 24.2662 21.8397 24.2662C20.7021 24.2662 19.7571 23.3545 19.677 22.198C19.5969 20.9929 20.4942 19.9183 21.6957 19.8364C21.7446 19.8331 21.7933 19.8315 21.8417 19.8315C22.9804 19.8315 23.9418 20.7324 24.0195 21.8884C24.051 22.4915 23.8746 23.0612 23.4903 23.5012C23.106 23.9575 22.5768 24.2177 21.9999 24.2662ZM8.22003 24.2599C7.01581 24.2599 6.04022 23.2709 6.04022 22.0496C6.04022 20.8291 7.01581 19.8401 8.22003 19.8401C9.42419 19.8401 10.3998 20.8291 10.3998 22.0496C10.3998 23.2709 9.42419 24.2599 8.22003 24.2599ZM21.1989 17.3938H9.13354C8.70062 17.3938 8.31635 17.1005 8.2038 16.6775L4.27802 2.24768H1.52222C0.993896 2.24768 0.561035 1.80859 0.561035 1.27039C0.561035 0.733032 0.993896 0.292969 1.52222 0.292969H4.99982C5.43182 0.292969 5.8161 0.586304 5.92859 1.01025L9.85443 15.4391H20.5581L24.1149 7.13379H12.2583C11.7291 7.13379 11.2962 6.69373 11.2962 6.15649C11.2962 5.61914 11.7291 5.17908 12.2583 5.17908H25.5891C25.9095 5.17908 26.2146 5.34192 26.3901 5.61914C26.5665 5.89539 26.5989 6.23743 26.4702 6.547L22.08 16.807C21.9198 17.1653 21.5832 17.3938 21.1989 17.3938Z" fill="white"/>
                                </svg>
                            Add To Cart  
    `;

    divHover.appendChild(teg_a);
    divCart.appendChild(divHover);

    let divTextBox = document.createElement("div");
    divTextBox.className = "productCartBox_cartBox_cart_textBox";

    let teg_h = document.createElement("h3");
    teg_h.textContent = product.productName;
    teg_h.className = "productCartBox_cartBox_cart_headText";
    divTextBox.appendChild(teg_h);

    let tegText = document.createElement("p");
    tegText.textContent = product.productDiscription;
    tegText.className = "productCartBox_cartBox_cart_text";
    divTextBox.appendChild(tegText);

    let tegPrice = document.createElement("p");
    tegPrice.className = "productCartBox_cartBox_cart_price";
    tegPrice.textContent = product.productPrice;
    divTextBox.appendChild(tegPrice);

    divCart.appendChild(divTextBox);
    return divCart;
}
let isClickHandled = true;
function addNumbersTag(count, select) {
    for (let index = 0; index < count; index++) {
        let numbersBox = document.getElementById("numbersBox");
        let tag_a = document.createElement("a");
        tag_a.textContent = `${index + 1}`;
        if (isClickHandled) {
            tag_a.addEventListener("click", () =>
                clickNumberCatalogList(index + 1)
            );
        }
        if (index + 1 == select) {
            tag_a.className = "productCartBox_catalogListButtons_purpleNumber";
        } else {
            tag_a.className = "productCartBox_catalogListButtons_numbers";
        }
        tag_a.classList.add("catalogListNumber");
        numbersBox.appendChild(tag_a);
    }
}

let cartBox = document.getElementById("cartBox");
if (document.title != "Brand") {
    for (let index = 0; index < productArr.length; index++) {
        cartBox.appendChild(addProductTeg(productArr[index]));
    }
    addNumbersTag(productArr.length - 8, 1);

    function removeTags(tag) {
        const elements = document.querySelectorAll(`.${tag}`);
        elements.forEach((element) => {
            element.remove();
        });
    }

    let mediaMaxWidth951 = window.matchMedia("(max-width: 951px)");
    let mediaMinWidth1145 = window.matchMedia("(min-width: 952px)");
    let productOnPage = 9;
    function maxWidth951(media) {
        if (media.matches) {
            removeTags("catalogCarts");
            productOnPage = 0;
            minProduct = 8;
            let maxProducts = Math.min(minProduct, productArr.length);
            for (let index = 0; index < maxProducts; index++) {
                cartBox.appendChild(addProductTeg(productArr[index]));
                productOnPage++;
            }
            removeTags("catalogListNumber");
            remainderCart = productArr.length - 7;
            addNumbersTag(remainderCart, 1);
        }
    }

    function add9cart(media) {
        if (media.matches) {
            removeTags("catalogCarts");
            productOnPage = 0;
            minProduct = 9;
            let maxProducts = Math.min(minProduct, productArr.length);
            for (let index = 0; index < maxProducts; index++) {
                cartBox.appendChild(addProductTeg(productArr[index]));
                productOnPage++;
            }
            removeTags("catalogListNumber");
            remainderCart = productArr.length - 8;
            addNumbersTag(remainderCart, 1);
        }
    }

    function clickNumberCatalogList(number) {
        console.log(`click ${number}`);
        if (number == 1) {
            productOnPage = 1;
        }
        removeTags("catalogCarts");
        let maxProducts = Math.min(minProduct, productArr.length);
        for (let index = productOnPage - 1; index < maxProducts; index++) {
            cartBox.appendChild(addProductTeg(productArr[index]));
            productOnPage++;
        }
        removeTags("catalogListNumber");
        remainderCart = productArr.length - (minProduct - 1);
        addNumbersTag(remainderCart, number);
    }

    mediaMaxWidth951.addEventListener("change", maxWidth951);
    mediaMinWidth1145.addEventListener("change", add9cart);
    maxWidth951(mediaMaxWidth951);
    add9cart(mediaMinWidth1145);
}
