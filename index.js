const themeToggle = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeStylesheet.href = 'light-mode.css'; 
        themeToggle.textContent = 'Click Dark Mode';
    } else {
        body.classList.add('dark-mode');
        themeStylesheet.href = 'dark-mode.css'; 
        themeToggle.textContent = 'Click Light Mode';
    }
});