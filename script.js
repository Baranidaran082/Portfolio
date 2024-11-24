document.querySelector('.visit-btn').addEventListener('click', function() {
    window.open('https://github.com/Baranidaran082', '_blank');
  });

  const menuIcon = document.querySelector('#menu-icon');
  const navLinks = document.querySelector('.nav-links'); // Fixed selector
  
  menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
  };

  

  