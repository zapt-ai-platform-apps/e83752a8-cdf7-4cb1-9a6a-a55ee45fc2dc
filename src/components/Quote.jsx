import React from 'react';

export default function Quote({ text, author }) {
  return (
    <div className="quote-card">
      <blockquote className="text-lg md:text-xl mb-4 leading-relaxed">
        "{text}"
      </blockquote>
      <footer className="text-right text-primary-700 font-medium">
        - {author}
      </footer>
    </div>
  );
}