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
    const header = document.querySelector('header'); // Select the header element
    header.style.zIndex = '-1'; // Set the z-index to -1
});

//! Adding event listener for the close icon to reverse the animation
closeIcon.addEventListener('click', () => {
    sideAnimate.reverse(); //! Reverse the sidemenu animation when the close icon is clicked
    staggeranimate.reverse(); //! Reverse the side menu item animation
    const header = document.querySelector('header'); // Select the header element
    header.style.zIndex = '0'; // Set the z-index to -1
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
tl.from('.header-text h1',{
    x:-200,
    opacity:0,
    duration:0.3
})
tl.from('.header-text p',{
    x:-200,
    opacity:0,
    duration:0.3
})
tl.from('.button-container-consult',{
    x:-200,
    duration:0.3,
    opacity:0
})
tl.from('.header-image',
    {
        x:200,
        duration:0.7,
        opacity:0
    }
)

//! Animation of scrolll trigger for services text

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".js-services-text", 
  {
    x: -500,        // Initial position (from left)
    opacity: 0,      // Initial opacity
  },
  {
    x: 0,            // Final position (to the default)
    opacity: 1,      // Final opacity
    scrollTrigger: {
      trigger: ".js-services-text",  // Element to trigger the animation
      start: "top 80%",  // When the top of the element reaches 80% of the viewport height
      end: "top 30%",    // Animation ends when the top of the element reaches 30% of the viewport height
      scrub: true,       // Smooth animation with scroll
      markers: false,    // Show markers for debugging (optional)
      reverse: true      // Reverse the animation when scrolling up
    }
  });


// Ensure GSAP and ScrollTrigger are loaded
gsap.registerPlugin(ScrollTrigger);

gsap.from(".seo", {
  x: -500,               // Start from the left
  opacity: 0,            // Start with opacity 0
  duration: 1,           // Animation duration
  scrollTrigger: {
    trigger: ".seo",     // Element to trigger the animation
    start: "top 80%",     // Start animation when the top of the element is 80% of the viewport height
    end: "top 30%",       // End animation when the top of the element reaches 30% of the viewport height
    scrub: true,          // Scrub the animation to scroll position (smooth scrolling)
    markers: false,       // Set to true for debugging
    reverse: true         // Reverse animation when scrolling up
  }
});
gsap.from(".social", {
    scrollTrigger: {
      trigger: ".social",         // The element that triggers the animation
      start: "top 80%",            // Animation starts when .social reaches 80% of the viewport
      end: "bottom 70%",           // Animation ends when .social is at 20% from the bottom of the viewport
      scrub: true,                 // This allows the animation to be linked to the scroll
      reverse: true,               // Reverses the animation on scroll up
    },
    x: -500,                      // Starts from x: -500
    opacity: 0,                    // Starts with opacity 0
    duration: 1,                   // Duration of the animation when scrolled fully
  });
  gsap.fromTo(".pay", 
    {
      x: 500,    // Start from 500px to the right
      opacity: 0 // Start with 0 opacity
    }, 
    {
      x: 0,       // Animate to the default position
      opacity: 1,  // Fade in to full opacity
      scrollTrigger: {
        trigger: ".pay",    // Trigger animation when the '.pay' div is in view
        start: "top 80%",    // Start the animation when 80% of the '.pay' div is in the viewport
        end: "top 30%",      // End the animation when 30% of the '.pay' div is in the viewport
        scrub: true,         // Smoothly reverse the animation while scrolling
        markers: false        // Optional: Show markers to debug scroll trigger position
      }
    }
  );
  gsap.from(".email", {
    scrollTrigger: {
      trigger: ".social",         // The element that triggers the animation
      start: "top 50%",            // Animation starts when .social reaches 80% of the viewport
      end: "bottom 70%",           // Animation ends when .social is at 20% from the bottom of the viewport
      scrub: true,                 // This allows the animation to be linked to the scroll
      reverse: true,               // Reverses the animation on scroll up
    },
    x: 500,                      // Starts from x: -500
    opacity: 0,                    // Starts with opacity 0
    duration: 1,                   // Duration of the animation when scrolled fully
  });
