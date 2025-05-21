'use client';
import React from 'react';
import Link from 'next/link';

export default function Department() {
  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">학과 안내</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">IT전자과 소개</h2>
          <p className="text-gray-700 mb-4">
            IT전자과는 현대 정보통신 기술과 전자공학의 핵심 분야를 교육하는 학과입니다.
            첨단 기술과 실무 중심의 교육을 통해 미래 산업을 이끌어갈 전문가를 양성합니다.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">주요 교육 분야</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>전자공학 기초 및 응용</li>
            <li>정보통신 기술</li>
            <li>임베디드 시스템</li>
            <li>IoT 및 스마트 시스템</li>
          </ul>
        </div>

        <Link href="/" 
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          메인으로 돌아가기
        </Link>
      </div>
    </main>
  );
} 