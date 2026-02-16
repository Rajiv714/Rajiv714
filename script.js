// Projects Data
const projects = [
    {
        icon: '🤖',
        title: 'Indian Tourism Assistant',
        description: 'Multilingual tourism chatbot helping users explore Indian cities with RAG pipeline and sentiment analysis for live city insights.',
        tech: ['RAG', 'NLP', 'Sentiment Analysis', 'Multilingual'],
        links: [
            { text: 'GitHub →', url: 'https://github.com/Rajiv714/IDP_Project.git' }
        ]
    },
    {
        icon: '💰',
        title: 'FinBot - Financial Literacy Assistant',
        description: 'Multilingual financial chatbot making complex financial topics accessible through API integration, LLMs, RAG, and multi-agent systems.',
        tech: ['LLM', 'RAG', 'Multi-Agent', 'API Integration'],
        links: [
            { text: 'GitHub →', url: 'https://github.com/Rajiv714/FinBot.git' }
        ]
    },
    {
        icon: '🎭',
        title: 'Deepfake Detection System',
        description: 'CNN-based deepfake detection system using EfficientNet and ResNet architectures, trained on 140,000 images to classify GAN-generated and real faces.',
        tech: ['CNN', 'EfficientNet', 'ResNet', 'Computer Vision'],
        links: [
            { text: 'Live Demo →', url: 'https://itzrj714-deep-learning.hf.space/' }
        ]
    },
    {
        icon: '📊',
        title: 'Weight & Bias Evolution Analysis',
        description: 'CIFAR-100 classification CNN tracking weight/bias evolution with spectral density analysis and interactive visualization dashboard.',
        tech: ['CNN', 'CIFAR-100', 'Data Visualization', 'Spectral Analysis'],
        links: [
            { text: 'Dashboard →', url: 'https://Visualizing-Weight-Bias-Evolution-and-ESD/' }
        ]
    },
    {
        icon: '✈️',
        title: 'Airline Fare Prediction',
        description: 'ML model predicting airline fares using Lasso, Ridge, XGBoost, KNN, and Decision Trees with comprehensive EDA and feature engineering.',
        tech: ['XGBoost', 'Lasso/Ridge', 'Feature Engineering', 'EDA'],
        links: [
            { text: 'Blog →', url: 'https://medium.com/airline-fare-prediction-using-machine-learning' }
        ]
    },
    {
        icon: '📱',
        title: 'Play Store Apps Analysis',
        description: 'Comprehensive data analysis of Play Store apps including missing value handling, outlier detection, and univariate/multivariate analysis.',
        tech: ['Data Analysis', 'Python', 'Visualization', 'EDA'],
        links: [
            { text: 'Blog →', url: 'https://medium.com/6cb2496b009e' }
        ]
    }
];

// Skills Data
const skills = [
    {
        category: 'AI & Machine Learning',
        items: ['Machine Learning', 'Deep Learning', 'NLP', 'Agentic AI', 'CNN', 'RNN', 'GAN', 'LangChain', 'LlamaIndex', 'RAG Systems']
    },
    {
        category: 'Programming & Frameworks',
        items: ['Python', 'PyTorch', 'TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Plotly']
    },
    {
        category: 'Data Engineering & Analytics',
        items: ['SQL', 'ETL Pipelines', 'Data Preprocessing', 'Feature Engineering', 'MS Excel', 'Power BI', 'Tableau', 'Web Scraping']
    },
    {
        category: 'Cloud & Databases',
        items: ['Microsoft Azure', 'AWS EC2', 'Milvus', 'Qdrant', 'Vector Databases']
    },
    {
        category: 'Finance',
        items: ['Accounting', 'Financial Analysis', 'Corporate Finance', 'Budgeting', 'Investment Management', 'Fintech']
    },
    {
        category: 'Design & Tools',
        items: ['Figma', 'Git', 'GitHub']
    }
];

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <div class="project-icon">${project.icon}</div>
                <h3>${project.title}</h3>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.links.map(link => `
                        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link">${link.text}</a>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Render Skills
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-category">
            <h3>${skill.category}</h3>
            <div class="skill-tags">
                ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Smooth Scrolling
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = document.querySelector('nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.experience-card, .project-card, .skill-category, .contact-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Active Navigation Highlight
function initActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Navbar Scroll Effect
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

// Back to Top Button
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (!menuToggle || !navMenu) return;

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// Logo Click to Home
function initLogoClick() {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Typing Effect for Hero Title (Optional Enhancement)
function initTypingEffect() {
    const text = document.querySelector('.gradient-text');
    if (!text) return;
    
    const originalText = text.textContent;
    text.textContent = '';
    let index = 0;

    function type() {
        if (index < originalText.length) {
            text.textContent += originalText.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    // Start typing after a short delay
    setTimeout(type, 500);
}

// Performance Optimization: Debounce Scroll Events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy Loading for Images (if you add images later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Stats Counter Animation
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                
                // Only animate if it's a number
                if (!isNaN(parseFloat(finalValue))) {
                    animateCounter(target, finalValue);
                    counterObserver.unobserve(target);
                }
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => counterObserver.observe(stat));
}

function animateCounter(element, finalValue) {
    const isDecimal = finalValue.includes('.');
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;

    const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = progress * parseFloat(finalValue);
        
        element.textContent = isDecimal 
            ? currentValue.toFixed(2) 
            : Math.floor(currentValue);

        if (frame === totalFrames) {
            clearInterval(counter);
            element.textContent = finalValue;
        }
    }, frameDuration);
}

// Particle Effect (Optional - for added visual flair)
function initParticles() {
    // This is a placeholder for a particle system
    // You can integrate libraries like particles.js if desired
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Render dynamic content
    renderProjects();
    renderSkills();

    // Initialize interactions
    initSmoothScroll();
    initScrollAnimations();
    initActiveNav();
    initNavbarScroll();
    initBackToTop();
    initMobileMenu();
    initLogoClick();
    initStatsCounter();
    initLazyLoading();

    // Optional: Uncomment if you want the typing effect
    // initTypingEffect();

    // Add loading class removal
    setTimeout(() => {
        document.body.classList.remove('loading');
    }, 100);

    // Log console message for developers
    console.log('%c👋 Hi there! Thanks for checking out my portfolio!', 'color: #00d9ff; font-size: 16px; font-weight: bold;');
    console.log('%c🚀 Built with HTML, CSS, and JavaScript', 'color: #7c3aed; font-size: 14px;');
    console.log('%c💼 Rajiv Jarhad - AI Engineer & Data Scientist', 'color: #ec4899; font-size: 14px;');
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Recalculate any responsive elements if needed
    }, 250);
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        if (menuToggle && navMenu) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        renderProjects,
        renderSkills,
        initSmoothScroll,
        initScrollAnimations
    };
}
