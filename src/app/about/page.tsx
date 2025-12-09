import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#222]">
      <header className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-4 md:flex-row md:justify-between">
          <h1 className="text-lg font-extrabold tracking-[0.18em] text-[#4A7A47]">
            TODAY MENU
          </h1>
          <nav className="flex gap-4 text-xs font-medium text-[#777] md:text-sm">
            <Link href="/" className="hover:text-[#4A7A47]">
              홈
            </Link>
            <Link href="/about" className="text-[#4A7A47]">
              서비스 소개
            </Link>
            <Link href="/guide" className="hover:text-[#4A7A47]">
              이용 방법
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-10 md:py-16">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">서비스 소개</h2>
          <p className="text-sm text-[#555] md:text-base">
            <strong>Today Menu</strong>는
            &nbsp;“오늘 뭐 먹지?”라는 고민을 조금이라도 줄이기 위해 만든
            랜덤 메뉴 추천 서비스입니다.  
            한식 · 중식 · 일식 · 양식 네 가지 카테고리에서 각각 20개의
            메뉴를 준비해 두고, 사용자가 고른 카테고리 안에서 랜덤으로
            메뉴를 추천합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">주요 기능</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[#555] md:text-base">
            <li>4가지 음식 카테고리(한식, 중식, 일식, 양식) 중 선택</li>
            <li>카테고리별 20개 메뉴 중 하나를 랜덤으로 추천</li>
            <li>버튼 한 번으로 빠르게 “오늘의 메뉴” 결정</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">기획 의도</h3>
          <p className="text-sm text-[#555] md:text-base">
            바쁜 일상 속에서 매 끼니마다 메뉴를 고르는 것은 은근히
            피로감을 주는 반복 작업입니다.  
            Today Menu는 데이터베이스나 외부 API 없이, 가볍고 단순한
            방식으로 메뉴 선택 과정을 돕는 것을 목표로 합니다.
          </p>
        </section>
      </main>
    </div>
  );
}
