document.addEventListener("DOMContentLoaded", function () {
    // List of demo products
    const products = [
        { name: "Product 1", link: "#product1" },
        { name: "Product 2", link: "#product2" },
        { name: "Product 3", link: "#product3" },
        { name: "Product 4", link: "#product4" },
        { name: "Product 5", link: "#product5" }
    ];

    // Get the dropdown menu container
    const productsMenu = document.getElementById("productsMenu");

    // Populate the dropdown menu with products
    products.forEach(product => {
        let listItem = document.createElement("li");
        let anchor = document.createElement("a");
        anchor.classList.add("dropdown-item");
        anchor.href = product.link;
        anchor.textContent = product.name;
        listItem.appendChild(anchor);
        productsMenu.appendChild(listItem);
    });

    // Enable Bootstrap dropdown functionality
    var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
    dropdownElementList.map(function (dropdownToggleEl) {
        new bootstrap.Dropdown(dropdownToggleEl);
    });
});

   // Add an event listener to the document to listen for clicks
   document.addEventListener('click', function(event) {
    // Get the navbarNav element (the collapsible part of the navbar)
    const navbarNav = document.getElementById('navbarNav');
    
    // Check if the clicked element is within the navbarNav
    if (navbarNav && !navbarNav.contains(event.target)) {
        // If not, and the navbar is collapsed (shown on smaller screens), hide it
        if (navbarNav.classList.contains('show')) {
            // This uses Bootstrap's JavaScript API to toggle the collapse
            bootstrap.Collapse.getInstance(navbarNav).hide();
        }
    }
});

//Contact Section js
const socialIcons = document.querySelectorAll('.social-icon img');

socialIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.style.transform = 'scale(1.2)'; // Zoom in on click
    });
});

function showAlert(type, message) {
    if (type === 'success') {
        alert(message);
    } else if (type === 'error') {
        alert('Error: ' + message);
    }
}