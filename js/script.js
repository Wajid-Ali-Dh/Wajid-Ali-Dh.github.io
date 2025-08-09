// Smooth scroll for navigation
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash) {
            e.preventDefault();
            document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Sticky header is handled by CSS
// Light/Dark mode toggle
const modeToggle = document.getElementById('mode-toggle');
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    modeToggle.innerHTML = theme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
};
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
modeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'light' ? 'dark' : 'light');
});
// Project search filter
const projectSearch = document.getElementById('project-search');
if (projectSearch) {
    projectSearch.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        document.querySelectorAll('.project-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
        });
    });
}
// Publication search filter
const publicationSearch = document.getElementById('publication-search');
if (publicationSearch) {
    publicationSearch.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        document.querySelectorAll('.publication-item').forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? '' : 'none';
        });
    });
}
// Contact form submission (EmailJS example)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formStatus = document.getElementById('form-status');
        formStatus.textContent = 'Sending...';
        // Replace with your EmailJS integration
        // Example using EmailJS (https://www.emailjs.com/)
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        //     .then(() => {
        //         formStatus.textContent = 'Message sent successfully!';
        //         contactForm.reset();
        //     }, () => {
        //         formStatus.textContent = 'Failed to send message. Please try again.';
        //     });
        setTimeout(() => {
            formStatus.textContent = 'Demo: Message sent! (Replace with EmailJS integration)';
            contactForm.reset();
        }, 1200);
    });
}
