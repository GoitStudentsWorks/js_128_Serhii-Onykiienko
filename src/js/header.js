const refs = {
  burgerBtn: document.querySelector('.header-burger'),
  closeBtn: document.querySelector('.mobile-menu-close'),
  mobileMenu: document.querySelector('.mobile-menu'),
  mobileMenuLinks: document.querySelectorAll('.mobile-menu-link'),
};
// ----------open/close menu------------
function openMenu() {
  refs.mobileMenu.classList.add('is-open');
  document.body.classList.add('no-scroll');
  refs.burgerBtn.setAttribute('aria-expanded', 'true');
  refs.mobileMenu.setAttribute('aria-hidden', 'false');
  refs.closeBtn.focus();
}

function closeMenu() {
  refs.mobileMenu.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  refs.burgerBtn.setAttribute('aria-expanded', 'false');
  refs.mobileMenu.setAttribute('aria-hidden', 'true');
  refs.closeBtn.focus();
}

refs.burgerBtn.addEventListener('click', openMenu);
refs.closeBtn.addEventListener('click', closeMenu);
