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

    console.log("Portafolio iniciado.");

});