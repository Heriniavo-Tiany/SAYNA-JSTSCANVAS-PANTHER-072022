// popup2
const form = document.querySelector('form');
const popup = document.getElementById('popup2');
const questionSuivanteBtn = document.getElementById('question-suivante');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Display the popup
    popup.classList.add('popup2-active');
});

questionSuivanteBtn.addEventListener('click', function() {
    // Hide the popup
    popup.classList.remove('popup2-active');
});
