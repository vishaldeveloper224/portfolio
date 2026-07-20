// Set dynamic current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// DOM Elements
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form-element');

// Sticky Navigation and Scroll Highlights
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    highlightNav();
});

// Mobile Menu Interactivity
mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    if(navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

// Close menu upon navigation execution
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
});

// Highlights navigation node coordinates during active client view positioning
function highlightNav() {
    let currentSection = '';
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// Skill animation trigger utilizing Intersection Observer
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.getAttribute('data-progress');
            skillObserver.unobserve(bar);
        }
    });
}, { threshold: 0.1 });

skillProgressBars.forEach(bar => skillObserver.observe(bar));

// Portfolio Engine categorization system
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'flex';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.style.opacity = '0';
                setTimeout(() => card.style.display = 'none', 300);
            }
        });
    });
});

// Basic validation and submission handlers for UI integrity
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Transmitting Message <i class="fa-solid fa-circle-notch fa-spin"></i>';
    
    // Mock backend latency
    setTimeout(() => {
        submitBtn.style.backgroundColor = '#10b981'; // Green accent
        submitBtn.innerHTML = 'Message Dispatched Successfully <i class="fa-solid fa-check"></i>';
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = 'var(--accent)';
            submitBtn.innerHTML = originalText;
        }, 3000);
    }, 1500);
});


// Projects Slider Logic
document.addEventListener('DOMContentLoaded', () => {
    const projectsSlider = document.getElementById('projects-slider');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    if(projectsSlider && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const cardWidth = projectsSlider.querySelector('.project-card').offsetWidth;
            projectsSlider.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' }); // 32px is the gap
        });
        nextBtn.addEventListener('click', () => {
            const cardWidth = projectsSlider.querySelector('.project-card').offsetWidth;
            projectsSlider.scrollBy({ left: (cardWidth + 32), behavior: 'smooth' });
        });
    }
});

// Scroll Reveal Animation
document.addEventListener('DOMContentLoaded', () => {
    function reveal() {
        var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add('active');
            }
        }
    }
    window.addEventListener('scroll', reveal);
    reveal(); // Trigger on load
});
