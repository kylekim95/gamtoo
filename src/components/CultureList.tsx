import heritageData from "@/types/heritageData";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { heritage } from "@/types/heritageData";
import CultureCard from "./CultureCard";

interface Category {
  category: string;
}

export default function Card(category: Category) {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth / 350); // 한 페이지에 나올 리스트 개수
  const [paginatedItems, setPaginatedItems] =
    useState<heritage[]>(heritageData);
  const [pageNum, setPageNum] = useState(0);

  // itemsPerPage 리스트 개수 계산
  function calcListNum() {
    const newItemsPerPage = Math.round(window.innerWidth / 350);
    setItemsPerPage(newItemsPerPage);
  }

  function filterItem() {
    const filteredItems = heritageData.filter(
      (item) => item.designation === category.category
    );
    const newPage = Math.ceil(filteredItems.length / itemsPerPage);
    setPageNum(newPage);
    const data = filteredItems.slice(
      (page - 1) * itemsPerPage,
      page * itemsPerPage
    );
    return data;
  }
  // 모니터 브라우저 크기에 따른 리스트 계산
  useEffect(() => {
    calcListNum();
    /* 1. 현재 기기의 브라우저 너비를 계산
       2. 너비를 카드 한개의 너비로 나눔 */
    window.addEventListener("resize", calcListNum);
    return () => {
      // cleanup
      window.removeEventListener("resize", calcListNum);
    };
  }, []);

  useEffect(() => {
    setPaginatedItems(filterItem());
  }, [page, itemsPerPage]);

  useEffect(() => {
    setPaginatedItems(filterItem());
    setPage(1);
  }, [category]);

  // 페이지 변경
  const handleNextPage = () => {
    const newPage = page + 1;
    setPage(newPage > pageNum ? 1 : newPage);
  };
  const handlePreviousPage = () => {
    const newPage = page - 1;
    setPage(newPage < 1 ? pageNum : newPage);
  };

  return (
    <>
      {/* // 카드 리스트들을 차지하는 영역 */}
      <div className=" w-[94%] ">
        <CultureCard item={paginatedItems} />
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
              { length: pageNum },
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
