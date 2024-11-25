console.log("Developed by Yasir Ali :)");

let menuIcon = document.querySelector('.menu-icon');
let closeIcon = document.querySelector('.close-menu');

let tl = gsap.timeline({paused:true});
tl.to('.sidemenu',{
    x:0,
    duration:0.7
});
tl.from('.sidemenu *',{
    x:200,
    duration:0.7,
    stagger:0.2,
    opacity:0
})

menuIcon.addEventListener('click',function(){
    tl.play();
})
closeIcon.addEventListener('click',function(){
    console.log("helli");
    tl.reverse();
})