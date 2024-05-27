
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

document.addEventListener("DOMContentLoaded", function () {
  const leftDiv = document.querySelector('.left');
  const rightDiv = document.querySelector('.right');
  const containerContent = document.querySelector('.container-content');
  const initialLeftTop = leftDiv.getBoundingClientRect().top;

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const rightDivBottom = rightDiv.getBoundingClientRect().bottom + window.scrollY;
    const containerBottom = containerContent.getBoundingClientRect().bottom + window.scrollY;
    const leftDivHeight = leftDiv.offsetHeight;

    if (scrollTop + initialLeftTop + leftDivHeight > containerBottom) {
      leftDiv.style.top = (containerBottom - leftDivHeight - initialLeftTop) + '10px';
    } else {
      leftDiv.style.top = '100px';
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const left3Div = document.querySelector('.left3');
  const right3Div = document.querySelector('.right3');
  const containerContent = document.querySelector('.container-content2');
  const initialLeftTop = left3Div.getBoundingClientRect().top;

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const right3DivBottom = right3Div.getBoundingClientRect().bottom + window.scrollY;
    const containerBottom = containerContent.getBoundingClientRect().bottom + window.scrollY;
    const leftDivHeight = left3Div.offsetHeight;

    if (scrollTop + initialLeftTop + leftDivHeight > containerBottom) {
      left3Div.style.top = (containerBottom - leftDivHeight - initialLeftTop) + '0px';
    } else {
      left3Div.style.top = '100px';
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const left2Div = document.querySelector('.left2');
  const right2Div = document.querySelector('.right2');
  const containerContent = document.querySelector('.content');
  const initialrightTop = right2Div.getBoundingClientRect().top;

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const right2DivBottom = right2Div.getBoundingClientRect().bottom + window.scrollY;
    const containerBottom = containerContent.getBoundingClientRect().bottom + window.scrollY;
    const rightDivHeight = right2Div.offsetHeight;

    if (scrollTop + initialrightTop + rightDivHeight > containerBottom) {
      right2Div.style.top = (containerBottom - rightDivHeight - initialrightTop) + '0px';
    } else {
      right2Div.style.top = '100px';
    }
  });
});

function scrollToTop() {
  let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentScroll - (currentScroll / 50)); // Adjust the divisor for speed
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(item => {
      item.addEventListener('mouseover', () => {
          // Remove arrow from all items
          projectItems.forEach(i => {
              const arrow = i.querySelector('.arrow');
              if (arrow) {
                  arrow.remove();
              }
          });
          // Add arrow to the hovered item
          const arrow = document.createElement('div');
          arrow.classList.add('arrow');
          item.appendChild(arrow);
      });

      item.addEventListener('mouseout', () => {
          const arrow = item.querySelector('.arrow');
          if (arrow) {
              arrow.remove();
          }
      });
  });
});









