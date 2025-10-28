import React from 'react';
import { Users, BookOpen, Clock, Trophy } from 'lucide-react';

const features = [
  {
    title: 'Beginner-Friendly',
    desc: 'No experience required. We start with the basics and build up at your pace.',
    icon: Users,
  },
  {
    title: 'Structured Lessons',
    desc: 'Clear lesson plans and take-home exercises to reinforce learning.',
    icon: BookOpen,
  },
  {
    title: 'Flexible Scheduling',
    desc: 'Evening and weekend slots to fit your routine.',
    icon: Clock,
  },
  {
    title: 'Track Progress',
    desc: 'Milestones and mini-goals so you can see improvement quickly.',
    icon: Trophy,
  },
];

const Features = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Why Learn With Us</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Simple, supportive, and fun. We focus on building strong fundamentals and game confidence.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow transition">
              <div className="h-11 w-11 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
