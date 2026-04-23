'use client';

import Image from 'next/image';
import { useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import liff from '@line/liff';

// 剩下的 import ...

export default function LandingPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center font-sans text-slate-400">載入中...</div>}>
      <LandingContent />
    </Suspense>
  );
}

function LandingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLineLogin = async () => {
    try {
      // 請確保 NEXT_PUBLIC_LIFF_ID 已在 Cloudflare 環境變數中設定
      await liff.init({ liffId: process.env.NEXT_PUBLIC_LIFF_ID! });

      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        const code = searchParams.get('code');
        if (code) {
          localStorage.setItem('nbm_invite_code', code);
          router.push('/categories');
        } else {
          const savedCode = localStorage.getItem('nbm_invite_code');
          if (savedCode) {
            router.push('/categories');
          } else {
            alert('請掃描專屬邀請碼 QR Code 進入平台');
          }
        }
      }
    } catch (err) {
      console.error("LIFF 錯誤", err);
    }
  };

  return (
    <main className="min-h-screen bg-[#F9F8F6] text-[#1E293B] font-sans pb-12">
      {/* 1. Header Area */}
      <section className="px-8 pt-12 pb-8 flex flex-col items-center text-center">
        <div className="bg-[#E2E8F0] text-teal-600 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase mb-6 flex items-center gap-2">
          <span>✓</span> 基於研究證據
        </div>
        <h1 className="text-3xl font-black tracking-tight text-slate-800 mb-4">
          彥臣專業衛教平台
        </h1>
        <p className="text-sm leading-relaxed text-slate-500 max-w-[280px]">
          連接科學與健康的橋樑，為醫療專業人士員追求品質的您提供權威實證資訊。
        </p>

        {/* 2. LINE Login Button */}
        <div className="w-full max-w-[320px] mt-10">
          <button
            onClick={handleLineLogin}
            className="w-full bg-[#007F80] hover:bg-[#006666] active:scale-[0.98] transition-all text-white py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg"
          >
            <span className="text-xl">💬</span>
            <span className="font-bold tracking-wide">使用 LINE 登入</span>
          </button>
          <p className="text-[10px] text-slate-400 mt-4 font-medium">
            立即登入解鎖完整專家諮詢權限與深度研究報告
          </p>
        </div>
      </section>

      {/* 3. Feature Cards */}
      <section className="px-6 space-y-6 mt-6">
        {/* Card 1: 科學驗證 */}
        <div className="bg-[#F3F4F1] rounded-[2.5rem] p-8 border border-white/50 shadow-sm">
          <div className="flex items-center gap-2 text-[#004D4D] mb-4">
            <span className="text-lg">🧪</span>
            <span className="text-[10px] font-black uppercase tracking-[0.1em]">Scientific Validation</span>
          </div>
          <h2 className="text-xl font-black text-slate-800 mb-3">科學驗證的生技醫藥資訊</h2>
          <p className="text-xs leading-relaxed text-slate-500 mb-6">
            幫助您理解病理機轉與天然保健品的運用原理。深入淺出的學術解析，讓健康掌握在數據與實證之中。
          </p>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-inner">
            <Image
              src="/scientific-lab-2.jpg"
              alt="實驗室科學研究"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Card 2: 生技醫藥新知 */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2 text-[#475569] mb-4">
            <span className="text-lg">📄</span>
            <span className="text-[10px] font-black uppercase tracking-[0.1em]">Latest Insights</span>
          </div>
          <h2 className="text-xl font-black text-slate-800 mb-3">生技醫藥新知</h2>
          <p className="text-xs leading-relaxed text-slate-500 mb-6">
            追蹤全球生技製藥最新動態與臨床研究成果，為您的專業知識庫提供即時更新。
          </p>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-inner border border-slate-50">
            <Image
              src="/research-lab-dna.jpg"
              alt="DNA 研究室"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}