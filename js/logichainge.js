window.addEventListener('scroll', function() {
  var sidebar = document.querySelector('.sidebar');
  var projectContainer = document.querySelector('.project-container');
  var projectBasics = document.getElementById('project-basics');
  var projectOverview = document.getElementById('project-overview');
  var projectChallenge = document.getElementById('project-challenge');
  var projectProcess = document.getElementById('project-process');
  var projectGoals = document.getElementById('project-goals');
  var projectDesign = document.getElementById('project-design');
  var projectDevelopment = document.getElementById('project-development');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop >= projectContainer.offsetTop && scrollTop < projectBasics.offsetTop) {
    sidebar.style.opacity = 0;
  } else if (scrollTop >= projectBasics.offsetTop && scrollTop < projectOverview.offsetTop) {
    sidebar.style.opacity = 1;
  } else if (scrollTop >= projectOverview.offsetTop && scrollTop < projectChallenge.offsetTop) {
    sidebar.style.opacity = 1;
  } else if (scrollTop >= projectChallenge.offsetTop && scrollTop < projectProcess.offsetTop) {
    sidebar.style.opacity = 1;
  } else if (scrollTop >= projectProcess.offsetTop && scrollTop < projectGoals.offsetTop) {
    sidebar.style.opacity = 1;
  } else if (scrollTop >= projectGoals.offsetTop && scrollTop < projectDesign.offsetTop) {
    sidebar.style.opacity = 1;
  } else if (scrollTop >= projectDesign.offsetTop && scrollTop < projectDevelopment.offsetTop) {
    sidebar.style.opacity = 1;
  } else if (scrollTop >= projectDevelopment.offsetTop) {
    sidebar.style.opacity = 1;
  } else {
    sidebar.style.opacity = 0;
  }
});








 
 
 
var mybutton = document.getElementById("myBtn");
var sidebar = document.getElementById("sidebar");
var footer = document.getElementById("footer");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (window.innerHeight + window.scrollY >= footer.offsetTop) {
    mybutton.style.display = "none";
  } else if (window.scrollY === 0) {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
    mybutton.style.display = "block";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






 
 // Function to check if an element is in the viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add the 'show' class to visible cards
function showVisibleCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    if (isElementInViewport(card)) {
      card.classList.add('show');
    }
  });
}

// Add scroll event listener to show cards on scroll
window.addEventListener('scroll', showVisibleCards);

// Show initial visible cards
showVisibleCards();





const toggleArrows = document.querySelectorAll('.toggle-arrow');
const pdfContainers = document.querySelectorAll('.pdf-container');

toggleArrows.forEach((toggleArrow, index) => {
  toggleArrow.addEventListener('click', function() {
    const isOpen = pdfContainers[index].style.display === 'flex';

    if (isOpen) {
      pdfContainers[index].style.display = 'none';
      toggleArrow.querySelector('i').classList.remove("fa-angles-up");
      toggleArrow.querySelector('i').classList.add("fa-angles-down");
    } else {
      pdfContainers[index].style.display = 'flex';
      toggleArrow.querySelector('i').classList.remove("fa-angles-down");
      toggleArrow.querySelector('i').classList.add("fa-angles-up");
    }
  });
});





 
// // Learning outcomes JSON object
// var learningOutcomes = {
//   "project-basics": ["Professional Duties"],
//   "project-overview": ["Situation-Orientation", "Professional Duties"],
//   "project-challenge": ["Situation-Orientation", "Investigative Problem Solving"],
//   "project-process": ["Future-Oriented Organisation", "Targeted Interaction", "Situation-Orientation", "Personal Leadership"],
//   "project-goals": ["Future-Oriented Organisation", "Investigative Problem Solving"],
//   "project-research": ["Investigative Problem Solving", "Targeted Interaction"],
//   "project-design": ["Professional Duties", "Targeted Interaction", "Situation-Orientation"],
//   "project-development": ["Targeted Interaction", "Professional Duties", "Situation-Orientation", "Investigative Problem Solving"],
//   "project-results": ["Future-Oriented Organisation","Situation-Orientation", "Investigative Problem Solving"],
//   "project-conclusion": ["Personal Leadership", "Future-Oriented Organisation","Professional Duties", "Investigative Problem Solving"],
// };

// // Mapping of learning outcomes to colors
// var learningOutcomeColors = {
//   "Professional Duties": "darkmagenta",
//   "Situation-Orientation": "darkslateblue",
//   "Future-Oriented Organisation": "darkgreen",
//   "Investigative Problem Solving": "darkorange",
//   "Personal Leadership": "darkred",
//   "Targeted Interaction": "pink",
// };

