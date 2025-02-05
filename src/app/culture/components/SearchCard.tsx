'use client'

import SearchCategory from "./SearchCategory";
import { useCallback, useEffect, useState } from "react";
import { CatCode2String } from "@/components/quiz/CHCategories";

export default function SearchCard() {
   // 지정종목 카테고리
   const jjjm = Object.values(CatCode2String);
   const jjjmCode = Object.keys(CatCode2String).map((item)=>parseInt(item));
   const yhjm = ["전체", "유적건조물", "기록유산", "유물", "무형유산", "자연유산", "등록문화유산"]
   const jy = ["전체", "서울", "부산", "대구", "인천", "광주", "대전", "울산", "제주", "세종", "경기", "강원", "충북", "충남", "전북", "전남", "경남", "제주", "전국일원"]
   const sd = ["전체", "선사시대", "석기시대", "청동기시대", "철기시대", "삼한시대", "삼국시대", "삼국:고구려", "삼국:백제", "삼국:신라", "발해", "통일신라", "고려시대", "조선시대", "대한제국시대", "일제강점기", "시대미상"]

   
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [jjjmChecked, setJjjmChecked] = useState(jjjm.map(()=>false))
  const [yhjmChecked, setYhjmChecked] = useState(yhjm.map(()=>false))
  const [jyChecked, setJyjmChecked] = useState(jy.map(()=>false))
  const [sdChecked, setSdChecked] = useState(sd.map(()=>false))


  const jjjmCheckedHandler = useCallback(
    (jjjmArray:boolean[]) => {
      setJjjmChecked(jjjmArray)
    },
    [],
  )
  const yhjmCheckedHandler = useCallback(
    (yhjmArray:boolean[]) => {
      setYhjmChecked(yhjmArray)
    },
    [],
  )
  const jyCheckedHandler = useCallback(
    (jyArray:boolean[]) => {
      setJyjmChecked(jyArray)
    },
    [],
  )
  
  const sdCCheckedHandler = useCallback(
    (sdArray:boolean[]) => {
      setSdChecked(sdArray)
    },
    [],
  )
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
      className={`relative w-full bg-white transition-all duration-500 ease-in-out overflow-hidden ${
        isSearchOpen
          ? "max-h-[1000px] border-2 border-solid border-gray-300 p-4"
          : "max-h-0 border-0 p-0"
      }`}
    >
      {isSearchOpen && (
        <>
          <h3 className="text-black text-xl font-semibold font-pretendard">선택된 항목</h3>
          <div className="border-[0.5px] border-solid border-gray-400 w-[5vw] mb-4"></div>
  
          <button
            className="font-pretendard px-3 py-2 border border-[#4F6CF3] text-[#4F6CF3] font-semibold rounded-lg hover:text-white hover:bg-[#4F6CF3] transition duration-200 mb-6">
            검색 초기화
          </button>

          <div className="relative">
           <button
            className="font-pretendard px-4 py-2 border border-[#FF5DAB] text-[#FF5DAB] font-semibold rounded-lg 
              hover:text-white hover:bg-[#FF5DAB] transition duration-200 
              absolute -top-20 right-1">
           검색하기
            </button>
            </div>

  
  {/* 카테고리박스 */}
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full font-pretendard">

  {/* 지정종목 */}
  <div className="border p-4 rounded-lg shadow-md min-w-[250px] max-h-[300px] overflow-y-auto">
    <h3 className="font-semibold text-lg">지정종목</h3>
    <div className="border-[0.5px] border-solid border-gray-300 w-[62px] mb-4"/>
    <SearchCategory Categories={["전체", ...jjjm]} Changed={jjjmCheckedHandler} />
  </div>

  {/* 지정연도 */}
<div className="border p-4 rounded-lg shadow-md min-w-[250px] max-h-[200px] overflow-y-auto overflow-x-auto">
  <h3 className="font-semibold text-lg">지정연도</h3>
  <div className="border-[0.5px] border-solid border-gray-300 w-[62px] mb-4"/>
  <div className="flex flex-col gap-2">
    <div className="flex gap-2 justify-between mt-5 w-full">
      <input type="text" placeholder="년" className="border p-2 flex-1 min-w-[100px] rounded-md" />
      <span className="mt-5 whitespace-nowrap">부터</span>
      <input type="text" placeholder="년" className="border p-2 flex-1 min-w-[100px] rounded-md" />
      <span className="mt-5 whitespace-nowrap">까지</span>
    </div>
    <p className="text-base text-gray-500 mt-5 ml-5">예: 1963년부터 1970년까지</p>
  </div>
</div>



  {/* 시대 */}
  <div className="border p-4 rounded-lg shadow-md min-w-[250px] max-h-[615px] overflow-y-auto row-span-2">
    <h3 className="font-semibold text-lg">시대</h3>
    <div className="border-[0.5px] border-solid border-gray-300 w-[32px] mb-4"/>
    <SearchCategory Categories={[...sd]} Changed={sdCCheckedHandler} />
  </div>

  {/* 유형분류 */}
  <div className="border p-4 rounded-lg shadow-md min-w-[250px] max-h-[300px] overflow-y-auto">
    <h3 className="font-semibold text-lg">유형분류</h3>
    <div className="border-[0.5px] border-solid border-gray-300 w-[62px] mb-4"/>
    <SearchCategory Categories={[...yhjm]} Changed={yhjmCheckedHandler} />
  </div>

  {/*지역 */}
  <div className="border p-4 rounded-lg shadow-md min-w-[250px] max-h-[395px] overflow-y-auto -mt-24">
    <h3 className="font-semibold text-lg ">지역</h3>
    <div className="border-[0.5px] border-solid border-gray-300 w-[32px] mb-4"/>
    <SearchCategory Categories={[...jy]} Changed={jyCheckedHandler} />
  </div>
</div>
        </>
      )}
    </div>
  </div>
  
  );
  
}
