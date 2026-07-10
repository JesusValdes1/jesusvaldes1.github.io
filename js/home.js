function initHome() {

    //console.log("Home cargado");
    
    observeElement(".home-section", () => {
        fadeUp(".home-title", 100);
        fadeUp(".home-subtitle", 250);
        fadeUp(".home-description", 400);
        scaleIn(".home-quote", 550);
        fadeUp(".home-buttons", 700);
        fadeUp(".home-technologies-title", 850);
        staggerUp(".technology-item");
        fadeRight(".profile-image", 300);
    });

}