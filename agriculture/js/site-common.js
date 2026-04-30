const reveals = document.querySelectorAll('.reveal');
if (reveals.length > 0) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
}

const nav = document.getElementById('top-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 40
      ? '0 4px 28px rgba(10,18,5,0.14)'
      : 'none';
  });
}
