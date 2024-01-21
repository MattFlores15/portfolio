/////////////SIDEBAR/////////////////

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