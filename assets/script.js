// Mobile navbar toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('mobile-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('hidden');
  });
} else {
  console.warn('Menu toggle or nav links element not found on this page.');
}

// Projects page filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards  = document.querySelectorAll('.project-card');
filterButtons.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const filter = btn.dataset.filter;
    projectCards.forEach(card=>{
      card.style.display = (filter==='all' || card.classList.contains(filter))? 'block':'none';
    });
    filterButtons.forEach(b=>b.classList.remove('bg-blue-600','text-white'));
    btn.classList.add('bg-blue-600','text-white');
  });
});
