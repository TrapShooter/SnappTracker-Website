import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      <Header sticky />

      {/* Content */}
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 sm:py-24 animate-in fade-in slide-in-from-bottom-4 w-full">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {children}
        </div>
      </main>

      {/* Full Website Footer */}
      <Footer />
    </div>
  );
}
