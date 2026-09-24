/* =====================================
   HERO SLIDER
===================================== */

const divButton1 = document.querySelector(".divButton1");
const divButton2 = document.querySelector(".divButton2");

const img = document.querySelector(".img");
const img1 = document.querySelector(".img1");


divButton1.addEventListener("click", () => {

    divButton2.style.width = "40px";
    divButton1.style.width = "20px";

    img.style.display = "none";
    img1.style.display = "flex";

});


divButton2.addEventListener("click", () => {

    divButton1.style.width = "40px";
    divButton2.style.width = "20px";

    img1.style.display = "none";
    img.style.display = "flex";

});


/* =====================================
   BASKET
===================================== */

const basketButtons = document.querySelectorAll(
    ".basket-btn, .mobile-basket-btn"
);

const basket = document.querySelector(".basket");
const basketOverlay = document.querySelector(".basket-overlay");
const closeBasket = document.querySelector(".delet");

const body = document.body;


function openBasket() {

    basket.classList.add("active");

    basketOverlay.classList.add("active");

    body.classList.add("no-scroll");

}


function closeBasketPanel() {

    basket.classList.remove("active");

    basketOverlay.classList.remove("active");

    body.classList.remove("no-scroll");

}


/* OPEN */

basketButtons.forEach(button => {

    button.addEventListener("click", () => {

        openBasket();

    });

});


/* CLOSE */

closeBasket.addEventListener("click", () => {

    closeBasketPanel();

});


/* CLICK OVERLAY */

basketOverlay.addEventListener("click", () => {

    closeBasketPanel();

});


/* ESC */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeBasketPanel();

    }

});


/* =====================================
   CART
===================================== */

const addButtons = document.querySelectorAll(".ButtonAdd");

const basketContainer = document.querySelector(".divsekk");

const basketCountElements =
    document.querySelectorAll(".spzan");

const basketCountText =
    document.querySelector(".basket-count");

const totalElement =
    document.querySelector(".spanBasket");


let cart = [];


/* =====================================
   ADD PRODUCT
===================================== */

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        const product = button.closest(".product");

        const name =
            product.querySelector("h1").textContent;

        const priceText =
            product.querySelector(".spanVCard").textContent;

        const price =
            parseFloat(
                priceText.replace("$", "")
            );

        const image =
            product.querySelector(".oldImg").src;


        const existing =
            cart.find(item => item.name === name && item.price === price);


        if (existing) {

            existing.quantity++;

        } else {

            cart.push({

                name: name,

                price: price,

                image: image,

                quantity: 1

            });

        }


        renderCart();

        openBasket();

    });

});


/* =====================================
   RENDER CART
===================================== */

function renderCart() {

    basketContainer.innerHTML = "";


    if (cart.length === 0) {

        basketContainer.innerHTML = `

            <div class="empty-basket">

                <i class="fa-solid fa-burger"></i>

                <h4>Your basket is empty</h4>

                <p>Add some delicious burgers!</p>

            </div>

        `;

        updateBasketInfo();

        return;

    }


    cart.forEach((item, index) => {

        const cartItem =
            document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img
                class="cart-img"
                src="${item.image}"
                alt="${item.name}"
            >


            <div class="cart-info">

                <h4>
                    ${item.name}
                </h4>

                <span class="cart-price">
                    $${item.price.toFixed(2)}
                </span>

            </div>


            <div class="quantity-box">

                <button
                    class="minus-btn"
                    data-index="${index}"
                >
                    -
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    class="plus-btn"
                    data-index="${index}"
                >
                    +
                </button>

            </div>

        `;


        basketContainer.appendChild(cartItem);

    });


    addQuantityEvents();

    updateBasketInfo();

}


/* =====================================
   QUANTITY BUTTONS
===================================== */

function addQuantityEvents() {

    const plusButtons =
        document.querySelectorAll(".plus-btn");

    const minusButtons =
        document.querySelectorAll(".minus-btn");


    plusButtons.forEach(button => {

        button.addEventListener("click", () => {

            const index =
                Number(button.dataset.index);

            cart[index].quantity++;

            renderCart();

        });

    });


    minusButtons.forEach(button => {

        button.addEventListener("click", () => {

            const index =
                Number(button.dataset.index);


            if (cart[index].quantity > 1) {

                cart[index].quantity--;

            } else {

                cart.splice(index, 1);

            }


            renderCart();

        });

    });

}


/* =====================================
   UPDATE BASKET INFO
===================================== */

function updateBasketInfo() {

    let totalQuantity = 0;

    let totalPrice = 0;


    cart.forEach(item => {

        totalQuantity += item.quantity;

        totalPrice +=
            item.price * item.quantity;

    });


    /* COUNT */

    basketCountElements.forEach(element => {

        element.textContent =
            totalQuantity;

    });


    basketCountText.textContent =
        totalQuantity;


    /* TOTAL */

    totalElement.textContent =
        `$${totalPrice.toFixed(2)}`;

}


/* =====================================
   FILTERS
===================================== */

const allButton =
    document.querySelector(".all");

const classicButton =
    document.querySelector(".classi");

const premiumButton =
    document.querySelector(".Preiumum");

const products =
    document.querySelectorAll(".product");

const premiumProducts =
    document.querySelectorAll(".yeniprad");


function resetFilterButtons() {

    allButton.style.backgroundColor = "white";
    classicButton.style.backgroundColor = "white";
    premiumButton.style.backgroundColor = "white";

    allButton.style.color = "black";
    classicButton.style.color = "black";
    premiumButton.style.color = "black";

}


/* ALL */

allButton.addEventListener("click", () => {

    resetFilterButtons();

    allButton.style.backgroundColor =
        "#e6392f";

    allButton.style.color =
        "white";


    products.forEach(product => {

        product.style.display =
            "block";

    });

});


/* CLASSIC */

classicButton.addEventListener("click", () => {

    resetFilterButtons();

    classicButton.style.backgroundColor =
        "#e6392f";

    classicButton.style.color =
        "white";


    products.forEach(product => {

        product.style.display =
            "block";

    });


    premiumProducts.forEach(product => {

        product.style.display =
            "none";

    });

});


/* PREMIUM */

premiumButton.addEventListener("click", () => {

    resetFilterButtons();

    premiumButton.style.backgroundColor =
        "#e6392f";

    premiumButton.style.color =
        "white";


    products.forEach(product => {

        product.style.display =
            "none";

    });


    premiumProducts.forEach(product => {

        product.style.display =
            "block";

    });

});


/* =====================================
   INITIAL
===================================== */

updateBasketInfo();