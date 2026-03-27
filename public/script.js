// Chaos Zone Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  // Random color flash on gallery items
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    item.addEventListener('click', () => {
      const colors = ['#ff006e', '#00f5d4', '#fee440', '#9b5de5', '#f15bb5', '#00bbf9', '#ffbe0b'];
      const random = colors[Math.floor(Math.random() * colors.length)];
      item.style.background = random;
      item.style.transform = `rotate(${Math.random() * 20 - 10}deg) scale(1.1)`;
    });
  });

  // Spinning box speed increase on hover
  const box = document.querySelector('.spinning-box');
  if (box) {
    box.addEventListener('mouseenter', () => {
      box.style.animationDuration = '6s';
    });
    box.addEventListener('mouseleave', () => {
      box.style.animationDuration = '12s';
    });
  }

  // Form submission
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Your complaint has been launched into the void. We will never read it.');
      form.reset();
    });
  }

  console.log('%c CHAOS ZONE ', 'background: #ff006e; color: #fff; font-size: 24px; padding: 10px;');
  console.log('%c Everything is fine. Nothing is broken. ', 'color: #00ff88; font-size: 14px;');
});