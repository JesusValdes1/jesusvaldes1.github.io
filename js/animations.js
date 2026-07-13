function initAnimations() {
    //console.log("Animations cargado");
}

function prepareAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.style.opacity = 0;
    });
}

function observeElement(selector, callback) {
    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                callback(entry.target);
                observer.unobserve(entry.target);
            }
        });
    },{
        threshold:0.2
    });

    elements.forEach(element=>{
        observer.observe(element);
    });
}

function fadeUp(target, delay = 0){
    anime.animate(target, {
        opacity:[0,1],
        translateY:[40,0],
        duration:900,
        delay,
        easing:"easeOutExpo"
    });
}

function fadeLeft(target, delay = 0){
    anime.animate(target,{
        opacity:[0,1],
        translateX:[-50,0],
        duration:900,
        delay,
        easing:"easeOutExpo"
    });
}

function fadeRight(target, delay = 0){
    anime.animate(target,{
        opacity:[0,1],
        translateX:[50,0],
        duration:900,
        delay,
        easing:"easeOutExpo"
    });
}

function scaleIn(target, delay = 0){
    anime.animate(target,{
        opacity:[0,1],
        scale:[0.8,1],
        duration:800,
        delay,
        easing:"easeOutExpo"
    });
}

function staggerUp(target){
    anime.animate(target,{
        opacity:[0,1],
        translateY:[30,0],
        delay: anime.stagger(120),
        duration:700,
        easing:"easeOutExpo"
    });
}

function observeElement(selector, enter, leave = null) {

    const elements = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
        
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                enter(entry.target);
            } else if (leave) {
                leave(entry.target);
            }
        });
    }, {
        threshold: 0.25
    });

    elements.forEach(element => observer.observe(element));
}

function hide(target){
    anime.animate(target,{
        opacity: 0,
        translateY: 40,
        duration: 400,
        easing: "easeOutQuad"
    });
}