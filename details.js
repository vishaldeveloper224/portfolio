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
        liveLink: 'https://aeroxai.vercel.app/',
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
        liveLink: 'https://digimarket-blush.vercel.app/',
        githubLink: 'https://github.com/vishaldeveloper224/digital-marketplace.git',
        imageUrls: ['assets/digi 1.png', 'assets/digi 2.png', 'assets/digi 3.png', 'assets/digi 4.png', 'assets/digi 5.png', 'assets/digi 6.png'],
        imageSvg: '<rect x="150" y="75" width="100" height="100" rx="10" fill="var(--accent)" opacity="0.1"/>'
    },
    'aerox-studio': {
        title: 'Aerox Studio',
        category: 'Creative Agency Web Platform',
        description: `
            <p>Aerox Studio is a premium website and collaborative platform built for design-forward agencies. It presents projects using modern immersive layout grids and interactive showcases that captivate visitors.</p>
            <p>Built with performance and responsiveness in mind, the platform delivers smooth client-side transitions and fluid scroll effects that enrich the storytelling aspect of modern creative work.</p>
        `,
        features: [
            'Fluid animations and smooth scroll effects via GSAP',
            'Interactive case study showcases and immersive design grids',
            'Client feedback portal and proofing workflow system',
            'Responsive and lightning-fast asset loading pipeline'
        ],
        techStack: ['HTML5', 'SASS', 'GSAP', 'JavaScript (ES6+)', 'Figma'],
        liveLink: null,
        githubLink: null,
        downloadLink: 'https://drive.google.com/file/d/1ew8fVcML121bInTGHnoBCD6hnruGRnjk/view?usp=drive_link',
        imageUrls: [
            'assets/studio 1.png',
            'assets/studio 2.png'
        ]
    },
    'aeroshield-antivirus': {
        title: 'Aeroshield Antivirus',
        category: 'Cybersecurity Solution',
        description: `
            <p>Aeroshield Antivirus is a next-generation desktop utility designed to provide real-time protection against local and network threats. Utilizing lightweight heuristic scanning techniques, it safeguards the host system without impacting speed or performance.</p>
            <p>The user interface is designed for simplicity, allowing non-technical users to run comprehensive threat audits and view clear reports on their system health.</p>
        `,
        features: [
            'Real-time background system health monitoring',
            'Signature and heuristic malware analysis scanner',
            'Integrated secure sandbox for isolating untrusted apps',
            'Network traffic logging and secure firewall dashboard'
        ],
        techStack: ['Electron', 'Node.js', 'C++', 'Qt Core', 'Windows API'],
        liveLink: null,
        githubLink: null,
        downloadLink: 'https://drive.google.com/file/d/1LA8xuj3ZxRmfS57thweWNBbIgWKkgNps/view?usp=drive_link',
        imageUrls: [
            'assets/antivirus 1.png',
            'assets/antivirus 2.png',
            'assets/antivirus 3.png',
            'assets/antivirus 4.png',
            'assets/antivirus 5.png',
            'assets/antivirus 6.png',
            'assets/antivirus 7.png',
            'assets/antivirus 8.png'
        ]
    },
    'aerox-translator': {
        title: 'Aerox Translator',
        category: 'AI Translation Utility',
        description: `
            <p>Aerox Translator is a cross-platform application that leverages compact deep-learning translation models to perform speech and text translation. It runs efficiently on device, ensuring secure, offline translations wherever you go.</p>
            <p>With an emphasis on accessibility, the app offers instant audio-to-text feedback and real-time optical character recognition (OCR) for document scanning.</p>
        `,
        features: [
            'Localized offline translation for 50+ languages',
            'Low-latency speech recognition and text-to-speech output',
            'Camera and image OCR for translating physical text',
            'Interactive conversation mode for natural communication'
        ],
        techStack: ['React Native', 'Python', 'PyTorch', 'FastAPI', 'SQLite'],
        liveLink: 'https://aerox-translater.vercel.app/',
        githubLink: null,
        imageUrls: [
            'assets/translator 1.png',
            'assets/translator 2.png',
            'assets/translator 3.png'
        ]
    },
    'aerox-trade-ai': {
        title: 'Aerox Trade AI',
        category: 'AI Trading Platform',
        description: `
            <p>Aerox Trade AI is an intelligent algorithmic trading platform that analyzes live market feeds to perform automated trade execution. It utilizes machine learning models to forecast trends and evaluate risk indices.</p>
            <p>The system features a comprehensive dashboard with real-time charting widgets and backtesting modules to validate strategies on historical data before running live campaigns.</p>
        `,
        features: [
            'Real-time market data ingestion and charting dashboards',
            'Deep reinforcement learning trading algorithms',
            'Strategy backtester with comprehensive metrics logs',
            'Automated risk mitigation and stop-loss execution'
        ],
        techStack: ['React', 'Python', 'TensorFlow', 'FastAPI', 'Pandas', 'Docker'],
        liveLink: 'https://aerox-trade-ai.vercel.app/',
        githubLink: null,
        imageUrls: [
            'assets/trade ai 1.png',
            'assets/trade ai 2.png',
            'assets/trade ai 3.png'
        ]
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
        if (project.downloadLink) {
            linksHTML += `<a href="${project.downloadLink}" target="_blank" class="btn btn-primary" style="margin-bottom:1rem;"><i class="fa-solid fa-download"></i> Download App (.exe)</a>`;
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
