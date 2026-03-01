import React from 'react';
import { X, User, Briefcase } from 'lucide-react';

const WaitlistModal = () => {
    return (
        <div
            id="modalOverlay"
            style={{ display: 'none' }}
            className="fixed inset-0 z-[100] items-center justify-center p-4 bg-bg/80 backdrop-blur-md"
        >
            {/* Modal Content */}
            <div className="glass-card w-full max-w-lg rounded-[40px] overflow-hidden relative z-10 animate-in zoom-in-95 duration-300 border-brand-purple/20">
                <button
                    id="closeModal"
                    className="absolute top-6 right-6 p-2 text-muted-text hover:text-text hover:bg-white/10 rounded-full transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="p-8 md:p-12">
                    <div className="inline-flex px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple text-[10px] font-bold uppercase tracking-widest mb-6 border border-brand-purple/20">
                        Waitlist
                    </div>

                    <h3 className="text-3xl md:text-4xl font-display font-bold text-text mb-2">
                        WAITLIST
                    </h3>
                    <p className="text-muted-text mb-8 text-sm">
                        Оставьте заявку, чтобы получить ранний доступ и забронировать место в очереди.
                    </p>

                    <form id="waitlistForm" className="space-y-4">
                        <div className="space-y-1">
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
                                <input
                                    type="text"
                                    data-lead="name"
                                    placeholder="Ваше имя"
                                    className="w-full bg-bg/50 border border-card-border rounded-2xl py-4 pl-12 pr-4 text-text focus:outline-none focus:border-brand-purple transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <div className="relative">
                                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
                                <input
                                    type="text"
                                    data-lead="niche"
                                    placeholder="Ниша вашего бизнеса"
                                    className="w-full bg-bg/50 border border-card-border rounded-2xl py-4 pl-12 pr-4 text-text focus:outline-none focus:border-brand-purple transition-all"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-brand-purple to-brand-magenta text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-brand-purple/20 hover:scale-[1.02] transition-all mt-4"
                        >
                            СООБЩИТЬ МНЕ О ЗАПУСКЕ
                        </button>

                        <div id="waitlistResult" className="pt-6 hidden">
                            <div id="waitlistStatus" className="text-sm text-muted-text leading-relaxed"></div>
                            <button
                                type="button"
                                id="backToBotBtn"
                                className="w-full mt-6 inline-flex items-center justify-center bg-gradient-to-r from-brand-purple to-brand-magenta text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-brand-purple/20 hover:scale-[1.02] transition-all"
                            >
                                ВЕРНУТЬСЯ В БОТА
                            </button>
                        </div>
                    </form>

                    <div className="mt-10 pt-8 border-t border-card-border flex items-center justify-center gap-4">
                        <div className="flex -space-x-3">
                            <div className="w-8 h-8 rounded-full border-2 border-bg bg-indigo-500 flex items-center justify-center text-[10px] text-white">A</div>
                            <div className="w-8 h-8 rounded-full border-2 border-bg bg-purple-500 flex items-center justify-center text-[10px] text-white">B</div>
                            <div className="w-8 h-8 rounded-full border-2 border-bg bg-pink-500 flex items-center justify-center text-[10px] text-white">C</div>
                        </div>
                        <span className="text-xs text-muted-text">
                            <strong className="text-text">1,240+</strong> человек уже в очереди
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WaitlistModal;
