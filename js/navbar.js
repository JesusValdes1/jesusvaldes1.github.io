function initNavbar() {

    const navbar = document.querySelector(".portfolio-navbar");

    if (!navbar) return;

    const scrollLinks = document.querySelectorAll("[data-target]");
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
    scrollLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.getElementById(this.dataset.target);

            if (!target) return;

            const navbarHeight = navbar.offsetHeight;

            // Solo actualizar el active si es un elemento del menú
            if (this.classList.contains("nav-link")) {
                scrollLinks.forEach(l => l.classList.remove("active"));
                this.classList.add("active");
            }

            window.scrollTo({
                top: target.offsetTop - navbarHeight - 20,
                behavior: "smooth"
            });

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

        scrollLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.dataset.target === currentSection
            );
        });
    }

    // Estado inicial
    updateActiveLink();
}