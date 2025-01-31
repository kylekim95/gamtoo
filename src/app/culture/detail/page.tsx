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
  const [heritageHanja, setHeritageHanja] = useState<string | null>(null); // 국가유산명(한자)
  const [heritageCategory, setHeritageCategory] = useState<string | null>(null); // 국가유산종목 (ccmaName)

  // 추가적으로 요청하신 값들을 상태로 관리
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

      // 추가적으로 요청하신 값들을 추출
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
      const content = result.result.item?.[0]?.content?.[0]; // 국가유산 내용 (content)

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
      setContent(content || '여기에 국가유산에 대한 설명이 들어갑니다.'); // content 추가

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
        <h1 className="absolute top-[46%] left-[10.5%] text-white text-3xl font-semibold">{heritageCategory}</h1>
        <h1 className="absolute top-[60%] left-[10%] text-white text-5xl font-bold">{heritageName} ({heritageHanja})</h1>
        <h1 className="absolute top-[75%] left-[12%] text-white text-xl font-bold"></h1>
      </div>

      <div className="relative w-full flex">
        {/* 왼쪽 콘텐츠 */}
        <div className="w-2/3 bg-white border-2 border-solid border-black p-4 h-[500px] mt-[4.5vh] mr-16 ml-20">
          <h1 className="text-black text-xl font-semibold">ABOUT</h1>
          <h1 className="text-black text-4xl font-semibold">국가유산 설명</h1>
          <hr />
          <p className="text-black text-xl font-medium">{content}</p> {/* content 추가 */}
        </div>

        {/* 오른쪽 콘텐츠 */}
        <div className="w-1/3 bg-white border-2 border-solid border-black p-4 h-[500px] mt-[4.5vh] mr-20">
          <h1 className="text-black text-xl font-semibold">INFORMATION</h1>
          <h1 className="text-black text-4xl font-semibold">국가유산 정보</h1>
          <hr />
          <div className="text-black text-xl font-medium">
            <p>국가유산명 (국문): {heritageName}</p>
            <p>국가유산명 (한자): {heritageHanja}</p>
            <p>국가유산 분류: {heritageCategory}</p>
            <p>국가유산분류: {gcodeName} / {bcodeName} / {mcodeName} / {scodeName}</p>
            <p>수량/면적: {ccbaQuan}</p>
            <p>지정일: {ccbaAsdt}</p>
            <p>소재지: {ccbaLcad}</p>
            <p>시대: {ccceName}</p>
            <p>소유자: {ccbaPoss}</p>
            <p>관리자: {ccbaAdmin}</p>
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

      {/* 댓글 및 관련 영상 */}
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
