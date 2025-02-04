'use client'

import { useState } from 'react';
import HeroImage from "./components/HeroImage";
import HeritageCard from "./components/HeritageCard";
import SearchBar from "./components/SearchBar";
import SearchCard from "./components/SearchCard";
import SearchResult from "./components/SearchResult";
import { fetchHeritageList } from './types/fetchHeritageList';

export default function Culture() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [query, setQuery] = useState('');
  

  // 검색 함수
  const searchHeritage = async (newQuery: string) => {
    if (newQuery.trim() === '') return;

    console.log("🔍 searchHeritage 호출됨, 검색어:", newQuery);  // 검색어 확인
    setQuery(newQuery);  // 검색어 상태 업데이트

    const { items } = await fetchHeritageList(1, 25, newQuery);
    console.log('📢 검색된 항목들:', items);  // 검색된 항목 확인
    setSearchResults(items);  // 검색된 데이터로 상태 업데이트
  };

  return (
    <div>
      <div className="main">
        <HeroImage />
        <SearchCard />
        <div className="mb-10">
          <HeritageCard  />
        </div>
        <div className="absolute top-60 left-1/2 transform -translate-x-1/2 z-20">
          <SearchBar searchHeritage={searchHeritage} />
        </div>
        <SearchResult searchResults={searchResults} />
      </div>
    </div>
  );
}
