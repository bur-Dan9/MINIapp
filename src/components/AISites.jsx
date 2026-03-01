import React from 'react';
import { Layout, Smartphone, FileText, Palette, Link } from 'lucide-react';

const AISites = () => {
    const features = [
        { icon: <Layout className="w-5 h-5" />, text: "Анализ ЦА и конкурентов для структуры" },
        { icon: <FileText className="w-5 h-5" />, text: "Генерация конверсионных заголовков и текстов" },
        { icon: <Palette className="w-5 h-5" />, text: "Разработка логики и UX-архитектуры" },
        { icon: <Smartphone className="w-5 h-5" />, text: "Создание Telegram Mini-Apps под ваш бизнес" },
        { icon: <Link className="w-5 h-5" />, text: "Полная интеграция с экосистемой бренда" }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-brand-purple/5 to-bg border-t border-card-border relative overflow-hidden" id="features">
            {/* Background elements to make it prominent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"></div>
            <div className="absolute -top-[200px] -right-[200px] w-[500px] h-[500px] rounded-full bg-brand-purple/10 blur-[100px] pointer-events-none"></div>
            <div className="page-container flex flex-col lg:flex-row items-center gap-4">
                {/* Left Side - Content */}
                <div className="flex-1 min-w-0">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FDF2FF] text-brand-magenta text-sm font-bold mb-6 tracking-wide">
                        NEW SOLUTION
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-text mb-6 leading-[1.1]">
                        AI для создания сайтов и <br /> Telegram Мини-апп
                    </h2>
                    <p className="text-lg text-muted-text mb-10 leading-relaxed max-w-lg">
                        Мы не просто рисуем картинки. Мы создаем интеллектуальную упаковку вашего продукта, которая продает в Telegram и вебе.
                    </p>

                    <div className="space-y-5">
                        {features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-5 text-text font-semibold">
                                <div className="w-11 h-11 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-purple shadow-sm">
                                    {feature.icon}
                                </div>
                                <span className="text-[15px]">{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side - Visual */}
                <div className="relative w-full lg:w-auto lg:flex-1 flex flex-col items-center min-w-0">
                    <div className="relative w-64 h-64 md:w-[500px] md:h-[500px] flex items-center justify-center scale-100 lg:scale-110 transition-transform duration-500">
                        {/* Subtle glow (matching screenshot clean feel) */}
                        <div className="ai-glow ai-glow-outer w-[600px] h-[600px] opacity-20"></div>
                        <div className="ai-glow ai-glow-inner w-[400px] h-[400px] opacity-30"></div>

                        {/* AI Icon */}
                        <img
                            src="/assets/ai.png"
                            alt="AI Core"
                            className="w-full h-full relative z-10 drop-shadow-[0_20px_50px_rgba(157,0,255,0.15)] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AISites;
