'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Pagination from './Pagination';
import { fetchHeritageList } from '../types/useHeritageData';

export default function HeritageCard() {
  const [heritageData, setHeritageData] = useState<any[]>([]);  // 이미 필터링된 데이터
  const [paginationInfo, setPaginationInfo] = useState({
    totalCnt: 0,    // 총 데이터 수
    pageUnit: 25,   // 페이지당 데이터 수
    pageIndex: 1,   // 현재 페이지
  });

  const loadHeritageData = async (pageIndex: number) => {
    const { items, totalCnt } = await fetchHeritageList(pageIndex, paginationInfo.pageUnit);
    setHeritageData(items);  // 필터링된 데이터가 items로 이미 들어온다고 가정
    setPaginationInfo((prev) => ({
      ...prev,
      totalCnt,
      pageIndex,
    }));
  };

  useEffect(() => {
    loadHeritageData(paginationInfo.pageIndex);
  }, [paginationInfo.pageIndex]);

  return (
    <div>
      {/* 상단 영역 */}
      <div className="flex items-center justify-between pt-10"></div>
      <div className="flex items-center font-pretendard text-gray-400 font-semibold text-xs pl-5 pr-4 space-x-2">
        <div className="flex-grow border-t border-gray-300"></div>
        <svg
          width="17"
          height="18"
          viewBox="0 0 17 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.24813 1.19224C8.40537 1.10259 8.59463 1.10259 8.75187 1.19224L15.6581 5.12973C15.8302 5.22784 15.9375 5.41807 15.9375 5.625C15.9375 5.83193 15.8302 6.02216 15.6581 6.12027L8.75187 10.0578C8.59463 10.1474 8.40537 10.1474 8.24813 10.0578L1.34188 6.12027C1.16981 6.02216 1.0625 5.83193 1.0625 5.625C1.0625 5.41807 1.16981 5.22784 1.34188 5.12973L8.24813 1.19224Z"
            fill="#C8C8C8"
          />
          <path
            d="M2.31248 7.95135L7.7444 11.0483C8.21611 11.3172 8.78388 11.3172 9.2556 11.0483L14.6875 7.95135L15.6581 8.50473C15.8302 8.60283 15.9375 8.79306 15.9375 8.99999C15.9375 9.20693 15.8302 9.39715 15.6581 9.49526L8.75187 13.4328C8.59463 13.5224 8.40537 13.5224 8.24813 13.4328L1.34188 9.49526C1.16981 9.39715 1.0625 9.20693 1.34188 8.50473L2.31248 7.95135Z"
            fill="#C8C8C8"
          />
          <path
            d="M7.7444 14.4233L2.31248 11.3264L1.34188 11.8797C1.16981 11.9778 1.0625 12.1681 1.0625 12.375C1.0625 12.5819 1.16981 12.7722 1.34188 12.8703L8.24813 16.8078C8.40537 16.8974 8.59463 16.8974 8.75187 16.8078L15.6581 12.8703C15.8302 12.7722 15.9375 12.5819 15.9375 12.375C15.9375 12.1681 15.8302 11.9778 15.6581 11.8797L14.6875 11.3264L9.2556 14.4233C8.78388 14.6922 8.21611 14.6922 7.7444 14.4233Z"
            fill="#C8C8C8"
          />
        </svg>
        <span>
          총 {paginationInfo.totalCnt}개의 국가유산이 검색되었습니다. (부속국가유산
          포함)
        </span>
      </div>

      {/* 유산 목록 그리드 */}
      <div className="grid grid-cols-5 gap-14 p-5 pt-8">
        {heritageData.map((heritage, index) => (
          <Link
            key={index}
            href={`/culture/detail?ccbaKdcd=${heritage.ccbaKdcd}&ccbaAsno=${heritage.ccbaAsno}&ccbaCtcd=${heritage.ccbaCtcd}`}
            passHref
          >
            <div className="bg-white border border-gray-300 rounded-lg shadow-md h-72 flex flex-col items-start justify-between p-0 cursor-pointer">
              {/* 이미지 영역 */}
              <div className="w-full h-48 mb-0 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 z-10 rounded-t-lg"></div>
                <img
                  src={heritage.imageUrl}
                  alt="유산 이미지"
                  className="w-full h-full object-contain z-20 relative rounded-lg"
                />
              </div>
              {/* 텍스트 영역 */}
              <div className="text-left ml-2 mb-3">
                <span className="font-pretendard text-[#4F6CF3] font-semibold text-base">
                  {heritage.ccmaName}
                </span>
                <p className="text-black font-pretendard font-extrabold text-lg">
                  {heritage.ccbaMnm1}
                </p>
                <div className="flex items-center font-pretendard text-gray-600 text-sm font-bold relative translate-y-1">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.57634 11.6889C5.59753 11.699 5.61418 11.7069 5.62598 11.7123L5.64557 11.7213C5.80193 11.7922 5.99588 11.7916 6.15239 11.7216L6.17249 11.7123C6.18429 11.7069 6.20094 11.699 6.22213 11.6889C6.26451 11.6687 6.32507 11.6391 6.40121 11.6004C6.55342 11.5231 6.7683 11.4091 7.02497 11.2595C7.53745 10.9609 8.22124 10.5178 8.90652 9.93896C10.2705 8.78696 11.6871 7.05613 11.6871 4.83018C11.6871 2.19322 9.09581 0.055542 5.89924 0.055542C2.70266 0.055542 0.111328 2.19322 0.111328 4.83018C0.111328 7.05613 1.52801 8.78696 2.89195 9.93896C3.57723 10.5178 4.26102 10.9609 4.7735 11.2595C5.03017 11.4091 5.24505 11.5231 5.39726 11.6004C5.4734 11.6391 5.53396 11.6687 5.57634 11.6889ZM5.89924 6.56642C7.06163 6.56642 8.00393 5.78908 8.00393 4.83018C8.00393 3.87129 7.06163 3.09395 5.89924 3.09395C4.73685 3.09395 3.79454 3.87129 3.79454 4.83018C3.79454 5.78908 4.73685 6.56642 5.89924 6.56642Z"
                      fill="#313131"
                    />
                  </svg>
                  {heritage.ccbaCtcdNm} {heritage.ccsiName}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={paginationInfo.pageIndex}
        totalCnt={paginationInfo.totalCnt}
        pageUnit={paginationInfo.pageUnit}
        onPageChange={(newPage: number) => loadHeritageData(newPage)}
      />
    </div>
  );
}
