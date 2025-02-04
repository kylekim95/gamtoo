import { parseStringPromise } from 'xml2js';

export async function fetchHeritageList(pageIndex: number, pageUnit: number, searchQuery?: string) {
  const API_URL = 'http://www.khs.go.kr/cha/SearchKindOpenapiList.do';
  const fullUrl = `${API_URL}?pageIndex=1&pageUnit=5000`; // 한 번에 많은 데이터를 가져오도록 수정

  console.log('🔵 API 요청 URL:', fullUrl);

  const response = await fetch(fullUrl);
  if (!response.ok) throw new Error(`API 요청 실패: ${response.statusText}`);

  const xmlText = await response.text();
  console.log('🔵 API 응답:', xmlText);  // API 응답 출력

  const result = await parseStringPromise(xmlText);
  console.log('🔵 XML 파싱 후 데이터:', result);  // 파싱 후 데이터 출력

  const items = result.result?.item || [];
  console.log('🔵 결과 항목:', items);  // 필터링 전 항목 확인

  const filteredItems = searchQuery
    ? items.filter((item: any) => item.ccbaMnm1[0].includes(searchQuery))
    : items;
  console.log('🔵 필터링된 데이터:', filteredItems);  // 필터링 후 항목 확인

  return {
    items: filteredItems.map((item: any) => ({
      ccbaKdcd: item.ccbaKdcd[0],
      ccbaAsno: item.ccbaAsno[0],
      ccbaCtcd: item.ccbaCtcd[0],
      ccbaMnm1: item.ccbaMnm1[0],
      ccbaCtcdNm: item.ccbaCtcdNm[0],
      ccsiName: item.ccsiName[0],
      ccmaName: item.ccmaName[0],
      imageUrl: item.imageUrl?.[0] || '/no-image.png',
    })),
    totalCnt: filteredItems.length, // 필터링된 결과 개수
  };
}
