'use client';

import { useState } from 'react';
import { fetchHeritageList } from './fetchHeritageList';

export function useHeritageSearch() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [totalCnt, setTotalCnt] = useState(0);
  const [query, setQuery] = useState('');

  // searchHeritage 함수에서
const searchHeritage = async (newQuery?: string, pageIndex: number = 1) => {
  const searchQuery = newQuery ?? query;
  if (searchQuery.trim() === '') return;

  setQuery(searchQuery); // 검색어 상태 설정

  // API 호출 후 필터링된 결과 가져오기
  const { items, totalCnt } = await fetchHeritageList(pageIndex, 25, searchQuery);
  console.log('🔵 검색된 항목들:', items);  // 검색된 데이터 출력

  setSearchResults(items);  // 검색된 데이터로 상태 업데이트
  setTotalCnt(totalCnt);  // 총 개수 업데이트
};

  return { searchResults, totalCnt, searchHeritage };
}
