function toggleTheme() {
    APP.theme = APP.theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", APP.theme);
    applyTheme();
}

function applyTheme() {
    document.documentElement.setAttribute(
        "data-theme",
        APP.theme
    );

    updateThemeButton();
}

function updateThemeButton() {

    const btn = document.getElementById("themeBtn");
    if (!btn) return;
    btn.innerHTML =
        APP.theme === "light"
            ? '<i class="fas fa-moon"></i>'
            : '<i class="fas fa-sun"></i>';
}