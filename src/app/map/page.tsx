"use client";

import axios from "axios";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";

import { useMap } from "react-kakao-maps-sdk";
import { useRouter, useSearchParams } from "next/navigation";

import MultiRange from "@/app/map/components/rangeSlider";
import SelectBox from "@/app/map/components/slelctBox";
import BasicMap from "@/app/map/components/kakaoMap";
import { MapItem, SelectProps } from "../../../types/Map";

const selectList: SelectProps[] = [
  {
    title: "국보",
    name: "ccbaKdcd",
    value: "11",
  },
  {
    title: "보물",
    name: "ccbaKdcd",
    value: "12",
  },
  {
    title: "사적",
    name: "ccbaKdcd",
    value: "13",
  },
  {
    title: "사적 및 명승",
    name: "ccbaKdcd",
    value: "14",
  },
  {
    title: "명승",
    name: "ccbaKdcd",
    value: "15",
  },
  {
    title: "천연기념물",
    name: "ccbaKdcd",
    value: "16",
  },
  {
    title: "국가무형유산",
    name: "ccbaKdcd",
    value: "17",
  },
  {
    title: "국가민속문화유산",
    name: "ccbaKdcd",
    value: "18",
  },
  {
    title: "시도유형문화유산",
    name: "ccbaKdcd",
    value: "21",
  },
  {
    title: "시도무형유산",
    name: "ccbaKdcd",
    value: "22",
  },
];
// import historyIcon from "@/styles/history-icon.svg";
const AccordionItem = ({ header, ...rest }: any) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className="font-bold text-neutral-900 text-lg">{header}</div>
        <div
          className={`ml-auto py-2 transition-transform duration-200  ease-out  ${
            isEnter && "rotate-180"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </>
    )}
    className=""
    buttonProps={{
      className: ({ isEnter }) => `flex w-full  text-left  ${isEnter}`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);
export default function MapPage() {
  const [filters, setFilters] = useState<
    Record<string, string | number | undefined>
  >({});
  const [item, setItem] = useState<MapItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const xmlToJsonFilterHandler = (data: any) => {
    const parseString = require("xml2js").parseString;

    parseString(
      data.data,
      { explicitArray: false },
      function (err: any, result: any) {
        if (result.result.totalCnt === "0") {
          alert("검색결과가 없습니다.");
          return;
        }

        // 좌표가 0인 항목 필터링
        const filteredItems = Array.isArray(result.result.item)
          ? result.result.item.filter(
              (item: any) =>
                item.latitude !== "0" &&
                item.longitude !== "0" &&
                item.latitude !== undefined &&
                item.longitude !== undefined
            )
          : result.result.item;

        console.log(filteredItems);
        setItem(filteredItems); // 상태 업데이트
      }
    );
  };

  const getData = async (params: string) => {
    const data = await axios.get(
      `http://www.khs.go.kr/cha/SearchKindOpenapiList.do?pageUnit=10000&${
        params ? params : "&ccbaCncl=N&ccbaKdcd=13"
      }`
    );
    xmlToJsonFilterHandler(data);
  };

  const handleChange = (
    e:
      | ChangeEvent<HTMLSelectElement | HTMLInputElement>
      | { minValue: number; maxValue: number }
  ) => {
    // 슬라이더에서 호출한 경우
    if ("minValue" in e && "maxValue" in e) {
      const { minValue, maxValue } = e;
      setFilters((prev) => ({
        ...prev,
        stCcbaAsdt: minValue,
        enCcbaAsdt: maxValue,
      }));
    }
    // 드롭다운이나 다른 입력 이벤트 처리
    else if ("target" in e) {
      const { name, value } = e.target;
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const filterButtonHandler = async () => {
    const cleanedFilters: Record<string, string> = Object.fromEntries(
      Object.entries(filters)
        .filter(([key, value]) => {
          if (!isOpen) {
            return key === "ccbaMnm1" && value !== undefined;
          }
          return value !== undefined;
        })
        .map(([key, value]) => [key, String(value)])
    );
    const params = new URLSearchParams(cleanedFilters);
    router.push(`?${params}`);
  };

  useEffect(() => {
    const params = searchParams.toString();
    getData(params);
  }, [searchParams]);

  return (
    <section className="items-center  justify-center gap-4 ">
      <BasicMap data={item}>
        <div
          className={`absolute ${
            isNavOpen ? "-left-[383px]" : "left-10"
          } transition-all  max-w-96 z-50 top-36`}
        >
          <div className=" absolute w-10 h-10 flex items-center justify-center bg-white -right-10  rounded-r-lg top-10">
            <button onClick={() => setIsNavOpen(!isNavOpen)}>
              <div className={`${!isNavOpen ? 'rotate-180': null}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
              </div>
            </button>
          </div>
          <div className=" bg-white flex flex-col gap-3 p-8 w-full rounded-3xl shadow-lg">
            <Accordion
              onStateChange={({ current }) => {
                setIsOpen(current.isEnter);
              }}
              transition
              initialEntered
            >
              <AccordionItem header={"카테고리별 검색"}>
                <div>
                  <div className="w-full flex gap-1 py-2 border-b-1">
                    <span>
                      <Image
                        alt="문화재 아이콘"
                        width={30}
                        height={23}
                        src="/icons/map-history-icon.svg"
                      />
                    </span>
                    <h4 className="text-xl text-neutral-900 font-bold ">
                      시대{" "}
                    </h4>
                  </div>
                  <MultiRange
                    fixedMinPrice={1000}
                    fixedMaxPrice={2025}
                    min={1000}
                    max={2025}
                    handleValueChange={(minValue, maxValue) =>
                      handleChange({ minValue, maxValue })
                    }
                  />
                </div>
                <div>
                  <div className="w-full flex gap-2 py-2   border-b">
                    <span>
                      <Image
                        alt="문화재 아이콘"
                        width={23}
                        height={30}
                        src="/icons/map_map_icon.svg"
                      />{" "}
                    </span>
                    <h4 className="text-xl font-bold ">지역 </h4>
                  </div>
                  <div className="py-4">
                    <div className="relative w-full lg:max-w-sm">
                      <select
                        name="ccbaCtcd"
                        onChange={(e) => handleChange(e)}
                        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                      >
                        <option value={""}>지역선택</option>
                        <option value={11}>서울</option>
                        <option value={25}>대전</option>
                        <option value={22}>대구</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-full flex gap-2 py-2 border-b">
                    <h4 className="text-xl font-bold ">지정 종목별 </h4>
                  </div>
                  <div className="flex py-2 items-center justify-between flex-wrap gap-1">
                    {selectList.map((item) => {
                      return (
                        <SelectBox
                          key={`${item.name}-${item.value}`}
                          title={item.title}
                          handleChange={handleChange}
                          value={item.value}
                          name={item.name}
                        />
                      );
                    })}
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-4">
              <input
                onChange={(e) => handleChange(e)}
                name="ccbaMnm1"
                className="border rounded-full h-12 p-2 px-5"
                placeholder="이름으로 검색"
                type="text"
              />
              <button
                onClick={() => filterButtonHandler()}
                className=" w-full h-10 bg-[#B23742] text-white rounded-xl"
              >
                검색
              </button>
            </div>
          </div>
        </div>
      </BasicMap>
    </section>
  );
}
