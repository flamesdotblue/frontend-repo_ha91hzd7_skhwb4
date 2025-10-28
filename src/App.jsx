import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Curriculum from './components/Curriculum';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-lg">ChessStarter</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#curriculum" className="hover:text-gray-900">Curriculum</a>
            <a href="#cta" className="hover:text-gray-900">Book</a>
          </nav>
          <a href="#cta" className="hidden sm:inline-flex items-center px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold">Get Started</a>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Curriculum />
        <CTA />
      </main>

      <footer className="py-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} ChessStarter — Beginner-friendly chess coaching</p>
          <div className="text-sm text-gray-500">
            Built with care for learners.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
