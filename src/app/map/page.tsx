"use client";
import BasicMap from "@/app/map/kakaoMap";
import axios from "axios";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import MultiRange from "@/app/map/rangeSlider";
import SelectBox from "./slelctBox";
import { SelectProps } from "../../../types/Map";

const selectList:SelectProps[] = [
  {
    title:"국보",
    name: "ccbaKdcd",
    value: "11",
  },
  {
    title:"보물",
    name: "ccbaKdcd",
    value: "12",
  },
  {
    title:"사적",
    name: "ccbaKdcd",
    value: "13",
  },
  {
    title:"사적 및 명승",
    name: "ccbaKdcd",
    value: "14",
  },
  {
    title:"명승",
    name: "ccbaKdcd",
    value: "15",
  },
  {
    title:"천연기념물",
    name: "ccbaKdcd",
    value: "16",
  },
  {
    title:"국가무형유산",
    name: "ccbaKdcd",
    value: "17",
  },
  {
    title:"국가민속문화유산",
    name: "ccbaKdcd",
    value: "18",
  },
  {
    title:"시도유형문화유산",
    name: "ccbaKdcd",
    value: "21",
  },

]
// import historyIcon from "@/styles/history-icon.svg";
const AccordionItem = ({ header, ...rest }: any) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        <div className="font-bold text-neutral-900 text-lg">{header}</div>
        <div  className={`ml-auto py-2 transition-transform duration-200  ease-out  ${
            isEnter && "rotate-180"
          }`}>
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
  const [filters, setFilters] = useState<string[]>([]);
  const [maxYear, setMaxyear] = useState<string>();
  const [minYear, setMinYear] = useState<string>();
  const [region, setRegion] = useState<string>();
  const [item, setItem] = useState([]);
  const getData = async () => {
    const data = await axios.get(
      `http://www.khs.go.kr/cha/SearchKindOpenapiList.do?pageUnit=10000&ccbaCncl=N&ccbaKdcd=13`
    );
    var parseString = require("xml2js").parseString;
    parseString(data.data, function (err: any, result: any) {
      setItem(result.result.item);
      console.log(result.result.item);
    });
  };
  const handleRangeChange = (minValue: number, maxValue: number) => {
    console.log("Selected Range:", { minValue, maxValue });
  };
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const data = e.target.value;
    console.log(e.target.name);
  };

  const filterButtonHandler = () => {};
  useEffect(() => {
    getData();
  }, []);
  return (
    <section className="items-center  justify-center gap-4 ">
      <BasicMap data={item}>
        <div className="absolute left-10 max-w-96 z-50 top-36 ">
          <div className=" bg-white flex flex-col gap-3 p-8 w-full rounded-3xl shadow-lg">
            <Accordion transition>
              <AccordionItem header={"카테고리별 검색"}>
                <div>
                  <div className="w-full flex gap-1 py-2 border-b-1">
                    <span>
                      <Image alt="문화재 아이콘" width={30} height={23} src="/icons/map-history-icon.svg" />
                    </span>
                    <h4 className="text-xl text-neutral-900 font-bold ">시대 </h4>
                  </div>
                  <MultiRange
                    fixedMinPrice={1200}
                    fixedMaxPrice={2025}
                    min={1200}
                    max={2025}
                    handleValueChange={handleRangeChange}
                  />
                </div>
                <div>
                  <div className="w-full flex gap-2 py-2   border-b">
                    <span>
                    <Image alt="문화재 아이콘" width={23} height={30} src="/icons/map_map_icon.svg" />                    </span>
                    <h4 className="text-xl font-bold ">지역 </h4>
                  </div>
                  <div className="py-4">
                    <div className="relative w-full lg:max-w-sm">
                      <select
                        onChange={(e) => handleChange(e)}
                        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                      >
                        <option value={11}>지역선택</option>
                        <option>서울</option>
                        <option>대전</option>
                        <option>대구</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-full flex gap-2 py-2 border-b">
                    <h4 className="text-xl font-bold ">지정 종목별 </h4>
                  </div>
                  <div className="flex py-2 items-center justify-between flex-wrap gap-1">
                    {selectList.map((item)=>{
                      return(
                      <SelectBox key={`${item.name}-${item.value}`} title={item.title} handleChange={handleChange} value={item.value} name={item.name}/>
                      )
                    })}
                  
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-4">
              <input
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
