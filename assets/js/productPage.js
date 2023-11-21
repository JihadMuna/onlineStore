import { getSpecificPerfume, updateSpecificPerfume ,getCart, updateCart} from "./getterAndSetter.js";

const addBtn = document.querySelector('#addToCart');
const carts = getCart();
console.log(addBtn);
document.addEventListener('DOMContentLoaded', function () {
    const perfume = getSpecificPerfume();
    const Brand = document.getElementById("perfumeBrand");
    const Name = document.getElementById("perfumeName");
    const Size = document.getElementById("perfumeSize");
    const Rate = document.getElementById("rate");
    const Price = document.getElementById("perfumePrice");
    const img = document.getElementById("perfumeImage");

    Brand.textContent = perfume.brand;
    Name.textContent = perfume.name;
    Size.textContent = `${perfume.size} ML`;
    Rate.textContent = perfume.rate;
    Price.textContent = `${perfume.price} $`;
    img.src = perfume.image;
    updateSpecificPerfume(perfume);
    addBtn.addEventListener("click", (e) => {
        e.preventDefault();        
        carts.push(perfume);
        updateCart(carts);
        location.href = "cart.html" ;
    });
});


