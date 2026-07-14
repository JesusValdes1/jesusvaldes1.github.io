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

    //console.log("Portafolio iniciado.");

});