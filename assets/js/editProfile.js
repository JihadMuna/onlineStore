

document.addEventListener('DOMContentLoaded', function () {
    const editProfileForm = document.getElementById('editProfileForm');
    const updateButton = document.getElementById('login');
    const data = getUserInfo();
    editProfileForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const age = parseInt(document.getElementById('age').value);
        const gender = document.getElementById('gender').value;
        const phoneNumber = document.getElementById('phoneNumber').value;

        const userId = 1;
       
        const payload = {  ...data,
            username: username,
            password: password,
            age: age,
            gender: gender,
            phoneNumber: phoneNumber,
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
                console.log(data);
                alert('Profile updated successfully!');
            })
            .catch(error => {
                console.error('Profile update failed:', error.message);
                alert('Profile update failed. Please try again.');
            });
    });
});

async function getUserInfo(){
    try {
        const response = await fetch("https://6555db6984b36e3a431e7e7b.mockapi.io/users/1");
        if (!response.ok) {
            throw new Error('Failed to fetch users.');
        }

       const data = await response.json();
      
return data;
    } catch (error) {
        console.error('Login failed:', error.message);
    }
} 
