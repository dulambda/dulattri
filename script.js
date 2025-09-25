document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.quizz-card');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, 200 * i);
    });
});