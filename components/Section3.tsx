"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { section3Config } from "@/config/section3.config";
import { MouseEvent } from "react";

const Section3 = () => {
  const { text } = section3Config;

  // Spotlight State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="relative bg-[#050505] min-h-screen py-24 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* 헤더 텍스트 */}
        <div className="text-center mb-20 lg:mb-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="block text-gray-500 text-lg sm:text-xl mb-4 font-medium tracking-wide"
          >
            {text.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            {text.title.line1}{" "}
            <span className="text-[#ec622d]">{text.title.highlight}</span>
          </motion.h2>
        </div>

        {/* 미니멀 글로우 비교 컨테이너 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* 1. 일반 웹 에이전시 (Static & Matte) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-10 sm:p-12 flex flex-col justify-between group hover:border-white/10 transition-colors duration-500"
          >
            <div>
              <h3 className="text-2xl font-medium text-gray-600 mb-8">{text.leftCard.title}</h3>
              <ul className="space-y-6">
                {text.leftCard.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-gray-800 mt-12 pt-8 border-t border-white/5 text-sm">
              {text.leftCard.description}
            </p>
          </motion.div>

          {/* 2. 우리의 제작 방식 (Interactive Spotlight) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onMouseMove={handleMouseMove}
            className="group relative h-full bg-gray-900 border border-white/10 rounded-3xl overflow-hidden"
          >
            {/* Spotlight Gradient - 마우스 따라다니는 효과 */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    650px circle at ${mouseX}px ${mouseY}px,
                    rgba(236, 98, 45, 0.15),
                    transparent 80%
                  )
                `,
              }}
            />
            {/* Spotlight Border - 테두리 하이라이트 */}
            <motion.div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
              style={{
                background: useMotionTemplate`
                  radial-gradient(
                    600px circle at ${mouseX}px ${mouseY}px,
                    rgba(236, 98, 45, 0.4),
                    transparent 40%
                  )
                `,
              }}
            />

            {/* Particles Background (고정 애니메이션) */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#ec622d] rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-float-1" />
                <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-[#facc15] rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-float-2" />
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-30 group-hover:animate-float-3" />
            </div>

            <div className="relative h-full bg-[#0a0a0a] rounded-[23px] p-10 sm:p-12 flex flex-col justify-between m-[1px]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-3xl font-bold text-white group-hover:text-[#ec622d] transition-colors duration-300">{text.rightCard.title}</h3>
                  <div className="bg-[#ec622d]/20 text-[#ec622d] text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    PREMIUM
                  </div>
                </div>

                <ul className="space-y-6">
                  {text.rightCard.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 text-gray-400 group-hover:text-white transition-colors duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ec622d] group-hover:shadow-[0_0_8px_#ec622d] transition-all duration-300" />
                      <span className="text-lg font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-12 pt-8 border-t border-white/5 text-[#ec622d] font-semibold text-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                "{text.rightCard.description}"
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes float-1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        @keyframes float-2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-15px); } }
        @keyframes float-3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float-1 { animation: float-1 4s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 5s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Section3;
