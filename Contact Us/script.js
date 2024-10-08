document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !message) {
        alert('All fields are required!');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    // Log the input data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display success message
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Optionally reset the form
    this.reset();
});
