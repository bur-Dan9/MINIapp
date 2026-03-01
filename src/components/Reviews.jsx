import React, { useState, useRef } from 'react';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';

const Reviews = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
    };

    const reviews = [
        {
            text: "AWM OS полностью изменил наш подход к рекламе. Мы сократили расходы на агентства и получили рост ROI на 140% всего за месяц.",
            author: "Дмитрий К.",
            company: "CEO TechStream",
            rating: 5
        },
        {
            text: "Больше всего поразила прозрачность. Я в любой момент пишу в Telegram и получаю точный отчет по всем кампаниям от AI-ассистента.",
            author: "Анна М.",
            company: "Founder Bloom",
            rating: 5
        },
        {
            text: "Система развернулась за 3 дня. Качество контента, который генерируют их агенты, выше, чем у многих SMM-специалистов.",
            author: "Игорь В.",
            company: "Ecommerce Manager",
            rating: 5
        }
    ];

    return (
        <section className="py-24 bg-bg border-t border-card-border" id="reviews">
            <div className="page-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-text mb-6">
                        Голоса наших партнеров
                    </h2>
                    <p className="text-muted-text text-lg max-w-2xl mx-auto">
                        Реальные истории успеха компаний, перешедших на AI-автопилот.
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar"
                >
                    {reviews.map((review, idx) => (
                        <div key={idx} className="glass-card p-10 rounded-[32px] flex flex-col h-full relative w-[85vw] shrink-0 md:w-auto snap-center">
                            <div className="absolute top-8 right-10 text-brand-purple/20">
                                <MessageCircle className="w-12 h-12" />
                            </div>
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-brand-purple fill-brand-purple" />
                                ))}
                            </div>
                            <p className="text-text font-medium leading-relaxed mb-8 flex-grow">
                                "{review.text}"
                            </p>
                            <div className="pt-6 border-t border-card-border">
                                <div className="font-bold text-text">{review.author}</div>
                                <div className="text-xs text-muted-text mt-1">{review.company}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Swipe Indicator */}
                <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-brand-purple/60">
                    <div className="flex gap-1.5">
                        {reviews.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-4 bg-brand-purple" : "w-1.5 bg-brand-purple/40"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
