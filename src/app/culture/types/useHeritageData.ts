import { useState, useEffect } from 'react';
import { parseStringPromise } from 'xml2js';

export const useHeritageData = (ccbaKdcd: string | null, ccbaAsno: string | null, ccbaCtcd: string | null) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [heritageName, setHeritageName] = useState<string | null>(null);
  const [heritageHanja, setHeritageHanja] = useState<string | null>(null);
  const [heritageCategory, setHeritageCategory] = useState<string | null>(null);
  const [gcodeName, setGcodeName] = useState<string | null>(null);
  const [bcodeName, setBcodeName] = useState<string | null>(null);
  const [mcodeName, setMcodeName] = useState<string | null>(null);
  const [scodeName, setScodeName] = useState<string | null>(null);
  const [ccbaQuan, setCcbaQuan] = useState<string | null>(null);
  const [ccbaAsdt, setCcbaAsdt] = useState<string | null>(null);
  const [ccbaLcad, setCcbaLcad] = useState<string | null>(null);
  const [ccceName, setCcceName] = useState<string | null>(null);
  const [ccbaPoss, setCcbaPoss] = useState<string | null>(null);
  const [ccbaAdmin, setCcbaAdmin] = useState<string | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [longitude, setLongitude] = useState<string | null>(null);
  const [latitude, setLatitude] = useState<string | null>(null);

  useEffect(() => {
    if (ccbaKdcd && ccbaAsno && ccbaCtcd) {
      fetchHeritageData(ccbaKdcd, ccbaAsno, ccbaCtcd);
    }
  }, [ccbaKdcd, ccbaAsno, ccbaCtcd]);

  const fetchHeritageData = async (ccbaKdcd: string, ccbaAsno: string, ccbaCtcd: string) => {
    try {
      const imageResponse = await fetch(
        `http://www.khs.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const imageXmlData = await imageResponse.text();
      const imageResult = await parseStringPromise(imageXmlData);
      const fetchedImageUrl = imageResult.result.item?.[0]?.imageUrl?.[0];
      setImageUrl(fetchedImageUrl || 'https://via.placeholder.com/150');

      const videoResponse = await fetch(
        `http://www.khs.go.kr/cha/SearchVideoOpenapi.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const videoXmlData = await videoResponse.text();
      const videoResult = await parseStringPromise(videoXmlData);
      const fetchedVideoUrl = videoResult.result.item?.[0]?.videoUrl?.[0];
      setVideoUrl(fetchedVideoUrl || null);

      const heritageResponse = await fetch(
        `http://www.khs.go.kr/cha/SearchKindOpenapiDt.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const heritageXmlData = await heritageResponse.text();
      const heritageResult = await parseStringPromise(heritageXmlData);
      
      const fetchedLongitude = heritageResult?.result?.longitude?.[0];
      const fetchedLatitude = heritageResult?.result?.latitude?.[0];
      
      setHeritageName(heritageResult.result.item?.[0]?.ccbaMnm1?.[0] || '정보 없음');
      setHeritageHanja(heritageResult.result.item?.[0]?.ccbaMnm2?.[0] || '정보 없음');
      setHeritageCategory(heritageResult.result.item?.[0]?.ccmaName?.[0] || '정보 없음');
      setGcodeName(heritageResult.result.item?.[0]?.gcodeName?.[0] || '정보 없음');
      setBcodeName(heritageResult.result.item?.[0]?.bcodeName?.[0] || '정보 없음');
      setMcodeName(heritageResult.result.item?.[0]?.mcodeName?.[0] || '정보 없음');
      setScodeName(heritageResult.result.item?.[0]?.scodeName?.[0] || '정보 없음');
      setCcbaQuan(heritageResult.result.item?.[0]?.ccbaQuan?.[0] || '정보 없음');
      setCcbaAsdt(heritageResult.result.item?.[0]?.ccbaAsdt?.[0] || '정보 없음');
      setCcbaLcad(heritageResult.result.item?.[0]?.ccbaLcad?.[0] || '정보 없음');
      setCcceName(heritageResult.result.item?.[0]?.ccceName?.[0] || '정보 없음');
      setCcbaPoss(heritageResult.result.item?.[0]?.ccbaPoss?.[0] || '정보 없음');
      setCcbaAdmin(heritageResult.result.item?.[0]?.ccbaAdmin?.[0] || '정보 없음');
      setContent(heritageResult.result.item?.[0]?.content?.[0] || '정보 없음');
      setLongitude(fetchedLongitude || null);
      setLatitude(fetchedLatitude || null);

      console.log('Longitude:', fetchedLongitude);
      console.log('Latitude:', fetchedLatitude);

    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  };

  return {
    videoUrl,
    imageUrl,
    heritageName,
    heritageHanja,
    heritageCategory,
    gcodeName,
    bcodeName,
    mcodeName,
    scodeName,
    ccbaQuan,
    ccbaAsdt,
    ccbaLcad,
    ccceName,
    ccbaPoss,
    ccbaAdmin,
    content,
    longitude, 
    latitude
  };
};
