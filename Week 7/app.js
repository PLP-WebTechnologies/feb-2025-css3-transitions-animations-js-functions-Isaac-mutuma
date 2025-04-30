// Accessing the form and the message
const contactForm = document.getElementById('contactForm');
const message = document.getElementById('message');
const submitButton = document.getElementById('submitBtn');
const animatedBox = document.getElementById('animatedBox');
const toggleButton = document.getElementById('toggleButton');

// Event listener for form submission
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form from submitting

    // Get input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    // Store data in localStorage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('email', email);

    // Display confirmation message
    showMessage();

    // Clear the form
    contactForm.reset();
});

// Function to show the confirmation message with animation
function showMessage() {
    message.classList.remove('hidden');  // Make message visible
    message.classList.add('showMessage'); // Apply animation
}

// Event listener to toggle animation of the box
toggleButton.addEventListener('click', function () {
    // Trigger the animation by adding/removing the 'animate' class
    animatedBox.style.transform = animatedBox.style.transform === "rotate(360deg)" 
        ? "rotate(0deg)" 
        : "rotate(360deg)";
});

// Check if the data is in localStorage and display it
window.onload = function () {
    const storedName = localStorage.getItem('fullName');
    const storedEmail = localStorage.getItem('email');

    if (storedName && storedEmail) {
        alert(`Welcome back, ${storedName}! Your email is: ${storedEmail}`);
    }
};
