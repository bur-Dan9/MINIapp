import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    User, Globe, Search, PenTool, Share2,
    Rocket, Zap, MessageSquare, ListTodo,
    ChevronRight, ArrowRight
} from 'lucide-react';

const HowItWorks = () => {
    const [activeStage, setActiveStage] = useState(0);

    const stages = [
        {
            id: 'start',
            label: "Старт",
            icon: <User className="w-6 h-6" />,
            title: "Личный AI-ассистент",
            description: "Единая точка управления всеми процессами 24/7. Ваш персональный стратег, который знает все о вашем бизнесе."
        },
        {
            id: 'review',
            label: "Ревью",
            icon: <Globe className="w-6 h-6" />,
            title: "Анализ сайтов и соцсетей",
            description: "AI собирает данные о вашем текущем контенте, поведении аудитории и выявляет точки роста."
        },
        {
            id: 'discovery',
            label: "Рынок",
            icon: <Search className="w-6 h-6" />,
            title: "Анализ конкурентов",
            description: "Глубокий поиск рыночных паттернов и слабых мест конкурентов для создания уникального преимущества."
        },
        {
            id: 'creative',
            label: "Креатив",
            icon: <PenTool className="w-6 h-6" />,
            title: "Создание топ-креатива",
            description: "Генерация идей, текстов и визуалов на основе данных, которые гарантированно привлекают внимание."
        },
        {
            id: 'content',
            label: "SMM",
            icon: <Share2 className="w-6 h-6" />,
            title: "SMM на автопилоте",
            description: "Регулярные публикации, адаптация контента под разные площадки и ведение стратегии без пауз."
        },
        {
            id: 'launch',
            label: "Трафик",
            icon: <Rocket className="w-6 h-6" />,
            title: "Запуск рекламы",
            description: "Активация рекламных кампаний и непрерывная AI-оптимизация ставок и офферов в реальном времени."
        },
        {
            id: 'optimize',
            label: "Рост",
            icon: <Zap className="w-6 h-6" />,
            title: "AI-результат",
            description: "Эффект от круглосуточного мониторинга и мгновенной реакции на изменения рынка."
        },
        {
            id: 'analyze',
            label: "Отчеты",
            icon: <MessageSquare className="w-6 h-6" />,
            title: "Отчеты в Telegram",
            description: "Полная прозрачность. Получайте отчеты в удобном формате прямо в мессенджер по первому запросу."
        },
        {
            id: 'scale',
            label: "Масштаб",
            icon: <ListTodo className="w-6 h-6" />,
            title: "Задачи и промо",
            description: "Быстрый запуск новых промо-кампаний и масштабирование успешных связок по вашей команде."
        }
    ];

    return (
        <section className="py-8 bg-bg border-t border-card-border" id="press">
            <div className="page-container">
                <div className="text-center mb-10">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold text-text mb-6 tracking-tight"
                    >
                        Посмотрите наш полный <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">9-этапный процесс</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-text text-lg max-w-2xl mx-auto"
                    >
                        Найдем органические решения для оптимизации вашего контента.
                    </motion.p>
                </div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Desktop Horizontal Timeline (md and up) */}
                    <div className="hidden md:block overflow-x-auto pt-6 pb-12 scrollbar-hide">
                        <div className="flex flex-col items-center">
                            {/* Icons and Arrows Row */}
                            <div className="flex items-center justify-between w-full pt-4 mb-8 px-4">
                                {stages.map((stage, idx) => (
                                    <React.Fragment key={stage.id}>
                                        <div className="flex flex-col items-center relative">
                                            <motion.button
                                                onClick={() => setActiveStage(idx)}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`w-16 h-16 rounded-[20px] flex items-center justify-center transition-all duration-300 ${activeStage === idx
                                                    ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20 ring-2 ring-brand-purple/50'
                                                    : 'bg-brand-purple/5 border border-brand-purple/20 text-brand-purple hover:bg-brand-purple/10'
                                                    }`}
                                            >
                                                {React.cloneElement(stage.icon, { className: "w-7 h-7" })}
                                            </motion.button>
                                            {/* Step Number Badge */}
                                            <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 ${activeStage === idx
                                                ? 'bg-white text-brand-purple border-brand-purple'
                                                : 'bg-bg text-muted-text border-card-border'
                                                }`}>
                                                {idx + 1}
                                            </div>
                                        </div>
                                        {idx < stages.length - 1 && (
                                            <div className="flex-grow flex justify-center text-muted-text/30">
                                                <ArrowRight className="w-5 h-5 mx-2" />
                                            </div>
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Labels Row */}
                            <div className="flex items-center justify-between w-full mb-8 px-4">
                                {stages.map((stage, idx) => (
                                    <div key={`label-${stage.id}`} className="flex-1 text-center">
                                        <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${activeStage === idx ? 'text-brand-purple' : 'text-muted-text hover:text-text'
                                            }`}>
                                            {stage.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Progress Line and Dots */}
                            <div className="relative w-full px-[5%] h-6">
                                {/* Base Line */}
                                <div className="absolute top-1/2 left-[5%] right-[5%] h-px bg-card-border -translate-y-1/2" />

                                {/* Animated Progress */}
                                <motion.div
                                    className="absolute top-1/2 left-[5%] h-0.5 bg-brand-purple -translate-y-1/2 z-10"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${(activeStage / (stages.length - 1)) * 90}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />

                                {/* Dots */}
                                <div className="absolute inset-0 flex items-center justify-between px-[5%] z-20">
                                    {stages.map((_, idx) => (
                                        <button
                                            key={`dot-${idx}`}
                                            onClick={() => setActiveStage(idx)}
                                            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${activeStage >= idx
                                                ? 'bg-brand-purple border-brand-purple scale-125'
                                                : 'bg-bg border-card-border hover:border-brand-purple/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Grid Layout (below md) */}
                    <div className="md:hidden grid grid-cols-3 gap-y-10 gap-x-4 px-2 pt-4 mb-12">
                        {stages.map((stage, idx) => (
                            <div key={`mobile-${stage.id}`} className="flex flex-col items-center gap-3">
                                <div className="relative">
                                    <motion.button
                                        onClick={() => setActiveStage(idx)}
                                        whileTap={{ scale: 0.95 }}
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${activeStage === idx
                                            ? 'bg-brand-purple text-white shadow-lg shadow-brand-purple/20 ring-2 ring-brand-purple/50'
                                            : 'bg-brand-purple/5 border border-brand-purple/20 text-brand-purple hover:bg-brand-purple/10'
                                            }`}
                                    >
                                        {React.cloneElement(stage.icon, { className: "w-6 h-6" })}
                                    </motion.button>
                                    {/* Step Number Badge for Mobile */}
                                    <div className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 ${activeStage === idx
                                        ? 'bg-white text-brand-purple border-brand-purple'
                                        : 'bg-bg text-muted-text border-card-border'
                                        }`}>
                                        {idx + 1}
                                    </div>
                                </div>
                                <span className={`text-[10px] font-bold uppercase tracking-wider text-center transition-colors duration-300 ${activeStage === idx ? 'text-brand-purple' : 'text-muted-text'
                                    }`}>
                                    {stage.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Detailed Description Card */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStage}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="glass-card p-8 md:p-12 rounded-[40px] flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden group border-brand-purple/10">
                            {/* Animated Background Number */}
                            <div className="absolute -top-10 -right-10 text-[200px] font-display font-extrabold text-brand-purple/5 pointer-events-none select-none">
                                {activeStage + 1}
                            </div>

                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-brand-purple/10 flex items-center justify-center text-brand-purple relative z-10">
                                {React.cloneElement(stages[activeStage].icon, { className: "w-10 h-10 md:w-14 md:h-14" })}
                            </div>

                            <div className="flex-grow relative z-10 text-center md:text-left">
                                <div className="inline-flex px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[10px] font-bold uppercase tracking-widest mb-4 border border-brand-purple/20">
                                    Этап {activeStage + 1} из 9
                                </div>
                                <h3 className="text-3xl md:text-4xl font-display font-bold text-text mb-6">
                                    {stages[activeStage].title}
                                </h3>
                                <p className="text-muted-text text-lg leading-relaxed mb-8 max-w-2xl">
                                    {stages[activeStage].description}
                                </p>

                                <button
                                    className="inline-flex items-center gap-2 text-brand-purple font-bold hover:gap-3 transition-all group/btn"
                                    onClick={() => setActiveStage((prev) => (prev + 1) % stages.length)}
                                >
                                    Следующий этап <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Indicators for mobile */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {stages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveStage(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${activeStage === idx ? 'bg-brand-purple w-8' : 'bg-card-border'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
