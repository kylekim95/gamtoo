import { useState, useEffect } from 'react';
import { HeritageData, PaginationInfo } from '../types/HeritageData';
import { parseStringPromise } from 'xml2js';
import Link from 'next/link';
import Pagination from './Pagination';

export default function HeritageCard() {
  const [heritageData, setHeritageData] = useState<HeritageData[]>([]);
  const [filteredData, setFilteredData] = useState<HeritageData[]>([]); // 필터링된 데이터 상태 추가
  const [paginationInfo, setPaginationInfo] = useState<PaginationInfo>({
    totalCnt: 0,
    pageUnit: 25,
    pageIndex: 1,
  });

  const [imageData, setImageData] = useState<Map<string, string>>(new Map());

  const fetchImageData = async (ccbaKdcd: string, ccbaAsno: string, ccbaCtcd: string) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const xmlData = await response.text();
      const result = await parseStringPromise(xmlData);

      const imageUrl = result.result.item?.[0]?.imageUrl?.[0];
      if (imageUrl) {
        setImageData((prev) => new Map(prev).set(`${ccbaKdcd}_${ccbaAsno}_${ccbaCtcd}`, imageUrl));
      }
    } catch (error) {
      console.error('이미지 데이터 가져오기 실패:', error);
    }
  };

  const fetchHeritageData = async (pageIndex: number) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchKindOpenapiList.do?pageIndex=${pageIndex}&pageUnit=${paginationInfo.pageUnit}`
      );
      const xmlData = await response.text();
      const result = await parseStringPromise(xmlData);

      const items = result.result.item.map((item: any) => ({
        ccmaName: item.ccmaName[0],
        ccbaMnm1: item.ccbaMnm1[0],
        ccbaCtcdNm: item.ccbaCtcdNm[0],
        ccsiName: item.ccsiName[0],
        ccbaKdcd: item.ccbaKdcd[0],
        ccbaAsno: item.ccbaAsno[0],
        ccbaCtcd: item.ccbaCtcd[0],
      }));

      items.forEach((heritage: HeritageData) => {
        fetchImageData(heritage.ccbaKdcd, heritage.ccbaAsno, heritage.ccbaCtcd);
      });

      setHeritageData(items);
      setFilteredData(items);

      setPaginationInfo((prev) => ({
        ...prev,
        totalCnt: parseInt(result.result.totalCnt[0], 10),
        pageIndex,
      }));
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  useEffect(() => {
    fetchHeritageData(paginationInfo.pageIndex);
  }, [paginationInfo.pageIndex]);

  const handleSearch = (query: string) => {
    const filtered = heritageData.filter((item) =>
      item.ccbaMnm1.toLowerCase().includes(query.toLowerCase()) // 국가유산명으로 필터링
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <div className="flex items-center justify-between pt-10">
        <div className="flex-grow border-t border-gray-300"></div>
        <div className="flex items-center text-gray-400 font-semibold text-xs pl-2 pr-4 space-x-1">
          <span>총 {paginationInfo.totalCnt}개의 국가유산이 검색되었습니다.</span>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-14 p-20 pt-7">
        {filteredData.map((heritage: HeritageData, index) => (
          <Link
            key={index}
            href={`/culture/detail?ccbaKdcd=${heritage.ccbaKdcd}&ccbaAsno=${heritage.ccbaAsno}&ccbaCtcd=${heritage.ccbaCtcd}`}
            passHref
          >
            <div className="bg-white border border-gray-300 rounded-lg shadow-md h-72 flex flex-col items-start justify-between p-0 cursor-pointer">
              <div className="w-full h-48 mb-0 relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 z-10 rounded-t-lg"></div>
                <img
                  src={imageData.get(`${heritage.ccbaKdcd}_${heritage.ccbaAsno}_${heritage.ccbaCtcd}`) || 'https://via.placeholder.com/150'}
                  alt="유산 이미지"
                  className="w-full h-full object-contain z-20 relative rounded-lg"
                />
              </div>
              <div className="text-left ml-4">
                <span className="text-[#4F6CF3] font-semibold text-base">{heritage.ccmaName}</span>
              </div>
              <p className="text-black font-extrabold text-lg ml-4">{heritage.ccbaMnm1}</p>
              <p className="text-gray-500 text-sm ml-4">{heritage.ccbaCtcdNm} {heritage.ccsiName}</p>
            </div>
          </Link>
        ))}
      </div>

      <Pagination
        currentPage={paginationInfo.pageIndex}
        totalCnt={paginationInfo.totalCnt}
        pageUnit={paginationInfo.pageUnit}
        onPageChange={(newPage: number) => fetchHeritageData(newPage)}
      />
    </div>
  );
}
