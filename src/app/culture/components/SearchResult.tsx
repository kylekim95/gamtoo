interface SearchResultProps {
  searchResults: any[];
}

export default function SearchResult({ searchResults }: SearchResultProps) {
  return (
    <div className="search-results-container">
      {searchResults.length > 0 ? (
        <div>
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
        <p></p>
      )}
    </div>
  );
}
