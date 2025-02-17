// Smooth scrolling for navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Example: Add an alert when clicking the Contact section
document.querySelector('#contact').addEventListener('click', () => {
    alert('Feel free to connect via LinkedIn or Email!');
});
