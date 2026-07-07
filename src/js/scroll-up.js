const scrollUpBtn = document.querySelector('.scroll-up');

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY < lastScrollY && currentScrollY > 200) {
    scrollUpBtn.classList.remove('scroll-up--hidden');
  } else {
    scrollUpBtn.classList.add('scroll-up--hidden');
  }

  lastScrollY = currentScrollY;
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
