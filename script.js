// Projects Data
const projects = [
    { icon: "🤖", title: "Indian Tourism Assistant", description: "Multilingual RAG chatbot with live sentiment analysis for Indian cities.", tech: ["RAG", "LangChain", "Milvus", "NLP"] },
    { icon: "💰", title: "FinBot", description: "Multi-agent financial literacy assistant with RAG + external APIs.", tech: ["Multi-Agent", "CrewAI", "RAG", "LLM"] },
    { icon: "🎭", title: "Deepfake Detection", description: "CNN model (EfficientNet + ResNet) trained on 140k images.", tech: ["PyTorch", "Computer Vision", "Hugging Face"] },
    { icon: "📊", title: "Weight & Bias Evolution", description: "Interactive dashboard tracking neural network training dynamics.", tech: ["PyTorch", "Plotly", "Spectral Analysis"] },
    { icon: "✈️", title: "Airline Fare Predictor", description: "XGBoost model with full EDA and feature engineering.", tech: ["XGBoost", "Scikit-learn", "EDA"] },
    { icon: "📱", title: "Play Store Analysis", description: "Comprehensive EDA & visualization of Google Play Store apps.", tech: ["Pandas", "Seaborn", "Power BI"] }
];

// Skills Data
const skills = [
    { category: "AI & GenAI", items: ["LangChain", "LlamaIndex", "RAG", "Agentic AI", "CrewAI", "LLM Evaluation"] },
    { category: "ML / DL", items: ["PyTorch", "TensorFlow", "CNN", "EfficientNet", "Transformers"] },
    { category: "Data Engineering", items: ["SQL", "ETL", "Apache Airflow", "Milvus", "Qdrant"] },
    { category: "Languages & Tools", items: ["Python", "TypeScript", "Git", "Docker", "Azure", "AWS"] }
];

// Render functions (same as before but with new classes)
function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projects.map(p => `
        <div class="project-card">
            <div style="font-size:3rem;margin-bottom:1rem;">${p.icon}</div>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="tech-tags">
                ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skills.map(s => `
        <div class="skill-category">
            <h3>${s.category}</h3>
            <div class="skill-tags">
                ${s.items.map(i => `<span class="skill-tag">${i}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Experience data (you can add more later)
const experiences = [
    { role: "AI Intern", company: "Ipsator Analytics", period: "May 2025 – Present", desc: "Building Agentic AI chatbots & RAG systems" },
    { role: "GenAI Intern", company: "GreenH2Nxt", period: "Aug – Sep 2025", desc: "Multi-agent learning platform" },
    { role: "Data Engineering Intern", company: "TATA Trent Ltd", period: "May – Jul 2024", desc: "Enterprise Data Warehouse & ETL" }
];

function renderExperience() {
    const grid = document.getElementById('experienceGrid');
    grid.innerHTML = experiences.map(exp => `
        <div class="experience-card">
            <div class="exp-header">
                <h3>${exp.role}</h3>
                <span class="period">${exp.period}</span>
            </div>
            <p class="company">${exp.company}</p>
            <p>${exp.desc}</p>
        </div>
    `).join('');
}

// All initializations
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    renderExperience();

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
    });

    // Back to top
    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btt.style.opacity = window.scrollY > 600 ? '1' : '0';
    });
    btt.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

    console.log("%c🚀 RAJIV's Portfolio Loaded Successfully", "color:#6366f1;font-size:16px;font-weight:bold");
});
