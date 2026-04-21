"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const initLiff = async () => {
      try {
        if (typeof window === "undefined") return;

        const liff = (await import("@line/liff")).default;
        await liff.init({
          liffId: process.env.NEXT_PUBLIC_LIFF_ID || "",
        });
        console.log("LIFF 成功啟動");

        if (liff.isLoggedIn()) {
          router.push('/categories');
        }
      } catch (error: any) {
        console.error("LIFF 啟動失敗", error.message);
      }
    };
    initLiff();
  }, [router]);

  const handleLineLogin = async () => {
    try {
      const liff = (await import("@line/liff")).default;
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: window.location.origin + "/categories" });
      } else {
        router.push("/categories");
      }
    } catch (err) {
      console.error("LINE login error:", err);
    }
  };

  return (
    <div className="bg-[#faf9f5] font-body text-on-surface min-h-screen flex flex-col items-center">
      {/* 頂部標誌欄 */}
      <header className="w-full max-w-4xl flex justify-between items-center px-6 py-8">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#006067] text-3xl" data-icon="medical_services">
            medical_services
          </span>
          <span className="text-[#006067] font-headline font-bold text-xl tracking-wider">
            彥臣生技
          </span>
        </div>
      </header>

      <main className="w-full max-w-4xl px-6 flex flex-col items-center pb-32">
        {/* 垂直置中的主視覺區域 */}
        <section className="flex flex-col items-center w-full mt-4 md:mt-12 mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">

          <div className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-[#006067]/20 bg-[#006067]/5 text-[#006067] text-sm font-bold mb-8 shadow-sm">
            <span className="material-symbols-outlined text-[18px]">verified</span>
            基於研究證據
          </div>

          <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-[#1b1c1a] tracking-tight leading-[1.2] mb-6 text-center">
            彥臣專業衛教平台
          </h1>

          <p className="text-xl text-[#1b1c1a]/70 max-w-2xl text-center leading-relaxed mb-12 font-medium">
            連接科學與健康的橋樑，為醫療專業人士與追求品質的您提供權威實證資訊。
          </p>

          <button onClick={handleLineLogin} className="w-full sm:w-auto min-w-[320px] flex items-center justify-center gap-4 bg-[#006067] hover:bg-[#007b83] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-[0_8px_32px_rgba(0,96,103,0.3)] active:scale-95 transition-all">
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738s-12 4.369-12 9.738c0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.047c-.052.312-.252 1.22 1.085.665 1.336-.554 7.203-4.241 9.828-7.267 1.83-2.001 2.126-3.834 2.126-5.73z"></path>
            </svg>
            使用 LINE 登入
          </button>
        </section>

        {/* 垂直排列的大卡片區塊 */}
        <section className="w-full flex flex-col gap-6 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          {/* 第一個：科學驗證的生技醫藥資訊 */}
          <div className="bg-white border border-[#006067]/10 rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,96,103,0.06)] transition-all">
            <div className="w-20 h-20 rounded-2xl bg-[#006067]/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[40px] text-[#006067]">science</span>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-[#1b1c1a] mb-4">科學驗證的生技醫藥資訊</h3>
              <p className="text-[#1b1c1a]/70 font-body text-lg leading-relaxed">由專科醫師與生材專家詳盡解析專利成份與臨床效果，為您提供最精確的保健指南與醫學常識。</p>
            </div>
          </div>

          {/* 第二個：生技醫藥新知 */}
          <div className="bg-white border border-[#006067]/10 rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,96,103,0.06)] transition-all">
            <div className="w-20 h-20 rounded-2xl bg-[#006067]/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[40px] text-[#006067]">monitor_heart</span>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-[#1b1c1a] mb-4">生技醫藥新知</h3>
              <p className="text-[#1b1c1a]/70 font-body text-lg leading-relaxed">匯集國內外最新論文與前沿醫療期刊，為醫療從業人員與重視健康的您輕鬆掌握科研突破。</p>
            </div>
          </div>

          {/* 第三個：專家問答 */}
          <div className="bg-white border border-[#006067]/10 rounded-[2rem] p-8 md:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,96,103,0.06)] transition-all">
            <div className="w-20 h-20 rounded-2xl bg-[#006067]/10 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[40px] text-[#006067]">forum</span>
            </div>
            <div className="text-center sm:text-left flex-1">
              <h3 className="text-2xl md:text-3xl font-headline font-bold text-[#1b1c1a] mb-4">專家問答</h3>
              <p className="text-[#1b1c1a]/70 font-body text-lg leading-relaxed">您可以直接與專業黃博士及其資深研發醫療顧問團隊進行諮詢，專業為您解除各項健康疑慮。</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
