'use client'
import { useState, useEffect } from "react";
import { parseStringPromise } from "xml2js";
import { useRouter } from "next/navigation"; // Next.js의 useRouter 사용

interface Item {
  sn: number;
  ccmaName: string;
  ccbaMnm1: string;
  ccbaCtcdNm: string;
  ccsiName: string;
}

export default function Culture() {
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [data, setData] = useState<Item[]>([]);
  const router = useRouter(); // useRouter 초기화

  // 첫 번째 API 호출 함수
  async function fetchData() {
    try {
      const response = await fetch(
        "http://www.khs.go.kr/cha/SearchKindOpenapiList.do"
      );

      if (!response.ok) {
        console.error("API 호출 실패:", response.status);
        return;
      }

      const text = await response.text();
      const result = await parseStringPromise(text);

      const items = result.result?.item || [];
      const parsedData = items.map((item: any) => ({
        sn: item.sn && item.sn[0] ? Number(item.sn[0]) : null, // 값을 안전하게 가져옵니다
        ccmaName: item.ccmaName && item.ccmaName[0] ? item.ccmaName[0] : '', // 값이 없을 경우 빈 문자열로 처리
        ccbaMnm1: item.ccbaMnm1 && item.ccbaMnm1[0] ? item.ccbaMnm1[0] : '',
        ccbaCtcdNm: item.ccbaCtcdNm && item.ccbaCtcdNm[0] ? item.ccbaCtcdNm[0] : '',
        ccsiName: item.ccsiName && item.ccsiName[0] ? item.ccsiName[0] : '',
      }));

      setData(parsedData);
    } catch (error) {
      console.error("데이터 가져오기 오류 발생:", error);
    }
  }

  // 두 번째 API 호출 함수
  async function fetchData2() {
    try {
      const response = await fetch("http://www.khs.go.kr/cha/SearchKindOpenapiDt.do");
  
      if (!response.ok) {
        console.error("API 호출 실패:", response.status);
        return;
      }
  
      const text = await response.text();
      console.log("응답 텍스트:", text);  // 응답을 출력하여 XML 형식을 확인
  
      const result = await parseStringPromise(text);
  
      // 데이터 구조를 확인하는 로그 추가
      console.log("파싱된 데이터:", result);
  
      const items = result.result?.item || [];  // items가 없을 수 있으므로 기본값 빈 배열로 설정
  
      const parsedData = items.map((item: any) => {
        // 배열이 비어 있지 않은지 확인 후 값 접근
        return {
          sn: item.sn && item.sn[0] ? Number(item.sn[0]) : null,  // 값이 없으면 null로 처리
          ccbaKdcd: item.ccbaKdcd && item.ccbaKdcd[0] ? item.ccbaKdcd[0] : null,
          ccbaAsno: item.ccbaAsno && item.ccbaAsno[0] ? item.ccbaAsno[0] : null,
          ccbaCtcd: item.ccbaCtcd && item.ccbaCtcd[0] ? item.ccbaCtcd[0] : null,
          ccbaLcad: item.ccbaLcad && item.ccbaLcad[0] ? item.ccbaLcad[0] : null,
        };
      });
  
      setData(parsedData);
    } catch (error) {
      console.error("데이터 가져오기 오류 발생:", error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  return (
    <div>
      <div className="relative w-full">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/16/03/45/korea-1095361_1280.jpg"
          alt="CultureImage"
          className="absolute top-0 left-0 w-full h-72 object-cover"
        />
        
        <div className="absolute left-1/2 top-28 z-10 transform -translate-x-1/2">
          <h1 className="text-white text-5xl font-extrabold">국가유산 조회</h1>
        </div>
      </div>
      
      {/* 조회 div */}
      <div
        className={`absolute left-[15%] w-[70vw] bg-white p-4 transition-all duration-500 ease-in-out ${
          isSearchOpen
            ? "top-[46vh] h-[75vh] border-2 border-solid border-black"
            : "top-[50vh] h-0 border-0 p-0 overflow-hidden"
        }`}
      >
        {isSearchOpen && (
          <>
            <h3 className="text-black text-xl font-semibold">선택된 항목</h3>
            <div className="border-[0.5px] border-solid border-gray-400 w-[5.5vw]"></div>
            <button
              className="absolute top-[10vh] left-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={() => setData([])}
            >
              검색 초기화
            </button>
            <div className="grid grid-cols-3 gap-4 mt-36 h-[65%]">
              <div className="h-[110%] bg-white border-2 border-solid border-black flex flex-col">
                <div className="mt-3 ml-2 text-black text-lg font-semibold">지정종목</div>
                <div className="border-b-2 border-solid border-gray-400 w-[4vw] ml-1.5"></div>
              </div>
              <div className="h-[80%] bg-white border-2 border-solid border-black flex flex-col">
                <div className="mt-3 ml-2 text-black text-lg font-semibold">지정연도</div>
                <div className="border-b-2 border-solid border-gray-400 w-[4vw] ml-1.5"></div>
              </div>
              <div className="h-[228%] bg-white border-2 border-solid border-black flex flex-col">
                <div className="mt-3 ml-2 text-black text-lg font-semibold">시대</div>
                <div className="border-b-2 border-solid border-gray-400 w-[2vw] ml-2"></div>
              </div>
              <div className="h-[110%] bg-white border-2 border-solid border-black flex flex-col relative top-[2.5vh]">
                <div className="mt-3 ml-2 text-black text-lg font-semibold">유형분류</div>
                <div className="border-b-2 border-solid border-gray-400 w-[4vw] ml-1.5"></div>
              </div>
              <div className="h-[140%] bg-white border-2 border-solid border-black flex flex-col relative translate-x-0 -translate-y-11">
                <div className="mt-3 ml-2 text-black text-lg font-semibold">지역</div>
                <div className="border-b-2 border-solid border-gray-400 w-[2vw] ml-2"></div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* 데이터 출력 div */}
      <div className="relative border-solid border-black">
        <div
          className={`absolute left-[15%] w-[70vw] bg-white border-2 border-solid border-black p-6 transition-all duration-500 ease-in-out ${
            isSearchOpen ? "top-[120vh]" : "top-[38vh]"
          }`}
        >
          <h2 className="text-black text-2xl font-bold mb-4">가져온 데이터</h2>
          <div className="grid grid-cols-3 gap-4 overflow-y-auto max-h-[50vh]">
            {data.length > 0 ? (
              data.map((item) => (
                <div
                  key={item.sn}
                  className="p-4 bg-gray-100 border border-gray-300 rounded-md"
                >
                  {/* {item.ccbaMnm1} 클릭 이벤트 추가 */}
                  <h4
                    className="text-lg font-bold text-black cursor-pointer underline hover:text-blue-500"
                    onClick={() => router.push("/culture/detail")}
                  >
                    {item.ccbaMnm1}
                  </h4>
                  <p className="text-black">종목: {item.ccmaName}</p>
                  <p className="text-black">지역: {item.ccbaCtcdNm}</p>
                  <p className="text-black">시대: {item.ccsiName}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">데이터가 없습니다.</p>
            )}
          </div>
        </div>
      </div>

      {/* 상세검색닫기 버튼 */}
      <h1
        onClick={toggleSearch}
        className="absolute right-[15%] top-[43vh] text-gray-500 text-base font-semibold z-20 cursor-pointer"
      >
        {isSearchOpen ? "상세검색닫기" : "상세검색열기"}
      </h1>
    </div>
  );
}
