import { getUser, updateUser } from "./getterAndSetter.js";

const user = getUser();
console.log(user);
const username = document.getElementById('username');
const password = document.getElementById('password');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const phoneNumber = document.getElementById('phoneNumber');
const img = document.getElementById('profileImg');

// Set input values or placeholders
username.value = user.username || "";
password.value = user.password || "";
age.value = user.age || "";
gender.value = user.gender || "";
phoneNumber.value = user.phonenumber || "";
img.value = user.img || "";

const editProfileForm = document.getElementById('editProfileForm');

editProfileForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const userId = user.id;

    const payload = {
      
        username: username.value,
        password: password.value,
        age: age.value,
        gender: gender.value,
        phonenumber: phoneNumber.value,
        img: img.value,
        pastOrders:[]
    };
    fetch(`https://6555db6984b36e3a431e7e7b.mockapi.io/users/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update profile');
            }
            return response.json();
        })
        .then(data => {
            updateUser(data);
            console.log(data);
            console.log(getUser());
            alert('Profile updated successfully!');
            // location.href = "dashboard.html";
        })
        .catch(error => {
            console.error('Profile update failed:', error.message);
            alert('Profile update failed. Please try again.');
        });
});

document.addEventListener("DOMContentLoaded", function() {
      
    document.querySelector("#linkFourthItem")&& document.querySelector("#linkFourthItem").addEventListener('click', function(event) {
      event.preventDefault();
      if(!(JSON.parse(localStorage.getItem('carts')))){
        alert("The cart is Empty");
      }
      else{
       location.href = "cart.html" ;
      }
    });
    
});
