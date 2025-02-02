
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

  useEffect(() => {
    if (ccbaKdcd && ccbaAsno && ccbaCtcd) {
      fetchImageData(ccbaKdcd, ccbaAsno, ccbaCtcd);
      fetchHeritageData(ccbaKdcd, ccbaAsno, ccbaCtcd);
      fetchVideoData(ccbaKdcd, ccbaAsno, ccbaCtcd); 
    }
  }, [ccbaKdcd, ccbaAsno, ccbaCtcd]);

  const fetchVideoData = async (ccbaKdcd: string, ccbaAsno: string, ccbaCtcd: string) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchVideoOpenapi.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const xmlData = await response.text();
      const result = await parseStringPromise(xmlData);  

      const videoUrl = result.result.item?.[0]?.videoUrl?.[0];
      
      if (videoUrl) {
        setVideoUrl(videoUrl);  
      } else {
        setVideoUrl(null); 
      }
    } catch (error) {
      console.error('동영상 데이터 가져오기 실패:', error);
    }
  };

  const fetchImageData = async (ccbaKdcd: string, ccbaAsno: string, ccbaCtcd: string) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const xmlData = await response.text();
      const result = await parseStringPromise(xmlData);
      const imageUrl = result.result.item?.[0]?.imageUrl?.[0];
      setImageUrl(imageUrl || 'https://via.placeholder.com/150');
    } catch (error) {
      console.error('이미지 데이터 가져오기 실패:', error);
    }
  };

  const fetchHeritageData = async (ccbaKdcd: string, ccbaAsno: string, ccbaCtcd: string) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchKindOpenapiDt.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const xmlData = await response.text();
      const result = await parseStringPromise(xmlData);

      setHeritageName(result.result.item?.[0]?.ccbaMnm1?.[0] || '정보 없음');
      setHeritageHanja(result.result.item?.[0]?.ccbaMnm2?.[0] || '정보 없음');
      setHeritageCategory(result.result.item?.[0]?.ccmaName?.[0] || '정보 없음');
      setGcodeName(result.result.item?.[0]?.gcodeName?.[0] || '정보 없음');
      setBcodeName(result.result.item?.[0]?.bcodeName?.[0] || '정보 없음');
      setMcodeName(result.result.item?.[0]?.mcodeName?.[0] || '정보 없음');
      setScodeName(result.result.item?.[0]?.scodeName?.[0] || '정보 없음');
      setCcbaQuan(result.result.item?.[0]?.ccbaQuan?.[0] || '정보 없음');
      setCcbaAsdt(result.result.item?.[0]?.ccbaAsdt?.[0] || '정보 없음');
      setCcbaLcad(result.result.item?.[0]?.ccbaLcad?.[0] || '정보 없음');
      setCcceName(result.result.item?.[0]?.ccceName?.[0] || '정보 없음');
      setCcbaPoss(result.result.item?.[0]?.ccbaPoss?.[0] || '정보 없음');
      setCcbaAdmin(result.result.item?.[0]?.ccbaAdmin?.[0] || '정보 없음');
      setContent(result.result.item?.[0]?.content?.[0] || '국가유산에 대한 설명.');
    } catch (error) {
      console.error('국가유산 데이터 가져오기 실패:', error);
    }
  };

  return {
    imageUrl,
    videoUrl,  
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
  };
};
