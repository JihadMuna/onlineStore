import { getUser } from "./getterAndSetter.js";

const user = getUser();

async function fetchPastOrders(userId) {
    const apiUrl = `https://6555db6984b36e3a431e7e7b.mockapi.io/users/${userId}`; 
    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${result.status}`);
        }

        const userData = await response.json();
        console.log(userData.pastOrders);
        displayOrders(userData.pastOrders);
    } catch (error) {
        console.error('Error fetching past orders:', error.message);
        throw error;
    }
}
   
   
    function createOrderCard(order) {
        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        const orderHeader = document.createElement('h2');
        orderHeader.textContent = `Order #${order.id}`;

        const orderDetails = document.createElement('div');
        orderDetails.classList.add('order-details');

        order.order.forEach(item => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const img = document.createElement('img');
            img.src = item.image;

            const productInfo = document.createElement('div');

            const productName = document.createElement('p');
            productName.textContent = `${item.name} (${item.size} ML)`;

            const productNumPerfumes = document.createElement('p');
            productNumPerfumes.textContent = `Quantity: ${item.NumPerfumes}`;

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${item.price.toFixed(2)}`;

            productInfo.appendChild(productName);
            productInfo.appendChild(productNumPerfumes);

            productDiv.appendChild(img);
            productDiv.appendChild(productInfo);
            productDiv.appendChild(productPrice);

            orderDetails.appendChild(productDiv);
        });

        const totalPrice = document.createElement('p');
        totalPrice.textContent = `Total Price: $${order.totalPrice.toFixed(2)}`;
        totalPrice.id = 'totalPrice';
        totalPrice.style.fontWeight = '600';
        orderCard.appendChild(orderHeader);
        orderCard.appendChild(orderDetails);
        orderCard.appendChild(totalPrice);

        return orderCard;
    }

    function displayOrders(pastOrders) {
        
        const h1 = document.createElement('h1');
        h1.textContent= `You have ${pastOrders.length} orders`; 
        h1.style.marginBottom ='50px';
        h1.style.color ='#fafbfc';
        const ordersContainer = document.getElementById('orders-container');
        ordersContainer.appendChild(h1);
        pastOrders.forEach(order => {
            const orderCard = createOrderCard(order);
            ordersContainer.appendChild(orderCard);
        });
    }

     window.onload = fetchPastOrders(user.id);

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
    