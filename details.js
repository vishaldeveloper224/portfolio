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
            let slides = project.imageUrls.map(url => `<div class="details-slide"><img src="${url}" alt="${project.title}"></div>`).join('');
            imagesHTML = `
                <div class="details-slider-wrapper">
                    <button class="details-slider-arrow prev-arrow" id="details-prev"><i class="fa-solid fa-chevron-left"></i></button>
                    <button class="details-slider-arrow next-arrow" id="details-next"><i class="fa-solid fa-chevron-right"></i></button>
                    <div class="details-slider" id="details-slider">
                        ${slides}
                    </div>
                </div>
            `;
        } else if (project.imageSvg) {
            imagesHTML = `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;"><rect width="100%" height="100%" fill="transparent"/>${project.imageSvg}<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="var(--text-primary)" font-family="sans-serif" font-weight="bold" font-size="24">${project.title}</text></svg>`;
        } else {
            imagesHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;width:100%;background:var(--bg-secondary);color:var(--text-secondary);"><i class="fa-solid fa-image" style="font-size:3rem;"></i></div>`;
        }

        container.innerHTML = `
            <div class="back-nav">
                <a href="index.html#projects" class="back-btn"><i class="fa-solid fa-arrow-left"></i> Back to Projects</a>
                <span class="details-category">${project.category}</span>
            </div>
            <div class="details-header">
                <h1 class="details-title">${project.title}</h1>
            </div>
            
            <div class="details-image">
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

        // Details Slider Logic
        if (project.imageUrls && project.imageUrls.length > 1) {
            const slider = document.getElementById('details-slider');
            const prevBtn = document.getElementById('details-prev');
            const nextBtn = document.getElementById('details-next');

            if (slider && prevBtn && nextBtn) {
                prevBtn.addEventListener('click', () => {
                    slider.scrollBy({ left: -slider.clientWidth, behavior: 'smooth' });
                });
                nextBtn.addEventListener('click', () => {
                    slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
                });
            }
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
