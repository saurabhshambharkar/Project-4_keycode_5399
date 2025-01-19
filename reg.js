// script.js

// Profile Registration and Display Logic
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const bio = document.getElementById('bio').value;
    const hobbies = document.getElementById('hobbies').value;
    const code = document.getElementById('code').value;

    // Create a profile object
    const profile = {
        name,
        age,
        bio,
        hobbies,
        code
    };

    // Add the profile to the UI
    addProfileToUI(profile);

    // Reset the form
    document.getElementById('registrationForm').reset();
});

function addProfileToUI(profile) {
    const profileContainer = document.getElementById('profileContainer');

    // Create a new profile card
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile');

    profileCard.innerHTML = `
        <h3>${profile.name}</h3>
        <p><strong>Age:</strong> ${profile.age}</p>
        <p><strong>Bio:</strong> ${profile.bio}</p>
        <p><strong>Hobbies:</strong> ${profile.hobbies}</p>
        <p><strong>Code:</strong> ${profile.code}</p>
    `;

    profileContainer.appendChild(profileCard);
}
