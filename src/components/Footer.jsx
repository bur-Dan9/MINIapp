import React from 'react';
import { Instagram, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full bg-bg border-t border-card-border py-16 mt-auto relative z-10" id="contact">
            <div className="page-container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
                    {/* Logo and Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-display font-bold text-2xl tracking-tighter text-text">
                                AWM OS
                            </span>
                        </div>
                        <p className="text-muted-text text-sm max-w-xs text-center md:text-left">
                            Интеллектуальная маркетинговая платформа на базе AI-агентов. Будущее вашего бизнеса начинается здесь.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-muted-text">
                        <a href="#" className="hover:text-brand-purple transition-colors">Главная</a>
                        <a href="#features" className="hover:text-brand-purple transition-colors">Преимущества</a>
                        <a href="#services" className="hover:text-brand-purple transition-colors">Услуги</a>
                        <a href="#press" className="hover:text-brand-purple transition-colors">Процесс</a>
                        <a href="#reviews" className="hover:text-brand-purple transition-colors">Отзывы</a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: <Instagram className="w-5 h-5" />, href: "#" },
                            { icon: <Send className="w-5 h-5" />, href: "https://t.me/AWMOS_bot" }
                        ].map((social, idx) => (
                            <a
                                key={idx}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-bg border border-card-border flex items-center justify-center text-muted-text hover:text-brand-purple hover:border-brand-purple transition-all"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-card-border text-xs text-muted-text gap-4">
                    <p>Copyright © AWM OS 2026</p>
                    <p>Создано с использованием AI для совершенства маркетинга.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
