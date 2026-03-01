import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Сергей",
            role: "Владелец производства",
            text: "Боялся, что снова попаду на мошенников или любителей «скрытых платежей». Здесь всё четко: сначала показали аудит и прогноз прибыли, потом начали работу. Сайт окупился за первый месяц, конкуренты теперь далеко позади."
        },
        {
            name: "Анна",
            role: "Экспорт товаров в Европу",
            text: "Раньше маркетологи заставляли ждать месяцами и навязывали скучные шаблоны. Команда внедрила AI под мой запрос за 2 недели. Теперь я понимаю, откуда приходят продажи, а не просто смотрю на пустые цифры охватов."
        },
        {
            name: "Игорь",
            role: "IT-сервис",
            text: "Самое ценное — коммуникация. После оплаты не пропали, отвечают быстро, на пальцах объясняют всю «техничку». Это лучше, чем пытаться разобраться самой или нанимать людей в штат."
        }
    ];

    return (
        <section className="w-full relative py-24 overflow-hidden" id="reviews">
            {/* Subtle glow at section level */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/[0.02] rounded-full blur-[150px] pointer-events-none z-[-1]" />

            <div className="page-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Реальные результаты в СНГ и Европе</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Посмотрите, как мы масштабировали аналогичные бизнесы в вашем регионе. Только реальные цифры прибыли и ROI, а не купленные рейтинги.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-3xl relative flex flex-col h-full">
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />

                            <p className="text-lg leading-relaxed mb-8 relative z-10 italic">
                                «{review.text}»
                            </p>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="shrink-0 w-12 h-12 bg-magenta/20 border border-magenta/40 shadow-[0_0_15px_rgba(232,28,255,0.2)] rounded-full flex items-center justify-center font-serif text-xl font-bold text-white">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold">{review.name}</h4>
                                    <p className="text-magenta text-sm">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
