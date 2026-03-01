import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ theme, toggleTheme, onJoinWaitlist }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Главная', href: '#' },
        { name: 'Преимущества', href: '#features' },
        { name: 'Услуги', href: '#services' },
        { name: 'Процесс', href: '#press' },
        { name: 'Отзывы', href: '#reviews' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? 'bg-bg/80 backdrop-blur-md border-b border-card-border py-4'
                : 'bg-bg py-6'
                }`}
        >
            <div className="page-container flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-2xl tracking-tighter text-text">
                        AWM OS
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex flex-1 justify-center">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-sm font-medium text-muted-text hover:text-brand-purple transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop CTA & Theme Toggle */}
                <div className="hidden md:flex items-center gap-6">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-muted-text"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={onJoinWaitlist}
                        className="text-sm font-bold text-white px-6 py-2.5 rounded-full bg-brand-purple hover:bg-brand-magenta transition-all shadow-md shadow-brand-purple/20"
                        data-open-waitlist="1"
                    >
                        Начать работу
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors text-muted-text"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-bg border-b border-card-border py-8 px-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-lg font-medium text-text"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-4 pt-6 border-t border-card-border">
                        <button
                            onClick={() => {
                                onJoinWaitlist();
                                setIsMobileMenuOpen(false);
                            }}
                            className="bg-brand-purple text-white py-4 rounded-full font-bold shadow-lg shadow-brand-purple/20"
                            data-open-waitlist="1"
                        >
                            Начать работу
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
