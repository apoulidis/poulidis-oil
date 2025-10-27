// Language switching functionality
let currentLang = localStorage.getItem('language') || 'en';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const langSelect = document.getElementById('langSelect');
    
    // Set current language in select
    langSelect.value = currentLang;
    
    // Apply translations
    applyTranslations(currentLang);
    
    // Add event listener for language change
    langSelect.addEventListener('change', function() {
        currentLang = this.value;
        localStorage.setItem('language', currentLang);
        applyTranslations(currentLang);
    });
    
    // Add smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add active state to navigation links
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);
});

// Function to apply translations
function applyTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[lang];
        
        if (translation && translation[key]) {
            element.textContent = translation[key];
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Function to update active navigation link
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(currentSection)) {
            link.classList.add('active');
        }
    });
}

