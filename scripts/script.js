console.log("Developed by Yasir Ali :)");

let menuIcon = document.querySelector('.menu-icon');
let closeIcon = document.querySelector('.close-menu');
let tl = gsap.timeline();

tl.from('.logo',{
    x:-200,
    opacity:0,
    duration:0.5
});
tl.from('.menu *',{
    y:-100,
    opacity:0,
    duration:0.5,
    stagger:0.2
})
let sideAnimate = gsap.to('.sidemenu', {
    x: 0,
    duration: 0.7,
    paused: true //! Pausing the animation so it doesn't start automatically
});

//! Animation for side menu elements when they appear
let staggeranimate = gsap.from('.sidemenu *', {
    x: 200,
    duration: 0.7,
    stagger: 0.2,
    opacity: 0,
    paused: true //! Make this animation paused as well
});

//! Adding event listener for the menu icon to play the animation
menuIcon.addEventListener('click', () => {
    sideAnimate.play(); //! Play the sidemenu animation when the menu icon is clicked
    staggeranimate.play(); //! Start the side menu item animation as well
});

//! Adding event listener for the close icon to reverse the animation
closeIcon.addEventListener('click', () => {
    sideAnimate.reverse(); //! Reverse the sidemenu animation when the close icon is clicked
    staggeranimate.reverse(); //! Reverse the side menu item animation
});

//! Animation for navbar

let lastScrollTop = 0; // Variable to store the last scroll position
let navbar = document.querySelector('nav'); // Assuming your navbar is inside <nav> tag

// Add an event listener to track scroll events
window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY; // Get the current scroll position

    // Check if the user is scrolling down or up
    if (currentScroll > lastScrollTop) {
        // Scrolling down
        gsap.to(navbar, { 
            top: '-110px', // Move navbar out of view
            duration: 0.3 // Duration of the animation
        });
    } else {
        // Scrolling up
        gsap.to(navbar, {
            top: '0', // Bring navbar back into view
            duration: 0.3 // Duration of the animation
        });
    }

    // Update the last scroll position to the current position
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Prevent negative scroll values
});

tl.from('.header-text',{
    x:-200,
    duration:0.7,
    opacity:0
})
tl.from('.header-image',
    {
        x:200,
        durstion:0.4,
        opacity:0
    }
)