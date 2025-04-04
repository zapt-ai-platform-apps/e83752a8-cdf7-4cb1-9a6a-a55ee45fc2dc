import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img 
                src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=40&height=40" 
                alt="شعار" 
                className="h-8 w-8 ml-3"
              />
              <h2 className="text-lg font-bold">عزيمتنا تكسر الواقع</h2>
            </div>
            <p className="mt-2 text-primary-200">حكاية من غير استسلام</p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#stories" className="text-primary-200 hover:text-white transition-colors">القصص الملهمة</a></li>
              <li><a href="#quotes" className="text-primary-200 hover:text-white transition-colors">أقوال مأثورة</a></li>
              <li><a href="#motivation" className="text-primary-200 hover:text-white transition-colors">خطوات العزيمة</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-primary-800 text-center text-primary-300">
          <p>جميع الحقوق محفوظة &copy; {currentYear} عزيمتنا تكسر الواقع</p>
        </div>
      </div>
    </footer>
  );
}