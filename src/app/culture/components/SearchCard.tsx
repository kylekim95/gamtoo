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
              {/* 지정종목 항목 */}
              <div className="h-auto bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">지정종목</div>
                <div className=" border-b-2 border-solid border-gray-400 w-[4vw] mt-2"></div>
                {/* 체크박스 목록 */}
                <div className="mt-4 flex flex-wrap gap-4">
                  {[
                    '국보', '보물', '사적', '사적및명승', '명승', '천연기념물', 
                    '국가무형유산', '국가민속문화유산', '시도유형문화유산', '시도무형유산', 
                    '시도기념물', '시도민속문화유산', '시도등록유산', '문화유산자료', 
                    '국가등록유산', '이북5도 무형유산'
                  ].map((label, index) => (
                    <div key={index} className="flex items-center space-x-2 w-[calc(50%-1rem)]">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        name={label}
                        className="h-5 w-5"
                      />
                      <label htmlFor={`checkbox-${index}`} className="text-sm">{label}</label>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* 지정연도 항목 */}
              <div className="h-[250px] bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">지정연도</div>
                <div className="border-b-2 border-solid border-gray-400 w-[4vw] mt-2"></div>
  
                <div className="flex items-center space-x-4 mt-4">
                  <div className="flex items-center">
                    <input
                      type="number"
                      placeholder="입력"
                      className="border rounded-l-xl p-2 w-24 focus:outline-none"
                    />
                    <div className="border-t-2 border-b-2 border-r-2 px-4 py-2 text-center">년</div>
                  </div>
                  <span className="text-lg">부터</span>
                  <div className="flex items-center">
                    <input
                      type="number"
                      placeholder="입력"
                      className="border rounded-l-xl p-2 w-24 focus:outline-none"
                    />
                    <div className="border-t-2 border-b-2 border-r-2 px-4 py-2 text-center">년</div>
                  </div>
                  <span className="text-lg">까지</span>
                </div>
              </div>
  
              {/* 시대 항목 */}
              <div className="h-[500px] bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">시대</div>
                <div className="border-b-2 border-solid border-gray-400 w-[2vw] mt-2"></div>
  
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    '선사시대', '석기시대', '청동기시대','철기시대','삼한시대','삼국시대','삼국:고구려',
                    '삼국:백제','삼국:신라', '발해','통일신라','고려시대','조선시대','대한제국시대',
                    '일제강점기','시대미상',
                  ].map((era, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        name={era}
                        className="h-5 w-5"
                      />
                      <label htmlFor={`checkbox-${index}`} className="text-sm">{era}</label>
                    </div>
                  ))}
                </div>
              </div>
  
              {/* 유형분류 항목 */}
              <div className="h-[350px] bg-white border-2 border-solid border-black flex flex-col p-4">
                <div className="text-black text-lg font-semibold font-pretendard">유형분류</div>
                <div className="border-b-2 border-solid border-gray-400 w-[4vw] mt-2"></div>
              </div>
  
              {/* 지역 항목 */}
              <div className="h-[460px] bg-white border-2 border-solid border-black flex flex-col p-4 overflow-y-auto mt-[-7rem]">
                <div className="text-black text-lg font-semibold font-pretendard">지역</div>
                <div className="border-b-2 border-solid border-gray-400 w-[2vw] mt-"></div>
  
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    '서울', '부산', '대구', '인천', '광주', '대전', '울산', '세종', 
                    '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', 
                    '제주', '전국일원'
                  ].map((region, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={`checkbox-${index}`}
                        name={region}
                        className="h-5 w-5"
                      />
                      <label htmlFor={`checkbox-${index}`} className="text-sm">{region}</label>
                    </div>
                  ))}
                </div>
              </div>
  
            </div>
          </>
        )}
      </div>
    </div>
  );
  
}
