// Step 1: Initialize the async function
async function fetchUserData() {
    // Step 2: Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Step 3: Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
        // Step 4: Fetch data using fetch and await
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Step 5: Clear any existing content (e.g., loading message)
        dataContainer.innerHTML = '';

        // Step 6: Create and populate a list
        const userList = document.createElement('ul');

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Step 7: Append the list to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        // Step 8: Handle errors by clearing and displaying a message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// Step 9: Invoke fetchUserData when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
