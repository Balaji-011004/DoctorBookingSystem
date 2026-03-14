// highlight current nav link
document.addEventListener('DOMContentLoaded', () => {
  const current = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.style.background = '#cfe6ff';
      a.style.borderRadius = '6px';
      a.style.color = '#073c7a';
    }
  });
});