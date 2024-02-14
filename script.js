function handleDishClick(clickedImgElement) {
  // Remove 'selected-dish' class from all images
  document.querySelectorAll('.dish img').forEach(img => {
    img.classList.remove('selected-dish');
  });

  // Add 'selected-dish' class to the clicked image
  clickedImgElement.classList.add('selected-dish');

  // Update the description container
  const descriptionContainer = document.getElementById('dish-description');
  const dishDesc = clickedImgElement.nextElementSibling.nextElementSibling; 
  descriptionContainer.innerHTML = dishDesc.innerHTML;
  descriptionContainer.style.display = 'block'; 
}

// Add click event listeners to dish images
document.querySelectorAll('.dish img').forEach(img => {
  img.addEventListener('click', () => { 
    handleDishClick(img);
  });
});


// Get the button element
const mealPlanButton = document.getElementById('mealPlanButton');

// Add an event listener to navigate when clicked
mealPlanButton.addEventListener('click', function() {
  window.location.href = 'meal-plan.html';
});

// Close the description when clicking outside of it
document.addEventListener('click', (event) => {
  const descriptionContainer = document.getElementById('dish-description');
  if (!descriptionContainer.contains(event.target)) { 
    descriptionContainer.style.display = 'none'; 
  }
});
