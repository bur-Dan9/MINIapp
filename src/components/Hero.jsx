import React, { useState, useRef } from 'react';
import { ArrowRight, Play, Shield, Zap, BarChart, Users } from 'lucide-react';
import Metrics from './Metrics';

const Hero = ({ onJoinWaitlist }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollPosition = scrollRef.current.scrollLeft;
        const itemWidth = scrollRef.current.clientWidth;
        const newIndex = Math.round(scrollPosition / itemWidth);
        setActiveIndex(newIndex);
    };

    return (
        <>
            <section className="relative flex flex-col justify-center px-0 pt-24 pb-10 overflow-x-hidden w-full">
                {/* Background Glows */}
                <div className="absolute bottom-[10%] left-0 w-[300px] h-[300px] bg-brand-magenta/10 dark:bg-brand-magenta/5 rounded-full blur-[100px] pointer-events-none -z-0" />

                <div className="w-full px-4 lg:px-16 flex flex-col lg:flex-row justify-center gap-6 items-center z-10 relative">
                    {/* Left Content */}
                    <div className="min-w-0 w-full lg:w-1/2 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold mb-6 border border-brand-purple/20 animate-pulse max-w-full">
                            <span className="relative flex h-2 w-2 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-purple opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-purple"></span>
                            </span>
                            <span className="truncate">AWM OS Beta: Осталось 12 мест на этот месяц</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.1] tracking-tight text-text mb-6">
                            AWM OS: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">
                                ВАШ МАРКЕТИНГ <br /> НА АВТОПИЛОТЕ
                            </span>
                        </h1>

                        <p className="text-base md:text-xl text-muted-text mb-8 max-w-xl leading-relaxed">
                            Единая AI-экосистема в Telegram, которая заменяет целый отдел маркетинга. Пока вы отдыхаете, наши агенты работают 24/7.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <button
                                onClick={onJoinWaitlist}
                                className="bg-gradient-to-r from-brand-purple to-brand-magenta text-white px-6 py-3 rounded-full font-bold text-base shadow-lg shadow-brand-purple/25 hover:scale-105 transition-all flex items-center gap-2"
                                data-open-waitlist="1"
                            >
                                Вступить в Waitlist <ArrowRight className="w-4 h-4" />
                            </button>
                            <a
                                href="https://www.instagram.com/awm_0s?igsh=MTg0b2h4YjRlZHlmZA%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-base text-text border border-card-border hover:bg-gray-50/10 transition-all"
                                aria-label="Instagram"
                            >
                                <div className="w-7 h-7 rounded-full bg-brand-purple flex items-center justify-center shrink-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </div>
                                Наш Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Metrics />

            {/* Value Cards Row */}
            <div className="w-full overflow-x-clip">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-6 snap-x snap-mandatory hide-scrollbar"
                >
                    <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all w-[85vw] shrink-0 md:w-auto snap-center">
                        <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 text-brand-purple">
                            <Shield className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">0% человеческого фактора</h3>
                        <p className="text-sm text-muted-text leading-relaxed">Система никогда не устает, не допускает ошибок в настройках и работает без выходных.</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all border-brand-purple/20 w-[85vw] shrink-0 md:w-auto snap-center">
                        <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 text-brand-purple">
                            <Users className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">10+ AI-ассистентов</h3>
                        <p className="text-sm text-muted-text leading-relaxed">Специализированные агенты для контента, рекламы, аналитики и стратегии в одном окне.</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:translate-y-[-5px] transition-all w-[85vw] shrink-0 md:w-auto snap-center">
                        <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 text-brand-purple">
                            <BarChart className="w-7 h-7" />
                        </div>
                        <h3 className="text-xl font-bold text-text mb-2">Real-time Аналитика</h3>
                        <p className="text-sm text-muted-text leading-relaxed">Молниеносная реакция на изменения рынка и автоматическая корректировка кампаний.</p>
                    </div>
                </div>

                {/* Mobile Swipe Indicator */}
                <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-brand-purple/60 pb-6">
                    <div className="flex gap-1.5">
                        {[0, 1, 2].map((idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-4 bg-brand-purple" : "w-1.5 bg-brand-purple/40"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
