const addPerfumeForm = document.getElementById("addPerfumeForm");
const name = document.getElementById("name");
const brand = document.getElementById("brand");
const size = document.getElementById("size");
const price = document.getElementById("price");
const image = document.getElementById("image");

const url = "https://6555dc0584b36e3a431e8028.mockapi.io";

addPerfumeForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
    const addProduct = {
        name: name.value,
        brand: brand.value,
        size: parseInt(size.value), // Convert size to number
        price: parseFloat(price.value), // Convert price to float number
        image: image.value,
    };
    console.log('submitted');

        const response = await fetch(url+'/perfumes', {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addProduct),
        });
        console.log(response.status);

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.log(error);
    }
});

// delete product function
const deleteFunction = async(id)=>{
    console.log(id);
    try {
        const response = await fetch(url+`/perfumes/${id}`, {
            method: "DELETE", // or 'PUT'
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