
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

window.addEventListener('scroll', function() {
  const leftDiv = document.querySelector('.left');
  const rightDiv = document.querySelector('.right');
  const container = document.querySelector('.container-content');
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const containerRect = container.getBoundingClientRect();
  const leftDivRect = leftDiv.getBoundingClientRect();
  const rightDivRect = rightDiv.getBoundingClientRect();

  // Calculate the top and bottom positions of the container relative to the document
  const containerTop = containerRect.top + scrollTop;
  const containerBottom = containerTop + containerRect.height;

  // Calculate the bottom position of the right div relative to the document
  const rightDivBottom = rightDivRect.bottom + scrollTop;

  // Calculate the bottom position of the left div relative to the viewport
  const leftDivBottom = leftDivRect.bottom + scrollTop;

  // Check if the left div should be fixed or absolute based on scroll position
  if (scrollTop >= containerTop && leftDivBottom < rightDivBottom) {
    leftDiv.style.position = 'fixed';
    leftDiv.style.top = '0'; // Stick at the top of the viewport
  } else if (leftDivBottom >= rightDivBottom) {
    leftDiv.style.position = 'absolute';
    leftDiv.style.top = (rightDivBottom - containerTop - leftDivRect.height) + 'px'; // Stick at the bottom of the right div
  } else {
    leftDiv.style.position = 'absolute';
    leftDiv.style.top = '0'; // Reset to initial positioning
  }
});