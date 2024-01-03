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

///////////////////////ABOUT PAGE/////////////////////////////

// Define the skill levels (out of 100)
// const skillLevels = {
//   figma: 85,
//   vue: 80,
//   typescript: 55,
//   javascript: 65,
//   html: 90,
//   css: 90,
//   ux: 80,
  
// };

// Set the width of each bar based on skill level
// Object.keys(skillLevels).forEach(skill => {
//   const bar = document.getElementById(skill);
//   bar.style.width = `${skillLevels[skill]}%`;
// });

// Smooth animation for bar growth upon loading
// window.addEventListener('load', () => {
//   Object.keys(skillLevels).forEach(skill => {
//     const bar = document.getElementById(skill);
//     bar.style.width = `${skillLevels[skill]}%`;
//   });
// });




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



//////////////////////////////////////////GALLERY////////////////////////////////////////////////////

// document.addEventListener("DOMContentLoaded", function() {
//   const gallery = document.querySelector(".gallery");
//   const overlay = document.querySelector(".overlay");
//   const overlayImage = document.querySelector(".overlay-image");
//   const overlayDescription = document.querySelector(".overlay-description");
//   let currentImageIndex;

//   const photos = [
//     { src: "images/img-1.jpg", description: "Description 1", type: "square" },
//     { src: "images/img-2.jpg", description: "Description 2", type: "square" },
//     { src: "images/img-3.jpg", description: "Description 3", type: "square" },
//     { src: "images/img-4.jpg", description: "Description 4", type: "square" },
//     { src: "images/img-5.jpg", description: "Description 5", type: "panoramic" },
//     { src: "images/img-6.jpg", description: "Description 6", type: "square" },
//     { src: "images/img-7.jpg", description: "Description 7", type: "panoramic" },
//     { src: "images/img-8.jpg", description: "Description 8", type: "panoramic" },
//     { src: "images/img-9.jpg", description: "Description 9", type: "tall" },
//     { src: "images/img-10.jpg", description: "Description 10", type: "panoramic" },
//     { src: "images/img-11.jpg", description: "Description 11", type: "tall" },
//     { src: "images/img-12.jpg", description: "Description 12", type: "tall" }
//     // Add more photos with their respective descriptions and types
//   ];

//   // Dynamically generate the photo grid
//   photos.forEach((photo, index) => {
//     const gridItem = document.createElement("div");
//     gridItem.classList.add("grid-item");

//     const img = document.createElement("img");
//     img.src = photo.src;
//     img.alt = photo.description;

//     gridItem.appendChild(img);
//     gallery.appendChild(gridItem);

//     // Add click event listener to each photo
//     gridItem.addEventListener("click", function() {
//       currentImageIndex = index;
//       showOverlay();
//     });
//   });

//   function showOverlay() {
//     const selectedPhoto = photos[currentImageIndex];

//     overlayImage.src = selectedPhoto.src;
//     overlayDescription.textContent = selectedPhoto.description;

//     // Calculate the sliding direction based on the clicked photo's position
//   const clickedItem = gallery.children[currentImageIndex];
//   const rect = clickedItem.getBoundingClientRect();

//   // Calculate the position and size of the gallery container
//   const containerRect = gallery.getBoundingClientRect();
//   const containerWidth = containerRect.width;
//   const containerHeight = containerRect.height;

//   // Calculate the scale factor for the image based on the type of photo
//   let scaleFactor;
//   if (selectedPhoto.type === "square") {
//     scaleFactor = 1;
//   } else if (selectedPhoto.type === "panoramic") {
//     scaleFactor = 1;
//   } else {
//     const numColumns = Math.ceil(gallery.children.length / 1.5);
//     scaleFactor = containerWidth / (numColumns * rect.width);
//   }

//   // Calculate the position and size of the image within the container
//   const imageWidth = rect.width * scaleFactor;
//   const imageHeight = rect.height * scaleFactor;
//   const imageLeft = (containerWidth - imageWidth) / 2;
//   const imageTop = (containerHeight - imageHeight) / 2;

//   // Position the overlay image within the container
//   overlayImage.style.transform = `translate(${imageLeft}px, ${imageTop}px) scale(${scaleFactor})`;

//   // Show the overlay
//   overlay.style.display = "flex";

//   // Slide the image to cover the gallery container
//   setTimeout(function() {
//     overlayImage.style.transform = `translate(0, 0) scale(${scaleFactor})`;
//   }, 100);
//   }

//   // Close overlay when clicking outside the photo
//   overlay.addEventListener("click", function() {
//     overlay.style.display = "none";
//   });
// });
