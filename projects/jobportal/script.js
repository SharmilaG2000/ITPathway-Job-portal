const sortBtns = document.querySelectorAll(".job-id > *");
const sorttiems = document.querySelectorAll(".jobs-container > *")

sortBtns.forEach((btn) =>{
    btn.addEventListener("click",()=>{
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

    const targetdata = btn.getAttribute("data-target")
    sorttiems.forEach((item) => {
        item.classList.add("delete");
        if(item.getAttribute("data-item")=== targetdata || targetdata === "all")
        {
            item.classList.remove("delete");
        }
    })
    })
})


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const jobListings = document.querySelectorAll('.jobs-container .jList');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();
        
        jobListings.forEach(function(listing) {
            const jobTitle = listing.querySelector('h3').textContent.toLowerCase();
            
            if (jobTitle.includes(searchTerm)) {
                listing.style.display = '';
            } else {
                listing.style.display = 'none';
            }
        });
    });
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const messageField = document.getElementById('message');
  
    let valid = true;
  
    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
  
    // Validate Name (only text should be allowed)
    if (nameField.value.trim() === '') {
        showError(nameField, 'Please enter your name.');
        valid = false;
    } else if (!/^[A-Za-z\s]+$/.test(nameField.value.trim())) {
        showError(nameField, 'Name can only contain letters.');
        valid = false;
    }
  
    // Validate Email (must be a valid email format)
    if (emailField.value.trim() === '') {
        showError(emailField, 'Please enter your email.');
        valid = false;
    } else if (!validateEmail(emailField.value.trim())) {
        showError(emailField, 'Please enter a valid email address.');
        valid = false;
    }
  
    // Validate Message (anything is allowed, but field cannot be empty)
    if (messageField.value.trim() === '') {
        showError(messageField, 'Please enter a message.');
        valid = false;
    }
  
    // Submit the form if everything is valid
    if (valid) {
        this.submit();
        this.reset();
    }
});
  
// Function to show error messages
function showError(inputField, message) {
    const error = document.createElement('div');
    error.classList.add('error-message');
    error.style.color = 'red';
    error.style.marginTop = '5px';
    error.textContent = message;
    inputField.parentNode.insertBefore(error, inputField.nextSibling);
}

// Email validation using a regular expression
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
