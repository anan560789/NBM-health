'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import liff from '@line/liff';

export default function CategoriesPage() {
  const [question, setQuestion] = useState('');
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 1. LIFF 初始化與權限檢查 (硬寫 ID 版確保穩定)
  useEffect(() => {
    const initLiff = async () => {
      try {
        const liffId = "2009691062-IZVshmjD"; // 保持硬寫 ID 排除環境變數干擾

        await liff.init({ liffId });

        if (!liff.isLoggedIn()) {
          router.replace('/');
        } else {
          const userProfile = await liff.getProfile();
          setProfile(userProfile);
          setLoading(false);
        }
      } catch (err) {
        console.error('LIFF Initialization failed', err);
        setLoading(false);
      }
    };
    initLiff();
  }, [router]);

  // 2. 衛教專題分類資料 (整合產品與研究項目)
  const mainTopics = [
    {
      id: 'brain-nerve',
      name: '大腦與神經系統',
      desc: '病理機轉、用藥與慧祐全 (PPLs) 研究',
      image: '/images/topics/brain.jpg',
      barnHealth: 'BARN HEALTH'
    },
    {
      id: 'eyes',
      name: '視力與黃斑部護理',
      desc: '各項眼疾病理、保健與視祐全運用',
      image: '/images/topics/eye.jpg'
    },
    {
      id: 'immunity',
      name: '免疫力調節',
      desc: '深入研究免疫反應與康祐全運用',
      image: '/images/topics/immunity.jpg',
      textOverlay: 'IMMUNITY'
    },
    {
      id: 'inflammation-cancer',
      name: '慢性發炎與癌症',
      desc: '慢性疾病、癌症與 Propolins 的研究',
      image: '/images/topics/cancer.jpg'
    },
    {
      id: 'diabetes',
      name: '糖尿病專題',
      desc: '控制血糖、胰島健康與糖祐全運用',
      image: '/images/topics/diabetes.jpg'
    },
    {
      id: 'cardiovascular',
      name: '心血管系統',
      desc: '心臟血管系統保健與脂祐全、清祐全運用',
      image: '/images/topics/cardio.jpg'
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDFBF9]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#007F80]"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#1E293B] font-sans pb-16">

      {/* 頂端導覽列：動態讀取 LINE 頭像 */}
      <nav className="px-6 py-4 flex items-center justify-between bg-white/40 backdrop-blur-md sticky top-0 z-50 border-b border-white/20">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm relative">
            {profile?.pictureUrl ? (
              <Image
                src={profile.pictureUrl}
                alt={profile.displayName || 'User'}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="w-full h-full bg-slate-300" />
            )}
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] font-black text-teal-600 uppercase tracking-widest">Medical Pro</span>
            <span className="text-sm font-black text-[#2D3748]">
              {profile ? `${profile.displayName} 藥師/專家` : '彥臣衛教平台'}
            </span>
          </div>
        </div>
        <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm text-slate-400">🔔</button>
      </nav>

      {/* 黃博士專欄 (Pillar Visual) */}
      <section className="px-5 py-4">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-[#A1816B] text-[10px] font-black uppercase tracking-[0.2em] mb-2">Expert Insight</p>
            <h1 className="text-3xl font-black text-[#007F80]">黃博士專欄</h1>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed max-w-[240px] font-medium">
              專業生技醫藥深度解析，為您揭開現代醫學與草本科學的整合奧秘。
            </p>
            <Link href="/categories/dr-huang" className="inline-flex items-center gap-2 mt-8 bg-[#007F80] text-white px-10 py-3.5 rounded-full text-xs font-bold shadow-lg shadow-teal-900/10 active:scale-95 transition-all">
              立即閱讀 →
            </Link>
          </div>

          <div className="mt-8 rounded-[2rem] overflow-hidden aspect-square bg-slate-900 relative group">
            {/* 此處之後可放入指定的石柱主視覺圖片 */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-transparent z-10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-[10px] tracking-widest uppercase">Pillar Visual Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* 衛教專題分類區塊 */}
      <section className="px-5 py-6 space-y-5">
        <div className="flex flex-col mb-6 px-2">
          <h2 className="text-xl font-black text-slate-800 tracking-tight">衛教專題分類</h2>
          <span className="text-xs text-slate-400 font-bold mt-1 tracking-wide">深入探索各項健康領域 Research Papers</span>
        </div>

        {mainTopics.map((topic) => (
          <Link key={topic.id} href={`/categories/${topic.id}`} className="block group">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 transition-all active:scale-[0.98]">
              <div className="aspect-[16/9] relative bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                {/* 裝飾性文字疊加 */}
                {topic.textOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/5 text-6xl font-black tracking-[0.2em] uppercase">{topic.textOverlay}</span>
                  </div>
                )}
                {topic.barnHealth && (
                  <div className="absolute bottom-6 right-8 text-white/20 text-lg font-black tracking-tighter z-20 italic">
                    {topic.barnHealth}
                  </div>
                )}

                {/* 卡片文案 */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-black text-white mb-2">{topic.name}</h3>
                  <p className="text-[11px] text-white/70 font-medium tracking-wide max-w-[220px]">
                    {topic.desc}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* 專家問答區塊 */}
      <section className="px-5 py-8 mt-4">
        <div className="bg-[#F3F4F1] rounded-[3rem] p-10 flex flex-col items-center text-center border border-white shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#007F80] flex items-center justify-center shadow-lg mb-6">
            <span className="text-2xl text-white">💬</span>
          </div>
          <h3 className="text-2xl font-black text-[#007F80] mb-4">專家問答</h3>
          <p className="text-[12px] text-slate-600 leading-relaxed mb-10 max-w-[280px] font-medium">
            對衛教內容有疑問？請在此留下您的問題，我們的醫療專家團隊將為您提供專業解答。
          </p>

          <div className="w-full space-y-5">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="請輸入您的問題或臨床觀察..."
              className="w-full bg-white border-none rounded-[1.5rem] p-6 text-sm text-slate-800 placeholder:text-slate-300 focus:ring-2 focus:ring-teal-500/20 min-h-[160px] shadow-inner resize-none transition-all"
            />
            <button className="w-full bg-[#007F80] hover:bg-[#006666] text-white py-4.5 rounded-full text-xs font-black flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-teal-900/20">
              提交專業諮詢 ➤
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 text-center">
        <div className="w-10 h-1 bg-slate-200 mx-auto mb-8 rounded-full" />
        <p className="text-[10px] text-slate-400 font-bold leading-loose uppercase tracking-widest">
          © 2026 彥臣生技藥品股份有限公司 <br />
          NatureWise Biotech & Medicals- Professional Medical Resources
        </p>
      </footer>
    </main>
  );
}