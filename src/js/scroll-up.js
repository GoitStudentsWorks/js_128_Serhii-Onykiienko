const scrollUpBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpBtn.classList.remove('scroll-up--hidden');
  } else {
    scrollUpBtn.classList.add('scroll-up--hidden');
  }
});

scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
