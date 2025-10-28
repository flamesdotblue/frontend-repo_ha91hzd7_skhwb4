import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to make your first move?</h2>
        <p className="mt-3 text-white/80 max-w-2xl mx-auto">
          Book a free 20-minute intro call. We&apos;ll assess your current level, set goals, and craft a plan tailored to you.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="mailto:coach@chessstarter.com?subject=Free%20Intro%20Lesson"
            className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold shadow hover:shadow-md transition"
          >
            Email the Coach
          </a>
          <a
            href="https://cal.com/" target="_blank" rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur px-6 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15 transition"
          >
            Schedule a Call
          </a>
        </div>
        <p className="mt-4 text-xs text-white/60">No pressure, no obligation — just a friendly chat.</p>
      </div>
    </section>
  );
};

export default CTA;
