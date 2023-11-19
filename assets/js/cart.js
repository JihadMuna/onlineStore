
import { createCards } from '../js/createCards.js';
// import {createSearchBar} from '../js/searchBar.js';
import { getUser , updateUser  ,getAllPerfume, updatePerfumeArr} from "./getterAndSetter.js";


const book = document.getElementById("book");
const cartItems = document.getElementById("list");
const user = getUser();
let carts = getCart();
const perfumes = getAllPerfume();

function getCart() {
    const cartJSON = localStorage.getItem('carts');
    return JSON.parse(cartJSON) || [];
}


function updateCart(cart) {
   
        const cartJSON = JSON.stringify(cart);
        localStorage.setItem('carts', cartJSON);
  
  }
 
// function calculateTotalPrice(cart) {
//   return cart.reduce((total, flight) => {
//     const travelers = flight.travelerNum || 1;
//     return total + flight.price * travelers;
//   }, 0);
// }

// function displayTotalPrice(cart) {
//   const totalPrice = calculateTotalPrice(cart);
//   totalAmount.textContent = `Total Price: $${totalPrice}`;
// }


 function addToCart(perfume) {
    console.log(perfume);
    carts.push(perfume);
    updateCart(carts);
  }
 
  function updateCartDisplay() {
    if (carts.length === 0) {
      cartItems.innerHTML = "";
    } else {
      cartItems.innerHTML = "";
      carts.forEach((cart, index) => {
        createCards(true, cart, index , false);
      });
    }
  }


// function updateCartCount(index) {

//     const cartCount = carts.length;
//     if (cartCount >= 0) {
//         document.querySelector("#cartCount").textContent = cartCount;
//         document.querySelector("#cartCount").style.display = "block";
//         cartItems.removeChild( document.querySelector(`#card${index}`));
//         if(cartCount == 0){
//           alert("The Cart is empty");
//           location.href  = "dashboard.html";
//         }
//     } else {
//         document.querySelector("#cartCount").style.display = "none";

//     }
// }

function removeFromCart(index) {
  
    perfumes.push(carts[index]);
    console.log(carts);
    carts.splice(index, 1);
    console.log(carts);
    updateCart(carts);
    // displayTotalPrice(carts);
 }



document.addEventListener("DOMContentLoaded", function() {
const cancelButton = document.querySelectorAll(".cancelButton");
console.log(cancelButton);
cancelButton.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const cartIndex = carts.findIndex(cart => cart.id == e.target.id);
    removeFromCart(cartIndex);
    console.log(index);
    // updateCartCount(index);
   
  });
});

});


document.addEventListener("DOMContentLoaded", function() {

const decreaseButton = document.querySelectorAll(".decrease-button");
const increaseButton = document.querySelectorAll(".increase-button");
const travelersInput = document.querySelectorAll(".travelers-input");
 
//******i have to make sure that the input change in reset situation*********


decreaseButton.forEach((button,index) => {

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const currentValue = parseInt(travelersInput[index].value, 10);
    if (currentValue > 1) {
      travelersInput[index].value = currentValue - 1;
      carts[e.target.id].travelerNum = currentValue - 1;
      updateCart(carts);
    }
    });
});


increaseButton.forEach((button, index) => {
 
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const cartIndex = e.target.id;
    const currentValue = parseInt(travelersInput[index].value, 10);
  if (currentValue < 10) {
    travelersInput[index].value = currentValue + 1;
    carts[cartIndex].travelerNum = currentValue + 1;
    updateCart(carts);
  }
});

});
});


const bookButton = document.createElement("button");
bookButton.id = "book-button";
bookButton.className = "book-button";
bookButton.textContent = "Book";


const popup = document.createElement("div");
popup.id = "popup";
popup.className = "popup";

const popupContent = document.createElement("div");
popupContent.className = "popup-content";

const closeIcon = document.createElement("span");
closeIcon.className = "close";
closeIcon.id = "close-popup";
closeIcon.textContent = "×";

const heading = document.createElement("h2");
heading.textContent = "Booking Confirmation";
heading.style.margin = "20px";
const totalAmountText = document.createElement("p");
totalAmountText.textContent = "Total Amount to Pay: ";

const totalAmount = document.createElement("span");
totalAmount.id = "total-amount";
totalAmount.textContent = "$0";
totalAmountText.style.margin = "20px";
const confirmButton = document.createElement("button");
confirmButton.id = "confirm-booking";
confirmButton.className = "confirm-button";
confirmButton.textContent = "Confirm Booking";



// if(book){

  updateCartDisplay();
//   popupContent.appendChild(closeIcon);
//   popupContent.appendChild(heading);
//   popupContent.appendChild(totalAmountText);
//   totalAmountText.appendChild(totalAmount);
//   popupContent.appendChild(confirmButton);

//   popup.appendChild(popupContent);
//   book.appendChild(popup);
//   book.appendChild(bookButton);

// }


if(document.getElementById("book-button")){
 
  document.getElementById("book-button").addEventListener("click", () => {
      //  const totalPrice = calculateTotalPrice(carts);
        popup.style.display = "block";
       // displayTotalPrice(carts);  
        console.log(carts);
  });
  closeIcon.addEventListener("click", () => {
    popup.style.display = "none";
  });


  confirmButton.addEventListener("click", () => {
    popup.style.display = "none";
    alert("Booking confirmed!");
    // updateMyFlights(carts);
    carts.forEach((cart) =>{
      const index = perfumes.findIndex(flight => flight.id == cart.id);
      if(index != -1){
        perfumes.splice(index,1);
      }
    })
    updatePerfumeArr(perfumes);
    localStorage.setItem('carts', JSON.stringify([]));
    // console.log(JSON.parse(localStorage.getItem('myFlights')));
    location.href ="dashboard.html";
  });
     
}


export { carts, addToCart, removeFromCart };