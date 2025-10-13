'use client';

import { GoalIcon } from 'lucide-react';
import React from "react";
// import { InfiniteMovingCards } from "../ui/infinite-moving-cards"
import {  FaUsers, FaThinkPeaks, FaCriticalRole } from 'react-icons/fa';

const features = [
  {
    icon: <FaThinkPeaks className="text-yellow-400 text-4xl" />,
    title: 'Sharp Thinkers',
    description: 'We bring creativity and cutting-edge thinking to every medical business we support.',
  },
  {
    icon: <FaCriticalRole className="text-yellow-400 text-4xl" />,
    title: 'Critical Situation',
    description: 'Built for medpreneurs, by medpreneurs. We know your needs and speak your language.',
  },
  {
    icon: <FaUsers className="text-yellow-400 text-4xl" />,
    title: 'Community Driven',
    description: 'Join a growing community of like-minded professionals who support each other.',
  },
  {
    icon: <GoalIcon className="text-yellow-400 text-4xl" />,
    title: 'Big Goals',
    description: 'From idea to launch, we help you move fast without losing quality.',
  },
];

const WhyUs = () => {
  return (
    <section className="bg-white text-black py-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Who Medpreneurs?</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover why we are here and who we are. We are not just a platform were a movement occurs.
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
