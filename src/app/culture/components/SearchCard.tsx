'use client'

import { useState } from "react";

export default function SearchCard() {
  const [isSearchOpen, setIsSearchOpen] = useState(true);

  // 검색창 토글 함수
  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  return (
    <div className="relative w-full p-6 pb-2 pr-7">
      <div className="flex justify-end">
        <button
          onClick={toggleSearch}
          className="text-gray-500 text-sm font-semibold z-20 cursor-pointer mb-4 font-pretendard border border-solid border-gray-500 px-3 py-1.5 rounded-md
            hover:bg-gray-500 hover:text-white transition-colors duration-200"
        >
          {isSearchOpen ? "상세검색닫기" : "상세검색열기"}
        </button>
      </div>
  
      {/* 검색창 박스 */}
      <div
        className={`relative w-full bg-white transition-all duration-500 ease-in-out ${
          isSearchOpen
            ? "max-h-[1000px] border-2 border-solid border-black p-4"
            : "max-h-0 border-0 p-0 overflow-hidden"
        }`}
      >
        {isSearchOpen && (
          <>
            <h3 className="text-black text-xl font-semibold font-pretendard">선택된 항목</h3>
            <div className="border-[0.5px] border-solid border-gray-400 w-[5vw] mb-4"></div>
  
            {/* 검색 초기화 버튼 */}
            <button
              className="font-pretendard px-4 py-2 border border-[#4F6CF3] text-[#4F6CF3] font-semibold rounded-lg hover:text-white hover:bg-[#4F6CF3] transition duration-200 mb-6"
            >
              검색 초기화
            </button>
            <div className="grid grid-cols-5 gap-4 p-4">
      {/* 지정종목 */}
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">지정종목</h3>
        <div className="flex flex-col gap-1">
          <label><input type="checkbox" /> 전체</label>
          <label><input type="checkbox" /> 국보</label>
          <label><input type="checkbox" /> 보물</label>
          <label><input type="checkbox" /> 사적</label>
          <label><input type="checkbox" /> 명승</label>
          <label><input type="checkbox" /> 천연기념물</label>
        </div>
      </div>

      {/* 유형분류 */}
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">유형분류</h3>
        <div className="flex flex-col gap-1">
          <label><input type="checkbox" /> 전체</label>
          <label><input type="checkbox" /> 유적건조물</label>
          <label><input type="checkbox" /> 기록유산</label>
          <label><input type="checkbox" /> 유물</label>
          <label><input type="checkbox" /> 무형유산</label>
          <label><input type="checkbox" /> 자연유산</label>
        </div>
      </div>

      {/* 지정연도 */}
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">지정연도</h3>
        <div className="flex gap-2">
          <input type="text" placeholder="년" className="border p-2 w-20 rounded-md" />
          <span>부터</span>
          <input type="text" placeholder="년" className="border p-2 w-20 rounded-md" />
          <span>까지</span>
        </div>
      </div>

      {/* 지역 */}
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">지역</h3>
        <div className="grid grid-cols-2 gap-1">
          <label><input type="checkbox" /> 전체</label>
          <label><input type="checkbox" /> 서울</label>
          <label><input type="checkbox" /> 부산</label>
          <label><input type="checkbox" /> 대구</label>
          <label><input type="checkbox" /> 인천</label>
          <label><input type="checkbox" /> 광주</label>
          <label><input type="checkbox" /> 대전</label>
          <label><input type="checkbox" /> 울산</label>
          <label><input type="checkbox" /> 세종</label>
          <label><input type="checkbox" /> 경기</label>
        </div>
      </div>

      {/* 시대 */}
      <div className="border p-4 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg mb-2">시대</h3>
        <div className="flex flex-col gap-1">
          <label><input type="checkbox" /> 전체</label>
          <label><input type="checkbox" /> 선사시대</label>
          <label><input type="checkbox" /> 석기시대</label>
          <label><input type="checkbox" /> 청동기시대</label>
          <label><input type="checkbox" /> 철기시대</label>
          <label><input type="checkbox" /> 삼국시대</label>
          <label><input type="checkbox" /> 고려시대</label>
          <label><input type="checkbox" /> 조선시대</label>
          <label><input type="checkbox" /> 대한제국시대</label>
        </div>
      </div>
    </div>
          </>
        )}
      </div>
    </div>
  );
  
}
