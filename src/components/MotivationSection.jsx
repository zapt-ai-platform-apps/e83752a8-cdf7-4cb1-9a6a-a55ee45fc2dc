import React, { useState } from 'react';

const motivationalSteps = [
  {
    id: 1,
    title: "حدد هدفك",
    description: "اكتب أهدافك بوضوح وحددها بدقة. الأهداف الواضحة تمنحك اتجاهاً واضحاً للتحرك.",
    icon: "🎯"
  },
  {
    id: 2,
    title: "خطط لطريقك",
    description: "قسّم هدفك الكبير إلى خطوات صغيرة قابلة للتنفيذ. كل خطوة تقربك من هدفك النهائي.",
    icon: "📝"
  },
  {
    id: 3,
    title: "ابدأ الآن",
    description: "لا تنتظر الوقت المثالي، فهو لن يأتي أبداً. ابدأ اليوم ولو بخطوة صغيرة.",
    icon: "🚶‍♂️"
  },
  {
    id: 4,
    title: "تعلم من التحديات",
    description: "لا تخف من الأخطاء والإخفاقات. اعتبرها دروساً قيمة في طريق النجاح.",
    icon: "📚"
  },
  {
    id: 5,
    title: "ابق متحمساً",
    description: "ذكّر نفسك دائماً بسبب رحلتك. احتفل بإنجازاتك الصغيرة وابق متحفزاً.",
    icon: "✨"
  }
];

export default function MotivationSection() {
  const [activeStep, setActiveStep] = useState(1);
  
  return (
    <section id="motivation" className="py-16">
      <h2 className="section-title">خطوات العزيمة</h2>
      <p className="text-lg text-gray-600 mb-10">
        إليك خمس خطوات عملية لتقوية عزيمتك وتحقيق أهدافك.
      </p>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <ul className="space-y-2">
            {motivationalSteps.map(step => (
              <li key={step.id}>
                <button 
                  className={`w-full text-right p-4 rounded-lg transition-colors cursor-pointer ${
                    activeStep === step.id 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-white hover:bg-primary-100'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <span className="mr-2">{step.icon}</span> {step.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:w-2/3">
          {motivationalSteps.map(step => (
            <div 
              key={step.id} 
              className={`card ${activeStep === step.id ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{step.icon}</span>
                <h3 className="text-2xl font-bold text-primary-800">{step.title}</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
              
              <div className="mt-6 p-4 bg-primary-50 rounded-lg border-r-2 border-primary-400">
                <p className="font-medium">
                  نصيحة: {activeStep === 1 ? "اكتب أهدافك على ورقة وضعها في مكان تراه يومياً." :
                     activeStep === 2 ? "استخدم تقنية التقسيم: قسّم كل هدف كبير إلى 3-5 خطوات صغيرة." :
                     activeStep === 3 ? "لا تفكر كثيراً، خصص 5 دقائق فقط للبدء بأول خطوة." :
                     activeStep === 4 ? "احتفظ بمفكرة لتدوين ما تعلمته من كل تحدٍ واجهته." :
                     "اقرأ قصص ملهمة واستمع لمقاطع تحفيزية كل صباح لمدة 10 دقائق."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}