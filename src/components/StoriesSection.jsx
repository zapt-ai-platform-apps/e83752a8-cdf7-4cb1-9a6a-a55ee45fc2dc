import React from 'react';
import StoryCard from './StoryCard';

const stories = [
  {
    id: 1,
    title: "الطريق إلى النجاح",
    excerpt: "قصة شاب بدأ من الصفر وتغلب على كل الصعاب ليصبح من أنجح رواد الأعمال في بلده.",
    imageRequest: "Young Arab entrepreneur standing proud in modern office"
  },
  {
    id: 2,
    title: "عندما تتحدى المستحيل",
    excerpt: "تحكي هذه القصة عن فتاة تحدت التقاليد والتوقعات لتحقق حلمها في أن تصبح عالمة.",
    imageRequest: "Female Arab scientist in lab coat working with scientific equipment"
  },
  {
    id: 3,
    title: "القوة في الاستمرار",
    excerpt: "رياضي فقد قدرته على المشي، لكنه لم يفقد عزيمته ليصبح بطلاً في رياضة جديدة.",
    imageRequest: "Determined Arab paralympic athlete in wheelchair training"
  }
];

export default function StoriesSection() {
  return (
    <section id="stories" className="py-16">
      <h2 className="section-title">قصص ملهمة</h2>
      <p className="text-lg text-gray-600 mb-10">
        قصص حقيقية لأشخاص تغلبوا على الصعاب بفضل العزيمة والإصرار.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map(story => (
          <StoryCard 
            key={story.id} 
            title={story.title} 
            excerpt={story.excerpt} 
            imageRequest={story.imageRequest}
          />
        ))}
      </div>
    </section>
  );
}