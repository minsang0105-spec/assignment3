"use client";

import { useState } from "react";
import Link from "next/link";

type CategoryKey = "korean" | "chinese" | "japanese" | "western";

const MENU: Record<CategoryKey, string[]> = {
  korean: [
    "김치찌개","된장찌개","순두부찌개","해장국","콩나물국밥",
    "비빔밥","불고기덮밥","갈비탕","설렁탕","육개장",
    "제육덮밥","오징어볶음","닭갈비","간장게장","양념게장",
    "삼겹살","곱창","막창","닭볶음탕","찜닭",
  ],
  chinese: [
    "짜장면","짬뽕","볶음밥","탕수육","깐풍기",
    "유산슬","마파두부","고추잡채","양장피","팔보채",
    "난자완스","라조기","중국냉면","울면","기스면",
    "동파육","멘보샤","군만두","새우볶음밥","사천짜장",
  ],
  japanese: [
    "초밥","라멘","돈부리","우동","소바",
    "가츠동","규동","회덮밥","사케동","야끼니꾸",
    "오코노미야끼","타코야끼","모밀","튀김","오니기리",
    "덴뿌라","규카츠","함박스테이크","텐동","스키야끼",
  ],
  western: [
    "스테이크","파스타","피자","샐러드","햄버거",
    "샌드위치","수프","리조또","브런치","와플",
    "팬케이크","오믈렛","스크램블 에그","프렌치토스트","핫도그",
    "감자튀김","치즈버거","까르보나라","알리오 올리오","필라프",
  ],
};

const CATEGORY_LIST: { id: CategoryKey; label: string }[] = [
  { id: "korean", label: "한식" },
  { id: "chinese", label: "중식" },
  { id: "japanese", label: "일식" },
  { id: "western", label: "양식" },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey | null>(null);
  const [recommendedMenu, setRecommendedMenu] = useState<string | null>(null);

  const handlePickRandom = () => {
    if (!selectedCategory) return;
    const list = MENU[selectedCategory];
    const randomIndex = Math.floor(Math.random() * list.length);
    setRecommendedMenu(list[randomIndex]);
  };

  const brandGreen = "text-[#4A7A47]";

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#222]">
      {/* 헤더 + 네비게이션 */}
      <header className="border-b border-[#E5E5E5] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-4 md:flex-row md:justify-between">
          <h1
            className={`text-lg font-extrabold tracking-[0.18em] ${brandGreen}`}
          >
            TODAY MENU
          </h1>

          <nav className="flex gap-4 text-xs font-medium text-[#777] md:text-sm">
            <Link href="/" className="hover:text-[#4A7A47]">
              홈
            </Link>
            <Link href="/about" className="hover:text-[#4A7A47]">
              서비스 소개
            </Link>
            <Link href="/guide" className="hover:text-[#4A7A47]">
              이용 방법
            </Link>
          </nav>
        </div>
      </header>

      {/* 메인 */}
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 md:py-16">
        {/* Hero */}
        <section className="flex flex-col items-center gap-4 text-center">
          <p
            className={`text-sm font-semibold uppercase tracking-[0.25em] ${brandGreen}`}
          >
            WHAT SHOULD I EAT TODAY?
          </p>
          <h2 className="text-4xl font-extrabold md:text-5xl">오늘 뭐 먹지?</h2>
          <p className="mt-2 max-w-xl text-sm text-[#777] md:text-base">
            선택하기 애매한 점심·저녁 메뉴를 랜덤으로 뽑아보세요!
          </p>

          <div className="mt-8 flex w-full items-center justify-center">
            <button
              onClick={handlePickRandom}
              disabled={!selectedCategory}
              className={`rounded-full px-10 py-3 text-sm font-semibold text-white shadow-md transition 
              ${
                selectedCategory
                  ? "bg-[#4A7A47] hover:bg-[#3E6A3C] hover:shadow-lg"
                  : "cursor-not-allowed bg-[#C7D8C6]"
              }`}
            >
              메뉴 추천 받기
            </button>
          </div>
        </section>

        {/* 카테고리 선택 */}
        <section className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <h3 className="text-lg font-semibold md:text-xl">
              음식 카테고리를 선택하세요
            </h3>
            <p className="text-xs text-[#888] md:text-sm">
              한식 · 중식 · 일식 · 양식 중 오늘의 무드를 골라보세요.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {CATEGORY_LIST.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`rounded-[24px] border px-6 py-3 text-sm font-medium shadow-sm transition
                  ${
                    active
                      ? "border-[#4A7A47] bg-[#E8F3E6] text-[#30542E]"
                      : "border-[#E5E5E5] bg-white text-[#333] hover:bg-[#F7FBF6]"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* 추천 메뉴 카드 */}
        <section className="mb-12 flex justify-center">
          <div className="flex w-full max-w-xl flex-col rounded-3xl bg-white/90 p-8 shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F8F3] px-3 py-1 text-xs font-semibold tracking-wide text-[#4A7A47] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4A7A47]" />
              오늘의 추천 메뉴
            </div>

            <div className="mt-6 flex flex-col">
              <p className="text-xs text-[#999] md:text-sm">Today’s Pick</p>

              <p className="mt-2 text-3xl font-extrabold md:text-4xl">
                {recommendedMenu ?? "메뉴를 추천받아 보세요!"}
              </p>

              <p className="mt-3 text-xs text-[#888] md:text-sm">
                마음에 안 들면 한 번 더 눌러보세요.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="border-t border-[#E5E5E5] bg-white">
        <div className="mx-auto flex max-w-6xl justify-between px-6 py-4 text-xs text-[#9A9A9A]">
          <p>© {new Date().getFullYear()} TodayMenu. All rights reserved.</p>
          <p className="hidden md:block">Made with 🍜 & 😋 in KENTECH</p>
        </div>
      </footer>
    </div>
  );
}
