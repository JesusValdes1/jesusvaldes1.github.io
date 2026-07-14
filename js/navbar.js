function initNavbar() {

    const navbar = document.querySelector(".portfolio-navbar");

    if (!navbar) return;

    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    // Fondo al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
        updateActiveLink();
    });

    // Click en el menú
    navLinks.forEach(link => {

        link.addEventListener("click", function () {
            const target = document.getElementById(this.dataset.target);

            if (!target) return;

            const navbarHeight = navbar.offsetHeight;

            // Cambiar el activo inmediatamente
            navLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");

            // Scroll suave
            window.scrollTo({
                top: target.offsetTop - navbarHeight - 20,
                behavior: "smooth"
            });

            // Cerrar menú en móvil
            const collapse = document.querySelector("#navbarMenu");
            if (collapse && collapse.classList.contains("show")) {
                bootstrap.Collapse.getOrCreateInstance(collapse).hide();
            }
        });
    });

    // Detectar sección visible
    function updateActiveLink() {

        let currentSection = "";
        let maxVisible = 0;

        sections.forEach(section => {

            const rect = section.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
            if (visibleHeight > maxVisible) {
                maxVisible = visibleHeight;
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.dataset.target === currentSection
            );
        });
    }

    // Estado inicial
    updateActiveLink();
}