"use client";

export default function Culture() {


  





  return (
    <div>
      <div className="relative w-full h-[200vh]">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/16/03/45/korea-1095361_1280.jpg"
          alt="CultureImage"
          className="absolute top-0 left-0 w-full h-72 object-cover"
        />
        <div className="absolute left-1/2 top-28 z-10 transform -translate-x-1/2">
          <h1 className="text-white text-5xl font-extrabold">국가유산 조회</h1>
        </div>

        <div className="absolute top-[40vh] left-[15%] w-[70vw] h-[80vh] bg-white border-2 border-solid border-black p-4">
          <h3 className="text-black text-xl font-semibold">선택된 항목</h3>
          <div className="border-[0.5px] border-solid border-gray-400 w-[5.5vw]"></div>
          <button className="absolute top-[10vh] left-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">
            검색 초기화
          </button>

          <div className="grid grid-cols-3 gap-4 mt-36 h-[65%]">
            <div className="h-[110%] bg-white border-2 border-solid border-black flex flex-col">
              <div className="mt-3 ml-2 text-black text-lg font-semibold">지정종목</div>
              <div className="border-b-2 border-solid border-gray-400 w-[4vw]  ml-1.5"></div>
            </div>
            <div className="h-[80%] bg-white border-2 border-solid border-black flex flex-col">
              <div className="mt-3 ml-2 text-black text-lg font-semibold">지정연도</div>
              <div className="border-b-2 border-solid border-gray-400 w-[4vw]  ml-1.5"></div>
            </div>
            <div className="h-[228%] bg-white border-2 border-solid border-black flex flex-col">
              <div className="mt-3 ml-2 text-black text-lg font-semibold">시대</div>
              <div className="border-b-2 border-solid border-gray-400 w-[2vw] ml-2"></div>
            </div>
            <div className="h-[110%] bg-white border-2 border-solid border-black flex flex-col relative top-[2.5vh]">
              <div className="mt-3 ml-2 text-black text-lg font-semibold">유형분류</div>
              <div className="border-b-2 border-solid border-gray-400 w-[4vw]  ml-1.5"></div>
            </div>
            <div className="h-[140%] bg-white border-2 border-solid border-black flex flex-col relative translate-x-0 -translate-y-11">
              <div className="mt-3 ml-2 text-black text-lg font-semibold">지역</div>
              <div className="border-b-2 border-solid border-gray-400 w-[2vw] ml-2"></div>
            </div>
          </div>
        </div>

        <h1 className="absolute right-[15%] top-[35vh] text-gray-500 text-lg font-semibold z-20">
          상세검색닫기
        </h1>
      </div>
    </div>
  );
}