// var tagColors = [ "darkmagenta", "darkslateblue", "darkgreen", "darkorange", "darkred", "pink" ];

// // Function to create the tags and add them to the appropriate sections
// function addLearningOutcomeTags() {
//   var i = 0; // Counter for tagColors array
//   for (var sectionId in learningOutcomes) {
//     if (learningOutcomes.hasOwnProperty(sectionId)) {
//       var section = document.getElementById(sectionId);
//       var tags = learningOutcomes[sectionId];

//       var learningOutcomeDiv = section.querySelector('.learning-outcomes');
//       var tagDiv = document.createElement('div');
//       tagDiv.className = 'tags';

//       tags.forEach(function(tag) {
//         var tagSpan = document.createElement('span');
//         tagSpan.textContent = tag;
//         tagSpan.className = 'tag';

//         // Apply color from the learningOutcomeColors object
//         var color = learningOutcomeColors[tag];
//         if (color) {
//           tagSpan.style.backgroundColor = color;
//         } else {
//           tagSpan.style.backgroundColor = tagColors[i]; // Apply color from the tagColors array
//           i++;
//           if (i >= tagColors.length) {
//             i = 0;
//           }
//         }

//         tagDiv.appendChild(tagSpan);
//       });

//       learningOutcomeDiv.appendChild(tagDiv);
//     }
//   }
// }

// // Call the function to add the learning outcome tags
// addLearningOutcomeTags();





// Fetch image details from JSON file
fetch('designImageData.json')
  .then(response => response.json())
  .then(data => {
    const flowGallery = document.getElementById('flow-gallery');
    const sketchesGallery = document.getElementById('sketches-gallery');
    const wireframesGallery = document.getElementById('wireframes-gallery');
    const prototypeGallery = document.getElementById('prototype-gallery');

    // Render image gallery for the user flow
    data.flow.forEach(flow => {
      const mainImage = createImageElement(flow.mainImage, flow.shortText, flow.longText);
      flowGallery.appendChild(mainImage);
      const subImages = createSubImages(flow.subImages);
      flowGallery.appendChild(subImages);
    });

    // Render image gallery for sketches
    data.sketches.forEach(sketch => {
      const mainImage = createImageElement(sketch.mainImage, sketch.shortText, sketch.longText);
      sketchesGallery.appendChild(mainImage);
      const subImages = createSubImages(sketch.subImages);
      sketchesGallery.appendChild(subImages);
    });

    // Render image gallery for wireframes
    data.wireframes.forEach(wireframe => {
      const mainImage = createImageElement(wireframe.mainImage, wireframe.shortText, wireframe.longText);
      wireframesGallery.appendChild(mainImage);
      const subImages = createSubImages(wireframe.subImages);
      wireframesGallery.appendChild(subImages);
    });

    // Render image gallery for prototype
    data.prototype.forEach(proto => {
      const mainImage = createImageElement(proto.mainImage, proto.shortText, proto.longText);
      prototypeGallery.appendChild(mainImage);
      const subImages = createSubImages(proto.subImages);
      prototypeGallery.appendChild(subImages);
    });
  });

// Helper function to create the main image element
function createImageElement(image, shortText, longText) {
  const mainImage = document.createElement('div');
  mainImage.classList.add('main-image');
  mainImage.innerHTML = `
    <img src="${image.src}" alt="${image.alt}" onclick="zoomIn(event)"/>
    <div class="image-text">${shortText}</div>
    <div class="image-long-text">${longText}</div>
  `;
  return mainImage;
}

// Helper function to create the sub images element
function createSubImages(subImages) {
  const subImageContainer = document.createElement('div');
  subImageContainer.classList.add('sub-images');
  subImages.forEach(subImage => {
    const subImageElement = document.createElement('div');
    subImageElement.classList.add('sub-image');
    subImageElement.innerHTML = `
      <img src="${subImage.src}" alt="${subImage.alt}" onclick="zoomIn(event)"/>
      <div class="image-text">${subImage.shortText}</div>
      <div class="image-long-text">${subImage.longText}</div>
    `;
    subImageContainer.appendChild(subImageElement);
  });
  return subImageContainer;
}

