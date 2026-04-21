import React from 'react';
import Link from 'next/link';

export default function BrainPage() {
  return (
    <div className="bg-[#faf9f5] min-h-screen p-8">
      <h1 className="text-3xl font-bold text-[#006067] mb-6">大腦與神經系統</h1>
      <p className="text-lg text-gray-700 mb-10">這裡將會放置大腦專題的詳細衛教內容...</p>
      
      <Link href="/categories" className="bg-[#006067] text-white px-6 py-3 rounded-full font-bold">
        回分類導覽
      </Link>
    </div>
  );
}
