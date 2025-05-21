'use client';
import React from 'react';
import Link from 'next/link';

export default function Curriculum() {
  return (
    <main className="min-h-screen p-4 bg-gradient-to-b from-blue-50 to-white">
      {/* 상단 헤더 */}
      <div className="w-full text-center py-8">
        <h1 className="text-4xl font-bold text-blue-800">교육과정 안내</h1>
      </div>

      {/* 교육과정 내용 */}
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">1학년 교육과정</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>컴퓨터 시스템 일반</li>
            <li>프로그래밍 기초</li>
            <li>전기전자 기초</li>
            <li>네트워크 기초</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">2학년 교육과정</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>자바 프로그래밍</li>
            <li>데이터베이스</li>
            <li>웹 프로그래밍</li>
            <li>임베디드 시스템</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">3학년 교육과정</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>모바일 앱 개발</li>
            <li>클라우드 컴퓨팅</li>
            <li>인공지능 기초</li>
            <li>프로젝트 실습</li>
          </ul>
        </section>
      </div>

      {/* 홈으로 돌아가기 버튼 */}
      <div className="text-center mt-8">
        <Link href="/" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          홈으로
        </Link>
      </div>
    </main>
  );
} 