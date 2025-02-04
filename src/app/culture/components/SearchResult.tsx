// SearchResult.tsx
import React from "react";
import { useHeritageSearch } from "../types/useHeritageSearch";

export default function SearchResult() {
  const { searchResults } = useHeritageSearch();

  console.log("검색 결과:", searchResults); // 여기서 searchResults 값 확인

  return (
    <div className="search-results-container">
      {searchResults.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold">검색된 결과</h2>
          <ul className="mt-4">
            {searchResults.map((item, index) => (
              <li key={index} className="result-item border-b py-4">
                <h3 className="text-lg font-semibold">{item.ccbaMnm1}</h3>
                <p className="text-gray-600">{item.ccbaCtcdNm}</p>
                <p className="text-sm">{item.ccsiName} - {item.ccmaName}</p>
                <img
                  src={item.imageUrl}
                  alt={item.ccbaMnm1}
                  className="w-32 h-32 mt-2 object-cover rounded-lg"
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
}
