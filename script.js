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


// --------------- Fade in ---------------
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(function(element) {
        const elementPosition = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (elementPosition < screenHeight) {
            element.classList.add('fade-in-active');
        }
    });
}

window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('resize', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Souris
const logo = document.getElementById('black-panther-logo');

// Fonction pour mettre à jour la position du logo en fonction de la souris et de la position de défilement
function updateLogoPosition(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;

    logo.style.transform = `translate(${mouseX + scrollX}px, ${mouseY + scrollY}px)`;
}

// Fonction pour afficher le logo avec un effet fondu
function fadeInLogo() {
    logo.style.opacity = '1';
}

// Fonction pour masquer le logo avec un effet fondu
function fadeOutLogo() {
    logo.style.opacity = '0';
}

// Écouteur d'événement pour suivre le mouvement de la souris et mettre à jour la position du logo
document.addEventListener('mousemove', updateLogoPosition);

// Écouteurs d'événements pour afficher/masquer le logo lorsqu'il entre/sort de la fenêtre
document.addEventListener('mouseenter', fadeInLogo);
document.addEventListener('mouseleave', fadeOutLogo);
