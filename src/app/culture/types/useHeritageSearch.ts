'use client';

import { useState } from 'react';
import { fetchHeritageList } from './fetchHeritageList';

export function useHeritageSearch() {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [totalCnt, setTotalCnt] = useState(0);
  const [query, setQuery] = useState('');

  const searchHeritage = async (newQuery?: string, pageIndex: number = 1) => {
    const searchQuery = newQuery ?? query;
    if (searchQuery.trim() === '') return;

    setQuery(searchQuery);
    const { items, totalCnt } = await fetchHeritageList(pageIndex, 25, searchQuery);
    setSearchResults(items);
    setTotalCnt(totalCnt);
  };

  return { searchResults, totalCnt, searchHeritage };
}
