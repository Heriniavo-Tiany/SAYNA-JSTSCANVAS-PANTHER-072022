// ---- Zoom sur les titres H1 ----
const titleZoom = document.querySelector('.title-zoom');
const titleElements = titleZoom.querySelectorAll('h1');

titleElements.forEach(function (element) {
    element.style.transition = 'transform 0.3s ease';
});

titleZoom.addEventListener('mouseover', function () {
    titleElements.forEach(function (element) {
        element.style.transformOrigin = 'top left';
        element.style.transform = 'scale(1.3)';
    });
});

titleZoom.addEventListener('mouseout', function () {
    titleElements.forEach(function (element) {
        element.style.transformOrigin = 'top left';
        element.style.transform = 'scale(1)';
    });
});


// ---- Zoom sur les images ----
const imgElements = document.querySelectorAll('.image-zoom');

imgElements.forEach(function (element) {
    element.style.transition = 'transform 0.3s ease';
});

imgElements.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        element.style.transformOrigin = 'center';
        element.style.transform = 'scale(1.1)';
    });
});

imgElements.forEach(function (element) {
    element.addEventListener('mouseout', function () {
        element.style.transformOrigin = 'center';
        element.style.transform = 'scale(1)';
    });
});

// -------- Fixed icons on scroll --------
window.addEventListener('scroll', function() {
    const image = document.querySelector('.top-left-image');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    image.style.transition = 'top 0.3s ease';
    image.style.top = scrollTop + 'px';
});

window.addEventListener('scroll', function() {
    const iconsDiv = document.querySelector('.icons');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    iconsDiv.style.transition = 'top 0.3s ease';
    iconsDiv.style.top = (170 + scrollTop) + 'px';
});
