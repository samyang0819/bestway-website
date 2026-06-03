'use client';

import { useEffect, useState } from 'react';

interface Stat {
  value: string;
  label: string;
  icon: string;
}

const stats: Stat[] = [
  { value: '20+', label: 'Years of Experience', icon: '🏆' },
  { value: '5,000+', label: 'Cases Successfully Handled', icon: '✅' },
  { value: '95%', label: 'Success Rate', icon: '📈' },
  { value: '4.9/5', label: 'Client Rating', icon: '⭐' }
];

interface AnimatedNumberProps {
  target: number;
  suffix: string;
  duration?: number;
}

function AnimatedNumber({ target, suffix, duration = 2000 }: AnimatedNumberProps) {
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isVisible || !isMounted) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCurrent(Math.floor(progress * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const timer = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(timer);
  }, [isVisible, target, duration, isMounted])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`stat-${target}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [isVisible, target]);

  return <span>{current}{suffix}</span>;
}

export function TrustBadges() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
              Why Trust Us?
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Proven track record of excellence in immigration services with industry recognition
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-${stat.value.replace(/\D/g, '')}`}
              className="group relative"
            >
              {/* Gradient Border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-amber-400 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-1000"></div>
              
              {/* Card */}
              <div className="relative bg-slate-800 border border-slate-700 rounded-lg p-8 hover:border-amber-400/50 transition duration-300">
                <div className="text-5xl mb-4">{stat.icon}</div>
                
                <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent mb-2">
                  {stat.value.includes('+') || stat.value.includes('/') || stat.value.includes('%') ? (
                    <>
                      {stat.value.includes('.') ? (
                        <AnimatedNumber target={parseInt(stat.value)} suffix="" duration={2000} />
                      ) : (
                        stat.value
                      )}
                    </>
                  ) : (
                    <AnimatedNumber target={parseInt(stat.value.replace(/\D/g, ''))} suffix={stat.value.replace(/\d/g, '')} duration={2000} />
                  )}
                </div>
                
                <p className="text-slate-400 text-lg">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="border-t border-slate-700 pt-16">
          <h3 className="text-2xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Industry Recognized
            </span>
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📜', name: 'Licensed Practitioners', desc: 'Certified by Immigration Law Society' },
              { icon: '🌍', name: 'Multi-Country Expertise', desc: 'Canada, US, AU, UK specialists' },
              { icon: '🔒', name: 'Data Security Certified', desc: 'ISO 27001 Compliant' },
              { icon: '🏅', name: 'Award Winning', desc: 'Best Immigration Services 2024' }
            ].map((cert, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-slate-800/50 border border-slate-700 rounded-lg hover:border-amber-400/30 transition duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition transform duration-300">{cert.icon}</div>
                <h4 className="font-semibold text-slate-100 mb-1">{cert.name}</h4>
                <p className="text-sm text-slate-400">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold rounded-lg transition duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Your Free Consultation
              <span className="group-hover:translate-x-1 transition">→</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
