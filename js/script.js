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

// Media Modal/Lightbox functionality
const modal = document.getElementById('mediaModal');
const modalMedia = document.getElementById('modalMedia');
const modalClose = document.getElementById('modalClose');

// Function to open modal
function openModal(src, type) {
    modalMedia.innerHTML = '<div style="text-align: center; padding: 2rem; color: var(--text);">Loading...</div>';
    
    // Set appropriate ARIA label
    modal.setAttribute('aria-label', `Enlarged ${type} view`);
    
    // Small delay to show loading state
    setTimeout(() => {
        modalMedia.innerHTML = '';
        
        if (type === 'video') {
        const video = document.createElement('video');
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.height = 'auto';
        video.style.maxHeight = '90vh';
        video.style.borderRadius = '8px';
        
        const source = document.createElement('source');
        source.src = src;
        source.type = 'video/mp4';
        
        video.appendChild(source);
        modalMedia.appendChild(video);
    } else if (type === 'image') {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Enlarged view';
        img.style.width = '100%';
        img.style.height = 'auto';
        img.style.maxHeight = '90vh';
        img.style.objectFit = 'contain';
        
        modalMedia.appendChild(img);
    }
    }, 100);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
    modalMedia.innerHTML = '';
}

// Add click event listeners to media items
document.addEventListener('DOMContentLoaded', function() {
    const mediaItems = document.querySelectorAll('.media-item');
    
    mediaItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const src = this.getAttribute('data-src');
            const type = this.getAttribute('data-type');
            openModal(src, type);
        });
    });
    
    // Close modal when clicking close button
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Close modal when clicking overlay
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
