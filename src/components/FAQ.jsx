import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Насколько безопасны мои данные?",
            answer: "Мы используем энтерпрайз-уровень защиты данных. Вся коммуникация с AI-агентами шифруется, а ваши бизнес-метрики используются только для оптимизации ваших же кампаний."
        },
        {
            question: "Когда официальный запуск AWM OS?",
            answer: "Мы находимся в стадии закрытого бета-тестирования. Полноценный запуск запланирован на второй квартал 2026 года. Участники Waitlist получат ранний доступ и специальные условия."
        },
        {
            question: "Как работает система Waitlist?",
            answer: "После регистрации вы попадаете в очередь. По мере расширения мощностей мы приглашаем новых участников. Ваш порядковый номер и статус можно отслеживать в нашем Telegram-боте."
        }
    ];

    return (
        <section className="w-full py-8 bg-bg border-t border-card-border">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-text mb-12 text-center">
                    FAQ
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-card-border hover:border-brand-purple/30 transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-6 flex items-center justify-between text-left"
                            >
                                <span className="font-bold text-text">{faq.question}</span>
                                {openIndex === idx ? <ChevronUp className="w-5 h-5 text-brand-purple" /> : <ChevronDown className="w-5 h-5 text-muted-text" />}
                            </button>
                            {openIndex === idx && (
                                <div className="px-6 pb-6 text-muted-text leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
