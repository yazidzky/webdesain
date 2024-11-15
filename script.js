window.addEventListener('load', () => {
    // Splash screen disappearance after 5 seconds (3s animation + 2s fade out)
    setTimeout(() => {
        // Sembunyikan splash screen setelah animasi keluar selesai
        document.getElementById('splash-screen').style.display = 'none';

        // Tampilkan konten utama dan navbar
        document.getElementById('main-content').style.display = 'block';  // Tampilkan halaman utama setelah splash screen
        document.getElementById('navbar').style.opacity = 1;  // Navbar muncul setelah splash screen hilang
        document.getElementById('navbar').style.transition = 'opacity 1s'; // Smooth transition saat navbar muncul
    }, 5000);  // Tunda selama 5 detik (3s animasi + 2s fade out)
});

function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('active');
}
function toggleFlip(card) {
  card.classList.toggle('flipped');
}

// Toggle menu untuk perangkat mobile
function toggleMenu() {
  const menu = document.getElementById('navbarMenu');
  menu.classList.toggle('active');
}
// Fungsi untuk toggle efek flip pada kartu saat diklik
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
const sections = document.querySelectorAll('.about, .timeline, .direction, .cta');
const options = {
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(50px)';
        }
    });
}, options);
sections.forEach(section => {
    observer.observe(section);
});

