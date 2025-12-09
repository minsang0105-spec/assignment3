import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'Pretendard', 'sans-serif'], // 이미지 폰트 느낌 반영
      },
      colors: {
        'custom-bg': '#F7F7F7', // 밝은 회색 계열 배경
        'custom-primary': '#8CC63F', // 이미지의 연두색 (메인 색상)
        'custom-secondary': '#F2BB4A', // 이미지의 황토색 (보조 색상)
        'custom-dark-text': '#333333',
        'custom-light-text': '#666666',
        'custom-card-bg': '#FFFFFF',
        'custom-border': '#E0E0E0', // 테두리 색상
        'custom-hover-bg': '#A4D45E', // 호버 시 밝아진 연두색
      },
      borderRadius: {
        'DEFAULT': '10px', // 기본 둥근 정도
        'lg': '15px',
        'xl': '20px', // 카드와 버튼의 둥근 정도를 이미지에 맞춰 조정
        'full': '9999px',
      },
      boxShadow: {
        'custom-light': '0 2px 8px rgba(0,0,0,0.05)', // 얕은 그림자
        'custom-md': '0 5px 15px rgba(0,0,0,0.1)',  // 중간 그림자
        'custom-lg': '0 10px 30px rgba(0,0,0,0.15)', // 깊은 그림자
        'custom-card': '0 8px 20px rgba(0,0,0,0.08)', // 카드 섀도우
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'background-pattern': "url('/background-pattern.svg')", // 배경 패턴 이미지 추가
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideInUp: 'slideInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-in-up': 'slideInUp 0.8s ease-out forwards',
        'fade-in-delay': 'fadeIn 1s ease-out 0.5s forwards',
        'fade-in-delay-2': 'fadeIn 1s ease-out 1s forwards',
        'bounce-in': 'bounceIn 1s ease-out forwards',
        'text-reveal': 'textReveal 0.25s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
