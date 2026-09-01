document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const container = document.getElementById('details-container');

    // Load dynamic projects store
    const store = window.ProjectsStore;
    const project = store ? store.get(projectId) : null;

    if (projectId && project) {
        let techTags = '';
        if (project.techStack) {
            const stack = Array.isArray(project.techStack) ? project.techStack : project.techStack.split(',').map(t => t.trim());
            techTags = stack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        }
        
        let linksHTML = '';
        if (project.liveLink) {
            linksHTML += `<a href="${project.liveLink}" target="_blank" class="btn btn-primary" style="margin-bottom:1rem;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Project</a>`;
        }
        if (project.downloadLink) {
            linksHTML += `<a href="${project.downloadLink}" target="_blank" class="btn btn-primary" style="margin-bottom:1rem;"><i class="fa-solid fa-download"></i> Download App (.exe)</a>`;
        }
        if (project.githubLink) {
            linksHTML += `<a href="${project.githubLink}" target="_blank" class="btn btn-secondary"><i class="fa-brands fa-github"></i> View Source Code</a>`;
        }

        const features = Array.isArray(project.features) ? project.features : (project.features ? project.features.split('\n') : []);
        let featuresHTML = features.filter(f => f.trim() !== '').map(f => `<li><i class="fa-solid fa-check"></i> <span>${f}</span></li>`).join('');

        let imagesHTML = '';
        if (project.imageUrls && project.imageUrls.length > 0) {
            let slides = project.imageUrls.map((url, idx) => `
                <div class="details-slide" data-index="${idx}">
                    <img src="${url}" alt="${project.title} - Screenshot ${idx + 1}" onerror="this.src='assets/aerox imaje 1.png'">
                </div>
            `).join('');

            let dots = '';
            let thumbs = '';
            if (project.imageUrls.length > 1) {
                dots = `
                    <div class="details-slider-dots" id="details-dots">
                        ${project.imageUrls.map((_, idx) => `<button class="slider-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>`).join('')}
                    </div>
                `;
                thumbs = `
                    <div class="details-thumbs-wrapper" id="details-thumbs">
                        ${project.imageUrls.map((url, idx) => `
                            <button class="thumb-btn ${idx === 0 ? 'active' : ''}" data-index="${idx}" title="View image ${idx + 1}">
                                <img src="${url}" alt="Thumbnail ${idx + 1}">
                            </button>
                        `).join('')}
                    </div>
                `;
            }

            imagesHTML = `
                <div class="details-slider-wrapper">
                    ${project.imageUrls.length > 1 ? `
                        <button class="details-slider-arrow prev-arrow" id="details-prev" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
                        <button class="details-slider-arrow next-arrow" id="details-next" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
                        <div class="details-slider-counter"><span id="slide-current">1</span> / ${project.imageUrls.length}</div>
                    ` : ''}
                    <div class="details-slider" id="details-slider">
                        ${slides}
                    </div>
                    ${dots}
                </div>
                ${thumbs}
            `;
        } else if (project.imageSvg) {
            imagesHTML = `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;"><rect width="100%" height="100%" fill="transparent"/>${project.imageSvg}<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="var(--text-primary)" font-family="sans-serif" font-weight="bold" font-size="24">${project.title}</text></svg>`;
        } else {
            imagesHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;background:var(--bg-secondary);color:var(--text-secondary);"><i class="fa-solid fa-image" style="font-size:3rem;"></i></div>`;
        }

        let statusBadgeHTML = '';
        if (project.status) {
            statusBadgeHTML = `
                <span class="project-status-badge status-${project.status.type}" style="position:static; margin-left:0.5rem; display:inline-flex;">
                    <i class="${project.status.icon || 'fa-solid fa-circle-notch'}"></i>
                    <span>${project.status.text}</span>
                </span>
            `;
        }

        container.innerHTML = `
            <div class="back-nav">
                <a href="index.html#projects" class="back-btn"><i class="fa-solid fa-arrow-left"></i> Back to Projects</a>
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <span class="details-category">${project.category}</span>
                    ${statusBadgeHTML}
                </div>
            </div>
            <div class="details-header">
                <h1 class="details-title">${project.title}</h1>
            </div>
            
            <div class="details-image-section">
                ${imagesHTML}
            </div>
            
            <div class="details-content-grid">
                <div class="details-content">
                    <h3>Project Overview</h3>
                    ${project.description}
                    
                    ${featuresHTML ? `<h3 style="margin-top: 3rem;">Key Features</h3>
                    <ul class="feature-list">
                        ${featuresHTML}
                    </ul>` : ''}
                </div>
                
                <aside class="details-sidebar">
                    ${techTags ? `<div class="sidebar-block">
                        <h4>Technologies Used</h4>
                        <div class="tech-tags">
                            ${techTags}
                        </div>
                    </div>` : ''}
                    
                    ${linksHTML ? `<div class="sidebar-block">
                        <h4>Project Links</h4>
                        <div class="sidebar-links">
                            ${linksHTML}
                        </div>
                    </div>` : ''}
                </aside>
            </div>
        `;

        // Details Slider & Navigation Logic
        if (project.imageUrls && project.imageUrls.length > 1) {
            const slider = document.getElementById('details-slider');
            const prevBtn = document.getElementById('details-prev');
            const nextBtn = document.getElementById('details-next');
            const counter = document.getElementById('slide-current');
            const dots = document.querySelectorAll('.slider-dot');
            const thumbs = document.querySelectorAll('.thumb-btn');

            let currentIndex = 0;
            const total = project.imageUrls.length;

            function goToSlide(index) {
                if (index < 0) index = 0;
                if (index >= total) index = total - 1;
                currentIndex = index;

                const targetSlide = slider.querySelectorAll('.details-slide')[currentIndex];
                if (targetSlide) {
                    slider.scrollTo({
                        left: targetSlide.offsetLeft,
                        behavior: 'smooth'
                    });
                }

                if (counter) counter.textContent = currentIndex + 1;
                dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
                thumbs.forEach((t, i) => {
                    const isActive = i === currentIndex;
                    t.classList.toggle('active', isActive);
                    if (isActive) {
                        t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                    }
                });
            }

            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    goToSlide(currentIndex === 0 ? total - 1 : currentIndex - 1);
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    goToSlide(currentIndex === total - 1 ? 0 : currentIndex + 1);
                });
            }

            dots.forEach(dot => {
                dot.addEventListener('click', (e) => {
                    e.preventDefault();
                    const idx = parseInt(dot.getAttribute('data-index'), 10);
                    goToSlide(idx);
                });
            });

            thumbs.forEach(thumb => {
                thumb.addEventListener('click', (e) => {
                    e.preventDefault();
                    const idx = parseInt(thumb.getAttribute('data-index'), 10);
                    goToSlide(idx);
                });
            });

            // Keyboard navigation (Left / Right arrow keys)
            window.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    goToSlide(currentIndex === 0 ? total - 1 : currentIndex - 1);
                } else if (e.key === 'ArrowRight') {
                    goToSlide(currentIndex === total - 1 ? 0 : currentIndex + 1);
                }
            });

            // Sync index on manual scroll/drag or touch swipe
            let scrollTimer;
            slider.addEventListener('scroll', () => {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    const scrollLeft = slider.scrollLeft;
                    const slideWidth = slider.clientWidth;
                    if (slideWidth > 0) {
                        const newIdx = Math.round(scrollLeft / slideWidth);
                        if (newIdx !== currentIndex && newIdx >= 0 && newIdx < total) {
                            currentIndex = newIdx;
                            if (counter) counter.textContent = currentIndex + 1;
                            dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
                            thumbs.forEach((t, i) => {
                                const isActive = i === currentIndex;
                                t.classList.toggle('active', isActive);
                                if (isActive) {
                                    t.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                                }
                            });
                        }
                    }
                }, 60);
            }, { passive: true });

            // Mouse Drag to Slide support
            let isDown = false;
            let startX;
            let scrollLeftPos;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.style.cursor = 'grabbing';
                startX = e.pageX - slider.offsetLeft;
                scrollLeftPos = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.style.cursor = 'grab';
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.style.cursor = 'grab';
                const slideWidth = slider.clientWidth;
                const newIdx = Math.round(slider.scrollLeft / slideWidth);
                goToSlide(newIdx);
            });
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1.5;
                slider.scrollLeft = scrollLeftPos - walk;
            });
        }
    } else {
        container.innerHTML = `
            <div class="details-header" style="padding: 200px 0;">
                <h1 class="details-title">Project Not Found</h1>
                <p style="color: var(--text-secondary); margin-bottom: 2rem;">The project you are looking for does not exist or has been removed.</p>
                <a href="index.html#projects" class="btn btn-primary"><i class="fa-solid fa-arrow-left"></i> Return to Portfolio</a>
            </div>
        `;
    }
});
