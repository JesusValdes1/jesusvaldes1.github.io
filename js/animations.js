function initAnimations() {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            anime.animate(entry.target, {
                opacity: [0, 1],
                y: [40, 0],
                duration: 800,
                ease: "outExpo"
            });

            observer.unobserve(entry.target);

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".animate").forEach(el => {
        observer.observe(el);
    });

}