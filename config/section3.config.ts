export const section3Config = {
  // ========================================
  // 텍스트 내용
  // ========================================
  text: {
    // 상단 서브 타이틀
    subtitle: "머리 아픈 기획, 하지 마세요",

    // 메인 타이틀
    title: {
      line1: "팔리는 논리는",
      highlight: "제가 짭니다",
    },

    // 좌측 카드 (일반 에이전시)
    leftCard: {
      title: "일반 웹 에이전시",
      items: [
        "원고 주세요",
        "사진 주세요",
        "기획안 주세요",
      ],
      description: "대표님이 하나부터 열까지 다 챙겨야 합니다.",
    },

    // 우측 카드 (우리 방식)
    rightCard: {
      title: "우리의 제작 방식",
      items: [
        "제품과 장점만 던져주세요",
        "연매출 30억 노하우로 기획",
        "고객 심리를 꿰뚫는 카피라이팅",
        "구매 전환 디자인",
      ],
      description: "대표님은 그 시간에 제품 소싱과 배송에만 신경 쓰세요.",
    },
  },
};

export type Section3Config = typeof section3Config;
