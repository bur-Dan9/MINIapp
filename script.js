document.addEventListener('DOMContentLoaded', () => {
  // 1. Инициализация Telegram WebApp
  const tg = window.Telegram?.WebApp;

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

  // --- ОТПРАВКА ФОРМЫ (Variant B: fetch + initData) ---
  const API_URL = 'https://ai-bot-a3aj.onrender.com/api/leads/miniapp';
  const waitlistForm = document.getElementById('waitlistForm');

  if (waitlistForm) {
    waitlistForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = e.target.querySelector('button');
      const originalText = btn.innerText;

      // Визуальный фидбек начала загрузки
      btn.innerText = 'ОТПРАВКА...';
      btn.disabled = true;
      btn.style.opacity = '0.7';

      // Собираем данные
      const nameInput = waitlistForm.querySelector('input[placeholder="Ваше имя"]');
      const nicheInput = waitlistForm.querySelector('input[placeholder*="Ниша"]');
      const contactInput = waitlistForm.querySelector('input[placeholder*="Telegram"]');

      const data = {
        name: nameInput ? nameInput.value : 'Аноним',
        niche: nicheInput ? nicheInput.value : 'Не указана',
        contact: contactInput ? contactInput.value : 'Нет контакта'
      };

      // Проверка Telegram окружения
      if (!tg) {
        alert('Ошибка: Откройте приложение через Telegram бота.');
        btn.innerText = originalText;
        btn.disabled = false;
        btn.style.opacity = '1';
        return;
      }

      // initData — обязательная часть для проверки на сервере
      const payload = {
        initData: tg.initData || '',
        form: data
      };

      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const text = await res.text();
        if (!res.ok) throw new Error(text);

        // Успех
        btn.innerText = 'ГОТОВО! ДАННЫЕ ОТПРАВЛЕНЫ';
        btn.style.background = '#00ff88';

        // Можно закрыть miniapp (если хочешь)
        // tg.close();

      } catch (error) {
        console.error('Ошибка отправки:', error);
        btn.innerText = 'ОШИБКА ОТПРАВКИ';
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
