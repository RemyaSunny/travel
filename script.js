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
  