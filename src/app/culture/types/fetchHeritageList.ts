import { parseStringPromise } from 'xml2js';

export async function fetchHeritageList(pageIndex: number, pageUnit: number, searchQuery?: string) {
  const API_URL = 'http://www.khs.go.kr/cha/SearchKindOpenapiList.do';
  const fullUrl = `${API_URL}?pageIndex=1&pageUnit=5000`; 
  const response = await fetch(fullUrl);
  if (!response.ok) throw new Error(`API 요청 실패: ${response.statusText}`);

  const xmlText = await response.text();
  const result = await parseStringPromise(xmlText);
  const items = result.result?.item || [];

  const filteredItems = searchQuery
    ? items.filter((item: any) => item.ccbaMnm1[0].includes(searchQuery))
    : items;

  return {
    items: filteredItems.map((item: any) => ({
      ccbaKdcd: item.ccbaKdcd[0],
      ccbaAsno: item.ccbaAsno[0],
      ccbaCtcd: item.ccbaCtcd[0],
      ccbaMnm1: item.ccbaMnm1[0],
      ccbaCtcdNm: item.ccbaCtcdNm[0],
      ccsiName: item.ccsiName[0],
      ccmaName: item.ccmaName[0],
    })),
    totalCnt: filteredItems.length, // 필터링된 결과 개수
  };
}
