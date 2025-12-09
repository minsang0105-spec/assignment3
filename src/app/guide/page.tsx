import Link from "next/link";

export default function GuidePage() {
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
            <Link href="/about" className="hover:text-[#4A7A47]">
              서비스 소개
            </Link>
            <Link href="/guide" className="text-[#4A7A47]">
              이용 방법
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-10 md:py-16">
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">이용 방법</h2>
          <ol className="list-decimal space-y-3 pl-5 text-sm text-[#555] md:text-base">
            <li>
              홈 화면 상단에서 <strong>한식 · 중식 · 일식 · 양식</strong> 중
              하나를 선택합니다.
            </li>
            <li>
              선택된 카테고리가 강조되면,
              &nbsp;<strong>“메뉴 추천 받기”</strong> 버튼을 클릭합니다.
            </li>
            <li>
              화면 하단의 카드에 오늘의 추천 메뉴가 나타납니다.
              마음에 들지 않으면 버튼을 다시 눌러 다른 메뉴를 뽑을 수
              있습니다.
            </li>
          </ol>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold">추천 활용 팁</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-[#555] md:text-base">
            <li>친구들과 모여서 “메뉴 룰렛”처럼 게임 형식으로 사용해 보세요.</li>
            <li>카테고리를 바꿔가며 새로운 메뉴를 시도해 보는 것도 좋습니다.</li>
            <li>너무 애매할 땐, 추천 메뉴를 기준으로 비슷한 메뉴를 골라도 됩니다.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
