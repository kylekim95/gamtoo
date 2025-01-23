"use client";
// 외부
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MapPinIcon,
  CheckIcon,
  // 알림 아이콘입니다.
} from "@heroicons/react/20/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { parseStringPromise } from "xml2js";
import { parseISO } from "date-fns";
import dayjs from "dayjs";

// 내부
import buttonGroup from "@/types/buttonGroup";
import heritageData from "@/types/heritageData";

//기타
import Image from "next/image";

// Navigation

function Navigation() {
  return (
    <div className="z-0 relative w-full h-[450px]">
      <Image
        src="https://cdn.pixabay.com/photo/2022/10/08/14/03/gyeongbokgung-palace-7507027_1280.jpg"
        alt="Gyeongbokgung Palace"
        layout="fill" // 부모 컨테이너를 채우도록 설정
        objectFit="cover"
        objectPosition="top" // 상단 중심 정렬
      />
      {/* 제목 */}
      <div className="flex flex-col gap-5 justify-center items-center absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-5xl text-white">
        <div className="">
          {" "}
          <span className="font-semibold text-6xl">감투 </span>
          <span className="font-semibold text-2xl"> : [ 감춰진 역사 투어]</span>
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
              fill="currentColor"
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
        <div className="absolute top-[180px]">
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}

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
              <ArrowRightCircleIcon className="size-6 stroke-[2]" />
            </div>
          </button>
        </div>
      ))}
    </div>
  );
}

// 문화재

