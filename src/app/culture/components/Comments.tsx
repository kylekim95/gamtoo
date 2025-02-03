import GagsiMaskIcon from "@/components/quiz/svg/GagsiMaskIcon";

export default function Comments() {
  return (
    <div className="w-full">
      <div className="w-[900px] bg-white p-4 h-[450px] mt-[4.5vh] ml-20">
        <h1 className="text-[#FF5DAB] font-pretendard text-xl font-semibold tracking-extra-wide z-20 relative mt-2 ml-2">COMMENTS</h1>
        <h1 className="text-black text-4xl font-pretendard font-semibold mb-3 ml-2 mt-3">댓글 2개</h1>
        <div className="relative">
        <button className="font-pretendard border border-[#4F6CF3] text-[#4F6CF3] px-3.5 py-1.5 rounded-lg font-semibold absolute right-0 bottom-full mb-2 
  hover:bg-[#4F6CF3] hover:text-white transition-colors duration-300 ease-in-out">
    댓글 전체보기
</button>


  <div className="w-[100%] h-[1px] bg-gray-400 mb-5 ml-1"/>
</div>
<div className="flex items-center gap-2">
  <div className="flex flex-col items-start gap-5">
    <div className="flex items-center gap-2 mt-7">
      <GagsiMaskIcon color="black" className="w-[100px] h-[100px] aspect-square rounded-full border-4 border-black ml-3" />
      <div className="flex flex-col">
        <p className="text-black text-2xl font-extrabold font-pretendard ml-3">User1@programmers.co.kr</p>
        <p className="text-slate-500 text-sm font-extrabold font-pretendard ml-3">2025년 2월 9일 작성</p>
        <p className="text-slate-900 text-lg font-extrabold font-pretendard ml-3 mt-1">오랜만에 갔다오니 너무 좋았어요!</p>
        <p className="text-slate-900 text-lg font-extrabold font-pretendard ml-3">다음에도 또 다녀오려구요.</p>
      </div>
    </div>
    <div className="flex items-center gap-2 mt-14">
      <GagsiMaskIcon color="black" className="w-[100px] h-[100px] aspect-square rounded-full border-4 border-black ml-3" />
      <div className="flex flex-col">
        <p className="text-black text-2xl font-extrabold font-pretendard ml-3">User2@programmers.co.kr</p>
        <p className="text-slate-500 text-sm font-extrabold font-pretendard ml-3">2025년 2월 3일 작성</p>
        <p className="text-slate-900 text-lg font-extrabold font-pretendard ml-3 mt-1">서울 근처에 살고 있었는데 한 번도 가 본 적 없다가 최근에 가봤어요.</p>
        <p className="text-slate-900 text-lg font-extrabold font-pretendard ml-3">국가유산은 꼭 지켜져야할 것 같아요.</p>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

