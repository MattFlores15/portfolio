//////////NAVBAR FADE//////////////////

//When you scroll the page
window.onscroll = function() {myFunction()};

function myFunction() {
    //When the page scrolled trough 50px it will get white and change the logo
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //change the background color and the image
    
    document.getElementById("navigation").style.backgroundColor = "#0A0C0E";
     document.getElementById("navigation").style.borderBottomColor = "#008b8b";
    document.getElementById("logo-n").src = "images/logo-transparent-design.png";
     document.getElementById("nav-tab").style.backgroundColor = "#008b8b";

     
    //When the page is scrolled less then 50px it will get transparent and change the logo
  } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
    //change the background color and the image
     
    
     document.getElementById("navigation").style.backgroundColor = "transparent";
      document.getElementById("navigation").style.borderBottomColor = "transparent";
     document.getElementById("logo-n").src = "images/logo-white-design.png";
      document.getElementById("logo-n").style.backgroundColor = "transparent";
      document.getElementById("nav-tab").style.backgroundColor = "transparent";
      
  
   }
}

function Hovering() {
    //When you hover we want the background to be indigo and the logo to be the full logo
    
     document.getElementById("navigation").style.backgroundColor = "#0A0C0E";
     document.getElementById("navigation").style.borderBottomColor = "#008b8b";
     document.getElementById("logo-n").src = "images/logo-transparent-design.png";
     document.getElementById("nav-tab").style.backgroundColor = "#008b8b";
     
}

function NotHovering() {
    //We add this if to stop the not hovering effect when we passed 50px scrollheight
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop < 50) 
    {
      //When you dont hover we want the background to be transparent and the logo to be the compact logo
         
      document.getElementById("navigation").style.backgroundColor = "transparent";
      document.getElementById("navigation").style.borderBottomColor = "transparent";
      document.getElementById("logo-n").src = "images/logo-white-design.png";
      document.getElementById("logo-n").style.backgroundColor = "transparent";
      document.getElementById("nav-tab").style.backgroundColor = "transparent";
      document.getElementById("logo-n").style.boxShadow = "none";
      
         
    }
}

window.addEventListener("DOMContentLoaded", NotHovering);


//////////////////////////////////////////////////////////


/////SKILLS/////
document.addEventListener('DOMContentLoaded', function() {
    animateSkills();
});

function animateSkills() {
    const categories = document.querySelectorAll('.category');

    categories.forEach((category, index) => {
        setTimeout(() => {
            category.style.opacity = '1';
            category.style.transform = 'translateY(0)';
        }, index * 500);
    });
}


// SLIDER

let currentIndex = 0;
const totalSlides = document.querySelectorAll('.home-case').length;
let isMobile = false; // Variable to track if it's a mobile device

// Function to check if the device screen width is below a certain threshold (e.g., for mobile devices)
function checkMobile() {
  const screenWidth = window.innerWidth;
  isMobile = screenWidth <= 768; // Adjust the threshold as needed
}

function showSlide(index) {
  const slides = document.querySelectorAll('.home-case');
  
  // Hide all slides
  slides.forEach(slide => {
    slide.style.transition = 'transform 0.5s ease-in-out'; // Add transition
    slide.style.transform = `translateX(-${index * 100}%)`; // Adjust for multiple slides
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Initial setup
checkMobile(); // Check if it's a mobile device on page load
if (!isMobile) { // Execute the slider only if it's not a mobile device
  showSlide(currentIndex);
  setInterval(nextSlide, 5000);
}


