import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = ({ onJoinWaitlist }) => {
    return (
        <section className="w-full py-24 bg-bg relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="glass-card p-12 md:p-24 rounded-[48px] text-center flex flex-col items-center border-brand-purple/30">
                    <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 flex items-center justify-center text-brand-purple mb-8 animate-bounce">
                        <Sparkles className="w-8 h-8" />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-bold text-text mb-8 leading-tight">
                        Будущее уже здесь. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-magenta">
                            Хватит кормить конкурентов.
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-text mb-12 max-w-2xl leading-relaxed">
                        Пока вы сомневаетесь, алгоритмы уже меняют рынок. Станьте тем, кто управляет изменениями, а не подстраивается под них.
                    </p>

                    <button
                        onClick={onJoinWaitlist}
                        className="bg-gradient-to-r from-brand-purple to-brand-magenta text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-brand-purple/40 hover:scale-105 transition-all flex items-center gap-3"
                        data-open-waitlist="1"
                    >
                        Уведомить о запуске <ArrowRight className="w-6 h-6" />
                    </button>

                    <p className="mt-8 text-sm text-brand-purple/60 font-medium">
                        Присоединяйтесь к 1,200+ компаниям в листе ожидания
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
