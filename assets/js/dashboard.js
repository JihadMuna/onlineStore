
import { createCards } from '../js/createCards.js';
import { addToCart  } from '../js/cart.js';
import { getUser ,updateSpecificPerfume,updatePerfumeArr , getAllPerfume } from "./getterAndSetter.js";

const user = getUser();
console.log(user);

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

              createCards(false , perfume , index , user.isAdmin
                );
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
       editFunction(items[editBtn.id]);
     
      }
        );
  });
         cards.forEach(card => {
            card.addEventListener('click', (e) => {
             e.preventDefault();
             const cardId = card.id.slice(4);
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
          console.log(items[e.target.id]);
          addToCart(items[e.target.id]);      
          location.href = "cart.html" ;
        });
      });
      
    
    }

  document.addEventListener("DOMContentLoaded", function() {
   
    
    });
    
  if(document.querySelector("#showAll")){
    document.querySelector("#showAll").addEventListener('click', function(event) {
      event.preventDefault();
      displayPerfume(flights);
    })

  }

//   displayPerfume(flights); 
    

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
  let editBrandInput = document.createElement("input");
  let editSizeInput = document.createElement("input");
  let editPriceInput = document.createElement("input");
  let editImageInput = document.createElement("input");
  let submitEdit = document.createElement("input");
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
  

 