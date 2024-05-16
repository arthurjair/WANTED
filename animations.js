
 function handleScroll() {
      images.forEach(image => {
        const isVisible = isElementInViewport(image);
        if (isVisible) {
          image.classList.add("color");
        } else {
          image.classList.remove("color");
        }
      });
    }
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on page load
