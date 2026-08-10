const projectData = [
  {
    title: "Rover and Whiskers",
    description: "A responsive site built for a behavior specialist, with clear navigation and engaging visuals.",
    url: "Portfolio/Final/HomePage.html",
    image: "Portfolio/Final/images/catDot.jpg"
  },
  {
    title: "Savanna’s Coffee House",
    description: "A friendly cafe landing page with warm branding and a polished homepage layout.",
    url: "Portfolio/FinalProject/Index.html",
    image: "Portfolio/FinalProject/Images/Coffee_portrait.jpg"
  },
  {
    title: "Cocoa Site",
    description: "A Bootstrap-powered cocoa project that demonstrates responsive design and content structure.",
    url: "Portfolio/Cocoa/index.html",
    image: "Portfolio/Cocoa/images/cocoabar.jpg"
  },
  {
    title: "Montessori Project",
    description: "A website focused on Montessori philosophy and learning resources.",
    url: "Portfolio/Philosophy/index.html",
    image: "Portfolio/Philosophy/imgs/blocksimg.jpg"
  },
  {
    title: "About Norway",
    description: "Open the React app that showcases your local Norway project with modern frontend interaction.",
    url: "Portfolio/AboutNorway/dist/index.html",
    image: "Portfolio/Final/images/catDot.jpg"
  }
];

const reviewPages = [
  { label: "Home", url: "index.html" },
  { label: "About", url: "about.html" },
  { label: "Projects", url: "Projects.html" },
  { label: "Review Hub", url: "review-pages.html" },
  { label: "Rover & Whiskers", url: "Portfolio/Final/HomePage.html" },
  { label: "Savanna’s Coffee House", url: "Portfolio/FinalProject/Index.html" },
  { label: "Cocoa Site", url: "Portfolio/Cocoa/index.html" }
];

function createProjectCard(project) {
  const card = document.createElement('article');
  card.className = 'preview-card';
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.url}" target="_blank">Open project</a>
  `;
  return card;
}

function renderProjects(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  projectData.forEach(project => {
    container.appendChild(createProjectCard(project));
  });
}

function renderReviewGrid() {
  const grid = document.getElementById('review-grid');
  if (!grid) return;
  grid.innerHTML = '';
  reviewPages.forEach(page => {
    const card = document.createElement('article');
    card.className = 'review-card';
    card.innerHTML = `
      <h3>${page.label}</h3>
      <a href="${page.url}" target="_blank">Open page</a>
    `;
    grid.appendChild(card);
  });
}

function setupThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-theme');
  });
}

function setupMenuToggle() {
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-list');
  if (!button || !nav) return;
  button.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
  });
}

function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    if (!name) return;
    status.textContent = `Thanks, ${name}! Your message is ready to send.`;
    form.reset();
  });
}

function setupStoryToggle() {
  const button = document.getElementById('toggle-story');
  const story = document.getElementById('story-hidden');
  if (!button || !story) return;
  button.addEventListener('click', () => {
    story.classList.toggle('hide');
    button.textContent = story.classList.contains('hide') ? 'Read my story' : 'Hide story';
  });
}

function initPage() {
  setupThemeToggle();
  setupMenuToggle();
  setupContactForm();
  setupStoryToggle();
  renderProjects('project-grid');
  renderProjects('project-list');
  renderReviewGrid();

  const loadButton = document.getElementById('load-projects');
  if (loadButton) {
    const grid = document.getElementById('project-grid');
    loadButton.addEventListener('click', () => {
      renderProjects('project-grid');
      loadButton.textContent = 'Projects loaded';
      loadButton.disabled = true;
    });
  }
}

document.addEventListener('DOMContentLoaded', initPage);
