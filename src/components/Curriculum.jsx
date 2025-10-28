import React from 'react';
import { BookOpen, Rocket, Star } from 'lucide-react';

const modules = [
  {
    title: 'Foundations',
    icon: BookOpen,
    items: [
      'Board, pieces, and movement',
      'Basic rules & notation',
      'Simple mates & stalemate',
    ],
  },
  {
    title: 'Openings & Plans',
    icon: Rocket,
    items: [
      'Opening principles',
      'Developing with a plan',
      'Common pitfalls to avoid',
    ],
  },
  {
    title: 'Tactics Essentials',
    icon: Star,
    items: [
      'Forks, pins, skewers',
      'Capturing patterns',
      'Calculation habits',
    ],
  },
];

const Curriculum = () => {
  return (
    <section id="curriculum" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Beginner Curriculum</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            A clear path designed for first-time learners. We make every session approachable and practical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map(({ title, icon: Icon, items }) => (
            <div key={title} className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-gray-900 text-white flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
