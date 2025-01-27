'use client';

import { useState, useEffect } from 'react';
import { HeritageData, PaginationInfo } from '../types/HeritageData';
import { parseStringPromise } from 'xml2js'; // xml2js 임포트
import Link from 'next/link'; // next/link 임포트
import Pagination from './Pagination'; // Pagination 컴포넌트 임포트

export default function HeritageCard() {
  const [heritageData, setHeritageData] = useState<HeritageData[]>([]); // 국가유산 데이터 상태
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    totalCnt: 0, // 총 데이터 수
    pageUnit: 25, // 페이지당 데이터 수
    pageIndex: 1, // 현재 페이지
  });

  // 이미지 데이터 상태 추가
  const [imageData, setImageData] = useState<Map<string, string>>(new Map());

  // 국가유산 코드에 맞는 이미지를 가져오는 함수
  const fetchImageData = async (ccbaKdcd: string, ccbaAsno: string, ccbaCtcd: string) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const xmlData = await response.text(); // 응답을 텍스트로 받아오기
      const result = await parseStringPromise(xmlData); // xml을 JSON으로 변환

      // 이미지 URL 추출
      const imageUrl = result.result.item?.[0]?.imageUrl?.[0];
      if (imageUrl) {
        setImageData((prev) => new Map(prev).set(`${ccbaKdcd}_${ccbaAsno}_${ccbaCtcd}`, imageUrl));
      }
    } catch (error) {
      console.error('이미지 데이터 가져오기 실패:', error);
    }
  };

  // API에서 데이터 가져오는 함수
  const fetchHeritageData = async (pageIndex: number) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchKindOpenapiList.do?pageIndex=${pageIndex}&pageUnit=${paginationInfo.pageUnit}`
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

      // 이미지 데이터를 각각의 카드에 맞게 가져오기
      items.forEach((heritage: HeritageData) => { // heritage의 타입을 HeritageData로 지정
        fetchImageData(heritage.ccbaKdcd, heritage.ccbaAsno, heritage.ccbaCtcd);
      });

      setHeritageData(items);

      // 총 데이터 수와 페이지 정보 업데이트
      setPaginationInfo((prev) => ({
        ...prev,
        totalCnt: parseInt(result.result.totalCnt[0], 10), // 총 데이터 건 수
        pageIndex,
      }));
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  // 컴포넌트가 마운트될 때 데이터 가져오기
  useEffect(() => {
    fetchHeritageData(paginationInfo.pageIndex); // 현재 페이지 데이터 가져오기
  }, [paginationInfo.pageIndex]);

  return (
    <div>
      <div className="grid grid-cols-5 gap-14 p-20">
        {heritageData.map((heritage: HeritageData, index) => ( // heritage 타입 명시
          <Link
            key={index}
            href={`/culture/detail?ccbaKdcd=${heritage.ccbaKdcd}&ccbaAsno=${heritage.ccbaAsno}&ccbaCtcd=${heritage.ccbaCtcd}`}
            passHref
          >
            <div
              className="bg-white border border-gray-300 rounded-lg shadow-md h-72 flex flex-col items-start justify-between p-0 cursor-pointer" // 카드 내용 왼쪽 정렬
            >
              {/* 이미지 영역: 위쪽을 꽉 채우고 텍스트는 아래로 */}
              <div className="w-full h-48 mb-0 relative">
  {/* 회색 배경의 윗부분만 둥글게 설정 */}
  <div className="absolute top-0 left-0 w-full h-full bg-gray-200 z-10 rounded-t-lg"></div>
  <img
    src={imageData.get(`${heritage.ccbaKdcd}_${heritage.ccbaAsno}_${heritage.ccbaCtcd}`) || 'https://via.placeholder.com/150'}
    alt="유산 이미지"
    className="w-full h-full object-contain z-20 relative rounded-lg" 
  />
</div>

              {/* 텍스트 영역: 왼쪽 정렬 */}
              <div className="text-left ml-4">
                <span className="text-[#4F6CF3] font-semibold text-base">{heritage.ccmaName}</span>
              </div>

              <p className="text-black font-extrabold text-lg ml-4">{heritage.ccbaMnm1}</p>
              <p className="text-gray-500 text-sm ml-4">{heritage.ccbaCtcdNm} {heritage.ccsiName}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* 페이지네이션 컴포넌트 추가 */}
      <Pagination
        currentPage={paginationInfo.pageIndex}
        totalCnt={paginationInfo.totalCnt}
        pageUnit={paginationInfo.pageUnit}
        onPageChange={(newPage) => fetchHeritageData(newPage)} // 페이지 변경 시 데이터 가져오기
      />
    </div>
  );
}
