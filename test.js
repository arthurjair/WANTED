
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