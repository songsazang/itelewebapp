'use client';
import React from 'react';
import Link from 'next/link';

export default function Advancement() {
  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">진학 안내</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">주요 진학 분야</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>전자공학과</li>
            <li>컴퓨터공학과</li>
            <li>정보통신공학과</li>
            <li>임베디드시스템공학과</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">진학 지원 프로그램</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>전공 심화 학습</li>
            <li>진학 상담 및 컨설팅</li>
            <li>포트폴리오 작성 지원</li>
            <li>면접 준비 프로그램</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">주요 진학 대학</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>서울대학교</li>
            <li>한양대학교</li>
            <li>고려대학교</li>
            <li>서강대학교</li>
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