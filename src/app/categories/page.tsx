'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CategoriesPage() {
  const [question, setQuestion] = useState('');

  // 1. 衛教專題分類資料：完全同步 image_39fc73, image_3a0073, image_3a0797
  const mainTopics = [
    {
      id: 'brain-nerve',
      name: '大腦與神經系統',
      desc: '病理機轉、用藥與慧祐全',
      image: '/images/topics/brain.jpg',
      barnHealth: 'BARN HEALTH'
    },
    {
      id: 'eyes',
      name: '眼睛',
      desc: '各項眼疾病理、保健與視祐全運用',
      image: '/images/topics/eye.jpg'
    },
    {
      id: 'immunity',
      name: '免疫力',
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
      name: '糖尿病',
      desc: '控制血糖、胰島健康與糖祐全運用',
      image: '/images/topics/diabetes.jpg'
    },
    {
      id: 'cardiovascular',
      name: '心血管系統',
      desc: '心臟血管系統保健與脂祐全、清祐全的運用',
      image: '/images/topics/cardio.jpg'
    },
  ];

  return (
    <main className="min-h-screen bg-[#FDFBF9] text-[#1E293B] font-sans pb-16">

      {/* 2. 頂端導覽列：完全同步 image_39a1e2 */}
      <nav className="px-6 py-4 flex items-center justify-between bg-white/40 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden border border-slate-100 shadow-sm">
            {/* LIFF 頭像位置 */}
          </div>
          <span className="text-sm font-bold text-[#2D3748]">彥臣專業衛教平台</span>
        </div>
        <button className="text-xl text-slate-400">🔔</button>
      </nav>

      {/* 3. 黃博士專欄：完全同步 image_39a1e2 */}
      <section className="px-5 py-4">
        <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
          <div className="text-center mb-6">
            <p className="text-[#A1816B] text-[10px] font-black uppercase tracking-[0.2em] mb-2">EXPERT INSIGHT</p>
            <h1 className="text-3xl font-black text-[#007F80]">黃博士專欄</h1>
            <p className="text-xs text-slate-500 mt-4 leading-relaxed max-w-[260px] mx-auto font-medium">
              專業生技醫藥深度解析，為您揭開現代醫學與草本科學的整合奧秘。
            </p>
            <Link href="/categories/dr-huang" className="inline-flex items-center gap-2 mt-8 bg-[#007F80] text-white px-10 py-3.5 rounded-full text-xs font-bold shadow-lg shadow-teal-900/10 active:scale-95 transition-all">
              立即閱讀 →
            </Link>
          </div>
          <div className="rounded-[2rem] overflow-hidden aspect-square bg-black flex items-center justify-center">
            {/* 此處放置石柱主視覺 */}
            <div className="text-white/20 text-[10px] tracking-widest">PILLAR VISUAL</div>
          </div>
        </div>
      </section>

      {/* 4. 衛教專題分類區塊：完全同步 image_39fc73 */}
      <section className="px-5 py-6 space-y-5">
        <div className="flex flex-col mb-6 px-2">
          <h2 className="text-xl font-black text-slate-800">衛教專題分類</h2>
          <span className="text-xs text-slate-400 font-bold mt-1">深入探索各項健康領域</span>
        </div>

        {mainTopics.map((topic) => (
          <Link key={topic.id} href={`/categories/${topic.id}`} className="block group">
            <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 transition-all active:scale-[0.98]">
              <div className="aspect-[16/10] relative bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

                {/* 裝飾性文字疊加 */}
                {topic.textOverlay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/10 text-6xl font-black tracking-widest uppercase">{topic.textOverlay}</span>
                  </div>
                )}
                {topic.barnHealth && (
                  <div className="absolute bottom-6 right-8 text-white/20 text-xl font-bold tracking-tight z-20">{topic.barnHealth}</div>
                )}

                {/* 卡片文案 */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <h3 className="text-2xl font-black text-white mb-2">{topic.name}</h3>
                  <p className="text-[11px] text-white/70 font-medium tracking-wide">{topic.desc}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* 5. 專家問答區塊：完全同步 image_3a0bd7 */}
      <section className="px-5 py-8 mt-4">
        <div className="bg-[#F3F4F1] rounded-[3rem] p-10 flex flex-col items-center text-center border border-white shadow-sm">
          <div className="w-14 h-14 rounded-2xl bg-[#007F80] flex items-center justify-center shadow-lg mb-6">
            <span className="text-2xl text-white">💬</span>
          </div>
          <h3 className="text-2xl font-black text-[#007F80] mb-4">專家問答</h3>
          <p className="text-[12px] text-slate-600 leading-relaxed mb-10 max-w-[280px] font-medium">
            對衛教內容有疑問？或是想了解特定的生技醫藥知識？請在此留下您的問題，我們的醫療專家團隊將為您提供專業解答。
          </p>

          <div className="w-full space-y-5">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="請輸入您的問題..."
              className="w-full bg-white border-none rounded-[1.5rem] p-6 text-sm text-slate-800 placeholder:text-slate-300 focus:outline-none min-h-[160px] shadow-inner resize-none"
            />
            <button className="w-full bg-[#007F80] hover:bg-[#006666] text-white py-4.5 rounded-full text-xs font-black flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg shadow-teal-900/20">
              提交問題 ➤
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 text-center">
        <p className="text-[10px] text-slate-400 font-medium leading-loose">
          © 2026 彥臣生技藥品股份有限公司 專利所有 <br /> 專供生技醫藥新知參考。不涉及醫療建議。資訊與數據僅供參考。
        </p>
      </footer>
    </main>
  );
}