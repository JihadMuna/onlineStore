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

        location.href = 'dashboard.html';


    } catch (error) {
        console.log(error);
    }
});
