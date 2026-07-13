function initAbout() {

    //console.log("About cargado");

    observeElement(".about-section",
        () => {
            fadeLeft(".section-title", 100);
            fadeLeft(".about-text", 250);
            fadeRight(".about-card", 350);
            staggerUp(".about-item");

        },
        () => {
            hide(".section-title");
            hide(".about-text");
            hide(".about-card");
            hide(".about-item");
        }
    );
}