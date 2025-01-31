'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // 쿼리 파라미터를 사용하기 위한 훅
import { parseStringPromise } from 'xml2js'; // XML을 파싱하기 위한 라이브러리
import DetailMap from '../components/DetailMap';
import Comments from '../components/Comments';
import MoreImage from '../components/MoreImage';

export default function Detail() {
  const searchParams = useSearchParams();  // searchParams 훅을 사용하여 URL에서 파라미터를 가져옵니다.

  // URL에서 'ccbaKdcd', 'ccbaAsno', 'ccbaCtcd' 값을 가져옵니다.
  const ccbaKdcd = searchParams.get('ccbaKdcd');
  const ccbaAsno = searchParams.get('ccbaAsno');
  const ccbaCtcd = searchParams.get('ccbaCtcd');

  const [imageUrl, setImageUrl] = useState<string | null>(null); // 이미지를 상태로 관리
  const [heritageName, setHeritageName] = useState<string | null>(null); // 국가유산명(국문)
  const [heritageHanja, setHeritageHanja] = useState<string | null>(null); // 국가유산명(한자)
  const [heritageCategory, setHeritageCategory] = useState<string | null>(null); // 국가유산종목 (ccmaName)
  const [gcodeName, setGcodeName] = useState<string | null>(null); // 국가유산분류
  const [bcodeName, setBcodeName] = useState<string | null>(null); // 국가유산분류2
  const [mcodeName, setMcodeName] = useState<string | null>(null); // 국가유산분류3
  const [scodeName, setScodeName] = useState<string | null>(null); // 국가유산분류4
  const [ccbaQuan, setCcbaQuan] = useState<string | null>(null); // 수량
  const [ccbaAsdt, setCcbaAsdt] = useState<string | null>(null); // 지정일
  const [ccbaLcad, setCcbaLcad] = useState<string | null>(null); // 소재지
  const [ccceName, setCcceName] = useState<string | null>(null); // 시대
  const [ccbaPoss, setCcbaPoss] = useState<string | null>(null); // 소유자
  const [ccbaAdmin, setCcbaAdmin] = useState<string | null>(null); // 관리자
  const [content, setContent] = useState<string | null>(null); // 국가유산 내용 (content)

  useEffect(() => {
    // ccbaKdcd, ccbaAsno, ccbaCtcd 값이 존재하면 이미지를 가져오는 함수 실행
    if (ccbaKdcd && ccbaAsno && ccbaCtcd) {
      fetchImageData(ccbaKdcd, ccbaAsno, ccbaCtcd); // 이미지 데이터 가져오는 함수
      fetchHeritageData(ccbaKdcd, ccbaAsno, ccbaCtcd); // 국가유산 정보 가져오는 함수
    }
  }, [ccbaKdcd, ccbaAsno, ccbaCtcd]);

  // 이미지를 가져오는 비동기 함수
  const fetchImageData = async (ccbaKdcd: string, ccbaAsno: string, ccbaCtcd: string) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchImageOpenapi.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const xmlData = await response.text();  // 응답 받은 XML 데이터를 텍스트로 변환
      const result = await parseStringPromise(xmlData);  // XML 텍스트를 JSON으로 파싱

      // 파싱한 데이터에서 이미지 URL을 추출
      const imageUrl = result.result.item?.[0]?.imageUrl?.[0];
      setImageUrl(imageUrl || 'https://via.placeholder.com/150'); // 이미지 URL을 상태에 저장 (기본값 설정)
    } catch (error) {
      console.error('이미지 데이터 가져오기 실패:', error); // 에러가 발생하면 콘솔에 출력
    }
  };

  // 국가유산 정보 가져오는 비동기 함수
  const fetchHeritageData = async (ccbaKdcd: string, ccbaAsno: string, ccbaCtcd: string) => {
    try {
      const response = await fetch(
        `http://www.khs.go.kr/cha/SearchKindOpenapiDt.do?ccbaKdcd=${ccbaKdcd}&ccbaAsno=${ccbaAsno}&ccbaCtcd=${ccbaCtcd}`
      );
      const xmlData = await response.text();  // 응답 받은 XML 데이터를 텍스트로 변환
      const result = await parseStringPromise(xmlData);  // XML 텍스트를 JSON으로 파싱

      // 파싱한 데이터에서 국가유산명(국문), 국가유산종목, ccmaName을 추출
      const heritageName = result.result.item?.[0]?.ccbaMnm1?.[0];  // 국가유산명(국문)
      const heritageHanja = result.result.item?.[0]?.ccbaMnm2?.[0]; // 국가유산명(한자)
      const heritageCategory = result.result.item?.[0]?.ccmaName?.[0];  // 국가유산종목
      const gcodeName = result.result.item?.[0]?.gcodeName?.[0]; // 국가유산분류
      const bcodeName = result.result.item?.[0]?.bcodeName?.[0]; // 국가유산분류2
      const mcodeName = result.result.item?.[0]?.mcodeName?.[0]; // 국가유산분류3
      const scodeName = result.result.item?.[0]?.scodeName?.[0]; // 국가유산분류4
      const ccbaQuan = result.result.item?.[0]?.ccbaQuan?.[0]; // 수량
      const ccbaAsdt = result.result.item?.[0]?.ccbaAsdt?.[0]; // 지정일
      const ccbaLcad = result.result.item?.[0]?.ccbaLcad?.[0]; // 소재지
      const ccceName = result.result.item?.[0]?.ccceName?.[0]; // 시대
      const ccbaPoss = result.result.item?.[0]?.ccbaPoss?.[0]; // 소유자
      const ccbaAdmin = result.result.item?.[0]?.ccbaAdmin?.[0]; // 관리자
      const content = result.result.item?.[0]?.content?.[0]; // 국가유산 내용 

      // 상태에 저장
      setHeritageName(heritageName || '정보 없음');
      setHeritageCategory(heritageCategory || '정보 없음');
      setHeritageHanja(heritageHanja || '정보 없음');
      setGcodeName(gcodeName || '정보 없음');
      setBcodeName(bcodeName || '정보 없음');
      setMcodeName(mcodeName || '정보 없음');
      setScodeName(scodeName || '정보 없음');
      setCcbaQuan(ccbaQuan || '정보 없음');
      setCcbaAsdt(ccbaAsdt || '정보 없음');
      setCcbaLcad(ccbaLcad || '정보 없음');
      setCcceName(ccceName || '정보 없음');
      setCcbaPoss(ccbaPoss || '정보 없음');
      setCcbaAdmin(ccbaAdmin || '정보 없음');
      setContent(content || '국가유산에 대한 설명.');

    } catch (error) {
      console.error('국가유산 데이터 가져오기 실패:', error);
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* 이미지 */}
        <img
          src={imageUrl || 'https://via.placeholder.com/150'}
          alt="CultureImage"
          className="bg-slate-300 w-full h-96 object-cover"
        />

        {/* 이미지 위 텍스트 */}
        <h1 className="absolute top-[46%] left-[10.5%] font-pretendard text-white text-3xl font-semibold">{heritageCategory}</h1>
        <h1 className="absolute top-[60%] left-[10%] font-pretendard text-white text-5xl font-bold">{heritageName} ({heritageHanja})</h1>
        <h1 className="absolute top-[75%] left-[12%] text-white text-xl font-bold"></h1>
      </div>

      <div className="relative w-full flex items-start">
  {/* 왼쪽 콘텐츠 */}
  <div className="w-2/3 p-4 mt-[3vh] mr-32 ml-20">
    <h1 className="text-[#FF5DAB] font-pretendard text-xl ml-1 mt-1 font-semibold tracking-extra-wide">
      ABOUT
    </h1>
    <h1 className="text-black text-4xl font-pretendard tracking-wide font-extrabold mb-3 mt-3">
      국가유산 설명
    </h1>
    <div className="w-full h-[1px] bg-gray-400 mb-5"/>

    <p className="text-black text-xl font-pretendard font-medium whitespace-pre-line">
      {(content ?? "").replaceAll("\n", "\n\n")}
    </p>
  </div>

  {/* 오른쪽 콘텐츠 */}
  <div className="w-[800px] bg-white border-2 border-solid border-gray-400 p-4 mt-[4.5vh] mr-20 relative shadow-xl">
    {/* 회색 배경 div */}
    <div className="bg-gray-300 opacity-20 w-full h-[22%] absolute top-[0%] left-0 z-0"/>

    <h1 className="text-[#4F6CF3] font-pretendard text-xl font-semibold tracking-extra-wide z-20 relative mt-2 ml-3">
      INFORMATION
    </h1>
    <h1 className="text-black font-pretendard text-4xl font-extrabold z-20 tracking-wide relative ml-2 mt-4">
      국가유산 정보
      <svg
      className="inline-block transform -translate-y-1 translate-x-2 relative z-20"
      width="40"
      height="50"
      viewBox="0 0 48 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.5 25.5C4.5 14.0574 13.2304 4.78125 24 4.78125C34.7696 4.78125 43.5 14.0574 43.5 25.5C43.5 36.9426 34.7696 46.2188 24 46.2188C13.2304 46.2188 4.5 36.9426 4.5 25.5ZM21.9125 22.4367C24.205 21.2188 26.7862 23.4188 26.1646 26.0608L24.7465 32.0874L24.8295 32.0433C25.5705 31.6496 26.4715 31.9688 26.842 32.756C27.2125 33.5433 26.9121 34.5006 26.1712 34.8943L26.0882 34.9384C23.7957 36.1562 21.2145 33.9562 21.8361 31.3143L23.2541 25.2877L23.1711 25.3318C22.4302 25.7254 21.5292 25.4063 21.1587 24.619C20.7882 23.8317 21.0885 22.8744 21.8295 22.4808L21.9125 22.4367ZM24 19.125C24.8284 19.125 25.5 18.4115 25.5 17.5312C25.5 16.651 24.8284 15.9375 24 15.9375C23.1716 15.9375 22.5 16.651 22.5 17.5312C22.5 18.4115 23.1716 19.125 24 19.125Z"
        fill="#0F172A"
      />
    </svg>
    </h1>

    {/* 정보 내용 */}
    <div className="font-pretendard text-lg font-medium z-20 relative space-y-11 mt-14 mb-2">
  {[
    { label: "분류", value: `${gcodeName} / ${bcodeName} / ${mcodeName} / ${scodeName}` },
    { label: "수량/면적", value: ccbaQuan },
    { label: "지정(등록)일", value: ccbaAsdt },
    { label: "소재지", value: ccbaLcad },
    { label: "시대", value: ccceName },
    { label: "소유자(소유단체)", value: ccbaPoss },
    { label: "관리자(관리단체)", value: ccbaAdmin },
  ].map((item, index) => (
    <div key={index} className="relative">
      <div className="grid grid-cols-[10rem_1fr] gap-4">
        <p className="font-semibold">{item.label}</p>
        <p className="text-gray-700">{item.value}</p>
      </div>
      {index !== 6 &&  <div className="absolute left-0 right-0 bottom-[-20px] w-full h-[1px] bg-gray-300" />}
    </div>
  ))}
</div>



  </div>
</div>

       <DetailMap/>

      {/* 댓글 및 관련 영상 */}

      <div className="flex w-full"> 
  <Comments />
  
  <div className="w-[1000] p-4 h-[430px] mt-[4.5vh] mr-24">
    <h1 className="text-[#FF5DAB] font-pretendard text-xl font-semibold tracking-extra-wide z-20 relative mt-2 ml-2">VIDEO</h1>
    <h1 className="text-black text-4xl font-pretendard font-semibold mb-3 ml-2 mt-3">관련 영상보기</h1>
    <div className="w-[100%] h-[1px] bg-gray-400 mb-5 ml-1"/>
    <p className="text-black text-xl font-medium">여기에 관련 영상이 표시됩니다.</p>
  </div>
</div>
      <MoreImage/>
    </div>
  );
}
