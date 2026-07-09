function initNavbar() {

    //console.log("Navbar cargado");
    const navbar = document.querySelector(".portfolio-navbar");

    if (!navbar) return;

    // Fondo al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    });

    // Cerrar menú al seleccionar opción (móvil)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            const collapse = document.querySelector("#navbarMenu");
            if (collapse.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(collapse).hide();
            }
        });
    });
}