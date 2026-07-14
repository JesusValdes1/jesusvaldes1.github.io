function toggleLanguage() {

    APP.language = APP.language === "es" ? "en" : "es";

    localStorage.setItem("language", APP.language);

    reloadLanguage();
}

async function reloadLanguage() {

    await loadSections();

    initAnimations();
    initNavbar();
    initHome();
    initAbout();
    initExperience();
    initSkills();
    initProjects();
    initContact();

    updateLanguageButton();

    document
        .getElementById("languageBtn")
        .addEventListener("click", toggleLanguage)
}

function updateLanguageButton() {

    const btn = document.getElementById("languageBtn");

    if (!btn) return;

    const img = btn.querySelector("img");
    const text = btn.querySelector("span");

    if (APP.language === "es") {

        img.src = "assets/img/us.png";
        img.alt = "English";
        text.textContent = "EN";

    } else {

        img.src = "assets/img/mx.png"; // o es.png
        img.alt = "Español";
        text.textContent = "ES";

    }
}