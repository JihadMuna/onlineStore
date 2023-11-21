

export function createCards(isCart , arr  , index ,isAdmin){
    const list = document.querySelector("#list");
    const cardSec = document.createElement("section");
    const middleSec = document.createElement("section");
    const aboveSec = document.createElement("section");
    const logo =  document.createElement("img");
    const perfumeName = document.createElement("h1");
    const brandName = document.createElement("h4");
    const price = document.createElement("h4");
  //  const perfumeSize = document.createElement("h4");
    const numPerfume = document.createElement("section");
    numPerfume.className = "perfumes-control";

   
    const decreaseButton = document.createElement("button");
    decreaseButton.className = "decrease-button";
    decreaseButton.textContent = "-";
    decreaseButton.type = "button";
    decreaseButton.id= index;

  
    const numPerfumeInput = document.createElement("input");
    numPerfumeInput.className = "perfumes-input";
    numPerfumeInput.type = "number";
    numPerfumeInput.min = 1;
    numPerfumeInput.max = 10;
    numPerfumeInput.value = 1;
    arr.NumPerfumes = 1;
    numPerfumeInput.style.textAlign = 'center';

    const increaseButton = document.createElement("button");
    increaseButton.className = "increase-button";
    increaseButton.textContent = "+";
    increaseButton.type = "button";
    increaseButton.id= index;
  
    const downSec = document.createElement("section");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    const addToCartButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    //================================================
    cardSec.className = "card";
    cardSec.id = `card${index}`;
    aboveSec.className = "logoPic";
    logo.id= "logo";
    logo.src = arr.image;
    logo.alt = "perfume pic";
    
    middleSec.className = "perfume-details";
    middleSec.id = `card${index}`;

    perfumeName.className = "perfumeName";
    perfumeName.id = index;
    perfumeName.textContent = arr.name;
    
    brandName.classList = "brandName";
    brandName.textContent = arr.brand;


   
    price.textContent = `${arr.price}$`;
    price.id= "price";

    
    downSec.className = "button-sec";
    deleteButton.className = "deleteButton";
    deleteButton.id = arr.id;
    deleteButton.textContent= "X";
    editButton.className = "editButton";
    editButton.textContent= "Edit";
    editButton.id = index;
    // deleteButton.className = "far fa-heart";
    cancelButton.textContent = "-";
    cancelButton.className = "cancelButton";
    cancelButton.id = index;
    
    addToCartButton.textContent = "Add To Cart";
    addToCartButton.id = index;
    addToCartButton.className = "addToCart";
    //================================================

    cardSec.style.height = "600px";
    cardSec.style.width = "320px";
    cardSec.style.padding = "20px 10px";
    cardSec.style.display = "flex";
    cardSec.style.justifyContent = "space-between";
    // cardSec.style.alignItems = "center";
    cardSec.style.backgroundColor = "#fff";
    cardSec.style.borderRadius = "12px";
    cardSec.style.marginBottom = "20px";
    cardSec.style.flexDirection = "column";
    aboveSec.style.width = "160px";


    logo.style.width = "300px";
    logo.style.height = "300px";
    logo.style.borderRadius = "6px";

    // perfumeName.style.width = "600px";
    perfumeName.style.height = "32px";
    perfumeName.style.fontSize = "32px";
    perfumeName.style.marginBottom = "16px";
    perfumeName.style.position ="relative";
    perfumeName.style.fontWeight = '600';


    numPerfume.style.display = "flex";
    numPerfume.style.alignItems ="center";
    numPerfume.style.justifyContent = "center";
    numPerfume.style.marginBottom = '20px';
    numPerfume.style.width = "300px";
    decreaseButton.style.width = "30px";
    decreaseButton.style.height = "30px";
    decreaseButton.style.backgroundColor = "#FF8682";
    decreaseButton.style.color = "#fff";
    decreaseButton.style.border = "none";
    decreaseButton.style.borderRadius = "50%";
    decreaseButton.style.fontSize = "20px";
    decreaseButton.style.cursor = "pointer";

    numPerfumeInput.style.width = "50px";
    numPerfumeInput.style.height = "30px";
    numPerfumeInput.style.textAlign = "center";
    numPerfumeInput.style.fontSize = "16px";
    numPerfumeInput.style.border = "1px solid #FF8682";
    numPerfumeInput.style.borderRadius = "5px";
    numPerfumeInput.style.margin = "0 10px";

    increaseButton.style.width = "30px";
    increaseButton.style.height = "30px";
    increaseButton.style.backgroundColor = "#FF8682";
    increaseButton.style.color = "#fff";
    increaseButton.style.border = "none";
    increaseButton.style.borderRadius = "50%";
    increaseButton.style.fontSize = "20px";
    increaseButton.style.cursor = "pointer";

    downSec.style.marginTop = "20px";

    deleteButton.style.width = "48px";
    deleteButton.style.height = "48px";
    deleteButton.style.marginRight = "16px";
    deleteButton.style.padding = "4px 4px";
    deleteButton.style.borderRadius = "4px";
    deleteButton.style.color = "#rgb(24 25 36)";
    deleteButton.style.fontSize = '16px';
    deleteButton.style.fontWeight = '600';
   
    cancelButton.textContent = "-";
    cancelButton.className = "cancelButton";
    cancelButton.id = index;

    addToCartButton.style.width = "300px";
    addToCartButton.style.height = "48px";
    addToCartButton.style.border = "1px solid rgb(24 25 36)";
    addToCartButton.style.backgroundColor = "rgb(24 25 36)";
    addToCartButton.style.color = "#fafbfc";
    addToCartButton.style.fontSize = "14px";
    addToCartButton.style.padding = "4px 4px";
    addToCartButton.style.borderRadius = "4px";
    addToCartButton.style.fontWeight = "600";

    editButton.style.width = "230px";
    editButton.style.height = "48px";
    editButton.style.border = "1px solid rgb(24 25 36)";
    editButton.style.backgroundColor = "rgb(24 25 36)";
    editButton.style.color = "#fafbfc";
    editButton.style.fontSize = "14px";
    editButton.style.padding = "4px 4px";
    editButton.style.borderRadius = "4px";
    editButton.style.fontWeight = "600";

    cancelButton.style.width = "300px";
    cancelButton.style.height = "48px";
    cancelButton.style.backgroundColor = "#FF8682";
    cancelButton.style.color= "white";
    cancelButton.style.fontSize = "40px";
    cancelButton.style.borderRadius = "4px";
    cancelButton.style.fontWeight = "600";
    cancelButton.style.border = "1px solid #FF8682";
    middleSec.style.display = "flex";
    middleSec.style.flexDirection = "column";
    middleSec.style.height = '300px';
    middleSec.style.padding = '10px';
    middleSec.style.justifyContent = "space-between";
    middleSec.style.alignItems = "center";



    list.style.display = "flex";
    list.style.flexWrap = 'wrap';
    list.style.padding = '20px 50px';
    list.style.justifyContent = "space-around";
    list.style.position= "relative";

  
    //=======================================================
 
   
    numPerfume.appendChild(decreaseButton);
    numPerfume.appendChild(numPerfumeInput);
    numPerfume.appendChild(increaseButton);
    
    if(isAdmin){
       downSec.appendChild(deleteButton);
       downSec.appendChild(editButton);
    }
    else{
        if(!isCart){
            downSec.appendChild(addToCartButton);
        }
        else{
            downSec.appendChild(numPerfume);
            downSec.appendChild(cancelButton); 
        }
    }
   

    aboveSec.appendChild(logo);
    middleSec.appendChild(perfumeName);
    middleSec.appendChild(brandName);
    middleSec.appendChild(price);

    cardSec.appendChild(aboveSec);
    cardSec.appendChild(middleSec);
    cardSec.appendChild(downSec);
    document.querySelector("#list").appendChild(cardSec);
}




