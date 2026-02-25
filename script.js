document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация Telegram WebApp
    const tg = window.Telegram.WebApp;
    
    // Сообщаем Telegram, что приложение готово и разворачиваем его
    if (tg) {
        tg.ready();
        tg.expand();
    }

    // --- Анимация появления (Scroll Reveal) ---
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
    revealOnScroll();

    // --- Логика модального окна ---
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModalBtn = document.getElementById('closeModal');
    const serviceBtns = document.querySelectorAll('.service-card .btn');

    const openModal = (e) => {
        if (e) e.preventDefault();
        modalOverlay.style.display = 'flex';
        setTimeout(() => {
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }, 10);
    };

    const closeModal = () => {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            modalOverlay.style.display = 'none';
        }, 300);
    };

    serviceBtns.forEach(btn => btn.addEventListener('click', openModal));
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // --- ОТПРАВКА ФОРМЫ (Исправлено) ---
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;

            // Визуальный фидбек начала загрузки
            btn.innerText = 'ОТПРАВКА...';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            // Собираем данные. 
            // СОВЕТ: Лучше искать по селекторам, а не по индексам [0,1,2], 
            // чтобы при изменении порядка полей код не сломался.
            const nameInput = waitlistForm.querySelector('input[placeholder="Ваше имя"]');
            const nicheInput = waitlistForm.querySelector('input[placeholder*="Ниша"]');
            const contactInput = waitlistForm.querySelector('input[placeholder*="Telegram"]');

            const data = {
                name: nameInput ? nameInput.value : 'Аноним',
                niche: nicheInput ? nicheInput.value : 'Не указана',
                contact: contactInput ? contactInput.value : 'Нет контакта'
            };

            // 2. ГЛАВНОЕ: Отправка данных боту
            if (tg && tg.sendData) {
                try {
                    // Важно: tg.sendData работает ТОЛЬКО если бот запущен через KeyboardButton
                    tg.sendData(JSON.stringify(data));
                    
                    // Если данные ушли, Telegram обычно сам закрывает Mini App. 
                    // Но мы добавим визуальное подтверждение на случай задержки.
                    btn.innerText = 'ГОТОВО! ДАННЫЕ ОТПРАВЛЕНЫ';
                    btn.style.background = '#00ff88';
                    
                } catch (error) {
                    console.error("Ошибка отправки:", error);
                    btn.innerText = 'ОШИБКА СЕТИ';
                    btn.disabled = false;
                }
            } else {
                // Если открыто просто в браузере (не в Telegram)
                alert("Ошибка: Откройте приложение через Telegram бота.");
                btn.innerText = originalText;
                btn.disabled = false;
                btn.style.opacity = '1';
            }
        });
    }

    // Haptic Feedback (Виброотклик)
    if (tg && tg.HapticFeedback) {
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => {
                tg.HapticFeedback.impactOccurred('medium');
            });
        });
    }
});

// Preloader Logic
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            setTimeout(() => preloader.remove(), 800);
        }, 2000);
    }
});
