// Images array - Add URLs of your images here
const images = [
    'assets/image1.jpg',
    'assets/image2.jpg',
    'assets/image3.jpg',
    // Add more images as needed
  ];
  
  // Index to keep track of the current image
  let currentIndex = 0;
  
  // Function to change the image
  function changeImage() {
    // Get the image slider container
    const slider = document.getElementById('image-slider');
  
    // Update the background image of the container
    slider.style.backgroundImage = `url(${images[currentIndex]})`;
  
    // Increment the index for the next image
    currentIndex++;
  
    // Reset index if it exceeds the length of the images array
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
  }
  
  // Initial call to changeImage function
  changeImage();
  
  // Interval to change the image every 5 seconds (5000 milliseconds)
  setInterval(changeImage, 2000);
  
  document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const destinations = document.querySelector('.destinations-container');
  
    window.changeSlide = function(n) {
      slideIndex += n;
      const destinationWidth = 320; // Adjust based on the width of each destination
      const maxIndex = destinations.children.length - 3; // Adjust for the number of visible destinations (subtract 3 for 3 visible destinations)
      
      // Check if slideIndex exceeds the maximum or minimum index
      if (slideIndex > maxIndex) {
        slideIndex = 0; // Loop back to the first image
      } else if (slideIndex < 0) {
        slideIndex = maxIndex; // Loop to the last image
      }
      
      destinations.scrollLeft = slideIndex * (destinationWidth + 20); // Adjust 20 for the spacing
    };
    
    
  });
  
  
  
  
  
