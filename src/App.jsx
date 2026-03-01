import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ServicesMenu from './components/ServicesMenu';
import FAQ from './components/FAQ';
import WaitlistModal from './components/WaitlistModal';
import Preloader from './components/Preloader';

function App() {
  const [theme, setTheme] = useState('light');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.setHeaderColor(theme === 'dark' ? '#050510' : '#F8FAFC');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

  const toggleModal = (service = 'General') => {
    setSelectedService(service);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`min-h-screen relative flex flex-col items-center selection:bg-brand-purple selection:text-white ${theme}`}>
      <Preloader />

      <Header theme={theme} toggleTheme={toggleTheme} onJoinWaitlist={() => toggleModal('Header Menu')} />

      <main className="w-full relative z-10 flex-grow bg-bg text-text transition-colors duration-300">
        <Hero onJoinWaitlist={() => toggleModal('Hero Section')} />
        <HowItWorks />
        <ServicesMenu onJoinWaitlist={(s) => toggleModal(s)} />
        <FAQ />
      </main>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedService('');
        }}
        service={selectedService}
      />
    </div>
  );
}

export default App;
