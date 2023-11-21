import { getUser, updateUser } from "./getterAndSetter.js";

const user = getUser();
console.log(user);
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
    logo.src ="./assets/images/logo-02.png";
    logo.alt = "logo img";
    logo.style.width = "150px";
    logo.style.height = "50px";


    const firstItem = document.createElement("section");
    firstItem.id = "firstItem";
    firstItem.style.height = "24px";
    firstItem.style.width ="107px";
    firstItem.style.marginRight="32px";
   
    const linkFirstItem = document.createElement("a");
    linkFirstItem.href = "dashboard.html";
    linkFirstItem.style.textDecoration = "none";
    linkFirstItem.style.color = "#FAFBFC";
    const flightIcon = document.createElement("i");
    flightIcon.className = "fas fa-search";
    flightIcon.style.fontSize= "24px";
    flightIcon.style.marginRight = "4px";
   
    
    const findFlightSpan = document.createElement("span");
    findFlightSpan.textContent= "Find Perfume";
    findFlightSpan.style.fontSize = "14px";
    findFlightSpan.style.fontWeight = "500";
    
    const linkFourthItem = document.createElement("a");
    linkFourthItem.href = "cart.html";
    linkFourthItem.style.textDecoration = "none";
    linkFourthItem.style.color = "#FAFBFC";
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
    linkSecondItem.href = "displayOrders.html";
    linkSecondItem.style.textDecoration = "none";
    linkSecondItem.style.color = "#FAFBFC";
    linkSecondItem.id = "linkSecondItem";

    const secondItem = document.createElement("section");
    secondItem.id = "secondItem";
    secondItem.style.width="130px";
    secondItem.style.height = "24px";
    secondItem.style.borderRight = "5px solid #FAFBFC";
    secondItem.style.marginRight = "32px";

    const favIcon = document.createElement("i");
    favIcon.className = "fa fa-history";
    favIcon.style.fontSize= "24px";
    favIcon.style.marginRight = "7px";

    const favoriteSpan = document.createElement("span");
    favoriteSpan.textContent = "Order History";
    favoriteSpan.style.fontSize = "14px";
    favoriteSpan.style.fontWeight = "500";
    
    //==================================
    const dropdownContainer = document.createElement("section");
    dropdownContainer.id = "dropdownContainer";
    
    const selectDropdown = document.createElement("section");
    selectDropdown.id = "userDropdown";
    selectDropdown.style.display = "none"; // Hide initially
    
    const thirdItem = document.createElement("section");
    thirdItem.id = "thirdItem";
    
    const profileImg = document.createElement("img");
    profileImg.src = user.img;
    profileImg.style.width = "45px";
    profileImg.style.height = "45px";
    profileImg.style.borderRadius = "25px";
    profileImg.style.marginRight = "10px";
    
    const userName = document.createElement("span");
    userName.textContent = user.username;
    userName.style.fontSize = "14px";
    userName.style.fontWeight = "550";
    userName.style.color = "#fff";
   
    const dropdownStyles = {
        display: "none",
        position: "absolute",
        backgroundColor: "#f1f1f1",
        minWidth: "160px",
        boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
        zIndex: 1,
    };
    

    selectDropdown.style.display = dropdownStyles.display;
    selectDropdown.style.position = dropdownStyles.position;
    selectDropdown.style.backgroundColor = dropdownStyles.backgroundColor;
    selectDropdown.style.minWidth = dropdownStyles.minWidth;
    selectDropdown.style.boxShadow = dropdownStyles.boxShadow;
    selectDropdown.style.zIndex = dropdownStyles.zIndex;
    const linkStyles = `
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    `;
  
    const option = document.createElement("option");
    const link = document.createElement("a");
    link.href = "editProfile.html";
    option.textContent = "Edit Profile";
    option.className ="option";
    option.style.cssText = linkStyles;
    
    selectDropdown.appendChild(option);

    option.addEventListener('click' , (e) =>{
        e.preventDefault();
        location.href = "editProfile.html";
    })
 
    const option2 = document.createElement("option");
    const link2 = document.createElement("a");
    link2.href = "#";
    option2.className ="option";
    option2.textContent = "Logout" ;
    option2.style.cssText = linkStyles;
    selectDropdown.appendChild(option2);

    option2.addEventListener('click' , (e) =>{
        e.preventDefault();
        localStorage.clear();
        location.href = "index.html";
    })
    
    const userDropdownOptions = document.querySelectorAll("#userDropdown option");
    


    thirdItem.appendChild(profileImg);
    thirdItem.appendChild(userName);
    
    dropdownContainer.addEventListener("mouseover", () => {
        userDropdown.style.display = "block";
    });
    
    dropdownContainer.addEventListener("mouseout", () => {
        userDropdown.style.display = "none";
    });
    
    // Add styles to userDropdown options on hover
    userDropdownOptions.forEach((option) => {
        option.addEventListener("mouseover", () => {
            option.style.backgroundColor = "#ddd";
        });
    
        option.addEventListener("mouseout", () => {
            option.style.backgroundColor = "initial";
        });
    });

    middleSec.addEventListener('click', (e)=>{
        e.preventDefault();
        location.href = 'dashboard.html';
    })

//==================================================================
  

    middleSec.appendChild(logo);

    if(!user.isAdmin){
        linkFirstItem.appendChild(flightIcon);
        linkFirstItem.appendChild(findFlightSpan);
    
        linkFourthItem.appendChild(cartCountSpan);
        linkFourthItem.appendChild(cartIcon);
        linkFourthItem.appendChild(cartSpan);
       
        firstItem.appendChild(linkFirstItem);
        forthItem.appendChild(linkFourthItem);
    }
  
    else{
        favoriteSpan.textContent = "Add Perfume";
        linkSecondItem.href = "addPerfume.html";
        favIcon.className = "fa fa-plus";
    }
    linkSecondItem.appendChild(favIcon);
    linkSecondItem.appendChild(favoriteSpan);

    secondItem.appendChild(linkSecondItem);
  
    thirdItem.appendChild(profileImg);
    thirdItem.appendChild(userName);

    dropdownContainer.appendChild(thirdItem);
    dropdownContainer.appendChild(selectDropdown);


    rightSec.appendChild(firstItem);
    rightSec.appendChild(forthItem);
    leftSec.appendChild(secondItem);
    leftSec.appendChild(dropdownContainer);

    header.appendChild(rightSec);
    header.appendChild(middleSec);
    header.appendChild(leftSec);
    
    document.querySelector("#mainHeader").appendChild(header);
}


createHeader();