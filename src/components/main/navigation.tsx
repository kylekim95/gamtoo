// 외부
import Image from "next/image";

// 내부
import ButtonGroup from "./buttonGroup";

export default function Navigation() {
  return (
    <div className="z-0 relative w-full h-[500px] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2022/10/08/14/03/gyeongbokgung-palace-7507027_1280.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          transform: "translate(0px, 0px)",
        }}
      ></div>
      {/* 제목 */}
      <div className="flex flex-col gap-5 justify-center items-center absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-5xl text-white">
        <div className="">
          {" "}
          <span className="font-semibold text-6xl">감투 </span>
          <span className="font-semibold text-2xl"> : [ 감춰진 역사 투어]</span>
        </div>
        {/* 검색창 */}

        <div className="relative flex flex-row items-center focus:scale-105 hover:scale-105  transition-all duration-300 ease-in-out ">
          <input
            type="text"
            placeholder="검색어를 입력해주세요."
            className="border rounded-3xl p-3 w-[33vw] bg-white bg-opacity-80
                       placeholder-gray-700 placeholder:tracking-widest 
                         placeholder:font-extrabold pl-6 focus:outline-none
                         font-pretendard tracking-extra-wide font-semibold text-[16px]"
          />
          <button
            className="text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out 
                           absolute right-1 top-1/2 transform -translate-y-1/2 flex items-center 
                           hover:scale-125"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#444444"
              stroke="#444444"
              strokeWidth="1"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        {/* 버튼 */}
        <div className="absolute top-[180px]">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}
