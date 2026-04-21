"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function CategoriesPage() {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<{ displayName: string; pictureUrl?: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      if (!supabaseUrl || !supabaseAnonKey) return;
      const { data } = await supabase.from("articles").select("*").order("created_at", { ascending: false });
      if (data) setArticles(data);
    };
    fetchArticles();
    
    const initLiff = async () => {
      try {
        if (typeof window === "undefined") return;

        const liff = (await import("@line/liff")).default;
        await liff.init({
          liffId: process.env.NEXT_PUBLIC_LIFF_ID || "",
        });

        if (liff.isLoggedIn()) {
          const profile = await liff.getProfile();
          setUserProfile({
            displayName: profile.displayName,
            pictureUrl: profile.pictureUrl,
          });
        }
      } catch (error: any) {
        console.error("LIFF 啟動失敗", error.message);
      }
    };
    initLiff();
  }, []);

  const categories = [
    { title: "大腦與神經系統", desc: "病理機轉、用藥與慧祐全", imgSrc: "", href: "/topics/brain" },
    { title: "眼睛", desc: "各項眼疾病理、保健與視祐全運用", imgSrc: "", href: "/topics/eyes" },
    { title: "免疫力", desc: "深入研究免疫反應與康祐全運用", imgSrc: "", href: "/topics/immunity" },
    { title: "慢性發炎與癌症", desc: "慢性疾病、癌症與Propolins的研究", imgSrc: "", href: "/topics/inflammation" },
    { title: "糖尿病", desc: "控制血糖、胰島健康與糖祐全運用", imgSrc: "", href: "/topics/diabetes" },
    { title: "心血管系統", desc: "心臟血管系統保健與脂祐全、清祐全的運用", imgSrc: "", href: "/topics/cardiovascular" }
  ];

  return (
    <div className="bg-[#faf9f5] font-body text-on-surface min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="bg-[#faf9f5]/80 dark:bg-[#1b1c1a]/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 w-full sticky top-0 z-50 transition-all shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto w-full relative flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group p-2 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors z-10">
            <span className="material-symbols-outlined text-[#006067] dark:text-[#007b83] transition-transform group-hover:-translate-x-1">
              arrow_back
            </span>
          </Link>
          <div className="flex justify-center items-center absolute w-full left-0 pointer-events-none">
            <span className="text-[#006067] dark:text-[#007b83] font-headline font-bold text-[1.1rem] md:text-xl tracking-wide">
              彥臣專業衛教平台
            </span>
          </div>
          <div className="flex items-center gap-3 z-10">
            {userProfile?.displayName && (
              <span className="text-[#006067] dark:text-[#007b83] font-headline font-bold tracking-tight text-sm hidden sm:block">
                {userProfile.displayName}
              </span>
            )}
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#006067]/10 dark:ring-[#007b83]/20 bg-white dark:bg-surface-container-highest">
              {userProfile?.pictureUrl ? (
                <img src={userProfile.pictureUrl} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#006067] dark:text-[#007b83] font-bold">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 animate-in slide-in-from-bottom-8 fade-in duration-500">
        {/* Greeting Section */}
        <section className="mb-12 relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-[#20211f] p-8 md:p-12 border border-[#006067]/10 dark:border-white/5 shadow-[0_4px_24px_rgba(0,96,103,0.04)]">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-[#006067]/5 dark:bg-[#007b83]/10 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-[#e8a379]/10 dark:bg-[#e8a379]/5 rounded-full blur-[80px]"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <div>
                <h1 className="font-headline text-4xl md:text-6xl font-extrabold tracking-tight text-[#006067] dark:text-[#007b83] mb-2">
                  您好，{userProfile?.displayName || "用戶"}！
                </h1>
                <p className="font-body text-xl text-[#006067]/70 dark:text-white/60 max-w-2xl leading-relaxed">選擇一個專題開始探索。您的醫學進階之旅由此展開。</p>
              </div>
              {/* Search Bar */}
              <div className="max-w-2xl w-full">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-[#006067]/40 dark:text-white/30 group-focus-within:text-[#006067] dark:group-focus-within:text-[#007b83] transition-colors">search</span>
                  </div>
                  <input 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#faf9f5] dark:bg-[#1b1c1a] border-none rounded-2xl py-5 pl-14 pr-6 text-[#006067] dark:text-white shadow-[0_2px_12px_rgba(0,0,0,0.02)] focus:ring-2 focus:ring-[#006067]/20 dark:focus:ring-[#007b83]/30 placeholder:text-[#006067]/40 dark:placeholder:text-white/30 font-medium text-lg transition-all focus:outline-none" 
                    placeholder="快速查找健康主題..." 
                    type="text"
                  />
                </div>
              </div>
            </div>
        </section>

        {/* Categories Grid */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.href} className="group relative flex flex-col items-center text-center bg-white dark:bg-[#20211f] px-6 py-10 rounded-[2rem] shadow-[0_4px_20px_rgba(0,96,103,0.03)] dark:shadow-none hover:shadow-[0_12px_40px_rgba(0,96,103,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,123,131,0.1)] active:scale-95 transition-all duration-300 border border-[#006067]/5 dark:border-white/5 hover:border-[#006067]/20 dark:hover:border-[#007b83]/20">
                <div className="w-28 h-28 mb-6 relative">
                  {/* 待替換為 Supabase Storage 網址 */}
                  {/* 若無圖片，先以預設圖形保留區塊 */}
                  {cat.imgSrc ? (
                    <img src={cat.imgSrc} alt={cat.title} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full bg-[#faf9f5] dark:bg-[#1b1c1a] rounded-full flex items-center justify-center border-2 border-dashed border-[#006067]/20 dark:border-white/10 group-hover:border-[#006067]/50 dark:group-hover:border-[#007b83]/50 transition-colors">
                      <span className="text-[#006067]/40 dark:text-white/30 text-xs font-semibold">圖片預留區</span>
                    </div>
                  )}
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#006067] dark:text-white mb-2">{cat.title}</h3>
                <p className="font-body text-[#006067]/70 dark:text-white/60 leading-relaxed text-sm mb-6 flex-1">{cat.desc}</p>
                <div className="w-10 h-10 rounded-full bg-[#006067]/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-[#006067] dark:group-hover:bg-[#007b83] transition-colors">
                  <span className="material-symbols-outlined text-[#006067] dark:text-white group-hover:text-white transition-colors">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Latest Articles Grid */}
        {articles.length > 0 && (
          <section className="mb-12">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">breaking_news_alt_1</span>
              最新衛教文章
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article: any, i: number) => (
                <div key={i} className="group relative flex flex-col bg-surface-container-lowest p-8 rounded-[2rem] shadow-[0_2px_12px_rgba(0,0,0,0.02)] border border-outline-variant/10 hover:shadow-[0_12px_40px_rgba(0,96,103,0.08)] transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-container"></div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant w-fit text-sm font-semibold mb-4 border border-outline-variant/20">
                    <span className="material-symbols-outlined text-sm text-primary">category</span>
                    {article.category}
                  </div>
                  <h3 className="font-headline text-2xl font-bold text-on-surface mb-3 line-clamp-2">{article.title}</h3>
                  <p className="font-body text-on-surface-variant leading-relaxed line-clamp-3 mb-6 flex-1">{article.content}</p>
                  <div className="flex justify-between items-center text-sm font-medium text-outline">
                    <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {new Date(article.created_at).toLocaleDateString()}</span>
                    <button className="text-primary hover:text-primary-container font-bold flex items-center gap-1 group-hover:underline">前往閱讀 <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">arrow_forward</span></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Signature Component: Learning Orb */}
        <section className="flex flex-col md:flex-row items-center gap-8 bg-surface-container p-8 rounded-[2.5rem] border border-outline-variant/10">
          <div className="relative w-48 h-48 flex items-center justify-center flex-shrink-0">
            <div className="absolute inset-0 bg-tertiary-container blur-[40px] opacity-20 rounded-full"></div>
            <svg className="w-full h-full transform -rotate-90">
              <circle className="text-surface-container-highest" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-secondary" cx="96" cy="96" fill="transparent" r="80" stroke="currentColor" strokeDasharray="502.4" strokeDashoffset="125.6" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-headline text-4xl font-extrabold text-on-surface">75%</span>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-bold mt-1">學習進度</span>
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h4 className="font-headline text-2xl font-bold text-on-surface mb-2">本週目標已達成！</h4>
            <p className="font-body text-on-surface-variant max-w-lg mx-auto md:mx-0 mb-6">您本週已精通 12 個主題。今天繼續完成「大腦與神經系統」模組以保持您的學習紀錄。</p>
            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-headline font-bold text-lg hover:shadow-lg transition-all active:scale-95 shadow-md">
              繼續學習
            </button>
          </div>
        </section>
      </main>

      {/* Floating Action Button (FAB) */}
      <button className="fixed bottom-24 right-6 md:bottom-12 md:right-12 w-16 h-16 rounded-[1.5rem] bg-gradient-to-tr from-primary to-primary-container text-on-primary shadow-[0_8px_32px_rgba(0,96,103,0.3)] flex items-center justify-center group active:scale-90 transition-transform z-40 hover:shadow-[0_16px_48px_rgba(0,96,103,0.4)]">
        <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">add_notes</span>
        <span className="absolute right-full mr-4 bg-on-surface text-surface text-xs font-bold py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">快速筆記</span>
      </button>

      {/* BottomNavBar (Mobile Only) */}
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
