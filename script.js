// Change Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.padding = '1rem 10%';
        nav.style.background = '#ffffff';
    } else {
        nav.style.padding = '1.5rem 10%';
    }
});

// Simple Form Handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // In a real app, you'd use fetch() to send data to a server
    alert('Thanks for reaching out! We will get back to you shortly.');
    this.reset();
});

// Reveal elements on scroll (Basic implementation)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.card').forEach((el) => observer.observe(el));
