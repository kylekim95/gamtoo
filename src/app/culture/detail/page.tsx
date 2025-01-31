'use client'

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'; // 쿼리 파라미터를 사용하기 위한 훅
import { parseStringPromise } from 'xml2js'; // XML을 파싱하기 위한 라이브러리

export default function Detail() {
  const searchParams = useSearchParams();  // searchParams 훅을 사용하여 URL에서 파라미터를 가져옵니다.

  // URL에서 'ccbaKdcd', 'ccbaAsno', 'ccbaCtcd' 값을 가져옵니다.
  const ccbaKdcd = searchParams.get('ccbaKdcd');
  const ccbaAsno = searchParams.get('ccbaAsno');
  const ccbaCtcd = searchParams.get('ccbaCtcd');

  const [imageUrl, setImageUrl] = useState<string | null>(null); // 이미지를 상태로 관리
  const [heritageName, setHeritageName] = useState<string | null>(null); // 국가유산명(국문)
  const [heritageType, setHeritageType] = useState<string | null>(null); // 국가유산종목

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
      console.log(result)
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

      // 파싱한 데이터에서 국가유산명(국문)과 국가유산종목을 추출
      const heritageName = result.result.item?.[0]?.ccbaMnm1?.[0];  // 국가유산명(국문)
      const heritageType = result.result.item?.[0]?.ccbaKdcd?.[0];  // 국가유산종목
      setHeritageName(heritageName || '정보 없음');  // 국가유산명(국문) 상태에 저장
      setHeritageType(heritageType || '정보 없음');  // 국가유산종목 상태에 저장
    } catch (error) {
      console.error('국가유산 데이터 가져오기 실패:', error); // 에러가 발생하면 콘솔에 출력
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
        <h1 className="absolute top-[75%] left-[12%] text-white text-xl font-bold">{heritageType}</h1>
        <h1 className="absolute top-[46%] left-[10.5%] text-white text-3xl font-semibold">국보</h1>
        <h1 className="absolute top-[60%] left-[10%] text-white text-5xl font-bold">{heritageName}
        <svg
          className="absolute top-[75.8%] left-[10.5%]" // 위치 조정
          width="16"
          height="21"
          viewBox="0 0 22 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4247 26.604C10.4624 26.6264 10.4921 26.6437 10.5131 26.6558L10.548 26.6757C10.8266 26.8323 11.1722 26.8311 11.4511 26.6762L11.4869 26.6558C11.5079 26.6437 11.5376 26.6264 11.5753 26.604C11.6508 26.5592 11.7587 26.4939 11.8944 26.4084C12.1656 26.2374 12.5484 25.9853 13.0058 25.6545C13.9189 24.9941 15.1372 24.0143 16.3582 22.7344C18.7883 20.187 21.3125 16.3597 21.3125 11.4375C21.3125 5.60645 16.6954 0.879456 11 0.879456C5.30456 0.879456 0.6875 5.60645 0.6875 11.4375C0.6875 16.3597 3.21165 20.187 5.64182 22.7344C6.86282 24.0143 8.08114 24.9941 8.99424 25.6545C9.45156 25.9853 9.83442 26.2374 10.1056 26.4084C10.2413 26.4939 10.3492 26.5592 10.4247 26.604ZM11 15.2768C13.0711 15.2768 14.75 13.5579 14.75 11.4375C14.75 9.31711 13.0711 7.59821 11 7.59821C8.92893 7.59821 7.25 9.31711 7.25 11.4375C7.25 13.5579 8.92893 15.2768 11 15.2768Z"
            fill="white"
          />
        </svg></h1>
      </div>

      <div className="relative w-full flex">
        {/* 왼쪽 콘텐츠 */}
        <div className="w-2/3 bg-white border-2 border-solid border-black p-4 h-[500px] mt-[4.5vh] mr-16 ml-20">
          <h1 className="text-black text-xl font-semibold">ABOUT</h1>
          <h1 className="text-black text-4xl font-semibold">국가유산 설명</h1>
          <hr />
          <p className="text-black text-xl font-medium">여기에 국가유산에 대한 설명이 들어갑니다.</p>
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="w-1/3 bg-white border-2 border-solid border-black p-4 h-[500px] mt-[4.5vh] mr-20">
          <h1 className="text-black text-xl font-semibold">INFORMATION</h1>
          <h1 className="text-black text-4xl font-semibold">국가유산 정보</h1>
          <hr />
          <div className="text-black text-xl font-medium">
            <p>국가유산 종목: {heritageType}</p>
          </div>
        </div>
      </div>

      {/* 국가유산 위치 */}
      <div className="w-full border-2 border-solid border-black p-6 mt-6 overflow-x-auto">
        <h1 className="text-black text-xl font-semibold ml-20">INFORMATION</h1>			
        <h1 className="text-black text-4xl font-semibold mb-4 ml-20">국가유산 위치</h1>
        {/* 위치 내용 */}
        <div className="w-[89vw] h-80 ml-[4%] bg-gray-200 border-2 border-solid border-black flex items-center justify-center max-w-full">
          <p className="text-black text-xl font-medium">여기에 지도가 들어갑니다.</p>
        </div>
      </div>

      <div className="relative w-full flex">
        {/* 왼쪽 콘텐츠 */}
        <div className="w-2/3 bg-white border-2 border-solid border-black p-4 h-[450px] mt-[4.5vh] mr-16 ml-20">
          <h1 className="text-black text-xl font-semibold">COMMENTS</h1>
          <h1 className="text-black text-4xl font-semibold">댓글</h1>
          <hr />
          <p className="text-black text-xl font-medium">여기에 댓글이 표시됩니다.</p>
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="w-1/3 bg-white border-2 border-solid border-black p-4 h-[430px] mt-[4.5vh] mr-20">
          <h1 className="text-black text-xl font-semibold">VIDEO</h1>
          <h1 className="text-black text-4xl font-semibold">관련 영상보기</h1> 
          <hr />
          <p className="text-black text-xl font-medium">여기에 관련 영상이 표시됩니다.</p>
        </div>
      </div>

      <div className="w-full border-2 border-solid border-black p-6 mt-6 overflow-x-auto h-[60vh]">
        <h1 className="text-black text-xl font-semibold ml-20">SEE MORE</h1>            
        <h1 className="text-black text-4xl font-semibold mb-4 ml-20">이미지 더보기</h1> 
        {/* 이미지 더보기 콘텐츠 */}
        <div className="w-[89vw] h-80 ml-[4%] bg-gray-200 border-2 border-solid border-black flex items-center justify-center max-w-full">
          <p className="text-black text-xl font-medium">여기에 이미지 갤러리가 들어갑니다.</p>
        </div>
      </div>
    </div>
  );
}
