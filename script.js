// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Form Validation
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    
    if (!name.value.trim()) {
        name.nextElementSibling.textContent = 'Name is required';
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        email.nextElementSibling.textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        email.nextElementSibling.textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    if (!message.value.trim()) {
        message.nextElementSibling.textContent = 'Message is required';
        isValid = false;
    }
    
    if (isValid) {
        // Simulate form submission
        formStatus.textContent = 'Message sent successfully!';
        formStatus.className = 'form-status status-success';
        form.reset();
        
        setTimeout(() => {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
        }, 5000);
    } else {
        formStatus.textContent = 'Please fix the errors above.';
        formStatus.className = 'form-status status-error';
    }
});
