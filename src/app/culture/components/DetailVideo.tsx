'use client'

import { useSearchParams } from 'next/navigation';
import { useHeritageData } from '../types/useHeritageData';

export default function DetailVideo() {
  const searchParams = useSearchParams();
  const ccbaKdcd = searchParams.get('ccbaKdcd');
  const ccbaAsno = searchParams.get('ccbaAsno');
  const ccbaCtcd = searchParams.get('ccbaCtcd');

  const { videoUrl } = useHeritageData(ccbaKdcd, ccbaAsno, ccbaCtcd);

  const isValidVideoUrl = videoUrl && videoUrl !== 'http://116.67.83.213/webdata/file_data/media_data/videos/';

  return (
    <div>
      <div className="w-[700] p-4 h-[430px] mt-[4.5vh] mr-20">
        <h1 className="text-[#FF5DAB] font-pretendard text-xl font-semibold tracking-extra-wide z-20 relative mt-2 ml-2">VIDEO</h1>
        <h1 className="text-black text-4xl font-pretendard font-semibold mb-3 ml-2 mt-3">관련 영상보기</h1>
        <div className="w-[100%] h-[1px] bg-gray-400 mb-5 ml-1" />
  
        {isValidVideoUrl ? (
          <video width="100%" height="auto" controls className="ml-1"> 
            <source src={videoUrl} type="video/mp4" />
          </video>
        ) : (
          <p className="font-pretendard text-xl ml-3">관련 동영상이 없습니다.</p>
        )}
      </div>
    </div>
  );
}  
