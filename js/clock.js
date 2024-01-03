


///////WEEK////////
function highlightCurrentDay() {
  const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  
  const daysContainer = document.getElementById('days-of-week');
  daysOfWeek.forEach((day, index) => {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;
    
    if (index === currentDay) {
      dayElement.classList.add('highlight');
    }
    
    daysContainer.appendChild(dayElement);
  });
}

highlightCurrentDay();


//////////
