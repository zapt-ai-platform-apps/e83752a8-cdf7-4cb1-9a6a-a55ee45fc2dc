import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw3fHxBcmFiaWMlMjBjYWxsaWdyYXBoeSUyMGFydCUyMHNob3dpbmclMjBzdHJlbmd0aCUyMGFuZCUyMHBlcnNldmVyYW5jZSUyQyUyMHdpdGglMjBtb3VudGFpbnMlMjBhbmQlMjBzdW5yaXNlJTIwaW4lMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTc0Mzc3MDQyN3ww&ixlib=rb-4.0.3&q=80&w=1080" 
            src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64" 
            alt="شعار" 
            className="h-10 w-10 mr-3"
          />
        </div>
      </div>
    </section>
  );
}