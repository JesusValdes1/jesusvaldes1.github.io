function initAnimations() {

    //console.log("Animations cargado");

    const elements = document.querySelectorAll(".animate");
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            const element = entry.target;

            if (entry.isIntersecting) {
                animateIn(element);
            } else {
                animateOut(element);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        observer.observe(element);
    });

}

function animateIn(element) {

    let animation = {
        opacity: [0, 1],
        duration: 1500,
        ease: "outExpo"
    };

    if (element.classList.contains("stagger")) {
        anime.animate(element.children, {
            opacity: [0, 1],
            y: [30, 0],
            duration: 700,
            delay: anime.stagger(120),
            ease: "outExpo"
        });
        return;
    }

    if (element.classList.contains("fade-up")) {
        animation.y = [40, 0];
    }

    if (element.classList.contains("fade-left")) {
        animation.x = [-50, 0];
    }

    if (element.classList.contains("fade-right")) {
        animation.x = [50, 0];
    }

    if (element.classList.contains("zoom")) {
        animation.scale = [0.85, 1];
    }

    anime.animate(element, animation);

}

function animateOut(element) {
    let animation = {
        opacity: 0,
        duration: 500,
        ease: "outExpo"
    };

    if (element.classList.contains("stagger")) {
        anime.animate(element.children, {
            opacity: 0,
            y: 30,
            duration: 400,
            delay: anime.stagger(60),
            ease: "outExpo"
        });
        return;
    }

    if (element.classList.contains("fade-up")) {
        animation.y = 40;
    }

    if (element.classList.contains("fade-left")) {
        animation.x = -50;
    }

    if (element.classList.contains("fade-right")) {
        animation.x = 50;
    }

    if (element.classList.contains("zoom")) {
        animation.scale = 0.85;
    }

    anime.animate(element, animation);

}