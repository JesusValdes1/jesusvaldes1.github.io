const APP = {

    version: "1.0.0",
    language: localStorage.getItem("language") || "es",
    theme: localStorage.getItem("theme") || "light",
    debug: true,
    
    sections: [
        "navbar",
        "home",
        "about",
        "experience",
        "skills",
        "projects",
        "contact"
    ]
};