import React from 'react';

export default function StoryCard({ title, excerpt, imageRequest }) {
  return (
    <div className="card flex flex-col h-full">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img 
          src="PLACEHOLDER" 
          alt={title}
          data-image-request={imageRequest}
          className="w-full h-48 object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <h3 className="text-xl font-bold mb-2 text-primary-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{excerpt}</p>
      <button className="mt-4 self-start text-accent-600 font-medium hover:text-accent-800 transition-colors cursor-pointer">
        اقرأ المزيد &larr;
      </button>
    </div>
  );
}