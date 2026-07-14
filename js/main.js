document.addEventListener("DOMContentLoaded", async () => {

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
        .addEventListener("click", toggleLanguage);
    
    applyTheme();

    document
        .getElementById("themeBtn")
        .addEventListener("click", toggleTheme);

    //console.log("Portafolio iniciado.");

});