'use client';

import React, { useState, useEffect } from 'react';
import { PaginationProps } from '../types/HeritageData';

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalCnt, pageUnit, onPageChange }) => {
  const totalPages = Math.ceil(totalCnt / pageUnit);  // 전체 페이지 수 계산
  const pageGroupSize = 5;  // 한 번에 보여줄 페이지 수

  // 페이지 번호의 그룹을 동적으로 계산
  const [startPage, setStartPage] = useState<number>(1);
  const [endPage, setEndPage] = useState<number>(Math.min(pageGroupSize, totalPages));

  // 페이지 변경 시 startPage와 endPage를 업데이트
  useEffect(() => {
    const halfGroupSize = Math.floor(pageGroupSize / 2); // 그룹의 절반 크기

    let newStartPage = currentPage - halfGroupSize; // 현재 페이지 기준으로 시작 페이지 계산
    let newEndPage = currentPage + halfGroupSize; // 현재 페이지 기준으로 끝 페이지 계산

    // 페이지 범위가 1 미만으로 내려가지 않도록 제한
    if (newStartPage < 1) {
      newStartPage = 1;
      newEndPage = pageGroupSize;
    }

    // 페이지 범위가 totalPages를 초과하지 않도록 제한
    if (newEndPage > totalPages) {
      newEndPage = totalPages;
      newStartPage = totalPages - pageGroupSize + 1;
    }

    setStartPage(newStartPage);
    setEndPage(newEndPage);
  }, [currentPage, totalPages]);

  const handlePageClick = (pageNum: number) => {
    if (pageNum !== currentPage) {
      onPageChange(pageNum);  // 페이지 변경
    }
  };

  const goToFirstPage = () => {
    onPageChange(1); // 첫 번째 페이지로 이동
  };

  const goToLastPage = () => {
    onPageChange(totalPages); // 마지막 페이지로 이동
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-8">
      {/* 첫 페이지로 가는 버튼 */}
      <button
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        onClick={goToFirstPage}
        disabled={currentPage === 1} // 첫 페이지일 때 비활성화
      >
        {'첫번째 페이지'}
      </button>

      {/* 페이지 번호 */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((pageNum) => (
        <button
          key={pageNum}
          className={`px-4 py-2 rounded-lg ${pageNum === currentPage ? 'bg-[#4F6CF3] text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => handlePageClick(pageNum)}
        >
          {pageNum}
        </button>
      ))}

      {/* 마지막 페이지로 가는 버튼 */}
      <button
        className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
        onClick={goToLastPage}
        disabled={currentPage === totalPages} // 마지막 페이지일 때 비활성화
      >
        {'마지막 페이지'}
      </button>
    </div>
  );
};

export default Pagination;
