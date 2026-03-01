import React, { useState, useRef } from 'react';
import { Clock, ShieldCheck, Briefcase, ArrowRight } from 'lucide-react';

const WhyUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
    };

    const reasons = [
        {
            icon: <Clock className="w-8 h-8 text-brand-purple" />,
            title: "Скорость внедрения",
            description: "Развертывание вашего AI-отдела маркетинга за 72 часа.",
            stat: "72 часа"
        },
        {
            icon: <ShieldCheck className="w-8 h-8 text-brand-purple" />,
            title: "Никаких скрытых платежей",
            description: "Прозрачная подписка без неожиданных затрат на API или софт.",
            stat: "0 переплат"
        },
        {
            icon: <Briefcase className="w-8 h-8 text-brand-purple" />,
            title: "Реальные результаты",
            description: "Более 45 успешных кейсов в различных нишах бизнеса.",
            stat: "45+ кейсов"
        }
    ];

    return (
        <section className="py-24 bg-brand-purple-soft border-t border-card-border" id="features">
            <div className="page-container">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-text mb-6">
                        Почему выбирают нас
                    </h2>
                    <p className="text-muted-text text-lg max-w-2xl mx-auto">
                        Мы снимаем ваши страхи и риски, предоставляя готовую систему, нацеленную на результат.
                    </p>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-8 snap-x snap-mandatory hide-scrollbar"
                >
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="glass-card p-10 rounded-[32px] hover:border-brand-purple/40 transition-all group w-[85vw] shrink-0 md:w-auto snap-center">
                            <div className="mb-8 p-4 bg-brand-purple/5 rounded-2xl w-fit group-hover:bg-brand-purple/10 transition-colors">
                                {reason.icon}
                            </div>
                            <div className="text-3xl font-display font-bold text-brand-purple mb-4">
                                {reason.stat}
                            </div>
                            <h3 className="text-xl font-bold text-text mb-4">
                                {reason.title}
                            </h3>
                            <p className="text-muted-text leading-relaxed">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile Swipe Indicator */}
                <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-brand-purple/60">
                    <div className="flex gap-1.5">
                        {reasons.map((_, idx) => (
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

export default WhyUs;
