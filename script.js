document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle');

  // Function to update icon depending on theme
  function updateIcon() {
    if (document.body.classList.contains('light-mode')) {
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>'; // show moon icon in light mode (click to switch to dark)
    } else {
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';  // show sun icon in dark mode (click to switch to light)
    }
  }

  // Load theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  } else if (savedTheme === 'dark') {
    document.body.classList.remove('light-mode');
  } else {
    // Use system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }

  updateIcon();

  // Toggle on button click
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // Save preference
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
    updateIcon();
  });

  // Quote text alignment logic (your existing code)
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    const quote = document.getElementById("quote");
    if(quote) quote.style.textAlign = "justify";
  } else {
    const quote = document.getElementById("quote");
    if(quote) quote.style.textAlign = "center";
  }
});

