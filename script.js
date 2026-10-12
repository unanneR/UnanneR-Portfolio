const GH = 'https://github.com/unanneR/';
const allProjects = [
  { id: '01', title: 'C# & .NET Systems', heading: 'C# & .NET Systems', category: 'Portfolio / Full Stack', color: '#2453dc', repo: GH + 'C-Projects',
    stack: 'C#, .NET, SQL', focus: 'Clean structure, reusable components, maintainable code', outcome: 'A growing body of production-style .NET applications',
    description: 'A collection of C# and .NET applications built around clear structure, reusable components, and a fast path from idea to working software.' },
  { draft: true, id: '02', title: 'Enterprise Network Architecture', heading: 'Enterprise Network Security Implementation', category: 'Infrastructure & Networking', color: '#dd322a', repo: GH + 'Network-Lab', credential: true,
    stack: 'Cisco Packet Tracer, OSPF, ACLs, VLANs, NAT, DNS/DHCP', focus: 'Network segmentation, active routing failover, and root-cause troubleshooting.', outcome: 'Verified CompTIA Network+ implementation pattern with detailed documentation.',
    description: 'A multi-site enterprise network infrastructure engineered in Cisco Packet Tracer. Features segmented VLANs, strict ACL access controls, dynamic OSPF routing with failover support, and central DHCP/DNS services to simulate high-availability enterprise environments.' },
  { id: '02', title: 'Full-Stack Web Applications', heading: 'Full-Stack Web Applications', category: 'Full Stack PWA & Web Apps', color: '#117867', 
    stack: 'TypeScript, Vite, Tailwind CSS, Progressive Web App, PHP, JavaScript, backend API', focus: 'Installable web experiences and full-stack platforms', 
    outcome: 'A collection of production-ready web applications and marketplaces',
    description: 'A curated folder of full-stack progressive web apps and platforms covering user accounts, listings, and core backend logic.', },
  { id: '03', title: 'Task Tracker & Automation', heading: 'Task Tracker & Automation', category: 'Backend & APIs', color: '#632f7d', repo: GH + 'TaskTrackerAPI',
    stack: 'REST API, C#/.NET, SQL', focus: 'Predictable contracts and clean boundaries', outcome: 'A documented API for tracking and automating tasks',
    description: 'A task tracking API with clear endpoints, explicit application state, and automation hooks that are straightforward to extend.' },
  { draft: true, id: '05', title: 'Android Native Application', heading: 'Android Native Application', category: 'Mobile Development', color: '#e5ba22', repo: GH + 'mobile-app',
    stack: 'Android, Kotlin/Java, Android Studio', focus: 'Native UI patterns and lifecycle-aware design', outcome: 'A working native Android app',
    description: 'A native Android application built with platform conventions, focused on responsive screens and dependable behaviour.' },
  { draft: true, id: '06', title: 'AI Partner Catalyst', heading: 'AI Partner Catalyst', category: 'Emerging Tech & AI', color: '#2d2e2c', repo: GH + 'AI-Partner-Catalyst',
    stack: 'AI APIs, JavaScript, prompt design', focus: 'Applying AI services to practical problems', outcome: 'A working AI-assisted prototype',
    description: 'An exploration of how AI services can be integrated into real products, from prompt design to a usable interface.' },
  { draft: true, id: '07', title: 'Interactive Web Interfaces', heading: 'Interactive Web Interfaces', category: 'Frontend Engineering', color: '#dd322a', repo: GH + 'javascript-practice',
    stack: 'JavaScript, React, HTML, CSS', focus: 'Interaction, state handling, and accessible markup', outcome: 'A library of small, working interface studies',
    description: 'Hands-on frontend work with JavaScript and React: small interactive interfaces that sharpen state management and UI craft.' },
  { draft: true, id: '08', title: 'Linux & System Administration', heading: 'Linux & System Administration', category: 'Systems & Security', color: '#2453dc', repo: GH + 'over-the-wire',
    stack: 'Linux, Bash, SSH, OverTheWire wargames', focus: 'Command-line fluency and security fundamentals', outcome: 'Documented solutions to progressive security challenges',
    description: 'Progress through the OverTheWire wargames, building command-line skill, permissions knowledge, and a security-first mindset.' }
];
const projects = allProjects.filter(p => !p.draft);


