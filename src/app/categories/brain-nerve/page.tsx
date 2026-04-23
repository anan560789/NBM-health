"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function BrainNervePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const articles = [ { id: 1, title: "神經退化性疾病的成因與預防", date: "2026-04-18", summary: "探討阿茲海默症、帕金森氏症等神經退化性疾病的病理機轉，以及如何從日常保養做起。", readTime: "7 分鐘", }, { id: 2, title: "慧祐全的臨床應用與機制", date: "2026-03-12", summary: "解析神經滋養因子如何透過專利成分發揮作用，促進神經修復並改善認知功能。", readTime: "5 分鐘", } ];

  return (
    <div className="bg-[#faf9f5] font-body text-on-surface min-h-screen pb-32">
      <header className="bg-[#faf9f5]/80 dark:bg-[#1b1c1a]/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto w-full relative flex justify-between items-center">
          <Link href="/categories" className="flex items-center gap-2 group p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors z-10">
            <span className="material-symbols-outlined text-[#006067] dark:text-[#007b83] transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
          </Link>
          <div className="flex justify-center items-center absolute w-full left-0 pointer-events-none">
            <span className="text-[#006067] dark:text-[#007b83] font-headline font-bold text-[1.1rem] md:text-xl tracking-wide">
              大腦與神經系統
            </span>
          </div>
          <div className="flex items-center gap-3 z-10">
             <button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
               <span className="material-symbols-outlined text-[#006067] dark:text-[#007b83]">
                 bookmark
               </span>
             </button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8 animate-in slide-in-from-bottom-8 fade-in duration-500">
        
        <section className="mb-12 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#006067] to-[#004a50] dark:from-[#004a50] dark:to-[#002d30] p-8 md:p-12 shadow-[0_16px_40px_rgba(0,96,103,0.2)]">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#e8a379]/20 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white/20 overflow-hidden shrink-0 shadow-xl bg-white flex justify-center items-center">
                <span className="material-symbols-outlined text-[80px] text-[#006067]/40">psychology</span>
              </div>
              <div className="text-center md:text-left text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold mb-4">
                  <span className="material-symbols-outlined text-sm">menu_book</span>
                  主題課程
                </div>
                <h1 className="font-headline text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-white">
                  大腦與神經系統
                </h1>
                <p className="font-body text-white/80 text-lg leading-relaxed max-w-xl">
                  深入探討病理機轉、用藥須知以及慧祐全在神經系統保健中的臨床運用。
                </p>
              </div>
            </div>
        </section>

        <section className="mb-8">
            <div className="relative group max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-[#006067]/40 dark:text-white/30 group-focus-within:text-[#006067] dark:group-focus-within:text-[#007b83] transition-colors">search</span>
              </div>
              <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-[#1b1c1a] border border-[#006067]/10 dark:border-white/10 rounded-2xl py-4 pl-14 pr-6 text-[#006067] dark:text-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-[#006067]/20 dark:focus:ring-[#007b83]/30 placeholder:text-[#006067]/40 dark:placeholder:text-white/30 font-medium transition-all focus:outline-none" 
                placeholder="搜尋此分類文章..." 
                type="text"
              />
            </div>
        </section>

        <section className="flex flex-col gap-6">
          {articles.filter(c => c.title.includes(searchQuery) || c.summary.includes(searchQuery)).map((article) => (
            <Link key={article.id} href={`#`} className="group bg-white dark:bg-[#20211f] rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 shadow-[0_4px_20px_rgba(0,96,103,0.03)] dark:shadow-none border border-[#006067]/5 dark:border-white/5 hover:shadow-[0_12px_40px_rgba(0,96,103,0.08)] hover:border-[#006067]/20 transition-all duration-300">
              <div className="w-full md:w-48 h-48 md:h-auto rounded-[1.5rem] bg-[#faf9f5] dark:bg-[#1b1c1a] shrink-0 border border-[#006067]/10 dark:border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-[#006067]/30 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-[#006067]/5 to-transparent"></div>
                <span className="material-symbols-outlined text-4xl text-[#006067]/30">description</span>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#006067]/10 text-[#006067] dark:bg-[#007b83]/20 dark:text-[#00a8b3] text-xs font-bold">
                    <span className="material-symbols-outlined text-[14px]">local_offer</span>
                    大腦與神經系統
                  </span>
                  <span className="text-[#006067]/50 dark:text-white/40 text-sm font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">schedule</span>
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-headline text-2xl font-bold text-[#006067] dark:text-white mb-3 group-hover:text-[#004a50] dark:group-hover:text-[#00a8b3] transition-colors">
                  {article.title}
                </h2>
                
                <p className="font-body text-[#006067]/70 dark:text-white/60 leading-relaxed mb-6 line-clamp-2">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#006067]/5 dark:border-white/5">
                  <span className="text-[#006067]/50 dark:text-white/40 text-sm font-medium">
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 text-[#006067] dark:text-[#007b83] font-bold text-sm group-hover:translate-x-1 transition-transform">
                    閱讀全文
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </section>

      </main>

      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-[#faf9f5]/90 dark:bg-[#1b1c1a]/90 backdrop-blur-2xl rounded-t-[2rem] shadow-[0_-8px_32px_rgba(27,28,26,0.04)] border-t border-[#bdc9ca]/15">
        <Link className="flex flex-col items-center justify-center text-[#1b1c1a]/50 dark:text-[#faf9f5]/50 px-5 py-2 hover:text-[#006067] dark:hover:text-[#007b83] tap-highlight-transparent active:scale-90 transition-all" href="/">
          <span className="material-symbols-outlined">home</span>
          <span className="font-headline text-[10px] font-medium tracking-wide mt-1">首頁</span>
        </Link>
        <Link className="flex flex-col items-center justify-center bg-[#007b83]/10 dark:bg-[#007b83]/20 text-[#006067] dark:text-[#007b83] border-none rounded-2xl px-5 py-2 tap-highlight-transparent active:scale-90 transition-all" href="/categories">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>category</span>
          <span className="font-headline text-[10px] font-medium tracking-wide mt-1">分類</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-[#1b1c1a]/50 dark:text-[#faf9f5]/50 px-5 py-2 hover:text-[#006067] dark:hover:text-[#007b83] tap-highlight-transparent active:scale-90 transition-all" href="#">
          <span className="material-symbols-outlined">search</span>
          <span className="font-headline text-[10px] font-medium tracking-wide mt-1">搜尋</span>
        </Link>
        <Link className="flex flex-col items-center justify-center text-[#1b1c1a]/50 dark:text-[#faf9f5]/50 px-5 py-2 hover:text-[#006067] dark:hover:text-[#007b83] tap-highlight-transparent active:scale-90 transition-all" href="#">
          <span className="material-symbols-outlined">settings</span>
          <span className="font-headline text-[10px] font-medium tracking-wide mt-1">設定</span>
        </Link>
      </nav>
    </div>
  );
}
