// DOM Elements
const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.querySelector('#theme-toggle');
const scrollUp = document.querySelector('#scroll-up');
const sections = document.querySelectorAll('section[id]');
const contactForm = document.querySelector('#contact-form');

// Project and Model Data
const projects = [
    {
        title: "Time Series Forecasting",
        description: "Advanced forecasting using LSTM and Transformer models",
        image: "assets/images/project-1.jpg",
        technologies: ["Python", "TensorFlow", "Pandas"],
        link: "#"
    },
    {
        title: "Deep Learning Models",
        description: "Implementation of various neural network architectures",
        image: "assets/images/project-2.jpg",
        technologies: ["PyTorch", "Scikit-learn", "NumPy"],
        link: "#"
    },
    {
        title: "Data Analysis Dashboard",
        description: "Interactive visualization of time series data",
        image: "assets/images/project-3.jpg",
        technologies: ["Plotly", "Dash", "PostgreSQL"],
        link: "#"
    }
];

const models = [
    {
        name: "LSTM",
        description: "Long Short-Term Memory Networks for sequence prediction",
        accuracy: "94%",
        link: "/models/lstm.html"
    },
    {
        name: "Transformer",
        description: "Attention-based architecture for time series",
        accuracy: "96%",
        link: "/models/transformer.html"
    },
    {
        name: "Prophet",
        description: "Facebook's time series forecasting model",
        accuracy: "92%",
        link: "/models/prophet.html"
    }
];

// Show/Hide Navigation Menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Close menu when clicking a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// Change Header Background
function scrollHeader() {
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// Show Scroll Up Button
function scrollUpButton() {
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUpButton);

// Theme Toggle
function setupThemeToggle() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Active Link Highlighting
function highlightActiveSection() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            correspondingLink?.classList.add('active');
        } else {
            correspondingLink?.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', highlightActiveSection);

// Dynamic Project and Model Cards
function createProjectCards() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) return;

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'card project-card';
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="project-image">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="button secondary-button">View Project</a>
        `;
        projectsGrid.appendChild(card);
    });
}

function createModelCards() {
    const modelsGrid = document.querySelector('.models-grid');
    if (!modelsGrid) return;

    models.forEach(model => {
        const card = document.createElement('div');
        card.className = 'card model-card';
        card.innerHTML = `
            <h3>${model.name}</h3>
            <p>${model.description}</p>
            <div class="model-accuracy">
                <span class="accuracy-label">Accuracy:</span>
                <span class="accuracy-value">${model.accuracy}</span>
            </div>
            <a href="${model.link}" class="button secondary-button">Learn More</a>
        `;
        modelsGrid.appendChild(card);
    });
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        try {
            // Replace with your actual form submission logic
            console.log('Form submitted:', data);
            contactForm.reset();
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('There was an error sending your message. Please try again.');
        }
    });
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    setupThemeToggle();
    createProjectCards();
    createModelCards();
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
