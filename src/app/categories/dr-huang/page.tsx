'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export default function DrHuangColumnPage() {
  const subscribeRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. 平滑滾動至訂閱區塊
  const scrollToSubscribe = () => {
    subscribeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // 2. 處理 Email 訂閱邏輯
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email: email.trim().toLowerCase() }]);

      if (error) {
        if (error.code === '23505') {
          alert('此 Email 已經訂閱過囉！感謝您的支持。');
        } else {
          alert('訂閱時發生錯誤：' + error.message);
        }
      } else {
        alert('感謝訂閱！未來黃博士的新文章將第一時間通知您。');
        setEmail('');
      }
    } catch (err) {
      console.error('Subscribe error:', err);
      alert('網路連線異常，請稍後再試。');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#1E293B] pb-20 font-sans">
      {/* 頂部導覽 */}
      <nav className="px-6 py-4 flex items-center bg-white/60 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <Link href="/categories" className="text-slate-400 mr-4 flex items-center p-2">
          <span className="text-xl">←</span>
        </Link>
        <h1 className="text-lg font-black text-[#2D3748]">黃博士專欄</h1>
      </nav>

      {/* 主視覺區塊 (Hero Section) */}
      <section className="px-5 py-6">
        <div className="bg-[#007F80] rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-70">Expert Insight</span>
            <h2 className="text-4xl font-black mt-2 mb-4 leading-tight">掌握生醫趨勢<br />引領健康未來</h2>
            <p className="text-sm opacity-80 max-w-[240px] leading-relaxed mb-10 font-medium">
              由黃博士親自撰寫，結合臨床實務與尖端科學，為您解析最具價值的健康醫學觀點。
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={scrollToSubscribe}
                className="bg-white text-[#007F80] px-6 py-3.5 rounded-full text-xs font-black shadow-lg active:scale-95 transition-all"
              >
                訂閱最新觀點
              </button>
              <Link
                href="/categories/dr-huang/archive"
                className="bg-teal-700/50 backdrop-blur-sm text-white px-6 py-3.5 rounded-full text-xs font-black border border-white/20 active:scale-95 transition-all"
              >
                瀏覽往期 →
              </Link>
            </div>
          </div>
          {/* 背景裝飾球 */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        </div>
      </section>

      {/* 文章列表區塊 */}
      <section className="px-5 py-8 space-y-6">
        <div className="flex items-center justify-between px-2 mb-2">
          <h3 className="text-xl font-black text-slate-800">深度解析專題</h3>
          <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">Deep Dive Articles</span>
        </div>

        {/* 文章卡片 1 */}
        <Link href="/categories/dr-huang/article-1" className="block group">
          <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm transition-all group-active:scale-[0.98] group-hover:border-teal-100">
            <div className="flex items-start gap-5">
              <div className="w-24 h-24 rounded-3xl bg-slate-100 flex-shrink-0 relative overflow-hidden">
                <Image
                  src="/brain_category.jpg"
                  alt="PPLs"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black text-teal-600 tracking-tighter uppercase">Neuroscience</span>
                <h4 className="text-lg font-black text-slate-800 mt-1 mb-2 leading-snug group-hover:text-[#007F80] transition-colors">
                  PPLs 與大腦神經膠質細胞的修復機制
                </h4>
                <p className="text-[11px] text-slate-400 font-medium line-clamp-2 leading-relaxed">
                  探討綠蜂窩萃取物在現代醫學中對於維持認知功能與神經元健康的臨床意義。
                </p>
              </div>
            </div>
          </div>
        </Link>

        {/* 文章卡片 2 */}
        <Link href="/categories/dr-huang/article-2" className="block group">
          <div className="bg-white rounded-[2.5rem] p-6 border border-slate-100 shadow-sm transition-all group-active:scale-[0.98] group-hover:border-teal-100">
            <div className="flex items-start gap-5">
              <div className="w-24 h-24 rounded-3xl bg-slate-100 flex-shrink-0 relative overflow-hidden">
                <Image
                  src="/eye_category.jpg"
                  alt="Eyes"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-black text-amber-600 tracking-tighter uppercase">Ocular Health</span>
                <h4 className="text-lg font-black text-slate-800 mt-1 mb-2 leading-snug group-hover:text-[#007F80] transition-colors">
                  葉黃素之外：視網膜屏障的關鍵修復
                </h4>
                <p className="text-[11px] text-slate-400 font-medium line-clamp-2 leading-relaxed">
                  黃博士為您解析如何透過生理機制預防黃斑部病變與視神經老化。
                </p>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* 專業生醫社群訂閱區 (底部) */}
      <section ref={subscribeRef} className="px-5 py-12">
        <div className="bg-[#F3F4F1] rounded-[3.5rem] p-10 text-center border border-white shadow-inner relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-2xl font-black text-[#2D3748] mb-3">加入專業生醫社群</h3>
            <p className="text-xs text-slate-500 mb-10 leading-relaxed font-medium">
              訂閱黃博士電子報，我們將在最新衛教研究發佈時，<br />第一時間發送到您的信箱。
            </p>

            <form onSubmit={handleSubscribe} className="space-y-4 max-w-[300px] mx-auto">
              <input
                type="email"
                required
                disabled={isSubmitting}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="請輸入您的 Email 地址"
                className="w-full bg-white border-none rounded-full py-4 px-8 text-sm text-slate-800 shadow-sm focus:ring-2 focus:ring-[#007F80]/20 placeholder:text-slate-300 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2D3748] text-white py-4.5 rounded-full text-xs font-black shadow-xl active:scale-95 transition-all disabled:bg-slate-400"
              >
                {isSubmitting ? '處理中...' : '確認訂閱'}
              </button>
            </form>

            <p className="mt-8 text-[9px] text-slate-400 font-bold uppercase tracking-widest">
              Privacy Guaranteed • Expert Updates Only
            </p>
          </div>
          {/* 背景裝飾紋理 */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/30 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="px-8 text-center mt-4">
        <div className="w-8 h-1 bg-slate-200 mx-auto mb-6 rounded-full"></div>
        <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em] leading-relaxed">
          NatureWise Biotech & Medicals <br />
          Professional Medical Content
        </p>
      </footer>
    </main>
  );
}