document.addEventListener('DOMContentLoaded', async function () {
    const loginForm = document.querySelector('form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.querySelector('input[type="password"]');

    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === '' || password === '') {
            alert('Please enter both username and password.');
            return;
        }
        
        const payload = {
            username: username,
            password: password,
        };

        try {
            const response = await fetch("https://6555db6984b36e3a431e7e7b.mockapi.io/users");
            if (!response.ok) {
                throw new Error('Failed to fetch users.');
            }

            const data = await response.json();
            console.log(data);

            const match = data.find(user => user.username === username && user.password === password);

            if (match) {
                alert('Login successful!');
                window.location.href = "page2.html";
            } else {
                alert('Login failed. Please check your info.');
            }
        } catch (error) {
            console.error('Login failed:', error.message);
            alert('Login failed. Please try again later.');
        }
    });
});
