const projectsData = {
    'aerox-ai': {
        title: 'Aerox AI',
        category: 'AI Agent',
        description: `
            <p>Aerox AI is an intelligent, autonomous agent designed to automate complex workflows and provide smart assistance across various business verticals. It leverages modern LLM architectures to understand context, make decisions, and execute multi-step tasks seamlessly.</p>
            <p>The core objective of this project was to build a system that is not only highly capable but also user-friendly, abstracting away the complexities of AI orchestration behind a clean, minimal interface.</p>
        `,
        features: [
            'Autonomous task execution and orchestration',
            'Context-aware conversational interface',
            'Seamless API integrations for third-party services',
            'Real-time data processing and analytics'
        ],
        techStack: ['Python', 'Node.js', 'React', 'LangChain', 'OpenAI API'],
        liveLink: null,
        githubLink: 'https://github.com/vishaldeveloper224/aerox-ai.git',
        imageUrls: ['assets/aerox imaje 1.png', 'assets/aerox imaje 2.png', 'assets/aerox imaje 3.png', 'assets/aerox imaje 4.png'],
        imageSvg: '<circle cx="200" cy="125" r="50" fill="var(--accent)" opacity="0.1"/>'
    },
    'indora-pay': {
        title: 'Indora Pay',
        category: 'FinTech Website',
        description: `
            <p>Indora Pay is a robust and secure payment solution platform tailored for modern businesses. It provides a seamless checkout experience, powerful merchant tools, and comprehensive financial reporting.</p>
            <p>Security and performance were the top priorities for this platform. The architecture ensures high availability and compliance with global financial data standards, all wrapped in a premium, trustworthy user interface.</p>
        `,
        features: [
            'End-to-end encrypted payment processing',
            'Real-time merchant dashboard and analytics',
            'Multi-currency and global payment support',
            'Developer-friendly REST API for custom integrations'
        ],
        techStack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe API'],
        liveLink: 'https://indorapay.com',
        githubLink: null,
        imageUrls: ['assets/indora 1.png', 'assets/indora 2.png', 'assets/indora 3.png', 'assets/indora 4.png', 'assets/indora 5.png', 'assets/indora 6.png', 'assets/indora 7.png', 'assets/indora 8.png'],
        imageSvg: '<polygon points="200,60 260,160 140,160" fill="var(--accent)" opacity="0.1"/>'
    },
    'digital-marketplace': {
        title: 'Digital Marketplace',
        category: 'E-Commerce Platform',
        description: `
            <p>A comprehensive web platform dedicated to buying and selling digital assets seamlessly. The marketplace connects creators with buyers in a frictionless environment, featuring instant delivery, secure file hosting, and transparent transaction histories.</p>
            <p>The UI is designed to be highly visual, putting the creator's assets front and center while maintaining a clean, distraction-free browsing experience.</p>
        `,
        features: [
            'Instant digital product delivery system',
            'Creator dashboards for sales tracking',
            'Secure and scalable file hosting',
            'Advanced search and filtering capabilities'
        ],
        techStack: ['Vue.js', 'Express', 'MongoDB', 'AWS S3', 'TailwindCSS'],
        liveLink: null,
        githubLink: 'https://github.com/vishaldeveloper224/digital-marketplace.git',
        imageUrls: ['assets/digi 1.png', 'assets/digi 2.png', 'assets/digi 3.png', 'assets/digi 4.png', 'assets/digi 5.png', 'assets/digi 6.png'],
        imageSvg: '<rect x="150" y="75" width="100" height="100" rx="10" fill="var(--accent)" opacity="0.1"/>'
    },
    'show-plus': {
        title: 'Show Plus',
        category: 'Mobile Application',
        description: `
            <p>Show Plus is a rich entertainment and streaming application offering premium shows on the go. Designed for high performance on mobile devices, it provides a fluid, native-like experience for users to browse, stream, and download their favorite content.</p>
            <p>The app features dynamic content delivery, adaptive bitrate streaming, and personalized recommendations based on viewing habits.</p>
        `,
        features: [
            'High-definition adaptive video streaming',
            'Offline viewing and download management',
            'Personalized content recommendation engine',
            'Cross-device sync for watch history'
        ],
        techStack: ['React Native', 'Firebase', 'Node.js', 'GraphQL'],
        liveLink: 'https://play.google.com/store/apps/details?id=com.shortdrama.in&pcampaignid=web_share',
        githubLink: null,
        imageUrls: ['assets/show plus 1.png', 'assets/show plus 2.png']
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const container = document.getElementById('details-container');

    if (projectId && projectsData[projectId]) {
        const project = projectsData[projectId];
        
        let techTags = project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
        
        let linksHTML = '';
        if (project.liveLink) {
            linksHTML += `<a href="${project.liveLink}" target="_blank" class="btn btn-primary" style="margin-bottom:1rem;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Visit Live Project</a>`;
        }
        if (project.githubLink) {
            linksHTML += `<a href="${project.githubLink}" target="_blank" class="btn btn-secondary"><i class="fa-brands fa-github"></i> View Source Code</a>`;
        }

        let featuresHTML = project.features.map(f => `<li><i class="fa-solid fa-check"></i> <span>${f}</span></li>`).join('');

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
        } else {
            imagesHTML = '<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;"><rect width="100%" height="100%" fill="transparent"/>' + project.imageSvg + '<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="var(--text-primary)" font-family="sans-serif" font-weight="bold" font-size="24">' + project.title + '</text></svg>';
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
                    
                    <h3 style="margin-top: 3rem;">Key Features</h3>
                    <ul class="feature-list">
                        ${featuresHTML}
                    </ul>
                </div>
                
                <aside class="details-sidebar">
                    <div class="sidebar-block">
                        <h4>Technologies Used</h4>
                        <div class="tech-tags">
                            ${techTags}
                        </div>
                    </div>
                    
                    <div class="sidebar-block">
                        <h4>Project Links</h4>
                        <div class="sidebar-links">
                            ${linksHTML}
                        </div>
                    </div>
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
