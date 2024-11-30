// Add event listeners to images
const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2)';
  });
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});

// Add event listener to header images
const headerImages = document.querySelectorAll('.header-images img');
headerImages.forEach(image => {
  image.addEventListener('click', () => {
    alert(`You clicked on ${image.alt}!`);
  });
});

// Add event listener to left sidebar images
const leftSidebarImages = document.querySelectorAll('.left-sidebar img');
leftSidebarImages.forEach(image => {
  image.addEventListener('mousedown', () => {
    image.style.cursor = 'grabbing';
  });
  image.addEventListener('mouseup', () => {
    image.style.cursor = 'grab';
  });
});

// Add event listener to main content images
const mainContentImages = document.querySelectorAll('.main-content img');
mainContentImages.forEach(image => {
  image.addEventListener('click', () => {
    alert(`You clicked on ${image.alt}!`);
  });
});
