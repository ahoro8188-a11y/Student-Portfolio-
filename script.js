// ===== Smooth Scroll (Optional) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== Console Greeting (Fun) =====
console.log("🚀 Hey there! Thanks for checking out my portfolio.");
console.log("📧 Reach out at: youremail@gmail.com");