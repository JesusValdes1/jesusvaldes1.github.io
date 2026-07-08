anime({
    targets:'#titulo',
    translateY:[
        -80,
        0
    ],
    opacity:[
        0,
        1
    ],
    duration:1800,
    easing:'easeOutExpo'

});

anime({
    targets:'.tech-stack span',
    translateY:[
        40,
        0
    ],
    opacity:[
        0,
        1
    ],
    delay:
    anime.stagger(150),
    duration:1000
});