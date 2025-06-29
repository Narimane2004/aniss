// Translations
const translations = {
    fr: {
        useApp: "Utiliser l'application",
        aboutMe: "À PROPOS",
        hello: "¡Salut!",
        description: "Je suis Anis Maouche, un designer de 23 ans qui aime créer des designs significatifs et visuellement engageants. Je suis un designer passionné et polyvalent avec plus de 5 ans d'expérience en design graphique, illustration et direction créative. Je me spécialise dans la création de visuels vibrants et engageants qui non seulement ont l'air bien mais racontent aussi des histoires et se connectent avec les gens. Mon travail couvre le branding, l'illustration numérique et le design de médias sociaux, toujours guidé par la créativité, la curiosité et le but.",
        contacts: "Contacts",
        education: "ÉDUCATION",
        bac: "Baccalauréat (génie civil)",
        licence1: "Licence 1 en sciences et technologie",
        licence2: "Licence 2 en télécommunications",
        softwareSkills: "COMPÉTENCES LOGICIELLES",
        softSkills: "COMPÉTENCES PERSONNELLES",
        teamwork: "Travail d'équipe",
        adaptability: "Adaptabilité",
        empathy: "Empathie",
        creativity: "Créativité"
    },
    en: {
        useApp: "Use application",
        aboutMe: "ABOUT ME",
        hello: "¡Hello!",
        description: "I'm Anis Maouche, a 23-year-old designer who loves creating meaningful and visually engaging designs. I'm a passionate and versatile designer with 5+ years of experience in graphic design, illustration, and creative direction. I specialize in creating vibrant, engaging visuals that not only look good but also tell stories and connect with people. My work spans branding, digital illustration, and social media design, always guided by creativity, curiosity, and purpose.",
        contacts: "Contacts",
        education: "EDUCATION",
        bac: "Baccalauréat (civil engineering)",
        licence1: "Licence 1 in sciences and technology",
        licence2: "Licence 2 in telecommunications",
        softwareSkills: "SOFTWARE SKILLS",
        softSkills: "SOFT SKILLS",
        teamwork: "Team work",
        adaptability: "Adaptability",
        empathy: "Empathy",
        creativity: "Creativity"
    }
};

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.themeToggle = document.getElementById('themeToggle');
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = this.themeToggle.querySelector('.theme-icon');
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
        this.currentTheme = theme;
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
    }
}

// Language Management
class LanguageManager {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'fr';
        this.langButtons = document.querySelectorAll('.lang-btn');
        this.init();
    }

    init() {
        this.applyLanguage(this.currentLang);
        this.langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const lang = e.target.getAttribute('data-lang');
                this.changeLanguage(lang);
            });
        });
    }

    changeLanguage(lang) {
        this.currentLang = lang;
        this.applyLanguage(lang);
        this.updateActiveButton(lang);
        localStorage.setItem('language', lang);
        document.documentElement.setAttribute('lang', lang);
    }

    applyLanguage(lang) {
        const elements = document.querySelectorAll('[data-text-key]');
        elements.forEach(element => {
            const key = element.getAttribute('data-text-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    updateActiveButton(lang) {
        this.langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }
}

// Smooth Animations
class AnimationManager {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
        this.addHoverEffects();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    addHoverEffects() {
        const cards = document.querySelectorAll('.education-card, .software-skills');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px)';
                card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = 'none';
            });
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new LanguageManager();
    new AnimationManager();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Floating button interaction
document.addEventListener('DOMContentLoaded', () => {
    const floatingButton = document.querySelector('.floating-button');
    if (floatingButton) {
        floatingButton.addEventListener('click', () => {
            // Add a fun animation
            floatingButton.style.transform = 'scale(1.2) rotate(360deg)';
            setTimeout(() => {
                floatingButton.style.transform = 'scale(1)';
            }, 300);
            
            // You can add more functionality here
            console.log('Thanks for the like! 👍');
        });
    }
});
