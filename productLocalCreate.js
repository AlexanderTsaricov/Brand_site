const AllProducts = [
    {
        srcImg: "cart/manInBlueJacet.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 0,
    },
    {
        srcImg: "catalogCart/manInRed.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 1,
    },
    {
        srcImg: "cart/manInBlueSweater.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 2,
    },
    {
        srcImg: "cart/manInBlueT-shirt.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 3,
    },
    {
        srcImg: "catalogCart/manInWhiteT-Shirt.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 4,
    },
    {
        srcImg: "catalogCart/manInBlueCap.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 4,
    },
    {
        srcImg: "catalogCart/manInWhiteShirt.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 4,
    },
    {
        srcImg: "catalogCart/manInBlackJacet.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 4,
    },
    {
        srcImg: "catalogCart/manInGreenT-Shirt.png",
        productName: "ELLERY X M'O CAPSULE",
        productDiscription:
            "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        productPrice: 52.0,
        color: "Red",
        size: "XL",
        id: 4,
    },
];

localStorage.setItem("productsData", JSON.stringify(AllProducts));

// JS ругается, если я пытаюсь загрузить данные с локального JSON, поэтому нашел вот такую хитрость