function HeritageList() {
  return (
    <>
      {/* 버튼 전부를 감싸는 태그 */}
      <div className="contentWrapper flex flex-row justify-between items-end border-b">
        {/* 왼쪽 */}
        <div className="flex flex-col pb-1">
          <div className=" text-[#F09AFF]">
            A REPRESENTATIVE CULTURAL HERITAGE
          </div>
          <div className="flex flex-row items-center gap-9">
            <div className="flex flex-row items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="41"
                fill="none"
              >
                <path
                  fill="#606060"
                  d="M15.908.515c-.522.448-.145 1.667.741 2.407l.607.51-.947 1.366c-1.384 2.032-1.676 2.23-4.42 3.011-1.445.407-5.088 1.22-6.643 1.47-1.008.166-1.36.406-1.36.927 0 .438.255.688.971.938.292.104.486.323.863.98.631 1.073 1.13 1.656 2.1 2.428.948.77 2.26 1.48 3.51 1.907.984.333 2.599.73 3.048.73.219.01.195.062-.206.354-.632.479-1.883 1.031-3.073 1.344-1.785.48-2.95.615-6.06.667l-2.902.062-.34.292c-.668.563-.376 1.417.595 1.803.365.135.522.292.741.74 1.13 2.22 3.801 4.595 6.436 5.71l.996.428v4.23H6.643c-3.352 0-3.96.021-4.19.167-.316.188-.364.678-.085.917.158.125.182.573.182 2.71v2.563h-.79c-.691 0-.837.032-1.104.26-.328.282-.316.616.048.866.28.187 60.489.187 60.768 0 .365-.25.377-.584.049-.865-.267-.23-.413-.26-1.166-.26h-.85v-2.533c0-2.407.012-2.553.243-2.73.28-.22.316-.553.073-.844-.17-.188-.377-.198-4.19-.23l-4.02-.03v-4.211l1.045-.459c2.684-1.177 5.149-3.355 6.315-5.575.291-.552.437-.708.813-.854.947-.375 1.239-1.188.644-1.782l-.292-.292-2.902-.063c-3.084-.072-4.42-.218-6.157-.677-1.336-.365-3.352-1.323-3.352-1.605 0-.041.231-.104.523-.146.825-.114 3-.77 3.85-1.167 2.003-.938 3.46-2.22 4.383-3.855.377-.667.559-.886.85-.98.692-.25.96-.5.96-.927 0-.261-.085-.459-.243-.584-.146-.115-1.105-.354-2.514-.625-3.498-.688-6.096-1.355-7.347-1.886-.826-.355-1.3-.834-2.332-2.345l-.935-1.355.595-.49c.911-.76 1.287-1.959.753-2.417-.51-.438-1.069-.177-1.226.573-.255 1.188-.766 1.386-3.862 1.542-2.927.136-17.257.136-20.183 0-3.097-.156-3.692-.396-3.85-1.553-.085-.708-.728-1-1.239-.562Zm12.084 3.512c2.623.03 6.52.01 9.727-.073 2.95-.063 5.477-.094 5.622-.052.17.041.62.593 1.288 1.552 1.13 1.636 1.773 2.272 2.83 2.751.97.448 3.217 1.063 5.95 1.647l2.343.5-.643.198c-2.66.771-6.51 1.23-12.241 1.428-3.85.135-19.831.135-23.68 0-5.575-.198-9.473-.657-12.12-1.428l-.644-.198 2.344-.49c2.684-.573 4.954-1.198 5.95-1.657 1.057-.479 1.7-1.115 2.83-2.74.57-.824 1.093-1.522 1.178-1.553.085-.031 1.226-.042 2.526-.01 1.3.03 4.335.083 6.74.125Zm26.947 7.971c-.826 1.21-2.186 2.293-3.753 2.97-.68.303-2.453.824-3.06.918l-.522.073V13.03l.4-.052c.207-.031.912-.104 1.543-.167 1.13-.114 4.323-.635 5.04-.823.206-.052.376-.104.4-.104.025-.01 0 .052-.048.114Zm-45.224.397c.972.166 2.332.364 3.036.427 2.052.177 1.822-.031 1.822 1.667v1.47l-.45-.073c-.91-.136-2.66-.699-3.558-1.126-.971-.469-2.672-1.824-3.084-2.46l-.231-.354.352.063c.194.042 1.142.208 2.113.386Zm36.432 2.626v1.854H37.16v-1.219c0-1.302-.121-1.594-.656-1.594-.631.01-.801.375-.801 1.709v1.104H26.352v-1.24c0-1.177-.012-1.26-.267-1.406-.364-.22-.656-.209-.947.041-.219.188-.243.344-.243 1.407v1.198H16.03v-3.699H46.147v1.845Zm1.032 3.574c1.032.657 1.894 1.032 3.352 1.449 1.748.5 3.218.687 5.683.76 2.44.073 2.453.125.121.646-4.663 1.053-10.322 1.438-22.272 1.543-11.925.093-19.381-.188-24.955-.96-1.967-.28-4.433-.791-4.967-1.041-.291-.136-.182-.146 1.142-.157 4.116-.01 7.432-.781 9.715-2.24l.728-.469H46.45l.729.469ZM8.622 23.222c5.003.719 11.998 1.052 22.466 1.052 12.338 0 20.074-.469 25.114-1.51.607-.126 1.117-.21 1.117-.178 0 .021-.255.375-.57.792-1.106 1.417-2.976 2.887-4.615 3.595l-.523.22v-.261c0-.146-.133-.386-.303-.521l-.292-.26H11.16l-.291.26c-.17.135-.304.375-.304.52v.261l-.51-.219c-1.652-.719-3.619-2.25-4.651-3.636-.304-.386-.547-.73-.547-.761 0-.021.51.062 1.13.187.607.125 1.797.334 2.635.459Zm41.508 4.877.036.656H12.022v-.604c0-.334.037-.646.085-.677.037-.042 8.61-.063 19.03-.052l18.956.03.037.647ZM14.45 31.413v1.406H12.022V30.006H14.451v1.407Zm5.343 0v1.406h-3.886v-1.333c0-.74.037-1.376.085-1.407.037-.042.911-.073 1.943-.073h1.858v1.407Zm4.008.416c0 1.553-.024 1.824-.182 1.824-.146 0-.182-.135-.182-.615 0-.708-.158-.875-.753-.823-.292.02-.438.104-.559.313-.121.219-.243.291-.522.291h-.352V30.006h2.55v1.823Zm3.886 0v1.824H25.259V30.006H27.688v1.823Zm5.343 0v1.824h-3.886V30.006h3.886v1.823Zm3.886 0v1.824H34.49V30.006h2.428v1.823Zm4.008-.416v1.406H40.5c-.243 0-.425-.052-.425-.125 0-.229-.401-.5-.741-.5-.498 0-.765.396-.68.99.06.375.048.47-.097.47-.158 0-.182-.282-.182-1.825v-1.823h2.55v1.407Zm5.222 0v1.406H42.382V30.006H46.147v1.407Zm4.007 0v1.406h-2.55V30.006h2.55v1.407Zm-28.295 2.99c0 .188-.085 1.345-.207 2.554l-.194 2.22H4.007v-2.48c0-1.366.037-2.523.085-2.554.037-.042 4.056-.073 8.926-.073h8.84v.334Zm36.189 2.22v2.553H40.694l-.06-.552a98.085 98.085 0 0 1-.195-2 111.63 111.63 0 0 0-.194-2.012l-.061-.542h17.864v2.553ZM38.86 35.164v.26H23.316v-.52H38.86v.26Zm.122 1.824v.313H23.073v-.24c0-.136.037-.282.085-.313.037-.041 3.62-.073 7.955-.073h7.869v.313Zm.218 1.897.037.291H22.952v-.625l8.112.02 8.1.032.036.282Z"
                />
                <path
                  fill="#606060"
                  d="M18.447 14.052c-.328.291-.352.354-.352 1.156 0 .959.097 1.178.607 1.407.45.198 2.587.219 3.036.02.51-.218.753-.75.704-1.573-.036-.646-.085-.74-.437-1.01-.389-.292-.425-.303-1.797-.303-1.385 0-1.409 0-1.761.303Zm2.562 1.208c0 .25-.036.26-.728.26-.693 0-.729-.01-.729-.26s.036-.26.729-.26c.692 0 .728.01.728.26ZM29.558 13.853c-.498.167-.656.51-.656 1.407 0 1.344.316 1.553 2.356 1.49 1.215-.031 1.3-.042 1.615-.323.316-.271.34-.344.34-1.178 0-.875-.012-.896-.4-1.198-.389-.292-.425-.302-1.7-.292-.717 0-1.421.042-1.555.094Zm2.259 1.407c0 .25-.037.26-.729.26s-.728-.01-.728-.26.036-.26.728-.26.729.01.729.26ZM40.317 13.884c-.437.188-.607.553-.607 1.345 0 1.334.376 1.584 2.344 1.521 1.311-.031 1.323-.031 1.676-.375.315-.302.352-.406.352-1.073 0-.834-.194-1.24-.668-1.428-.425-.167-2.708-.156-3.097.01Zm2.307 1.376c0 .25-.036.26-.728.26s-.729-.01-.729-.26.037-.26.729-.26.728.01.728.26Z"
                />
              </svg>
              <span className="font-semibold text-3xl text-black">문화재</span>
            </div>
            <span className="font-semibold text-base text-black">
              우리 나라의 자랑스러운{" "}
              <span className="text-[#F09AFF]">유산</span>들을 살펴보세요{" "}
            </span>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="rightContent text-black flex flex-row gap-16 pb-[17px]">
          <div className="flex flex-row gap-1 items-center">
            <CheckIcon className="size-5" />
            <button>최신등록</button>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <CheckIcon className="size-5" />
            <button>무형 문화재</button>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <CheckIcon className="size-5" />
            <button>유형 문화재</button>
          </div>
        </div>
      </div>
      {/* 문화재 리스트 하단 부분 */}
      <div className="flex flex-col justify-center items-center mt-4 mx-3">
        {" "}
        <Card />
        <Pagination />
      </div>
    </>
  );
}

