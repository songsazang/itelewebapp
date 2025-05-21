'use client';
import React from 'react';
import Link from 'next/link';

export default function Curriculum() {
  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">교육과정 안내</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">1학년 교육과정</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>전자공학 기초</li>
            <li>프로그래밍 기초</li>
            <li>전기전자 회로</li>
            <li>디지털 논리회로</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">2학년 교육과정</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>마이크로프로세서</li>
            <li>임베디드 시스템</li>
            <li>통신공학</li>
            <li>전자회로 설계</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">3학년 교육과정</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>IoT 시스템 설계</li>
            <li>스마트팩토리</li>
            <li>산업현장 실습</li>
            <li>캡스톤 디자인</li>
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