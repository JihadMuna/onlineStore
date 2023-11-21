
import { createCards } from '../js/createCards.js';
import {createSearchBar} from '../js/searchBar.js';
import { getUser , updateUser  ,getAllPerfume, updatePerfumeArr ,getCart ,updateCart ,updateSpecificPerfume, getPastOrders , updateOrders ,getNumOrders , updateNumOrder} from "./getterAndSetter.js";


const book = document.getElementById("book");
const cartItems = document.getElementById("list");
const user = getUser();
let carts = getCart();
const perfumes = getAllPerfume();
const orders= getPastOrders();
const orderNum = getNumOrders();

 
function calculateTotalPrice(cart) {
  return cart.reduce((total, perfume) => {
    const perfumesNum = perfume.NumPerfumes || 1;
    return total + perfume.price * perfumesNum;
  }, 0);
}

function displayTotalPrice(cart) {
  const totalPrice = calculateTotalPrice(cart);
  totalAmount.textContent = `Total Price: $${totalPrice}`;
}


 function addToCart(perfume , index ,isSpecific) {
    console.log(perfume);
    carts.push(perfume);
    if(!isSpecific){
      perfumes.splice(index,1);
      updatePerfumeArr(perfumes);
    }
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


function updateCartCount(index) {

    const cartCount = carts.length;
    if (cartCount >= 0) {
        document.querySelector("#cartCount").textContent = cartCount;
        document.querySelector("#cartCount").style.display = "block";
        cartItems.removeChild( document.querySelector(`#card${index}`));
        if(cartCount == 0){
          alert("The Cart is empty");
          location.href  = "dashboard.html";
        }
    } else {
        document.querySelector("#cartCount").style.display = "none";

    }
}

function removeFromCart(index) {
  
    perfumes.push(carts[index]);
    console.log(carts);
    carts.splice(index, 1);
    console.log(carts);
    updateCart(carts);
    displayTotalPrice(carts);
 }



document.addEventListener("DOMContentLoaded", function() {
const cancelButton = document.querySelectorAll(".cancelButton");
console.log(cancelButton);
cancelButton.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const cartIndex = carts.findIndex(cart => cart.id == e.target.id);
    removeFromCart(index);
    console.log(index);
    if(carts.length == 0){
      location.href = 'dashboard.html';
    }
    else{
      location.reload();
    }
   
  });
});

});


document.addEventListener("DOMContentLoaded", function() {

const decreaseButton = document.querySelectorAll(".decrease-button");
const increaseButton = document.querySelectorAll(".increase-button");
const travelersInput = document.querySelectorAll(".perfumes-input");
 
//******i have to make sure that the input change in reset situation*********


decreaseButton.forEach((button,index) => {

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const currentValue = parseInt(travelersInput[index].value, 10);
    if (currentValue > 1) {
      travelersInput[index].value = currentValue - 1;
      carts[e.target.id].NumPerfumes = currentValue - 1;
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
        carts[cartIndex].NumPerfumes = currentValue + 1;
        updateCart(carts);
      }
    });
  });
});


const bookButton = document.createElement("button");
bookButton.id = "book-button";
bookButton.className = "book-button";
bookButton.textContent = "Order Now";


const popup = document.createElement("div");
popup.id = "popup";
popup.className = "popup";
popup.style.display = "none";

const popupContent = document.createElement("div");
popupContent.className = "popup-content";

const closeIcon = document.createElement("span");
closeIcon.className = "close";
closeIcon.id = "close-popup";
closeIcon.textContent = "×";

const heading = document.createElement("h2");
heading.textContent = "Ordering Confirmation";
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
confirmButton.textContent = "Confirm Ordering";



if(book){

  updateCartDisplay();
  popupContent.appendChild(closeIcon);
  popupContent.appendChild(heading);
  popupContent.appendChild(totalAmountText);
  totalAmountText.appendChild(totalAmount);
  popupContent.appendChild(confirmButton);

  popup.appendChild(popupContent);
  book.appendChild(popup);
  book.appendChild(bookButton);

}


if(document.getElementById("book-button")){
  let totalPrice = 0;
  document.getElementById("book-button").addEventListener("click", () => {
        totalPrice =calculateTotalPrice(carts);
        popup.style.display = "block";
        displayTotalPrice(carts);  
  });
  closeIcon.addEventListener("click", () => {
    popup.style.display = "none";
  });


  confirmButton.addEventListener("click", () => {
    popup.style.display = "none";
    alert("Booking confirmed!");
    carts.forEach((cart) =>{
      const index = perfumes.findIndex(flight => flight.id == cart.id);
      if(index != -1){
        perfumes.splice(index,1);
      }
    })
    
    updatePerfumeArr(perfumes);
    const newOrder = {
      id: (orderNum+1),
      totalPrice : totalPrice,
      order : carts
    }
    updateOrders(newOrder);
    updateNumOrder(orderNum+1);
    user.pastOrders.push(newOrder);
    updateUser(user);
    updatePastOrders(user.id, newOrder);
    localStorage.setItem('carts', JSON.stringify([]));
    location.href ="displayOrders.html";
  });
     
}

const cards = document.querySelectorAll(".perfume-details");
cards.forEach(card => {
  card.addEventListener('click', (e) => {
   e.preventDefault();
   const cardId = card.id.slice(4);
   console.log(`spe id ${cardId}`);
   updateSpecificPerfume(cards[cardId]);
   location.href = "productPage.html";
  }
    );
});
document.addEventListener("DOMContentLoaded", function() {
      
  document.querySelector("#linkFourthItem")&& document.querySelector("#linkFourthItem").addEventListener('click', function(event) {
    event.preventDefault();
    if(!(JSON.parse(localStorage.getItem('carts')))){
      alert("The cart is Empty");
    }
    else{
     location.href = "cart.html" ;
    }
  });
  
});


function updatePastOrders(userId, newOrders) {
  const apiUrl = `https://6555db6984b36e3a431e7e7b.mockapi.io/users/${userId}`;

  fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }
    return response.json();
})
.then(user => {
    // Assuming pastOrders is an array in the user object
    user.pastOrders.push(newOrders);

    return fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
})
.then(response => {
    if (!response.ok) {
        throw new Error('Failed to update past orders');
    }
    console.log('Past orders updated successfully!');
})
.catch(error => {
    console.error('Failed to update past orders:', error.message);
});
}
export {addToCart, removeFromCart };