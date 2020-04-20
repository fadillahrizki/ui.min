const tl = gsap.timeline()

tl
    .from("#rect",1,{opacity:0,y:-50})
    .from("#poly",1,{opacity:0,y:-50})
    .from("#logo",1,{opacity:0,y:-50})
    .from("#min",1,{opacity:0,y:50})
    .from("#Line_1",1,{opacity:0,y:50},"-=1.5")
    .from(".socmed",1,{opacity:0,y:50})
    .from(".services",1,{opacity:0,y:50})

const controller = new ScrollMagic.Controller()

new ScrollMagic.Scene({
    triggerElement:'.certificate',
    triggerHook:0.8
})
.setTween(gsap.from(".certificate",1,{opacity:0,y:50}))
.addTo(controller)

new ScrollMagic.Scene({
    triggerElement:'.portfolio',
    triggerHook:0.8
})
.setTween(gsap.from(".portfolio",1,{opacity:0,y:50}))
.addTo(controller)

new ScrollMagic.Scene({
    triggerElement:'.contact',
    triggerHook:0.8
})
.setTween(gsap.from(".contact",1,{opacity:0,y:50}))
.addTo(controller)