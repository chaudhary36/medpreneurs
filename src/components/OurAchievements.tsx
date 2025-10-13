'use client';

import { FaAward, FaTrophy, FaUsers } from 'react-icons/fa';

const achievements = [
  {
    title: '10+ Qualified with best rank holders',
    description: 'Our team brings a 90%+ in boards, combining years of dedication and expertise in the CBSE and education sectors.',
    icon: <FaAward size={40} className="text-yellow-500" />,
  },
  {
    title: 'Mindset',
    description: 'We always try to findout a solution not to give up easily! . Our members remember that no one can perfect but try to be perfect in their fields',
    icon: <FaTrophy size={40} className="text-yellow-500" />,
  },
  {
    title: 'Working daily for competative exams',
    description: 'We are working on edge of criticle and high competative exams and taking quality education remotely having thoughts to 1% better daily.',
    icon: <FaUsers size={40} className="text-yellow-500" />,
  },
];

const AchievementsSection = () => {
  return (
    <section className="bg-gray-100 text-black py-24 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12">Our Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <div className="flex justify-center mb-6">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{achievement.title}</h3>
              <p className="text-lg text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
