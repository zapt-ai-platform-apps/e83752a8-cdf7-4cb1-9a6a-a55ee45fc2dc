import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuotesSection from './components/QuotesSection';
import StoriesSection from './components/StoriesSection';
import MotivationSection from './components/MotivationSection';
import Footer from './components/Footer';
import ZaptBadge from './components/ZaptBadge';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 font-tajawal text-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <QuotesSection />
        <StoriesSection />
        <MotivationSection />
      </main>
      <Footer />
      <ZaptBadge />
    </div>
  );
}