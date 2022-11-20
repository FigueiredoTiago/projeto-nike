const changeThemeBtn = document.querySelector('#change-theme');

loadTheme();

function togleDarkMode() {
    document.body.classList.toggle('dark');
}

function loadTheme() {
    const darkMode = localStorage.getItem('dark');
    if(darkMode) {
        togleDarkMode();
    }
}

changeThemeBtn.addEventListener('change', () => {
    togleDarkMode();
    localStorage.removeItem('dark');
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1);
    }
});



