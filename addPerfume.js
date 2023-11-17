const addPerfumeForm = document.getElementById("addPerfumeForm");
const name = document.getElementById("name");
const brand = document.getElementById("brand");
const size = document.getElementById("size");
const rate = document.getElementById("rate");
const reviews = document.getElementById("reviews");
const price = document.getElementById("price");
const image = document.getElementById("image");

const url = "https://6555dc0584b36e3a431e8028.mockapi.io";

addPerfumeForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
        const addProduct = {
            name: name.value,
            brand: brand.value,
            size:size.value,
            rate:rate.value,
            reviews:reviews.value,
            price: price.value,
            image:image.value,
        }
    console.log('submitted');
        const response = await fetch(url+'/perfumes', {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addPerfumeForm),
        });
        console.log(response.status);
        const result = await response.json();
        console.log(result);
        fetchedProducts()
    } catch (error) {
        console.log(error);
    }
})