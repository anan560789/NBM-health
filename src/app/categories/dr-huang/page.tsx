'use client';

import React from 'react';
import Link from 'next/link';

export default function DrHuangColumnPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#1E293B] font-sans pb-24">

      {/* 1. 頂端導覽列 (Sticky Header) */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex items-center border-b border-slate-100">
        <button className="text-2xl mr-4 text-[#007F80]">≡</button>
        <h1 className="text-lg font-bold text-[#007F80]">彥臣專業衛教平台</h1>
      </nav>

      {/* 2. 英雄看板區 (Hero Section) - 同步 image_3a8018 */}
      <section className="px-5 py-6">
        <div className="bg-[#F3F4F1] rounded-[2.5rem] p-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#007F80] text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
              ✔ 權威深度解析
            </div>
          </div>

          <h2 className="text-4xl font-black text-[#007F80] mb-4">黃博士專欄</h2>
          <p className="text-sm text-slate-500 leading-relaxed mb-8">
            專業生技醫藥深度解析，連結前沿科學與臨床實踐的知識橋樑。
          </p>

          <div className="flex gap-3 mb-8">
            <button className="bg-[#007F80] text-white px-6 py-3 rounded-2xl text-xs font-bold shadow-md">
              訂閱最新觀點
            </button>
            <button className="bg-[#E5E7EB] text-slate-600 px-6 py-3 rounded-2xl text-xs font-bold">
              瀏覽往期
            </button>
          </div>

          {/* 黃博士主視覺大圖 */}
          <div className="rounded-[2rem] overflow-hidden aspect-square bg-slate-300 relative">
            {/* 放入黃博士在實驗室操作電腦的圖片 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 3. 黃博士觀點 (文章列表區) - 同步最新兩篇文章 */}
      <section className="px-5 py-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">💡</span>
          <h3 className="text-xl font-bold text-[#007F80]">黃博士觀點</h3>
        </div>
        <p className="text-xs text-slate-400 mb-8 font-medium">
          針對目前醫學爭議與研究發現的權威評論
        </p>

        <div className="space-y-10">
          {/* 文章 1 */}
          <article className="group">
            <div className="rounded-[2rem] overflow-hidden mb-4 aspect-video bg-slate-200">
              {/* 圖片：手術室/機械手臂 */}
            </div>
            <p className="text-[11px] font-bold text-[#A14B3A] mb-2 uppercase tracking-wider">臨床實務</p>
            <h4 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-[#007F80] transition-colors">
              新一代抗體藥物的未來趨勢：<br />從實驗室到病榻
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
              分析生物製劑在精準治療中的角色，以及如何克服當前的製程挑戰與療效限制...
            </p>
          </article>

          {/* 文章 2 */}
          <article className="group">
            <div className="rounded-[2rem] overflow-hidden mb-4 aspect-video bg-slate-200">
              {/* 圖片：DNA 螺旋 */}
            </div>
            <p className="text-[11px] font-bold text-[#A14B3A] mb-2 uppercase tracking-wider">生醫倫理</p>
            <h4 className="text-xl font-black text-slate-800 mb-3 leading-tight group-hover:text-[#007F80] transition-colors">
              基因編輯技術的紅線：<br />科學突破與人文關懷的平衡
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
              CRISPR 技術帶來的無限可能，以及我們必須共同面對的倫理與規範難題...
            </p>
          </article>
        </div>
      </section>

      {/* 4. 加入社群訂閱區塊 */}
      <section className="px-5 py-8">
        <div className="bg-[#F3F4F1] rounded-[2.5rem] p-8 text-center">
          <h3 className="text-xl font-black text-slate-800 mb-2">加入專業生醫社群</h3>
          <p className="text-[11px] text-slate-400 mb-8 font-medium">由黃博士親自撰寫的醫藥專題</p>

          <div className="flex bg-white rounded-full p-1.5 shadow-sm border border-slate-100">
            <input
              type="email"
              placeholder="您的電子郵件"
              className="flex-1 bg-transparent px-5 text-sm focus:outline-none"
            />
            <button className="bg-[#007F80] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
              →
            </button>
          </div>
        </div>
      </section>

      {/* 5. 底部固定導覽 (回分類導覽) */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-100 px-6 py-4 flex justify-center z-50">
        <Link href="/categories" className="flex flex-col items-center gap-1 group">
          <div className="grid grid-cols-2 gap-0.5 mb-1 group-active:scale-90 transition-transform">
            <div className="w-2 h-2 bg-slate-300 rounded-sm"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-sm"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-sm"></div>
            <div className="w-2 h-2 bg-slate-300 rounded-sm"></div>
          </div>
          <span className="text-[10px] font-bold text-slate-400">回分類導覽</span>
        </Link>
      </footer>
    </main>
  );
}
