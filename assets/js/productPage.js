import { getSpecificPerfume } from "./getterAndSetter.js";

document.addEventListener('DOMContentLoaded', function () {
    const perfume = getSpecificPerfume();

    const Brand = document.getElementById("perfumeBrand");
    const Name = document.getElementById("perfumeName");
    const Size = document.getElementById("perfumeSize");
    const Rate = document.getElementById("perfumeRate");
    const Price = document.getElementById("perfumePrice");
    const Reviews = document.getElementById("perfumeReviews");

    Brand.textContent = perfume.brand;
    Name.textContent = perfume.name;
    Size.textContent = perfume.size;
    Rate.textContent = perfume.rate;
    Price.textContent = perfume.price;
    Reviews.textContent = perfume.reviews;


});
