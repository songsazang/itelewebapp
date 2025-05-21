'use client';
import React from 'react';
import Link from 'next/link';

export default function Employment() {
  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-800 mb-6">취업 안내</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">주요 취업 분야</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>반도체 및 전자부품 제조업</li>
            <li>정보통신 기기 제조업</li>
            <li>임베디드 시스템 개발</li>
            <li>IoT 및 스마트팩토리 구축</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">취업 지원 프로그램</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>산업체 현장 실습</li>
            <li>취업 상담 및 컨설팅</li>
            <li>이력서 및 자기소개서 작성법</li>
            <li>면접 준비 프로그램</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">주요 취업 기업</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>삼성전자</li>
            <li>LG전자</li>
            <li>SK하이닉스</li>
            <li>현대자동차</li>
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