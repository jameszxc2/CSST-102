/**
 * CSST102-3A Portfolio - Reusable Components
 * Machine Learning Portfolio - Dynamic navbar and footer injection
 */

// Determine the base path based on current page location
function getBasePath() {
  const path = window.location.pathname;
  // If we're in a subdirectory (like /activities/), use ../
  if (path.includes('/activities/')) {
    return '../';
  }
  // Root level pages
  return '';
}

// Get current page for active nav highlighting
function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('activities/') || path.includes('activities.html')) return 'activities';
  if (path.includes('about.html')) return 'about';
  return 'home';
}

// GitHub icon SVG
const githubIcon = `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;

// Render Navbar HTML
function renderNavbar() {
  const base = getBasePath();
  const current = getCurrentPage();
  
  const navClass = (page) => page === current 
    ? 'px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-lg'
    : 'px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200';

  return `
    <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300" role="navigation" aria-label="Main navigation">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex items-center justify-between h-20">
          <a href="${base}index.html" class="flex items-center gap-2 group" aria-label="CSST102 Home">
            <img src="${base}assets/images/jg-logo.png" alt="JG Logo" class="w-10 h-10 rounded-xl shadow-lg" />
            <span class="text-xl font-bold tracking-tight">
              CSST<span class="text-emerald-500">102</span>
            </span>
          </a>
          <ul class="hidden md:flex items-center gap-2" role="menubar">
            <li role="none"><a href="${base}index.html" class="${navClass('home')}" role="menuitem" ${current === 'home' ? 'aria-current="page"' : ''}>Home</a></li>
            <li role="none"><a href="${base}activities.html" class="${navClass('activities')}" role="menuitem" ${current === 'activities' ? 'aria-current="page"' : ''}>Activities</a></li>
            <li role="none"><a href="${base}about.html" class="${navClass('about')}" role="menuitem" ${current === 'about' ? 'aria-current="page"' : ''}>About</a></li>
            <li role="none"><a href="https://github.com/emperuna/CSST102-3A-AY2526" target="_blank" rel="noopener noreferrer" class="ml-2 px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 inline-flex items-center gap-2" role="menuitem" aria-label="View GitHub Repository (opens in new tab)">${githubIcon}GitHub</a></li>
          </ul>
          <button id="menuBtn" class="md:hidden p-2 text-gray-400 hover:text-white transition-colors" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="mobileMenu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
      <div id="mobileMenu" class="hidden md:hidden glass border-t border-white/10" role="menu" aria-label="Mobile navigation">
        <div class="px-6 py-4 space-y-2">
          <a href="${base}index.html" class="block px-4 py-3 text-sm font-medium ${current === 'home' ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'} rounded-lg transition-colors" role="menuitem" ${current === 'home' ? 'aria-current="page"' : ''}>Home</a>
          <a href="${base}activities.html" class="block px-4 py-3 text-sm font-medium ${current === 'activities' ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'} rounded-lg transition-colors" role="menuitem" ${current === 'activities' ? 'aria-current="page"' : ''}>Activities</a>
          <a href="${base}about.html" class="block px-4 py-3 text-sm font-medium ${current === 'about' ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'} rounded-lg transition-colors" role="menuitem" ${current === 'about' ? 'aria-current="page"' : ''}>About</a>
          <a href="https://github.com/emperuna/CSST102-3A-AY2526" target="_blank" rel="noopener noreferrer" class="block px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-lg inline-flex items-center gap-2" role="menuitem" aria-label="View GitHub Repository (opens in new tab)">${githubIcon}GitHub</a>
        </div>
      </div>
    </nav>
  `;
}

// Render Footer HTML
function renderFooter() {
  const base = getBasePath();
  
  return `
    <footer class="py-16 border-t border-white/5">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="flex items-center gap-3">
            <img src="${base}assets/images/jg-logo.png" alt="JG Logo" class="w-10 h-10 rounded-xl" />
            <div>
              <p class="font-semibold text-white">CSST102-3A Portfolio</p>
              <p class="text-sm text-gray-500">© 2025 Jeremy Garin</p>
            </div>
          </div>
          <div class="flex items-center gap-6">
            <a href="${base}index.html" class="text-sm text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="${base}activities.html" class="text-sm text-gray-400 hover:text-white transition-colors">Activities</a>
            <a href="https://github.com/emperuna/CSST102-3A-AY2526" target="_blank" class="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              ${githubIcon}
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Initialize components when DOM is ready
function initComponents() {
  // Inject navbar
  const navbarSlot = document.getElementById('navbar-slot');
  if (navbarSlot) {
    navbarSlot.innerHTML = renderNavbar();
  }
  
  // Inject footer
  const footerSlot = document.getElementById('footer-slot');
  if (footerSlot) {
    footerSlot.innerHTML = renderFooter();
  }
  
  // Initialize main.js functionality after components are loaded
  if (typeof initMain === 'function') {
    initMain();
  }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', initComponents);
