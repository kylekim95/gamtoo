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

            {/* 검색 항목 */}
            <div className="grid grid-cols-3 gap-4">
              <div className="h-auto bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">지정종목</div>
                <div className="border-b-2 border-solid border-gray-400 w-[4vw] mt-2"></div>
              </div>
              <div className="h-auto bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">지정연도</div>
                <div className="border-b-2 border-solid border-gray-400 w-[4vw] mt-2"></div>
              </div>
              <div className="h-auto bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">시대</div>
                <div className="border-b-2 border-solid border-gray-400 w-[2vw] mt-2"></div>
              </div>
              <div className="h-auto bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">유형분류</div>
                <div className="border-b-2 border-solid border-gray-400 w-[4vw] mt-2"></div>
              </div>
              <div className="h-auto bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">지역</div>
                <div className="border-b-2 border-solid border-gray-400 w-[2vw] mt-2"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
