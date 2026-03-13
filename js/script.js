// Mengubah style navbar saat di-scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle menu untuk versi mobile
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    
});

// --- CAROUSEL MENU LOGIC ---
function moveCarousel(clickedItem) {
    if (clickedItem.classList.contains('item-center')) return;

    // Ambil semua elemen kartu sebagai Array
    const cards = Array.from(document.querySelectorAll('.menu-card'));
    
    // Cari index kartu yang sekarang
    let currentIndex = cards.findIndex(card => card.classList.contains('item-center'));
    let leftIndex = cards.findIndex(card => card.classList.contains('item-left'));
    let rightIndex = cards.findIndex(card => card.classList.contains('item-right'));
    let clickedIndex = cards.indexOf(clickedItem);
    cards.forEach(card => {
        card.className = 'menu-card item-hidden';
    });

    if (clickedIndex === rightIndex) {
        currentIndex = (currentIndex + 1) % cards.length;
    } 
    else if (clickedIndex === leftIndex) {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    }
    leftIndex = (currentIndex - 1 + cards.length) % cards.length;
    rightIndex = (currentIndex + 1) % cards.length;
    cards[leftIndex].className = 'menu-card item-left';
    cards[currentIndex].className = 'menu-card item-center';
    cards[rightIndex].className = 'menu-card item-right';
}