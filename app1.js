let bottomBread = document.querySelector(".bottom-bread")
let topBread = document.querySelector(".top-bread")
let burger = document.querySelector(".burger")

let newAry = []

let divsekk = document.querySelector(".divsekk")

let say = 0

let totalSpan = document.querySelector(".totalSpan")
let totalSpan1 = document.querySelector(".totalSpan1")
let totalSpan2 = document.querySelector(".totalSpan2")
let totalSpan3 = document.querySelector(".totalSpan3")
let totalSpan4 = document.querySelector(".totalSpan4")

let cem1 = 0
let cem2 = 0
let cem3 = 0
let cem4 = 0
let cem5 = 0

let btnReduce = document.querySelector(".btnReduce")
let btnIncrease = document.querySelector(".btnIncrease")

    let newImg = document.createElement("img")
btnIncrease.addEventListener("click", () => {

  cem1++
  totalSpan.textContent = cem1
  newImg.src = "https://burger.run.place/burger/p_beef.png"
    newImg.classList.add("newImg")
    if (!burger.querySelector(".newImg")) {

        burger.insertBefore(newImg, bottomBread)

        say++

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }

    if (!burger.querySelector(".newImg")) {

        say++
        bottomBread.style.transform = `translateY(-${say * 20}px)`
    }

    burger.insertBefore(newImg, bottomBread)
})

btnReduce.addEventListener("click", () => {

    if (cem1 > 0) {

        cem1--
        totalSpan.textContent = cem1
    }

    let imgs = burger.querySelectorAll(".newImg")

    let sonuncuEt = imgs[imgs.length - 1]

        sonuncuEt.remove()

    if (!burger.querySelector(".newImg")) {

        say--

        bottomBread.style.transform = `translateY(-${say * 20}px)`

    }
})









let btnReduce1 = document.querySelector(".btnReduce1")
let btnIncrease1 = document.querySelector(".btnIncrease1")

let newImg1 = document.createElement("img")

btnIncrease1.addEventListener("click", () => {

    cem2++
    totalSpan1.textContent = cem2

    newImg1.src = "https://burger.run.place/burger/t_onion.png"
    
    newImg1.classList.add("newImg1")

    if (!burger.querySelector(".newImg1")) {

        burger.insertBefore(newImg1, bottomBread)

        say++

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }
})

btnReduce1.addEventListener("click", () => {

    if (cem2 > 0) {

        cem2--
        totalSpan1.textContent = cem2
    }

    let imgs1 = burger.querySelectorAll(".newImg1")

    let sonuncuEt1 = imgs1[imgs1.length - 1]

    if (sonuncuEt1) {
        sonuncuEt1.remove()
    }

    if (!burger.querySelector(".newImg1")) {

        say--

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }
})









let btnReduce2 = document.querySelector(".btnReduce2")
let btnIncrease2 = document.querySelector(".btnIncrease2")

let newImg2 = document.createElement("img")

btnIncrease2.addEventListener("click", () => {

    cem3++
    totalSpan2.textContent = cem3

    newImg2.src = "https://burger.run.place/burger/t_bacon.png"

    newImg2.classList.add("newImg2")

    if (!burger.querySelector(".newImg2")) {

        burger.insertBefore(newImg2, bottomBread)

        say++

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }
})

btnReduce2.addEventListener("click", () => {

    if (cem3 > 0) {

        cem3--
        totalSpan2.textContent = cem3
    }

    let imgs2 = burger.querySelectorAll(".newImg2")

    let sonuncuEt2 = imgs2[imgs2.length - 1]

    if (sonuncuEt2) {
        sonuncuEt2.remove()
    }

    if (!burger.querySelector(".newImg2")) {

        say--

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }
})









let btnReduce3 = document.querySelector(".btnReduce3")
let btnIncrease3 = document.querySelector(".btnIncrease3")

let newImg3 = document.createElement("img")

btnIncrease3.addEventListener("click", () => {

    cem4++
    totalSpan3.textContent = cem4

    newImg3.src = "https://burger.run.place/burger/t_lettuce.png"

    newImg3.classList.add("newImg3")

    if (!burger.querySelector(".newImg3")) {

        burger.insertBefore(newImg3, bottomBread)

        say++

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }
})

btnReduce3.addEventListener("click", () => {

    if (cem4 > 0) {

        cem4--
        totalSpan3.textContent = cem4
    }

    let imgs3 = burger.querySelectorAll(".newImg3")

    let sonuncuEt3 = imgs3[imgs3.length - 1]

    if (sonuncuEt3) {
        sonuncuEt3.remove()
    }

    if (!burger.querySelector(".newImg3")) {

        say--

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }
})









let btnReduce4 = document.querySelector(".btnReduce4")
let btnIncrease4 = document.querySelector(".btnIncrease4")

let newImg4 = document.createElement("img")

btnIncrease4.addEventListener("click", () => {

    cem5++
    totalSpan4.textContent = cem5

    newImg4.src = "https://burger.run.place/burger/t_tomato.png"

    newImg4.classList.add("newImg4")

    if (!burger.querySelector(".newImg4")) {

        burger.insertBefore(newImg4, bottomBread)

        say++

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }
})

btnReduce4.addEventListener("click", () => {

    if (cem5 > 0) {

        cem5--
        totalSpan4.textContent = cem5
    }

    let imgs4 = burger.querySelectorAll(".newImg4")

    let sonuncuEt4 = imgs4[imgs4.length - 1]

    if (sonuncuEt4) {
        sonuncuEt4.remove()
    }

    if (!burger.querySelector(".newImg4")) {

        say--

        bottomBread.style.transform = `translateY(-${say * 15}px)`
    }
})







/* =========================
   BASKET
========================= */

let basketButtons = document.querySelectorAll(
    ".basket-btn, .mobile-basket-btn"
);

let basket = document.querySelector(".basket");
let delet = document.querySelector(".delet");
let overlay = document.querySelector(".basket-overlay");


/* BASKET AÇ */

basketButtons.forEach((button) => {

    button.addEventListener("click", () => {

        basket.classList.add("active");

        if (overlay) {
            overlay.classList.add("active");
        }

        document.body.classList.add("no-scroll");

    });

});


/* BASKET BAĞLA */

if (delet) {

    delet.addEventListener("click", () => {

        basket.classList.remove("active");

        if (overlay) {
            overlay.classList.remove("active");
        }

        document.body.classList.remove("no-scroll");

    });

}


/* QARA FONA BASANDA BAĞLANSIN */

if (overlay) {

    overlay.addEventListener("click", () => {

        basket.classList.remove("active");
        overlay.classList.remove("active");

        document.body.classList.remove("no-scroll");

    });

}


/* ESC BASANDA BAĞLANSIN */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        basket.classList.remove("active");

        if (overlay) {
            overlay.classList.remove("active");
        }

        document.body.classList.remove("no-scroll");

    }

});