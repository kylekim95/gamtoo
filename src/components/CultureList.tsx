import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import CultureCard from "./CultureCard";
import { HeritageData } from "@/app/culture/types/HeritageData";
import { parseStringPromise } from "xml2js"; // xml2js 임포트

interface Category {
  category: number;
}

export default function Card(category: Category) {
  const [page, setPage] = useState(1); // 현재 페이지
  const [itemsPerPage, setItemsPerPage] = useState(
    Math.round(window.innerWidth / 350)
  ); // 한 페이지에 나올 리스트 개수

  const [paginatedItems, setPaginatedItems] = useState<HeritageData[]>([]); // 렌더링할 데이터
  const [ccbaKdcd, setCcbaKdcd] = useState(11); // 종목코드

  // 이미지 데이터 상태 추가
  const [imageData, setImageData] = useState<Map<string, string>>(new Map());

  // itemsPerPage 리스트 개수 계산
  function calcListNum() {
    const newItemsPerPage = Math.round(window.innerWidth / 350);
    setItemsPerPage(newItemsPerPage);
  }

  // 문화유산 가져오기
  const fetchHeritageData = async (pageIndex: number) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchKindOpenapiList.do?ccbaKdcd=${category.category}&pageIndex=${pageIndex}&pageUnit=${itemsPerPage}`
      );
      const xmlData = await response.text(); // 응답을 텍스트로 받아오기
      const result = await parseStringPromise(xmlData); // xml을 JSON으로 변환

      // XML에서 필요한 데이터를 추출하여 상태에 저장
      const items = result.result.item.map((item: any) => ({
        ccmaName: item.ccmaName[0], // 국가유산종목
        ccbaMnm1: item.ccbaMnm1[0], // 국가유산명(국문)
        ccbaCtcdNm: item.ccbaCtcdNm[0], // 시도명
        ccsiName: item.ccsiName[0], // 시군구명
        ccbaKdcd: item.ccbaKdcd[0], // 국가유산종목 코드
        ccbaAsno: item.ccbaAsno[0], // 관리번호
        ccbaCtcd: item.ccbaCtcd[0], // 시도 코드
      }));

      // // 이미지 데이터를 각각의 카드에 맞게 가져오기
      items.forEach((heritage: HeritageData) => {
        // heritage의 타입을 HeritageData로 지정
        fetchImageData(heritage.ccbaKdcd, heritage.ccbaAsno, heritage.ccbaCtcd);
      });

      setPaginatedItems(items);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
    }
  };

  // 이미지 데이터 가져오기
  const fetchImageData = async (
    ccbaKdcd: string,
    ccbaAsno: string,
    ccbaCtcd: string
  ) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const xmlData = await response.text(); // 응답을 텍스트로 받아오기
      const result = await parseStringPromise(xmlData); // xml을 JSON으로 변환

      // 이미지 URL 추출
      const imageUrl = result.result.item?.[0]?.imageUrl?.[0];
      if (imageUrl) {
        setImageData((prev) =>
          new Map(prev).set(`${ccbaKdcd}_${ccbaAsno}_${ccbaCtcd}`, imageUrl)
        );
      }
    } catch (error) {
      console.error("이미지 데이터 가져오기 실패:", error);
    }
  };

  useEffect(() => {
    // 모니터 브라우저 크기에 따른 리스트 계산
    calcListNum();

    // 초기 데이터 가져오기
    fetchHeritageData(page);

    /* 1. 현재 기기의 브라우저 너비를 계산
       2. 너비를 카드 한개의 너비로 나눔 */
    window.addEventListener("resize", calcListNum);
    return () => {
      // cleanup
      window.removeEventListener("resize", calcListNum);
    };
  }, []);

  // 페이지 변경시 다음 데이터 가져오기
  useEffect(() => {
    fetchHeritageData(page);
  }, [page]);

  // 카테고리 버튼 클릭시 종목 코드 변경
  useEffect(() => {
    fetchHeritageData(ccbaKdcd);
    setPage(1);
  }, [category]);

  // 페이지 변경
  const handleNextPage = () => {
    const newPage = page + 1;
    setPage(newPage > 3 ? 1 : newPage);
  };
  const handlePreviousPage = () => {
    const newPage = page - 1;
    setPage(newPage < 1 ? 3 : newPage);
  };

  return (
    <>
      {/* // 카드 리스트들을 차지하는 영역 */}
      <div className=" w-[100%] ">
        <CultureCard item={paginatedItems} imageData={imageData} />
      </div>

      {/* Pagination */}
      <div className="flex flex-row justify-center items-center m-auto bg-white pl-10">
        <div className="hidden sm:flex sm:flex-1 sm:items-center">
          <nav
            aria-label="Pagination"
            className="isolate inline-flex rounded-md shadow-xs"
          >
            <span className="relative inline-flex items-center hover:bg-gray-50">
              <ChevronLeftIcon
                onClick={handlePreviousPage}
                className="size-8 text-stone-500 "
              />
            </span>
            {Array.from(
              { length: 3 },
              (
                _,
                i // 길이가 12인 배열을 생성후 배열의 각 인덱스 값으로 맵핑 합니다.
              ) => (
                <span
                  key={i}
                  aria-current="page"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {i + 1}
                </span>
              )
            )}

            <span className="relative inline-flex items-center hover:bg-gray-50">
              <ChevronRightIcon
                onClick={handleNextPage}
                className="size-8 text-stone-500"
              />
            </span>
          </nav>
        </div>
      </div>
    </>
  );
}
