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




///////////////////////////////////////////

const slides = document.querySelectorAll('.slide');
let prevRatio = 0.0;

const slideIn = (entries, observer) => {
  entries.forEach(entry => {
    const currentRatio = entry.intersectionRatio;
    const isIntersecting = entry.isIntersecting;
    
    // Check if the element is scrolling up or down
    const isScrollingDown = currentRatio > prevRatio;
    const isScrollingUp = currentRatio < prevRatio;
    
    if (isIntersecting) {
      // Slide left to right if scrolling down or right to left if scrolling up
      if (isScrollingDown) {
        entry.target.classList.add('slide-left-to-right');
      } else if (isScrollingUp) {
        entry.target.classList.add('slide-right-to-left');
      }
    } else {
      // Slide right to left if scrolling down or left to right if scrolling up
      if (isScrollingDown) {
        entry.target.classList.remove('slide-left-to-right');
        entry.target.classList.add('slide-right-to-left');
      } else if (isScrollingUp) {
        entry.target.classList.remove('slide-right-to-left');
        entry.target.classList.add('slide-left-to-right');
      }
    }

    prevRatio = currentRatio;
  });
};

const slideObserver = new IntersectionObserver(slideIn, {
  threshold: 0.5
});

slides.forEach(slide => {
  slideObserver.observe(slide);
});



///LEFT TO RIGHT///

const slideLeftToRight = document.querySelector('.slide-left-to-right');

const slideIn1 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      slideLeftToRight.style.opacity = 1;
      slideLeftToRight.style.transform = 'translateX(0)';
    }
  });
};

const slideObserver1 = new IntersectionObserver(slideIn1, {
  threshold: 0.5
});

slideObserver1.observe(slideLeftToRight);





///RIGHT TO LEFT///

const slideRightToLeft = document.querySelector('.slide-right-to-left');

const slideIn2 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      slideRightToLeft.style.opacity = 1;
      slideRightToLeft.style.transform = 'translateX(0)';
    }
  });
};

const slideObserver2 = new IntersectionObserver(slideIn2, {
  threshold: 0.5
});

slideObserver2.observe(slideRightToLeft);

///LEFT TO RIGHT///
const slideLeftToRight2 = document.querySelector('.slide-left-to-right2');

const slideIn3 = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      slideLeftToRight2.style.opacity = 1;
      slideLeftToRight2.style.transform = 'translateX(0)';
    }
  });
};

const slideObserver3 = new IntersectionObserver(slideIn3, {
  threshold: 0.5
});

slideObserver3.observe(slideLeftToRight2);


///////////////////////////////////////////////////////////////