// 1. Update tahun otomatis di footer
document.getElementById('tahun').textContent = new Date().getFullYear();

// 2. Smooth scrolling (scroll otomatis yang mulus) saat menu diklik
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Tutup menu hamburger di HP setelah diklik
        const navCollapse = document.getElementById('navMenu');
        if (navCollapse.classList.contains('show')) {
            new bootstrap.Collapse(navCollapse).hide();
        }
    });
});

// 3. Efek bayangan pada Navbar saat halaman di-scroll ke bawah
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});