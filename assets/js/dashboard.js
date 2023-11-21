
import { createCards } from '../js/createCards.js';
import { addToCart} from '../js/cart.js';
import {createSearchBar} from '../js/searchBar.js';
import { getUser ,updateSpecificPerfume,updatePerfumeArr , getAllPerfume ,getCart } from "./getterAndSetter.js";

const user = getUser();
const perfumes =getAllPerfume();
console.log(user);
const cart = getCart();



    const url = "https://6555dc0584b36e3a431e8028.mockapi.io";

    const perfumeList = document.getElementById("list");
  
    const fetchedProducts = async () => {
        try {
            const result = await fetch(url+'/perfumes');
            if (!result.ok) {
                throw new Error(`Failed to fetch data. Status: ${result.status}`);
            }
    
            const res = await result.json();
            console.log(res);
            updatePerfumeArr(res);
            displayPerfume(res);
        } catch (err) {
            console.error(err);
        }
    };
    
    fetchedProducts();

    export function displayPerfume(items) {
        perfumeList.innerHTML = "";
        
        items.forEach((perfume, index) => {
          if(cart){
            const findIndex = cart.findIndex(c => c.id == perfume.id);
            if(findIndex == -1){
              createCards(false , perfume , index , user.isAdmin);
            }
          }
          else{
            createCards(false , perfume , index , user.isAdmin);
          }
        });
        const cards = document.querySelectorAll(".perfume-details");
        const deleteButton = document.querySelectorAll(".deleteButton");
        const editButton = document.querySelectorAll(".editButton");
        deleteButton.forEach(dltbtn => {
          dltbtn.addEventListener('click', (e) => {
           e.preventDefault();
           deleteFunction(dltbtn.id);
          }
            );
    });
    editButton.forEach(editBtn => {
      editBtn.addEventListener('click', (e) => {
       e.preventDefault();
       console.log(editBtn.id);
       editFunction(items[editBtn.id]);
      }
        );
  });
         cards.forEach(card => {
            card.addEventListener('click', (e) => {
             e.preventDefault();
             const cardId = card.id.slice(4);
             console.log(`spe id ${cardId}`);
             updateSpecificPerfume(items[cardId]);
             location.href = "productPage.html";
            }
              );
      });

      const addToCartButtons = document.querySelectorAll(".addToCart");
      console.log(addToCartButtons);
       addToCartButtons.forEach((button, index) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          console.log(e.target.id);
          console.log(perfumes);
         addToCart(items[e.target.id] ,e.target.id);      
        location.href = "cart.html" ;
        });
      });
      
    
    }


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


// delete product function
const deleteFunction = async(id)=>{
  console.log(id);
  try {
      const response = await fetch(url+`/perfumes/${id}`, {
          method: "DELETE", 
          });
        console.log(response.status);

        const result = await response.json();
        console.log(result);
        location.reload()

           } catch (error) {
      console.log(error);
  }
}

// edit product function
const editFunction = async (product)=>{
  const existingForm = document.getElementById('editForm');
  if(existingForm){
      existingForm.remove()
  }

  console.log(product);
  let editForm = document.createElement('form')
  editForm.id = 'editForm'
  let title = document.createElement('h1');
  title.textContent = `Edit ${product.name}`
  
  editForm.classList.add('editForm')
  let closeForm = document.createElement('h1')
  closeForm.textContent = 'x';
  closeForm.classList.add('closeForm')
  let editNameInput = document.createElement("input");
  editNameInput.id = "editNameInput";
  let editBrandInput = document.createElement("input");
  editBrandInput.id = "editBrandInput";
  let editSizeInput = document.createElement("input");
  editSizeInput.id = "editSizeInput";
  let editPriceInput = document.createElement("input");
  editPriceInput.id ="editPriceInput";
  let editImageInput = document.createElement("input");
  editImageInput.id ="editImageInput";
  let submitEdit = document.createElement("input");
  submitEdit.id = 'submitBtn';
  editNameInput.value = product.name;
  editBrandInput.value = product.brand;
  editSizeInput.value = product.size;
  editPriceInput.value = product.price;
  editImageInput.value= product.image;
  submitEdit.type = "submit";
  submitEdit.textContent="submit editing"
  editForm.appendChild(closeForm);
  editForm.appendChild(title);
  editForm.appendChild(editNameInput);
  editForm.appendChild(editBrandInput);
  editForm.appendChild(editSizeInput);
  editForm.appendChild(editPriceInput);
  editForm.appendChild(editImageInput);
  editForm.appendChild(submitEdit);
  document.body.appendChild(editForm);

  editForm.addEventListener("submit", async (e)=>{
      e.preventDefault()
      const editedProduct = {...product,
          name : editNameInput.value,
          brand : editBrandInput.value,
          size : editSizeInput.value,
          price : editPriceInput.value,
          image: editImageInput.value,}
    await  editProduct(editedProduct)
    editForm.remove()
      })

      closeForm.addEventListener('click', ()=>{
          editForm.remove()
      })
}

const editProduct = async (product)=>{
  console.log(product)
  try{
  const response = await fetch(url+`/perfumes/${product.id}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    console.log(response.status);

    const result = await response.json();
    console.log(result);

    fetchedProducts()
} catch (error) {
    console.log(error);
}
}
  

 