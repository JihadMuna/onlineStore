
import { getUser , updateUser} from "./getterAndSetter.js"; 

const user = getUser();
console.log(user);
const username = document.getElementById('username');
const password = document.getElementById('password');
const age =document.getElementById('age');
const gender = document.getElementById('gender');
const phoneNumber = document.getElementById('phoneNumber');
const img = document.getElementById('profileImg');

username.placeholder = user.username;
age.placeholder = user.age;
gender.placeholder = user.gender;
phoneNumber.placeholder = user.phonenumber;
img.placeholder = user.img;

    const editProfileForm = document.getElementById('editProfileForm');
  
    editProfileForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const userId = user.id;
        
        const payload = {...user,
            username: username.value,
            password: password.value,
            age: age.value
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
                updateUser(updateUser);
                console.log(data);
                alert('Profile updated successfully!');
            })
            .catch(error => {
                console.error('Profile update failed:', error.message);
                alert('Profile update failed. Please try again.');
            });
     });



