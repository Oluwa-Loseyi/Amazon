/** @format */

// Correctly select body and other elements
let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let container = document.querySelector(".container");
let cards = document.querySelector(".cards");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");




// Debugging - Check if elements are selected properly
console.log({
  openShopping, closeShopping, container,
  cards, list, listCard, total, quantity,
});

// Add event listeners with corrected classList manipulation
openShopping.addEventListener("click", () => {
  console.log("Opening shopping cart...");
  document.body.classList.add("active"); // Ensure "active" is added to body
});
closeShopping.addEventListener("click", () => {
  console.log("Closing shopping cart...");
  document.body.classList.remove("active"); // Ensure "active" is removed from body
});

// Products array and listCards for cart management
let products = [
  { id: 1, name: "PRODUCT NAME 1", image: "gadget 1.jpeg", price: 120000 },
  { id: 2, name: "PRODUCT NAME 2", image: "images.jpeg", price: 130000 },
  { id: 3, name: "PRODUCT NAME 3", image: "glove.jpeg", price: 220000 },
  { id: 4, name: "PRODUCT NAME 4", image: "mp.jpeg", price: 220000 },
  { id: 5, name: "PRODUCT NAME 5", image: "future.jpeg", price: 150000 },
  { id: 6, name: "PRODUCT NAME 6", image: "cameral.jpeg", price: 120000 },
];

let listCards = [];

// Initialize the product list
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
      <img src="${value.image}" />
      <div class="title">${value.name}</div>
      <div class="price">${value.price.toLocaleString()}</div>
      <button onclick="addToCard(${key})">Add To Card</button>
    `;
    list.appendChild(newDiv);
  });
}

initApp();

// Add product to cart
function addToCard(key) {
  console.log(`Adding product ${products[key].name} to cart...`);
  if (listCards[key] == null) {
    listCards[key] = { ...products[key], quantity: 1 }; // Initialize with quantity 1
  }
  reloadCard();
}

// Reload the cart UI
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;

  listCards.forEach((value, key) => {
    if (value != null) {
      totalPrice += value.price * value.quantity;
      count += value.quantity;

      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
        <div><img src="${value.image}" /></div>
        <div>${value.name}</div>
        <div>${value.price.toLocaleString()}</div>
        <div>
          <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
          <div class="count">${value.quantity}</div>
          <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
        </div>
      `;
      listCard.appendChild(newDiv);
    }
  });

  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;

  // Debugging - Log cart status
  console.log("Cart updated:", { totalPrice, count, listCards });
}

// Change quantity in the cart
function changeQuantity(key, newQuantity) {
  if (newQuantity === 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = newQuantity;
    listCards[key].price = newQuantity + products[key].price;
  }
  reloadCard();
}

const preloader = document.getElementById("preloader");

window.addEventListener("load", function () {
  preloader.style.display = "none";
});
