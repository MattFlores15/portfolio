const nav = document.querySelector('#nav');
const menu = document.querySelector('#menu');
const menuToggle = document.querySelector('.nav__toggle');
let isMenuOpen = false;


// TOGGLE MENU ACTIVE STATE
menuToggle.addEventListener('click', e => {
  e.preventDefault();
  isMenuOpen = !isMenuOpen;
  
  // toggle a11y attributes and active class
  menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
  menu.hidden = !isMenuOpen;
  nav.classList.toggle('nav--open');
});


// TRAP TAB INSIDE NAV WHEN OPEN
nav.addEventListener('keydown', e => {
  // abort if menu isn't open or modifier keys are pressed
  if (!isMenuOpen || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  
  // listen for tab press and move focus
  // if we're on either end of the navigation
  const menuLinks = menu.querySelectorAll('.nav__link');
  if (e.keyCode === 9) {
    if (e.shiftKey) {
      if (document.activeElement === menuLinks[0]) {
        menuToggle.focus();
        e.preventDefault();
      }
    } else if (document.activeElement === menuToggle) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

 function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const sidebarIcon = document.getElementById('sidebarIcon');

  sidebar.classList.toggle('show');

  // Check if the sidebar is currently shown or hidden
  const isSidebarShown = sidebar.classList.contains('show');

  // Change the icon based on the sidebar's visibility
  if (isSidebarShown) {
    sidebarIcon.classList.remove('fa-angles-right');
    sidebarIcon.classList.add('fa-angles-left');
  } else {
    sidebarIcon.classList.remove('fa-angles-left');
    sidebarIcon.classList.add('fa-angles-right');
  }
}



