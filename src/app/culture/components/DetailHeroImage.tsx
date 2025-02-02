'use client'

import { useSearchParams } from 'next/navigation';
import { useHeritageData } from '../types/useHeritageData';

export default function DetailHeroImage(){
  const searchParams = useSearchParams();  

  // URL에서 'ccbaKdcd', 'ccbaAsno', 'ccbaCtcd' 값을 가져옵니다.
  const ccbaKdcd = searchParams.get('ccbaKdcd');
  const ccbaAsno = searchParams.get('ccbaAsno');
  const ccbaCtcd = searchParams.get('ccbaCtcd');

  // useHeritageData 훅을 사용하여 국가유산 데이터와 이미지를 가져옵니다.
  const {
    imageUrl,
    heritageName,
    heritageHanja,
    heritageCategory
  } = useHeritageData(ccbaKdcd, ccbaAsno, ccbaCtcd);  


return(
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
)
}