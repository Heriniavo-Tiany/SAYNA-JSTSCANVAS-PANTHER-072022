// ---- Zoom sur les titres H1 ----
const titleZoom = document.querySelector('.title-zoom');
const titleElements = titleZoom.querySelectorAll('h1');

titleElements.forEach(function(element) {
    element.style.transition = 'transform 0.3s ease';
});

titleZoom.addEventListener('mouseover', function() {
    titleElements.forEach(function(element) {
        element.style.transformOrigin = 'top left';
        element.style.transform = 'scale(1.3)';
    });
});

titleZoom.addEventListener('mouseout', function() {
    titleElements.forEach(function(element) {
        element.style.transformOrigin = 'top left';
        element.style.transform = 'scale(1)';
    });
});
