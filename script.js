document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        reveals.forEach(reveal => {
            const revealTop = reveal.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Modal logic
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModal');
    const serviceBtns = document.querySelectorAll('.service-card .btn');

    const openModal = (e) => {
        if (e) e.preventDefault();
        modalOverlay.style.display = 'flex';
        setTimeout(() => {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        }, 10);
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scroll
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 300);
    };

    serviceBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Form Submission
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'ОТПРАВКА...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            // Simulate submission
            setTimeout(() => {
                btn.innerText = 'ГОТОВО! МЫ СВЯЖЕМСЯ С ВАМИ';
                btn.classList.remove('btn-main');
                btn.style.background = '#00ff88'; // Success green
                btn.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.4)';

                // Clear form
                e.target.reset();

                // Reset/Close after delay
                setTimeout(() => {
                    closeModal();
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.disabled = false;
                        btn.style.opacity = '1';
                        btn.classList.add('btn-main');
                        btn.style.background = '';
                    }, 500);
                }, 2000);
            }, 1000);
        });
    }

    // Telegram Mini App feedback (if available)
    if (window.Telegram && window.Telegram.WebApp) {
        const webapp = window.Telegram.WebApp;
        webapp.ready();
        webapp.expand();

        // Impact vibration on button clicks
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (webapp.HapticFeedback) {
                    webapp.HapticFeedback.impactOccurred('medium');
                }
            });
        });
    }
});

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('fade-out');
        // Remove from DOM after transition to save resources
        setTimeout(() => {
            preloader.remove();
        }, 800);
    }, 2000); // Minimum view time for "wow" effect
});
