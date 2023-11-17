// import { getUser } from "./getterAndSetter.js";

// const user = getUser();

function createHeader(){
   
    const header = document.createElement("section");

    header.id = "header";
    const rightSec = document.createElement("section");
    rightSec.id = "rightSec";
    rightSec.style.height = "24px";
    rightSec.style.width ="242px";
    rightSec.style.display = "flex";
    rightSec.style.flexDirection="row";
    rightSec.style.alignItems="center";
    rightSec.style.justifyContent = "center";
    const leftSec = document.createElement("section");
    leftSec.id = "leftSec";
    leftSec.style.display = "flex";
    leftSec.style.flexDirection="row";
    leftSec.style.alignItems="center";
    leftSec.style.justifyContent = "center";
    leftSec.style.width = "242px";
    leftSec.style.height = "24px";
    const middleSec = document.createElement("section");
    middleSec.id = "middleSec";
    const logo =  document.createElement("img");
    logo.id = "LogoPic";
    logo.src ="./assets/img/logo.png";
    logo.alt = "logo img";
    logo.style.width = "110.36px";
    logo.style.height = "36px";


    const firstItem = document.createElement("section");
    firstItem.id = "firstItem";
    firstItem.style.height = "24px";
    firstItem.style.width ="107px";
    firstItem.style.marginRight="32px";
   
    const linkFirstItem = document.createElement("a");
    linkFirstItem.href = "dashboard.html";
    linkFirstItem.style.textDecoration = "none";
    linkFirstItem.style.color = "#112211";
    const flightIcon = document.createElement("i");
    flightIcon.className = "fa fa-plane";
    flightIcon.style.fontSize= "24px";
    flightIcon.style.marginRight = "4px";
   
    
    const findFlightSpan = document.createElement("span");
    findFlightSpan.textContent= "Find Flight";
    findFlightSpan.style.fontSize = "14px";
    findFlightSpan.style.fontWeight = "500";
    
    const linkFourthItem = document.createElement("a");
    linkFourthItem.href = "cart.html";
    linkFourthItem.style.textDecoration = "none";
    linkFourthItem.style.color = "#112211";
    linkFourthItem.id = "linkFourthItem";
    const forthItem = document.createElement("section");
    forthItem.id = "forthItem";
    forthItem.style.width="124px";
    forthItem.style.height = "24px";

    const cartIcon = document.createElement("i");
    cartIcon.className = "fas fa-shopping-cart";
    cartIcon.style.fontSize= "24px";
    cartIcon.style.marginRight = "4px";

    const cartSpan = document.createElement("span");
    cartSpan.textContent = "Cart";
    cartSpan.style.fontSize = "14px";
    cartSpan.style.fontWeight = "500";

 
    const cartCountSpan = document.createElement("span");
    cartCountSpan.id = "cartCount";
    cartCountSpan.style.backgroundColor = "red";
    cartCountSpan.style.color = "white";
    cartCountSpan.style.borderRadius = "50%";
    cartCountSpan.style.padding = "4px 5px";
    cartCountSpan.style.fontSize = "12px";
    cartCountSpan.style.position = "absolute";
    cartCountSpan.style.transform = "translate(50%, -50%)";
    cartCountSpan.style.display = "none"; 

    const linkSecondItem = document.createElement("a");
    linkSecondItem.href = "myFlights.html";
    linkSecondItem.style.textDecoration = "none";
    linkSecondItem.style.color = "#112211";
    linkSecondItem.id = "linkSecondItem";

    const secondItem = document.createElement("section");
    secondItem.id = "secondItem";
    secondItem.style.width="130px";
    secondItem.style.height = "24px";
    secondItem.style.borderRight = "5px solid #112211";
    secondItem.style.marginRight = "32px";

    const favIcon = document.createElement("i");
    favIcon.className = "fas fa-ticket-alt";
    favIcon.style.fontSize= "24px";
    favIcon.style.marginRight = "7px";

    const favoriteSpan = document.createElement("span");
    favoriteSpan.textContent = "My Tickets";
    favoriteSpan.style.fontSize = "14px";
    favoriteSpan.style.fontWeight = "500";


    const thirdItem = document.createElement("section");
    thirdItem.id = "thirdItem";
    const profileImg = document.createElement("img");
    // profileImg.src = user.profileImg;
    profileImg.src = "https://tse2.mm.bing.net/th?id=OIP.NqY3rNMnx2NXYo3KJfg43gHaHa&pid=Api&P=0&h=180";

    profileImg.style.width = "45px";
    profileImg.style.height = "45px";
    profileImg.style.borderRadius = "25px";
    profileImg.style.marginRight = "10px";


    const userName = document.createElement("span");
    // userName.textContent= user.name;
    userName.textContent= "john";
    userName.style.fontSize = "14px";
    userName.style.fontWeight = "550";

    middleSec.appendChild(logo);


    linkFirstItem.appendChild(flightIcon);
    linkFirstItem.appendChild(findFlightSpan);

    linkFourthItem.appendChild(cartCountSpan);
    linkFourthItem.appendChild(cartIcon);
    linkFourthItem.appendChild(cartSpan);
   
    firstItem.appendChild(linkFirstItem);
    forthItem.appendChild(linkFourthItem);
   
    linkSecondItem.appendChild(favIcon);
    linkSecondItem.appendChild(favoriteSpan);

    secondItem.appendChild(linkSecondItem);
  
    thirdItem.appendChild(profileImg);
    thirdItem.appendChild(userName);

    rightSec.appendChild(firstItem);
    rightSec.appendChild(forthItem);
    leftSec.appendChild(secondItem);
    leftSec.appendChild(thirdItem);

    header.appendChild(rightSec);
    header.appendChild(middleSec);
    header.appendChild(leftSec);
    
    document.querySelector("#mainHeader").appendChild(header);
}


createHeader();