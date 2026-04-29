'use client';

import React from 'react';
import Link from 'next/link';

export default function DrHuangArchivePage() {
    // 模擬文章資料，未來可改為從 Supabase 讀取
    const articles = [
        { id: 'article-1', title: 'PPLs 與大腦神經膠質細胞的修復機制', date: '2026-04-25', category: '神經科學' },
        { id: 'article-2', title: '葉黃素之外：視網膜屏障的關鍵修復', date: '2026-04-10', category: '視力防護' },
        { id: 'article-3', title: '慢性發炎：沈默的健康殺手與預防之道', date: '2026-03-28', category: '免疫系統' },
    ];

    return (
        <main className="min-h-screen bg-[#FDFBF9] pb-20">
            {/* 導覽列 */}
            <nav className="px-6 py-4 flex items-center bg-white border-b border-slate-100 sticky top-0 z-50">
                <Link href="/categories/dr-huang" className="text-slate-400 mr-4 flex items-center">
                    <span className="text-xl">←</span>
                </Link>
                <h1 className="text-lg font-black text-[#2D3748]">往期專欄回顧</h1>
            </nav>

            {/* 文章列表 */}
            <div className="px-6 py-8">
                <div className="flex flex-col gap-4">
                    {articles.map((art) => (
                        <Link key={art.id} href={`/categories/dr-huang/${art.id}`} className="block group">
                            <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm active:scale-[0.98] transition-all group-hover:border-teal-100 group-hover:shadow-md">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase tracking-wider">
                                        {art.category}
                                    </span>
                                    <span className="text-[10px] text-slate-400 font-bold">
                                        {art.date}
                                    </span>
                                </div>
                                <h3 className="text-md font-black text-slate-800 leading-snug group-hover:text-teal-700 transition-colors">
                                    {art.title}
                                </h3>
                                <div className="mt-4 flex items-center text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                                    Read Article <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <footer className="px-8 text-center mt-10">
                <p className="text-[9px] text-slate-300 font-bold uppercase tracking-[0.2em]">
                    NatureWise Biotech & Medicals
                </p>
            </footer>
        </main>
    );
}