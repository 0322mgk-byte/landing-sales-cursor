"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP 플러그인 등록
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Section2 = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // 각 레이어 이미지 ref
  const layer1Ref = useRef<HTMLImageElement>(null);
  const layer2Ref = useRef<HTMLImageElement>(null);
  const layer3Ref = useRef<HTMLImageElement>(null);
  const layer4Ref = useRef<HTMLImageElement>(null);
  const layer5Ref = useRef<HTMLImageElement>(null);
  const layer6Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // 초기 상태 설정
    gsap.set(container, {
      opacity: 0,
      y: 60,
    });

    // 태블릿 목업 - 살짝 작게 시작
    gsap.set(layer2Ref.current, {
      opacity: 0,
      scale: 0.9,
    });

    // 메인 질문 텍스트 - 왼쪽에서 슬라이드인
    gsap.set(layer1Ref.current, {
      opacity: 0,
      x: -50,
    });

    // 캐릭터 - 아래에서 바운스
    gsap.set(layer3Ref.current, {
      opacity: 0,
      y: 80,
    });

    // 나머지 텍스트들 - 순차 페이드인
    gsap.set([layer4Ref.current, layer5Ref.current, layer6Ref.current], {
      opacity: 0,
      y: 30,
    });

    // 메인 타임라인
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom top",
        onEnter: () => tl.restart(),
        onLeave: () => {
          tl.progress(0).pause();
          // 리셋
          gsap.set(container, { opacity: 0, y: 60 });
          gsap.set(layer2Ref.current, { opacity: 0, scale: 0.9 });
          gsap.set(layer1Ref.current, { opacity: 0, x: -50 });
          gsap.set(layer3Ref.current, { opacity: 0, y: 80 });
          gsap.set([layer4Ref.current, layer5Ref.current, layer6Ref.current], {
            opacity: 0, y: 30,
          });
        },
        onEnterBack: () => tl.restart(),
        onLeaveBack: () => {
          tl.progress(0).pause();
          // 리셋
          gsap.set(container, { opacity: 0, y: 60 });
          gsap.set(layer2Ref.current, { opacity: 0, scale: 0.9 });
          gsap.set(layer1Ref.current, { opacity: 0, x: -50 });
          gsap.set(layer3Ref.current, { opacity: 0, y: 80 });
          gsap.set([layer4Ref.current, layer5Ref.current, layer6Ref.current], {
            opacity: 0, y: 30,
          });
        },
      },
    });

    // 1. 컨테이너 페이드인
    tl.to(container, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    // 2. 태블릿 목업 - 확대되며 등장 (주목)
    tl.to(layer2Ref.current, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "back.out(1.2)",
    }, "-=0.3");

    // 3. 메인 질문 텍스트 - 왼쪽에서 슬라이드인
    tl.to(layer1Ref.current, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: "power2.out",
    }, "-=0.4");

    // 4. 캐릭터 - 아래에서 톡 튀어오르며 등장 (바운스)
    tl.to(layer3Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.2");

    // 5. "매출은 0원" - 페이드인 + 위로
    tl.to(layer4Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.1");

    // 6. "밑 빠진 독" - 페이드인 + 위로
    tl.to(layer5Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

    // 7. "고객을 설득하는" - 페이드인 + 위로
    tl.to(layer6Ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    }, "-=0.2");

    // 클린업
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white flex items-center justify-center overflow-hidden py-[32px]"
    >
      {/* 메인 컨테이너 - 크기 키움 */}
      <div
        ref={containerRef}
        className="relative w-full max-w-[1900px] aspect-[1456/816] mx-auto px-4 flex items-center justify-center"
      >
        {/* 레이어 1: 텍스트 이미지 */}
        <img
          ref={layer1Ref}
          src="/section-2/section2-2.png"
          alt="예쁜 쓰레기가 되진 않았나요?"
          className="absolute inset-0 w-full h-full object-contain z-10"
        />

        {/* 레이어 2: 태블릿 목업 */}
        <img
          ref={layer2Ref}
          src="/section-2/section2-1.png"
          alt="태블릿 목업"
          className="absolute inset-0 w-full h-full object-contain z-20"
        />

        {/* 레이어 3: 캐릭터 이미지 */}
        <img
          ref={layer3Ref}
          src="/section-2/section2-3.png"
          alt="고민하는 캐릭터"
          className="absolute inset-0 w-full h-full object-contain z-30"
        />

        {/* 레이어 4: 매출은 0원 텍스트 */}
        <img
          ref={layer4Ref}
          src="/section-2/section2-4.png"
          alt="매출은 0원"
          className="absolute inset-0 w-full h-full object-contain z-40"
        />

        {/* 레이어 5: 밑 빠진 독 텍스트 */}
        <img
          ref={layer5Ref}
          src="/section-2/section2-5.png"
          alt="밑 빠진 독에 광고비만 태우고 속 쓰렸던 경험"
          className="absolute inset-0 w-full h-full object-contain z-50"
        />

        {/* 레이어 6: 고객을 설득하는 기획 텍스트 */}
        <img
          ref={layer6Ref}
          src="/section-2/section2-6.png"
          alt="고객을 설득하는 기획 없이 디자인만 했기 때문입니다"
          className="absolute inset-0 w-full h-full object-contain z-[60]"
        />
      </div>
    </section>
  );
};

export default Section2;
