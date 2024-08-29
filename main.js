let menuList = document.getElementById("menuList");
let barIcon = document.getElementById("barIcon");
menuList.style.maxHeight = "0px";
function toggleMenu() {
  if ((menuList.style.maxHeight = "0px")) {
    menuList.style.maxHeight = "500px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
barIcon.addEventListener("dblclick", function () {
  menuList.style.maxHeight = "0px";
});
let openCart = document.getElementById("openCart");
let cart = document.querySelector(".cart");
let closeCart = document.getElementById("close-cart");
let content = document.querySelector(".content");
let cartList = document.querySelector(".cart-list");
let total = document.querySelector(".total-price");
let quantity = document.querySelector(".quantity");
openCart.addEventListener("click", function () {
  cart.classList.add("active");
});
closeCart.addEventListener("click", function () {
  cart.classList.remove("active");
});
let products = [
  {
    id: 1,
    image:
      "beautiful-black-woman-with-afro-curls-hairstyle-smiling-model-dressed-summer-hipster-clothes-sexy-carefree-female-posing-near-blue-wall-studio-tanned-cheerful-sunglasses_158538-2477.jpg",
    name: "Dress",
    price: 500,
  },
  {
    id: 2,
    image:
      "fashionable-cool-lady-with-brunette-wavy-hairstyle-midi-stylish-plaid-outfit-black-heels-smiling-looking-into-camera_197531-28730.jpg",
    name: "Dress",
    price: 750,
  },
  {
    id: 3,
    image:
      "sexy-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-holding-trendy-handbag_285396-589.jpg",
    name: "Dress",
    price: 800,
  },
  {
    id: 4,
    image: "portrait-handsome-smiling-stylish-young-man_158538-19389.jpg",
    name: "Jacket",
    price: 400,
  },
  {
    id: 5,
    image: "man-black-suit-looking-away-sitting-chair_23-2148401484.jpg",
    name: "Classic",
    price: 900,
  },
  {
    id: 6,
    image: "portrait-handsome-smiling-stylish-young-man_158538-19391.jpg",
    name: "jacket",
    price: 400,
  },
  {
    id: 7,
    image:
      "full-length-portrait-bright-fashionable-girls-raincoat-holding-black-bag-yellow-studio-wall_155003-26298.jpg",
    name: "Jackets",
    price: 1000,
  },
  {
    id: 8,
    image: "cute-stylish-children-white-wall_155003-10585.jpg",
    name: "Dress&suits",
    price: 1000,
  },
  {
    id: 9,
    image: "full-shot-kid-with-sunglasses_23-2149067155.jpg",
    name: "suit",
    price: 500,
  },
  {
    id: 10,
    image: "cheerful-woman-shirt-sunglasses_171337-2770.jpg",
    name: "suit",
    price: 1500,
  },
  {
    id: 11,
    image:
      "beautiful-smiling-hipster-brunette-woman-model-stylish-blue-overcoat-isolated-white-full-length_158538-12575.jpg",
    name: "suit",
    price: 1000,
  },
  {
    id: 12,
    image:
      "portrait-young-beautiful-smiling-woman-looking-trendy-girl-casual-summer-overalls-clothes-hat_158538-1286.jpg",
    name: "jense",
    price: 700,
  },
];

let listCards=[];

function initApp() {
  products.forEach((value) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("product-box");
    newDiv.innerHTML = `
   <img src="images/${value.image}"/>
   <h1>${value.name} </h1>
   <span> ${value.price + "EGP"}</span><br>
   <button class="btn btn-primary" onclick="addToCart(${
     value.id
   })"> Add to Cart</button>
   <button class="btn btn-primary" onclick="buyNow()" > Buy Now</button>
   `;
    content.appendChild(newDiv);
  });
}
initApp();

function addToCart(id) {
  let product = products.find((pro) => pro.id === id); //يطلع الاوبجكت اللي حددته
  let productIndex = listCards.findIndex((pro) => pro.id === id); //بيعمل check اذا كان موجود او لا
  if (productIndex > -1) {
    listCards[productIndex].quantity += 1;
  } else {
    listCards.push({ ...product, quantity: 1 });
  }

  reloadCard();
}

function reloadCard() {
  cartList.innerHTML = "";
  let totalPrice = 0;
  let count = 0;

  listCards.forEach((value) => {
    totalPrice += value.price * value.quantity ;
    count += value.quantity;
    let newLi = document.createElement("li");
    newLi.classList.add("box");
    newLi.innerHTML = `
     <img src="images/${value.image}" />
     <h2>${value.name}</h2>
     <span>${value.price}</span>
     <button class="btn btn-primary" onclick="changeQuantity(${value.id},${
      value.quantity + 1
    })">+</button>
        <div>${value.quantity}</div>
     <button class="btn btn-dark"onclick="changeQuantity(${value.id},${
      value.quantity - 1
    })" >-</button>
   `;
    cartList.appendChild(newLi);
  });
  total.innerHTML = totalPrice;
  quantity.innerHTML = count;
}
function changeQuantity(id, newQuantity) {
  let productIndex = listCards.findIndex((pro) => pro.id === id);
  if (newQuantity === 0) {
    listCards.splice(productIndex, 1);
  } else {
    listCards[productIndex].quantity = newQuantity;
  }
  reloadCard();
}


function buyNow(){
window.location.href="form.html"
}



let countDownDate = new Date("Nov 31, 2024 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

   let dayes = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secondes = Math.floor(((dateDiff % (1000 * 60 )) /1000));

  document.querySelector(".dayes").innerHTML = dayes  +" " +"Days";
  document.querySelector(".hours").innerHTML = hours +" " +"Hours";
  document.querySelector(".minutes").innerHTML = minutes +" " +"Minutes";
  document.querySelector(".seconds").innerHTML = secondes +" " +"Seconds";
  if(dateDiff<0)
  {
    clearInterval(counter)
  }
}, 1000);


