const toggleSwitch = document.getElementById('checkbox');

// gets the saved them from the browser
function getThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    // else we will get the system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// apply theme and update checkbox state
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    toggleSwitch.checked = theme === 'dark';  // if the theme is dark, this checks the checkbox. this is done manually in case the system theme is dark
}


function switchTheme(e) {
    // if the checkbox is checked, we will set the theme to dark, otherwise we will set it to light
    const theme = e.target.checked ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    applyTheme(theme);
}

// initialize theme, this runs when the page loads
applyTheme(getThemePreference());
toggleSwitch.addEventListener('change', switchTheme);
