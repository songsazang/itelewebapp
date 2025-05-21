'use client';
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-4 bg-gradient-to-b from-blue-50 to-white">
      {/* 상단 IT전자과 타이틀 */}
      <div className="w-full text-center py-8">
        <h1 className="text-4xl font-bold text-blue-800">IT전자과</h1>
      </div>

      {/* 하단 네비게이션 버튼들 */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4 mb-8">
        <Link href="/department" 
          className="bg-blue-600 text-white p-6 rounded-lg text-center hover:bg-blue-700 transition-colors">
          학과 안내
        </Link>
        <Link href="/curriculum" 
          className="bg-blue-600 text-white p-6 rounded-lg text-center hover:bg-blue-700 transition-colors">
          교육과정 안내
        </Link>
        <Link href="/employment" 
          className="bg-blue-600 text-white p-6 rounded-lg text-center hover:bg-blue-700 transition-colors">
          취업 안내
        </Link>
        <Link href="/advancement" 
          className="bg-blue-600 text-white p-6 rounded-lg text-center hover:bg-blue-700 transition-colors">
          진학 안내
        </Link>
      </div>
    </main>
  );
} 