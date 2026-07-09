document.addEventListener("DOMContentLoaded", async () => {

    await loadSections();

    initNavbar();
    initHome();
    initAbout();
    initExperience();
    initSkills();
    initProjects();
    initContact();
    initFooter();
    initAnimations();

    console.log("Portafolio iniciado.");

});