
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HeritagePage from './pages/HeritagePage';
import AtelierPage from './pages/AtelierPage';
import ArchivePage from './pages/ArchivePage';
import ConciergePage from './pages/ConciergePage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden">
      <div 
        className="fixed top-0 left-0 h-[2px] bg-[#D4AF37] z-[100] transition-all duration-300 ease-out shadow-[0_0_10px_rgba(212,175,55,0.5)]" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navbar />
      <ScrollToTop />
      <main className="page-transition">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/heritage" element={<HeritagePage />} />
          <Route path="/atelier" element={<AtelierPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/concierge" element={<ConciergePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
