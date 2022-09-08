const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// (Lines below) this event listener allows the nav section be open when clicked
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// (Lines below) this event listener removes the 'nav-open' css rules (so the viewer can see the content he is directed to) when one of the links is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});