function Card() {
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
              layout="fill" // 부모 컨테이너를 채우도록 설정
              objectFit="cover"
              objectPosition="center top" // 상단 중심 정렬
            />
            {/* 1. layout="fill": Next.js <Image> 컴포넌트가 부모 컨테이너를 채우도록 설정합니다.
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

function Pagination() {
  return (
    <div className="flex flex-row justify-center items-center bg-white px-4 py-3 sm:px-6 mt-4">
      <div className="hidden sm:flex sm:flex-1 sm:items-center">
        <nav
          aria-label="Pagination"
          className="isolate inline-flex rounded-md shadow-xs"
        >
          <span className="relative inline-flex items-center hover:bg-gray-50">
            <ChevronLeftIcon className="size-8 text-stone-500 " />
          </span>
          <span
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            1
          </span>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50 ">
            2
          </span>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">
            3
          </span>
          <span className="relative inline-flex items-center hover:bg-gray-50">
            <ChevronRightIcon className="size-8 text-stone-500" />
          </span>
        </nav>
      </div>
    </div>
  );
}

// 문화재 행사
function CultureFestival() {
  const [selectedMonth, setSelectedMonth] = useState<string>(
    `${dayjs().month() + 1}`
  );
  const date = dayjs();
  interface Item {
    seqNo: string;
    siteCode: string;
    subTitle: string;
    subContent: string;
    sDate: string;
    eDate: string;
    groupName: string;
    contact: string;
    subDesc: string;
    subPath: string;
    subDesc_2: string;
    subDesc_3: string;
    mainImageTemp: string;
    sido: string;
    gugun: string;
    subDate: string;
    imageUrl: string;
  }
  const [festivalItems, setFestivalItems] = useState<Item[]>([
    {
      seqNo: "",
      siteCode: "",
      subTitle: "",
      subContent: "",
      sDate: "",
      eDate: "",
      groupName: "",
      contact: "",
      subDesc: "",
      subPath: "",
      subDesc_2: "",
      subDesc_3: "",
      mainImageTemp: "",
      sido: "",
      gugun: "",
      subDate: "",
      imageUrl: "",
    },
  ]);
  const partyDate = parseISO("2024-06-10");

  async function testData() {
    const data = await fetch(
      "https://www.cha.go.kr/cha/openapi/selectEventListOpenapi.do?searchYear=2024&searchMonth=6"
    );
    const text = await data.text();
    const result = await parseStringPromise(text);
    const items = [];
    for (let i = 0; i < 43; i++) {
      items.push({
        seqNo: result.result.item[i].seqNo[0],
        siteCode: result.result.item[i].siteCode[0],
        subTitle: result.result.item[i].subTitle[0],
        subContent: result.result.item[i].subContent[0],
        sDate: `${result.result.item[i].sDate[0].slice(
          0,
          4
        )}.${result.result.item[i].sDate[0].slice(4, 6)}.${result.result.item[
          i
        ].sDate[0].slice(6, 8)}`,
        eDate: `${result.result.item[i].eDate[0].slice(
          0,
          4
        )}.${result.result.item[i].eDate[0].slice(4, 6)}.${result.result.item[
          i
        ].eDate[0].slice(6, 8)}`,
        groupName: result.result.item[i].groupName[0],
        contact: result.result.item[i].contact[0],
        subDesc: result.result.item[i].subDesc[0],
        subPath: result.result.item[i].subPath[0],
        subDesc_2: result.result.item[i].subDesc_2[0],
        subDesc_3: result.result.item[i].subDesc_3[0],
        mainImageTemp: result.result.item[i].mainImageTemp[0],
        sido: result.result.item[i].sido[0],
        gugun: result.result.item[i].gugun[0],
        subDate: result.result.item[i].subDate[0],
        imageUrl: `/festivalPosts/${i}.jpg`,
      });
    }

    setFestivalItems(items);
  }
  useEffect(() => {
    testData();
  }, []);
  return (
    <>
      {/* 상단 부분 */}
      <div className="contentWrapper flex flex-row justify-between items-end border-b">
        {/* 왼쪽 */}
        <div className="flex flex-col pb-1">
          <div className="flex flex-col pb-1">
            <div className=" text-[#F09AFF]">CULTURAL HERITAGE EVENT</div>
            <div className="flex flex-row items-center gap-9">
              <div className="flex flex-row items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="51"
                  height="47"
                  fill="none"
                >
                  <path
                    fill="#606060"
                    d="M12.801.1155c-.2776.0524-.8841.2831-1.3467.5033C9.4701 1.594 8.2262 3.6702 8.2262 6.04v.6607h-3.043c-2.0972 0-3.187.042-3.4748.1258C1.1429 6.9943.2897 7.8646.1252 8.4413c-.2879.9857-.0823 1.7722.6477 2.5062.627.6501 1.0383.7864 2.3542.7864h.9869v39.7523l.257.2517C4.6177 52 4.6383 52 6.5813 52s1.9636 0 2.2103-.2621l.257-.2517v-4.9808l2.0561-2.1077c2.3748-2.4328 2.3748-2.4328 1.6243-3.2612l-.4317-.4718 1.4495-1.4785 1.4496-1.4786.7607.6292c2.6421 2.223 5.4898 3.3765 8.7693 3.5547 3.6906.1993 7.2168-.9856 10.1673-3.4184l.9047-.755 1.4496 1.4681 1.4495 1.4785-.4318.4718c-.7504.8284-.7504.8284 1.6244 3.2612l2.056 2.1077v4.9808l.2571.2517c.2467.2621.2673.2621 2.2103.2621s1.9635 0 2.2103-.2621l.257-.2517V11.7339h.9869c1.3159 0 1.7271-.1363 2.3542-.7864 1.0075-1.0172 1.0384-2.3279.0823-3.408-.7094-.8074-.8841-.8388-4.472-.8388h-3.0636V6.04c0-2.3698-1.2337-4.446-3.2178-5.4107-.4626-.2307-1.1206-.4614-1.4496-.5243-.7813-.1468-24.5497-.1363-25.3002.0105Zm25.9788 1.9923c.9355.4719 1.5215 1.0906 1.9635 2.0553.2982.6606.3187.7969.3804 2.2544.0514 1.4786.0617 1.573.2981 1.7617.2262.1887.4524.1992 3.8347.1992h3.5878l.2468.2622c.3392.3355.3392.8179 0 1.1534l-.2468.2622h-9.3655v-2.265c0-1.4575-.0411-2.4223-.1233-2.6844-.0617-.2307-.3187-.6501-.5655-.9228-.7916-.9018.1645-.8388-13.2721-.8388-9.0159 0-11.9767.0314-12.2954.1258-.5654.1678-1.4187 1.0381-1.5832 1.6148-.0822.2832-.1234 1.2269-.1234 2.7054v2.265H2.1504l-.2467-.2622c-.3393-.3355-.3393-.8179 0-1.1534l.2467-.2622h3.588c3.3822 0 3.6084-.0105 3.8345-.1992.2365-.1888.2468-.2831.2982-1.7617.0617-1.4575.0822-1.5938.3803-2.2544.1748-.388.5141-.9123.7402-1.164.4524-.5033 1.3879-1.059 2.0253-1.2163.2364-.0525 5.4898-.0944 12.6964-.084l12.2851.021.7814.388ZM21.3852 6.4385c0 1.3737.0103 1.4366.257 1.6778.2056.2202.3495.2621.8224.2621h.5655v3.5652l-.2776.063c-.1645.0314-.6991.1782-1.2131.3145-5.4075 1.5205-9.4889 6.04-10.6094 11.7548-.2468 1.2793-.2468 4.2363 0 5.5156.4215 2.1182 1.3981 4.4356 2.529 5.998l.6168.8389-1.4804 1.5099-1.4804 1.5205-.4626-.4404c-.5346-.5033-.9047-.5663-1.3365-.2202l-.2673.2097v-27.274h1.7991c1.7785 0 1.8094 0 2.0561-.2621l.257-.2517V5.5367l.257-.2516.2468-.2622h7.7206v1.4156Zm6.5795-.5767v.8389h-4.9346V5.0229h4.9346v.8389Zm9.6122-.5767.2571.2516v5.6834l.257.2517c.2467.2621.2775.2621 2.0561.2621h1.799v27.274l-.2672-.2097c-.4318-.3461-.8019-.2831-1.3365.2202l-.4626.4404-1.4804-1.5205-1.4804-1.5099.6065-.8389c.7505-1.0276 1.6449-2.8207 2.0459-4.1105 1.8813-5.9246-.0206-12.4573-4.7599-16.3476-1.8813-1.5519-3.9477-2.5271-6.5589-3.1248l-.2879-.063V8.3784h.5654c.4729 0 .6169-.042.8225-.2621.2467-.2412.257-.3041.257-1.6778V5.023h7.7206l.2467.2622Zm-11.2571 4.7711v1.6777H24.675V8.3784h1.6448v1.6778ZM7.4038 31.0281v19.2941H5.7589V11.7339h1.6449v19.2942Zm37.8321 0v19.2941H43.591V11.7339h1.6449v19.2942ZM27.1114 13.5165c.9664.1259 2.0767.3985 2.9505.7341l.5963.2306-.6271.6502-.6374.6606-.8019-.2412c-.9766-.2831-2.1486-.4614-3.0944-.4614-.9458 0-2.1178.1783-3.0944.4614l-.8019.2412-.6374-.6606-.6271-.6502.5963-.2306c1.9018-.7236 4.1327-.9962 6.1785-.7341Zm-7.7515 2.3908.5963.6187-.6477.4299c-1.4392.9543-2.7551 2.3069-3.6084 3.7225l-.3084.5139-.5963-.6082-.586-.5977.257-.4299c.7814-1.2689 2.3029-2.8627 3.5879-3.754.3907-.2727.7094-.4929.7094-.5033 0 0 .2776.2726.5962.6081Zm14.3105.4404c1.0486.8494 2.2205 2.1811 2.9505 3.366.1645.2727.1644.2727-.4215.8704l-.5963.6082-.3084-.5139c-.8533-1.4156-2.1692-2.7682-3.6085-3.7225l-.6476-.4299.586-.6082.5859-.5977.4215.2622c.2365.1468.6991.4928 1.0384.7654Zm-5.7982.7236c1.8402.4823 3.2794 1.3317 4.6159 2.7263 1.3262 1.3632 2.1795 2.9151 2.6421 4.7921.2467.9962.2467 3.4918 0 4.488-.4729 1.9399-1.2851 3.3974-2.6935 4.834-1.4084 1.4366-2.8374 2.265-4.7393 2.7473-1.0075.2517-3.3309.2517-4.3589 0-3.7421-.9227-6.5384-3.7644-7.4739-7.5813-.2467-.9962-.2467-3.4918 0-4.488.4626-1.877 1.3159-3.4289 2.6421-4.7921 1.5112-1.5729 3.1766-2.4747 5.2738-2.8836 1.0281-.1992 3.0739-.1258 4.0917.1573Zm-13.4366 6.6061c-.5963 2.0867-.5963 4.2259 0 6.3126l.2364.8179-.6476.6501-.6374.6397-.2262-.6082c-.514-1.4051-.8224-3.1353-.8224-4.6558 0-1.5205.3084-3.2506.8224-4.6558l.2262-.6081.6374.6396.6476.6501-.2364.8179Zm23.5937-.8808c.3598 1.143.6271 2.8522.6271 4.0476 0 1.4995-.3701 3.5023-.9047 4.8445l-.1542.409-.6374-.6502-.6374-.6396.2365-.8179c.5962-2.0867.5962-4.2259 0-6.3126l-.2365-.8179.6271-.6291c.4318-.4404.6477-.5977.6991-.5034.0411.0734.2159.5558.3804 1.0696ZM15.7104 32.989c.843 1.4051 2.0664 2.6844 3.5467 3.6805l.6991.4824-.586.5977c-.586.5977-.586.5977-.8533.4299-1.3159-.8494-3.0533-2.5481-3.8346-3.7435l-.4832-.734.586-.6082c.3187-.325.586-.5977.5963-.5977.0103 0 .1542.2202.329.4929Zm20.8179 1.122c-.8532 1.3841-2.5495 3.1143-3.8963 3.9741l-.4215.2622-.5859-.5977-.5963-.6082.4009-.2412c1.3982-.8703 2.8272-2.2859 3.7524-3.754l.4215-.6606.5963.5977.5859.5977-.257.43Zm-12.5319 4.3516c1.5318.2202 3.0739.1049 4.5954-.346l.8019-.2412.6271.6501.6374.6502-.401.1573c-1.3261.5452-3.2794.9227-4.7598.9227-1.429 0-3.2178-.3355-4.5645-.8388l-.5963-.2307.6271-.6502.6374-.6606.8019.2412c.442.1258 1.1617.2831 1.5934.346Zm-13.4571 2.8417.6168.6292-1.0589 1.08-1.0486 1.0696V41.4721l.3804-.3985c.2056-.2202.4112-.3984.442-.3984.031 0 .329.2831.6683.6291Zm31.0162-.2412.3906.388V44.0831l-1.0486-1.0696-1.0588-1.08.6168-.6292c.3392-.346.6374-.6291.6579-.6291.0309 0 .2262.1782.4421.3879Z"
                  />
                </svg>
                <span className="font-semibold text-3xl text-black">
                  문화재
                </span>
              </div>
              <span className="font-semibold text-base text-black">
                우리 나라의 자랑스러운{" "}
                <span className="text-[#F09AFF]">유산</span>들을 살펴보세요{" "}
              </span>
            </div>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="flex flex-row items-center text-black">
          <CheckIcon className="size-5" />
          <span className="">모든 행사</span>
        </div>
      </div>
      {/* 하단 부분 */}
      <div className="flex flex-row gap-11 mt-8">
        {/* 날짜 조회 */}
        <div className="flex flex-col justify-center">
          <button
            onClick={() => {
              console.log(festivalItems);
              // console.log(selectedMonth);
              // console.log(typeof selectedMonth);
            }}
            className="w-11 ml-2"
          >
            <ChevronUpIcon className="size-11 text-black" />
          </button>
          <span className="text-black text-xl">2025.01</span>
          <button className="w-11 ml-2">
            <ChevronDownIcon className="size-11 text-black" />
          </button>
        </div>
        {/* 행사 카드 */}
        <div className="flex felx-row gap-7">
          {festivalItems.length === 1 ? (
            <div></div>
          ) : (
            festivalItems.map((item, index) => {
              return (
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
                      alt={""}
                      layout="fill" // 부모 컨테이너를 채우도록 설정
                      objectFit="cover"
                      objectPosition="center top" // 상단 중심 정렬
                    />
                    {/* 1. layout="fill": Next.js <Image> 컴포넌트가 부모 컨테이너를 채우도록 설정합니다.
                2. objectFit="cover": 이미지를 비율을 유지하며 컨테이너를 꽉 채웁니다.
                3. objectPosition="top center": 이미지의 상단 중심을 기준으로 잘립니다. */}
                  </div>

                  {/* 유형, 이름, 주소를 세로로 정렬하기 위해 flex flex-col 사용 */}
                  <div className="flex flex-col justify-center gap-3 mt-3 ml-2">
                    <span className="text-black text-base font-bold">
                      {item.subTitle}
                    </span>
                    <div className="flex flex-row items-center">
                      <span className="text-black text-xs font-bold">
                        {item.eDate}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="main ">
      <Navigation />
      {/* 문화재 리스트 영역 */}
      <div className="mt-11 mx-6">
        <HeritageList />
      </div>
      {/* 문화재 행사 */}
      <div className=" mx-6">
        <CultureFestival />
      </div>
    </div>
  );
}
