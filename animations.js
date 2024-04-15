var coll = document.getElementsByClassName("collapsible");
            var i;
            
            for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if (content.style.maxHeight) {
                  content.style.maxHeight = null;
                } else {
                  content.style.maxHeight = content.scrollHeight + "px";
                }
              });
            }
var coll = document.getElementsByClassName("collapsible2");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".grayscale");
    const threshold = 0; // Adjust this value to control when the transition happens
  
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= -window.innerHeight * (1 - threshold) &&
        rect.bottom <= (window.innerHeight * threshold || document.documentElement.clientHeight)
      );
    }
  
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
  });