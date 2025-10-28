import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[520px] sm:h-[560px] md:h-[640px] lg:h-[720px]">
        <Spline
          scene="https://prod.spline.design/UGnf9D1Hp3OG8vSG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-6 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
              Master Chess, One Move at a Time
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Friendly 1:1 coaching for beginners. Build confidence, learn strategy, and enjoy the game with structured lessons and guided practice.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#cta"
                className="inline-flex items-center justify-center rounded-lg bg-white text-gray-900 px-6 py-3 font-semibold shadow hover:shadow-md transition"
              >
                Book a Free Intro Lesson
              </a>
              <a
                href="#curriculum"
                className="inline-flex items-center justify-center rounded-lg bg-white/10 backdrop-blur px-6 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/15 transition"
              >
                See Curriculum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
