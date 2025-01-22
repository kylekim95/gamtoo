import Image from "next/image";
import buttonGroup from "@/types/buttonGroup";

function ButtonGroup() {
  const buttonInfo: buttonGroup[] = [
    {
      destination: "역사 퀴즈",
      bgColor: "#CD933A",
    },
    {
      destination: "행사 일정",
      bgColor: "#5E9399",
    },
    {
      destination: "문화재 보기",
      bgColor: "#C47540",
    },
    {
      destination: "QnA",
      bgColor: "#468854",
    },
  ];
  return (
    <div className="flex flex-row gap-16">
      {buttonInfo.map(({ destination, bgColor }, index) => (
        <div
          key={index}
          className={`rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl opacity-90`}
          style={{ backgroundColor: bgColor }} // 동적 배경색 설정
        >
          <button className="flex flex-col justify-center items-start w-[170px] h-20 p-4">
            <span className="text-xl font-semibold">{destination}</span>
            <div className="flex gap-1 justify-center items-center">
              <span className="font-semibold text-xs">자세히보기</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="z-0 relative w-full h-[450px]">
        <Image
          src="https://cdn.pixabay.com/photo/2022/10/08/14/03/gyeongbokgung-palace-7507027_1280.jpg"
          alt="Gyeongbokgung Palace"
          layout="fill" // 부모 컨테이너를 채우도록 설정
          objectFit="cover"
          objectPosition="top" // 상단 중심 정렬
        />
        {/* 제목 */}
        <div className="flex flex-col gap-10 justify-center items-center absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-5xl text-white">
          <div>
            {" "}
            <span className="font-semibold text-6xl">감투 </span>
            <span className="font-semibold text-2xl">
              {" "}
              : [ 감춰진 역사 투어]
            </span>
          </div>
          {/* 검색창 */}
          <div className="relative flex flex-row">
            <input
              className="opacity-75 w-[550px] px-8 rounded-2xl h-10  text-lg font-semibold text-black"
              placeholder="검색어를 입력해주세요"
              type="text"
            />{" "}
            <button className="absolute top-2 right-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentㅠㅣㅁColor"
                className="size-6"
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
          <div className="relative">
            <div className="absolute top-4">
              {" "}
              <ButtonGroup />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
