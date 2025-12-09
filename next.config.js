/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Turbopack 비활성화 (개발 중 문제 발생 시) 또는 경고 무시
  turbopack: { 
    root: './', // Turbopack에게 프로젝트의 실제 루트 디렉토리를 명시적으로 설정
  }, 
  webpack: (config, {
    isServer
  }) => {
    if (!isServer) {
      // 클라이언트 측 빌드에만 적용
      config.resolve.fallback = {
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
