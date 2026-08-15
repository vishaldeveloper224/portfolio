// Set dynamic current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// DOM Elements
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const filterBtns = document.querySelectorAll('.filter-btn');
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

// Dynamic Project Rendering and Filtering System
function renderProjects() {
    const projectsSlider = document.getElementById('projects-slider');
    if (!projectsSlider) return;

    const projectsObj = window.ProjectsStore ? window.ProjectsStore.getAll() : {};
    const projects = Object.values(projectsObj);

    if (projects.length === 0) {
        projectsSlider.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 1rem; display: block; color: var(--accent);"></i>
                <p>No projects found. Use the Admin Panel to add some!</p>
            </div>
        `;
        return;
    }

    projectsSlider.innerHTML = projects.map(project => {
        const tagHTML = `<span class="project-tag">${project.category || 'Project'}</span>`;
        const imgUrl = (project.imageUrls && project.imageUrls[0]) || 'assets/aerox imaje 1.png';
        const imgHTML = `<img src="${imgUrl}" alt="${project.title}">`;

        let overlayBtns = '';
        if (project.liveLink) {
            overlayBtns += `<a href="${project.liveLink}" target="_blank" class="project-overlay-btn"><i class="fa-solid fa-link"></i></a>`;
        } else if (project.downloadLink) {
            overlayBtns += `<a href="${project.downloadLink}" target="_blank" class="project-overlay-btn"><i class="fa-solid fa-download"></i></a>`;
        }
        if (project.githubLink) {
            overlayBtns += `<a href="${project.githubLink}" target="_blank" class="project-overlay-btn"><i class="fa-brands fa-github"></i></a>`;
        }

        let linksHTML = '';
        if (project.liveLink) {
            linksHTML += `<a href="${project.liveLink}" target="_blank" class="project-link"><i class="fa-solid fa-globe"></i> Live Demo</a>`;
        } else if (project.downloadLink) {
            linksHTML += `<a href="${project.downloadLink}" target="_blank" class="project-link"><i class="fa-solid fa-download"></i> Download</a>`;
        }
        if (project.githubLink) {
            linksHTML += `<a href="${project.githubLink}" target="_blank" class="project-link"><i class="fa-brands fa-github"></i> Codebase</a>`;
        }

        // Clean description HTML to extract plain short text
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = project.description || '';
        const plainText = tempDiv.textContent || tempDiv.innerText || '';
        const shortDesc = plainText.trim().substring(0, 110) + (plainText.trim().length > 110 ? '...' : '');

        return `
            <div class="project-card" data-category="${project.filter || 'web'}">
                <div class="project-img">
                    ${imgHTML}
                    <div class="project-overlay">
                        ${overlayBtns}
                    </div>
                </div>
                <div class="project-info">
                    <div class="project-tags">
                        ${tagHTML}
                    </div>
                    <h3>${project.title}</h3>
                    <p>${shortDesc}</p>
                    <div class="project-links">
                        ${linksHTML}
                        <a href="project-details.html?id=${project.id}" class="project-link"
                            style="color: var(--accent); font-weight: 700;">View Details <i
                                class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    initFilterLogic();
}

function initFilterLogic() {
    const cards = document.querySelectorAll('.project-card');
    const filterBtnsList = document.querySelectorAll('.filter-btn');
    
    filterBtnsList.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtnsList.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            cards.forEach(card => {
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
}

// Basic validation and submission handlers for UI integrity
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Transmitting Message <i class="fa-solid fa-circle-notch fa-spin"></i>';
    
    // Paste your Google Web App URL here
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzhcVHo7uEuO4igyTGSmcVP54eLFFU54RR2ZBzsBik2sCGXZ4RpyF7RR_bijmdMcYjg/exec';
    
    if (!scriptURL) {
        // Fallback mock success if URL is not yet configured
        setTimeout(() => {
            submitBtn.style.backgroundColor = '#10b981'; // Green accent
            submitBtn.innerHTML = 'Message Dispatched (Mock) <i class="fa-solid fa-check"></i>';
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.style.backgroundColor = '';
                submitBtn.innerHTML = originalText;
            }, 3000);
        }, 1200);
        return;
    }

    fetch(scriptURL, { 
        method: 'POST', 
        mode: 'no-cors',
        body: new FormData(contactForm)
    })
    .then(response => {
        submitBtn.style.backgroundColor = '#10b981'; // Green accent
        submitBtn.innerHTML = 'Message Dispatched Successfully <i class="fa-solid fa-check"></i>';
        contactForm.reset();
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
            submitBtn.innerHTML = originalText;
        }, 3000);
    })
    .catch(error => {
        console.error('Error!', error.message);
        submitBtn.style.backgroundColor = '#ef4444'; // Red error
        submitBtn.innerHTML = 'Failed to Send <i class="fa-solid fa-xmark"></i>';
        
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.style.backgroundColor = '';
            submitBtn.innerHTML = originalText;
        }, 3000);
    });
});

// Projects Slider Logic & Dynamic Load
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();

    const projectsSlider = document.getElementById('projects-slider');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    if(projectsSlider && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const firstCard = projectsSlider.querySelector('.project-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                projectsSlider.scrollBy({ left: -(cardWidth + 32), behavior: 'smooth' }); // 32px is the gap
            }
        });
        nextBtn.addEventListener('click', () => {
            const firstCard = projectsSlider.querySelector('.project-card');
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                projectsSlider.scrollBy({ left: (cardWidth + 32), behavior: 'smooth' });
            }
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

// Secret Admin Shortcut: Press Alt + Shift + A OR type "admin" sequentially to open Admin Panel
let typedKeys = '';
window.addEventListener('keydown', (e) => {
    // 1. Key Combination: Alt + Shift + A
    if (e.altKey && e.shiftKey && e.code === 'KeyA') {
        e.preventDefault();
        window.location.href = 'admin.html';
        return;
    }

    // 2. Typing sequence: "admin"
    if (e.key && e.key.length === 1) {
        typedKeys += e.key.toLowerCase();
        typedKeys = typedKeys.slice(-5); // Keep last 5 chars
        if (typedKeys === 'admin') {
            window.location.href = 'admin.html';
        }
    }
});
