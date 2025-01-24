import Image from "next/image";
import heritageData from "@/types/heritageData";
import { MapPinIcon } from "@heroicons/react/20/solid";

export default function Card() {
  return (
    // 카드 리스트들을 차지하는 영역
    <div className="flex flex-row justify-center items-center gap-9">
      {heritageData.map((item, index) => (
        // 카드 한장의 너비와 높이를 차지하는 영역
        <div
          className="flex flex-col w-[280px] h-[320px] rounded-md overflow-hidden shadow-[5px_5px_5px_#ccc8c8]"
          key={index}
        >
          {/* 이미지가 차지하는 영역 */}
          <div className="relative w-[280px] h-[230px] mb-1">
            {/* 1. relative와 w-[220px] h-[200px]: 부모 컨테이너를 상대 위치로 설정하고, 너비를 화면 전체로 확장합니다.
                  - 즉 div의 너비를 220px, 높이를 200px 설정한다
                  - 자식인 이미지는 부모 컨터에이너를 꽉 채운다 */}
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill // 부모 컨테이너를 채우도록 설정
              priority // LCP로 감지된 이미지에 우선순위 부여
              sizes="280px" // 부모 컨테이너의 고정 너비와 동일하게 설정
              style={{
                objectFit: "cover",
                objectPosition: "center top", // 상단 중심 정렬
              }}
            />
            {/* 1. fill: Next.js <Image> 컴포넌트가 부모 컨테이너를 채우도록 설정합니다.
                2. objectFit="cover": 이미지를 비율을 유지하며 컨테이너를 꽉 채웁니다.
                3. objectPosition="top center": 이미지의 상단 중심을 기준으로 잘립니다. */}
          </div>

          {/* 유형, 이름, 주소를 세로로 정렬하기 위해 flex flex-col 사용 */}
          <div className="flex flex-col justify-center gap-1 ml-2">
            <span className="text-[#4F6CF3] text-xs font-bold">
              {item.designation}
            </span>
            <span className="text-black text-base font-bold">{item.name}</span>
            <div className="flex flex-row items-center">
              <MapPinIcon className="size-5 text-black" />
              <span className="text-black text-xs font-bold">
                {item.address}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
