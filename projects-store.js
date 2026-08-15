const DEFAULT_PROJECTS = {
    'aerox-ai': {
        id: 'aerox-ai',
        title: 'Aerox AI',
        category: 'AI Agent',
        filter: 'ai',
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
        imageUrls: ['assets/aerox imaje 1.png'],
        imageSvg: '<circle cx="200" cy="125" r="50" fill="var(--accent)" opacity="0.1"/>'
    },
    'indora-pay': {
        id: 'indora-pay',
        title: 'Indora Pay',
        category: 'FinTech Website',
        filter: 'web',
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
        githubLink: '',
        imageUrls: ['assets/indora 1.png'],
        imageSvg: '<polygon points="200,60 260,160 140,160" fill="var(--accent)" opacity="0.1"/>'
    },
    'digital-marketplace': {
        id: 'digital-marketplace',
        title: 'Digital Marketplace',
        category: 'E-Commerce Platform',
        filter: 'web',
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
        imageUrls: ['assets/digi 1.png'],
        imageSvg: '<rect x="150" y="75" width="100" height="100" rx="10" fill="var(--accent)" opacity="0.1"/>'
    },
    'aerox-studio': {
        id: 'aerox-studio',
        title: 'Aerox Studio',
        category: 'Creative Agency Web Platform',
        filter: 'web',
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
        liveLink: '',
        githubLink: '',
        downloadLink: 'https://drive.google.com/file/d/1ew8fVcML121bInTGHnoBCD6hnruGRnjk/view?usp=drive_link',
        imageUrls: ['assets/studio 1.png']
    },
    'aeroshield-antivirus': {
        id: 'aeroshield-antivirus',
        title: 'Aeroshield Antivirus',
        category: 'Cybersecurity Solution',
        filter: 'app',
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
        liveLink: '',
        githubLink: '',
        downloadLink: 'https://drive.google.com/file/d/1LA8xuj3ZxRmfS57thweWNBbIgWKkgNps/view?usp=drive_link',
        imageUrls: ['assets/antivirus 1.png']
    },
    'aerox-translator': {
        id: 'aerox-translator',
        title: 'Aerox Translator',
        category: 'AI Translation Utility',
        filter: 'app',
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
        githubLink: '',
        imageUrls: ['assets/translator 1.png']
    },
    'aerox-trade-ai': {
        id: 'aerox-trade-ai',
        title: 'Aerox Trade AI',
        category: 'AI Trading Platform',
        filter: 'ai',
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
        githubLink: '',
        imageUrls: ['assets/trade ai 1.png']
    }
};

const STORAGE_KEY = 'portfolio_projects';

const ProjectsStore = {
    getAll: function() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (!stored) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
            return DEFAULT_PROJECTS;
        }
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error('Error parsing projects from localStorage, falling back to defaults.', e);
            return DEFAULT_PROJECTS;
        }
    },

    get: function(id) {
        const projects = this.getAll();
        return projects[id] || null;
    },

    save: function(project) {
        if (!project.id) {
            project.id = project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        }
        const projects = this.getAll();
        projects[project.id] = project;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
        return project.id;
    },

    deleteById: function(id) {
        const projects = this.getAll();
        if (projects[id]) {
            delete projects[id];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
            return true;
        }
        return false;
    },

    reset: function() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_PROJECTS));
        return DEFAULT_PROJECTS;
    },

    importConfig: function(jsonString) {
        try {
            const data = JSON.parse(jsonString);
            if (typeof data === 'object' && data !== null) {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
                return true;
            }
        } catch (e) {
            console.error('Failed to import config:', e);
        }
        return false;
    },

    getCredentials: function() {
        return {
            username: localStorage.getItem('portfolio_admin_username') || 'admin',
            password: localStorage.getItem('portfolio_admin_password') || 'adminpassword',
            botToken: localStorage.getItem('portfolio_telegram_bot_token') || '',
            chatId: localStorage.getItem('portfolio_telegram_chat_id') || ''
        };
    },

    saveCredentials: function(creds) {
        if (creds.username) localStorage.setItem('portfolio_admin_username', creds.username);
        if (creds.password) localStorage.setItem('portfolio_admin_password', creds.password);
        if (creds.botToken !== undefined) localStorage.setItem('portfolio_telegram_bot_token', creds.botToken);
        if (creds.chatId !== undefined) localStorage.setItem('portfolio_telegram_chat_id', creds.chatId);
        return true;
    }
};

window.ProjectsStore = ProjectsStore;
