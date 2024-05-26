
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

document.addEventListener("DOMContentLoaded", function() {
    const leftDiv = document.querySelector('.left');
    const rightDiv = document.querySelector('.right');
    const containerContent = document.querySelector('.container-content');
    const initialLeftTop = leftDiv.getBoundingClientRect().top;

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const rightDivBottom = rightDiv.getBoundingClientRect().bottom + window.scrollY;
        const containerBottom = containerContent.getBoundingClientRect().bottom + window.scrollY;
        const leftDivHeight = leftDiv.offsetHeight;

        if (scrollTop + initialLeftTop + leftDivHeight > containerBottom) {
            leftDiv.style.top = (containerBottom - leftDivHeight - initialLeftTop) + '0px';
        } else {
            leftDiv.style.top = '130px';
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
  const leftDiv = document.querySelector('.left2');
  const rightDiv = document.querySelector('.right2');
  const containerContent = document.querySelector('.content');
  const initialLeftTop = leftDiv.getBoundingClientRect().top;

  window.addEventListener('scroll', function() {
      const scrollTop = window.scrollY;
      const rightDivBottom = rightDiv.getBoundingClientRect().bottom + window.scrollY;
      const containerBottom = containerContent.getBoundingClientRect().bottom + window.scrollY;
      const leftDivHeight = leftDiv.offsetHeight;

      if (scrollTop + initialLeftTop + leftDivHeight > containerBottom) {
          leftDiv.style.top = (containerBottom - leftDivHeight - initialLeftTop) + 'px';
      } else {
          leftDiv.style.top = '0px';
      }
  });
});