const folderItems = {
  '01': [
    { name: 'kwezi-health-esop', note: 'A secure, modular, and scalable ASP.NET Core MVC web portal in C# designed for streamlined staff administration.', url: GH + 'C-Projects' },
    { name: 'TaskTracker.API', note: 'RESTful API: Defines the architectural style for structured, stateless communication over HTTP protocols', url: GH + 'C-Projects' }
  ],
  '02': [
    { name: 'UbuntuExchange', note: 'UbuntuExchange is a lightweight, custom-built Consumer-to-Consumer e-commerce platform that enables secure local trading, listing management, and escrow-style transactions using a traditional PHP and MySQL web stack', url: GH + 'UbuntuExchange' },
    { name: 'RootedInChrist', note: 'A modular, type-safe TypeScript application designed for managing faith-focused resources and media workflows. Built with strict TypeScript configurations to ensure reliability, performance, and maintainability.', url: GH + 'RootedInChrist' }
  ],
  '03': [{ name: 'TaskTracker.API', note: 'RESTful API: Defines the architectural style for structured, stateless communication over HTTP protocols', url: GH + 'TaskTrackerAPI' }],
  '04': [{ name: 'TaskTracker.API', note: 'RESTful API: Defines the architectural style for structured, stateless communication over HTTP protocols', url: GH + 'TaskTrackerAPI' }],
  '05': [{ name: 'Project name', note: 'One line on what it does', url: GH + 'mobile-app' }],
  '06': [{ name: 'Project name', note: 'One line on what it does', url: GH + 'AI-Partner-Catalyst' }],
  '07': [{ name: 'Project name', note: 'One line on what it does', url: GH + 'javascript-practice' }],
  '08': [{ name: 'Project name', note: 'One line on what it does', url: GH + 'over-the-wire' }]
};

const itemsList = document.querySelector('#project-items');
function renderItems(id) {
  itemsList.replaceChildren();
  const items = folderItems[id] || [];
  if (!items.length) {
    const li = document.createElement('li');
    li.className = 'item-empty';
    li.textContent = 'More projects coming soon.';
    itemsList.append(li);
    return;
  }
  items.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = item.url; a.target = '_blank'; a.rel = 'noopener';
    const name = Object.assign(document.createElement('span'), { className: 'item-name', textContent: item.name });
    const note = Object.assign(document.createElement('span'), { className: 'item-note', textContent: item.note || '' });
    const arrow = Object.assign(document.createElement('span'), { className: 'item-arrow', textContent: '\u2197' });
    arrow.setAttribute('aria-hidden', 'true');
    a.append(name, note, arrow);
    li.append(a);
    itemsList.append(li);
  });
}

const archive = document.querySelector('#archive');
const view = document.querySelector('#project-view');
const $ = id => document.querySelector(id);
const fields = ['number', 'category', 'title', 'description', 'stack', 'focus', 'outcome'].reduce((o, k) => (o[k] = $('#project-' + k), o), {});
const repoLink = $('#project-repo'), credLink = $('#project-credential'), credNote = $('#credential-note');
const DEFAULT_ID = projects[0] && projects[0].id; // first visible folder opens by default

const folderSvg = '<svg class="folder-icon" viewBox="0 0 96 70" aria-hidden="true"><path d="M2 67V15C2 9 7 4 13 4h27l9 9h35c6 0 11 5 11 11v43H2Z" fill="currentColor"/></svg>';

function renderArchive() {
  archive.innerHTML = projects.map(p => `
    <article class="project-card" data-id="${p.id}" style="--accent:${p.color}">
      <button class="card-select" type="button" aria-pressed="false" aria-label="Open ${p.title}">
        ${folderSvg}
        <span class="card-number">${p.id}</span>
        <span class="card-category">${p.category}</span>
        <h3>${p.title}</h3>
      </button>
      <a class="open-mark" href="${p.repo}" target="_blank" rel="noopener" aria-label="${p.title} on GitHub">&#8599;</a>
    </article>`).join('');
}

function openProject(p, scroll) {
  fields.number.textContent = p.id;
  fields.category.textContent = `${p.category} / ${p.id}`;
  fields.title.textContent = p.heading;
  fields.description.textContent = p.description;
  fields.stack.textContent = p.stack;
  fields.focus.textContent = p.focus;
  fields.outcome.textContent = p.outcome;
  repoLink.href = p.repo;
  renderItems(p.id);
  credLink.hidden = credNote.hidden = !p.credential;
  view.style.setProperty('--active-color', p.color);
  document.querySelectorAll('.project-card').forEach(card => {
    const on = card.dataset.id === p.id;
    card.classList.toggle('is-active', on);
    card.querySelector('.card-select').setAttribute('aria-pressed', on);
  });
  if (scroll && window.matchMedia('(max-width: 900px)').matches) {
    view.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

renderArchive();
archive.addEventListener('click', e => {
  const btn = e.target.closest('.card-select');
  if (!btn) return;
  openProject(projects.find(p => p.id === btn.closest('.project-card').dataset.id), true);
});
if (projects.length) openProject(projects.find(p => p.id === DEFAULT_ID), false);

const portrait = document.querySelector('#portrait');
const portraitImg = portrait.querySelector('img');
const noPhoto = () => portrait.classList.add('no-photo');
portraitImg.addEventListener('error', noPhoto);
if (portraitImg.complete && portraitImg.naturalWidth === 0) noPhoto();