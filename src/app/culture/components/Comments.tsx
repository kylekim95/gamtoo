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
  <GagsiMaskIcon color="black" className="w-[100px] h-[100px]" />
  <p className="text-black text-xl font-medium font-pretendard">Programmers</p>
</div>

      </div>
    </div>
  );
}

