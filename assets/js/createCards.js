

export function createCards(isCart , arr  , index){
    const list = document.querySelector("#list");
    const cardSec = document.createElement("section");
    const rightSec = document.createElement("section");
    const upRightSec = document.createElement("section");
    const leftSec = document.createElement("section");
    const logo =  document.createElement("img");
    const firstLine = document.createElement("p");
    const feedBackSec = document.createElement("section");
    const rating = document.createElement("span");
    const review = document.createElement("span");
    const perfumeSize = document.createElement("span");
    const travelersControl = document.createElement("section");
    travelersControl.className = "travelers-control";

   
    const decreaseButton = document.createElement("button");
    decreaseButton.className = "decrease-button";
    decreaseButton.textContent = "-";
    decreaseButton.type = "button";
    decreaseButton.id=index;

  
    const travelersInput = document.createElement("input");
    travelersInput.className = "travelers-input";
    travelersInput.type = "number";
    travelersInput.min = 1;
    travelersInput.max = 10;
    travelersInput.value = 1;
   
    const increaseButton = document.createElement("button");
    increaseButton.className = "increase-button";
    increaseButton.textContent = "+";
    increaseButton.type = "button";
    increaseButton.id=index;
    const SecondLine = document.createElement("section");
    const checkBox = document.createElement("input");
    const time = document.createElement("span");
    const withStop = document.createElement("span");
    const duration = document.createElement("span");
    
    const downRightSec = document.createElement("section");
    const likeButton = document.createElement("button");
    const addToCartButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    //================================================
    cardSec.className = "card";
    cardSec.id = `card${index}`;
    leftSec.className = "logoPic";
    logo.id= "logo";
    logo.src = arr.image;
    logo.alt = "perfume airline logo";
    
    rightSec.className = "details";
    upRightSec.className = "flight-details";
    firstLine.className = "reviews-line";
    firstLine.id = index;
    rating.id = "rating";
    rating.textContent = arr.rate;
    review.textContent = " Very Good ";
    review.id= "review";
    perfumeSize.textContent = `${arr.size} ML`;
    
    SecondLine.className = "time-line";
    checkBox.type = "checkbox";
    checkBox.id ="check";
    time.textContent = arr.price;
    time.id = "time";
    withStop.textContent = "  non stop   ";
    withStop.id = "withStop";
    duration.textContent= arr.size;
    
    downRightSec.className = "button-sec";
    likeButton.id = "likeButton";
    likeButton.className = "far fa-heart";
    cancelButton.textContent = "-";
    cancelButton.className = "cancelButton";
    cancelButton.id = index;
    
    addToCartButton.textContent = "Add To Cart";
    addToCartButton.id = index;
    addToCartButton.className = "addToCart";
    //================================================

    cardSec.style.height = "250px";
    cardSec.style.width = "840px";
    cardSec.style.padding = "50px 10px";
    cardSec.style.display = "flex";
    cardSec.style.justifyContent = "center";
    cardSec.style.alignItems = "center";
    cardSec.style.backgroundColor = "rgba(255, 255, 255, 1)";
    cardSec.style.borderRadius = "12px";
    cardSec.style.marginBottom = "20px";

    leftSec.style.width = "160px";
    leftSec.style.marginRight = "25px";

    logo.style.width = "160px";
    logo.style.height = "110.81px";

    firstLine.style.width = "600px";
    firstLine.style.height = "32px";
    firstLine.style.fontSize = "12px";
    firstLine.style.marginBottom = "16px";
    firstLine.style.position ="relative";
    firstLine.style.display = "flex";
    firstLine.style.alignItems = "center";
    firstLine.style.justifyContent = "space-between";
    feedBackSec.style.width = "230px";
    rating.style.width = "40px";
    rating.style.height = "32px";
    rating.style.padding = "8px 8px";
    rating.style.border = "1px solid #8DD3BB";
    rating.style.borderRadius = "4px";
    rating.style.marginRight = "10px";
    rating.style.fontSize = "12px";
    rating.style.color = "#112211";
    rating.style.fontWeight = "600";

    travelersControl.style.display = "flex";
    travelersControl.style.width = "200px";
    decreaseButton.style.width = "30px";
    decreaseButton.style.height = "30px";
    decreaseButton.style.backgroundColor = "#FF8682";
    decreaseButton.style.color = "#fff";
    decreaseButton.style.border = "none";
    decreaseButton.style.borderRadius = "50%";
    decreaseButton.style.fontSize = "20px";
    decreaseButton.style.cursor = "pointer";

    travelersInput.style.width = "50px";
    travelersInput.style.height = "30px";
    travelersInput.style.textAlign = "center";
    travelersInput.style.fontSize = "16px";
    travelersInput.style.border = "1px solid #FF8682";
    travelersInput.style.borderRadius = "5px";
    travelersInput.style.margin = "0 10px";

    increaseButton.style.width = "30px";
    increaseButton.style.height = "30px";
    increaseButton.style.backgroundColor = "#FF8682";
    increaseButton.style.color = "#fff";
    increaseButton.style.border = "none";
    increaseButton.style.borderRadius = "50%";
    increaseButton.style.fontSize = "20px";
    increaseButton.style.cursor = "pointer";

    SecondLine.style.width = "600px";
    SecondLine.style.height = "41px";
    SecondLine.style.fontSize = "14px";
    SecondLine.style.color = "#112211";
    SecondLine.style.display = "inline-block";
    SecondLine.style.marginBottom = "8px";

    time.style.fontSize = "16px";
    time.style.marginRight = "12px";
    time.style.marginLeft = "5px";
    time.style.fontWeight = "500";

    withStop.style.marginRight = "12px";

    checkBox.type = "checkbox";

    downRightSec.style.marginTop = "20px";

    likeButton.style.width = "48px";
    likeButton.style.height = "48px";
    likeButton.style.marginRight = "16px";
    likeButton.style.border = "1px solid #8DD3BB";
    likeButton.style.padding = "4px 4px";
    likeButton.style.borderRadius = "4px";
    likeButton.style.color = "#4C4850";
   
    cancelButton.textContent = "-";
    cancelButton.className = "cancelButton";
    cancelButton.id = index;

    addToCartButton.style.width = "536px";
    addToCartButton.style.height = "48px";
    addToCartButton.style.border = "1px solid #8DD3BB";
    addToCartButton.style.backgroundColor = "#8DD3BB";
    addToCartButton.style.color = "#112211";
    addToCartButton.style.fontSize = "14px";
    addToCartButton.style.padding = "4px 4px";
    addToCartButton.style.borderRadius = "4px";
    addToCartButton.style.fontWeight = "600";

    cancelButton.style.width = "600px";
    cancelButton.style.height = "48px";
    cancelButton.style.backgroundColor = "#FF8682";
    cancelButton.style.color= "white";
    cancelButton.style.fontSize = "40px";
    cancelButton.style.borderRadius = "4px";
    cancelButton.style.fontWeight = "600";
    cancelButton.style.border = "1px solid #FF8682";
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.position= "relative";
    list.style.justifyContent = "center";
    list.style.alignItems = "center";
    list.style.width = "1440px";
    //=======================================================
 
   
    SecondLine.appendChild(checkBox);
    SecondLine.appendChild(time);
    SecondLine.appendChild(withStop);
    SecondLine.appendChild(duration);
    travelersControl.appendChild(decreaseButton);
    travelersControl.appendChild(travelersInput);
    travelersControl.appendChild(increaseButton);
    

    feedBackSec.appendChild(rating);
    feedBackSec.appendChild(review);
    feedBackSec.appendChild(perfumeSize);
    firstLine.appendChild(feedBackSec);
  
    

    // if(!isCart){
    //     downRightSec.appendChild(likeButton);
    //     downRightSec.appendChild(addToCartButton);
    // }
    // else{
        firstLine.appendChild(travelersControl);
        downRightSec.appendChild(cancelButton); 
    // }
    leftSec.appendChild(logo);
    upRightSec.appendChild(firstLine);
    upRightSec.appendChild(SecondLine);
    rightSec.appendChild(upRightSec);
    rightSec.appendChild(downRightSec);

    cardSec.appendChild(leftSec);
    cardSec.appendChild(rightSec);
    document.querySelector("#list").appendChild(cardSec);
}




