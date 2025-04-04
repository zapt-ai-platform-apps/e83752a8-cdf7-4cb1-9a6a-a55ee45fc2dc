import React from 'react';
import Quote from './Quote';

const quotes = [
  {
    id: 1,
    text: "الصعاب لا تدوم، والصابرون هم من يدومون.",
    author: "علي بن أبي طالب"
  },
  {
    id: 2,
    text: "العزيمة هي ما تبقى بعد أن ينتهي الحماس.",
    author: "نجيب محفوظ"
  },
  {
    id: 3,
    text: "النجاح ليس نهائياً، والفشل ليس قاتلاً، ما يهم هو الشجاعة للاستمرار.",
    author: "ونستون تشرشل"
  },
  {
    id: 4,
    text: "لن تعرف حدود قدراتك حتى تدفع نفسك إليها.",
    author: "ابن خلدون"
  }
];

export default function QuotesSection() {
  return (
    <section id="quotes" className="py-16">
      <h2 className="section-title">أقوال مأثورة في العزيمة</h2>
      <p className="text-lg text-gray-600 mb-10">
        دعنا نستلهم من حكمة من سبقونا في رحلة العزيمة والإصرار.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quotes.map(quote => (
          <Quote key={quote.id} text={quote.text} author={quote.author} />
        ))}
      </div>
    </section>
  );
}