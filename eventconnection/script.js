// Toggle the menu when the hamburger icon is clicked
// Toggle the menu and switch the hamburger icon to 'X'
document.getElementById('menu-bar').addEventListener('click', function() {
    const navbar = document.querySelector('.navbar');
    const menuBar = document.getElementById('menu-bar');

    // Toggle the 'active' class to show/hide the menu
    navbar.classList.toggle('active');

    // Toggle the hamburger icon to 'X' on menu open/close
    menuBar.classList.toggle('active');
});

