document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.quizz-card');
    cards.forEach((card, i) => {
        setTimeout(() => {
            card.classList.add('fade-in-up');
        }, 200 * i);
    });
    // Bounce animation for title only
    const siteName = document.querySelector('.site-name');
        if (siteName) {
            siteName.classList.add('bounce');
            setTimeout(() => {
                siteName.classList.remove('bounce');
            }, 2500);
        }
});
function toggleMenu() {
        const menu = document.getElementById('dropdownMenu');
        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }

    // Закрывать меню при клике вне его
    document.addEventListener('click', function(event) {
        const menu = document.getElementById('dropdownMenu');
        const icon = document.querySelector('.menu-icon');
        if (!menu.contains(event.target) && !icon.contains(event.target)) {
            menu.style.display = 'none';
        }
    });