function zoomIn(event) {
  const image = event.target;
  const zoomedImage = document.createElement('div');
  zoomedImage.classList.add('zoomed-image');
  zoomedImage.innerHTML = `
    <span class="zoomed-image-close">&times;</span>
    <img src="${image.src}" alt="${image.alt}" />
    <div class="image-long-text">${image.nextElementSibling.nextElementSibling.textContent}</div>
  `;
  document.body.appendChild(zoomedImage);

  const closeIcon = zoomedImage.querySelector('.zoomed-image-close');
  closeIcon.addEventListener('click', function () {
    document.body.removeChild(zoomedImage);
  });
}




document.addEventListener('DOMContentLoaded', function () {
  const zoomableImages = document.querySelectorAll('.zoomable-image img');
  const sprintData = [
    {
      imageSrc: 'images/PoC-v1.0.png',
      title: 'Sprint 1',
      description: 'In this Sprint, the main focus was to set the base environment for our project as well as identify the most useful components from the main branch of the SaaS platform.',
      additionalText: 'Additionally, we tried to set up a hard-coded version of the module to be able to test the functionality of the components and the usefulness of this approach. Consequently, we decided to discard this approach and focus on the main framework used in the SaaS platform.'
    },
    {
      imageSrc: 'images/logichainge-groupage-main.png',
      title: 'Sprint 2',
      description: 'This Sprint was focused on creating the main Views of the module. We also started working with mock data in order to establish an initial approach at how to handle database strutcture and its implementation with the front-end',
      additionalText: 'Debugging in this Sprint was all about getting familiar with the framework established by the SaaS platform and how we could improve from it.'
    },
    {
      imageSrc: 'images/logichainge-groupage-main2.png',
      title: 'Sprint 3',
      description: 'In Sprint 3, we started working with visual elements that would showcase key information to the user, such as donut charts that showcased the availability of the linehauls, as well as other important data that would be useful for the user to understand the flow of our module.',
      additionalText: 'We consider this Sprint a key point in our development, since it was in this one where we started to implement back-end database functionality.'
    },
    {
      imageSrc: 'images/logichainge-groupage-confirmation.png',
      title: 'Sprint 4',
      description: 'Sprint 4 was were we started to implement more in-depth the back-end and front-end in order to establish a realistic approach at the key functionalities of the module. We also made the transfer to a newly created Vuetify environment that had a more streamlined coding, detached from the main SaaS platform in that regard in order to ease our debugging.',
      additionalText: 'Is in this Sprint where the design choices made in the prototype started to take shape. Elements that were considered Must Have in those designs made their way into the development phase and started showcasing our ideas.'
    },
    {
      imageSrc: 'images/logichainge-groupage-linehauls.png',
      title: 'Sprint 5',
      description: 'For this Sprint, we focused our efforts into the Edit Linehauls functionality, as we believed it a key factor in adding value to our module and separate us from the competition. Not only that but we also started working on the "Add a new linehaul" functionality, which would be the main way of adding personalized new linehauls to the database.',
      additionalText: 'It is here where debugging started to become a more important part of our development, as we started to encounter more and more bugs that needed to be fixed in order to progress further with our module.'
    },
    {
      imageSrc: 'images/logichainge-groupage-addnewlinehauls.png',
      title: 'Sprint 6',
      description: 'In Sprint 6, it was all about working in the existing functionalities we had in order to make them more user-friendly and more in line with the design choices we made in the prototype. This was also a decision made in order to be able to showcase this key features we worked on to our Stakeholders within Logichainge.',
      additionalText: 'The feedback received from the Stakeholders was very positive, and it helped us to understand what we needed to focus on in order to improve our module, both in front-end and back-end functionalities.'
    },
    // Add more sprints as needed
  ];

  zoomableImages.forEach(function (image, index) {
    image.addEventListener('click', function () {
      const modalId = `modal-${index + 1}`;
      const modalContainer = document.getElementById('modal-container');

      const sprint = sprintData[index];
      const imageSrc = sprint.imageSrc;
      const textContent = {
        title: sprint.title,
        description: sprint.description,
        additionalText: sprint.additionalText
      };

      const modalHTML = `
        <div class="modal" id="${modalId}">
          <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${imageSrc}" alt="Sprint Image">
            <h4>${textContent.title}</h4>
            <p>${textContent.description}</p>
            <p>${textContent.additionalText}</p>
          </div>
        </div>
      `;

      modalContainer.innerHTML = modalHTML;

      const modal = document.getElementById(modalId);
      const closeModal = modal.querySelector('.close-modal');

      modal.style.display = 'block';

      closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
        modalContainer.innerHTML = '';
      });

      window.addEventListener('click', function (event) {
        if (event.target === modal) {
          modal.style.display = 'none';
          modalContainer.innerHTML = '';
        }
      });
    });
  });
});
