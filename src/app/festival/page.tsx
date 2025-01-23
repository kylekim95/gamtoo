"use client"
import {parseStringPromise} from "xml2js";
import React from "react";
import { parseISO } from 'date-fns'
import { ko } from 'date-fns/locale'
import {DayPicker, getDefaultClassNames} from 'react-day-picker'
import 'react-day-picker/dist/style.css'

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


const FestivalPage = () => {
  const [festivalItems, setFestivalItems] = React.useState<Item[]>([{
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
    imageUrl: ""
  }]);
  const defaultClassNames = getDefaultClassNames();
  const partyDate = parseISO("2024-06-10");

  React.useEffect(() => {
    testData();
  },[]);


  async function testData() {
    const data = await fetch('https://www.cha.go.kr/cha/openapi/selectEventListOpenapi.do?searchYear=2024&searchMonth=6');
    const text = await data.text()
    const result = await parseStringPromise(text);
    const items = []
    for(let i = 0; i < 43; i++) {
      items.push({
            seqNo: result.result.item[i].seqNo[0],
            siteCode: result.result.item[i].siteCode[0],
            subTitle: result.result.item[i].subTitle[0],
            subContent: result.result.item[i].subContent[0],
            sDate: `${result.result.item[i].sDate[0].slice(0,4)}.${result.result.item[i].sDate[0].slice(4,6)}.${result.result.item[i].sDate[0].slice(6,8)}`,
            eDate: `${result.result.item[i].eDate[0].slice(0,4)}.${result.result.item[i].eDate[0].slice(4,6)}.${result.result.item[i].eDate[0].slice(6,8)}`,
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
            imageUrl: `/festivalPosts/${i}.jpg`
          }
        )
    }
    setFestivalItems(items);
  }
  return (
    <div>
      <div className="bg-festivalBg pt-12 pb-12 mt-2">
        <div className="w-5/6 m-auto">
          <p className="text-black font-bold text-3xl ml-auto mb-4">인기 행사</p>
          <div className="flex justify-between">
            {festivalItems.length === 1 ? (<div></div>): festivalItems.map((e,index) => {
              if(index < 5){
                return (
                  <div key={e.seqNo} className="w-1/6 ml-0">
                    <img className="rounded-lg h-4/6" src={e.imageUrl} alt={""}/>
                    <div className="absolute">
                      <p className="relative -top-10 left-2 italic text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{index+1}</p>
                    </div>
                    <p className="text-black mt-2 font-semibold text-2xl">{e.subTitle}</p>
                    <p className="text-black">{e.subDesc_2}</p>
                  </div>
                )
              } else{
                return true;
              }
            })}
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-5/6 m-auto flex mt-20 mb-20 rounded-3xl border-2 border-gray-500 shadow-lg">
          <div className="w-full bg-[#F6F6F6] rounded-tl-3xl rounded-bl-3xl pl-5">
            <div className="flex mt-6">
              <p className="text-black font-semibold text-xl leading-10">기간:</p>
              <button className="ml-4 p-2 pl-4 pr-4 bg-[#D9D9D9] text-black rounded-lg">월간</button>
              <button className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">주간
              </button>
              <button className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">일간
              </button>
            </div>
            <div className="flex mt-16">
              <p className="text-black font-semibold text-xl leading-10">비용:</p>
              <button className="ml-4 p-2 pl-4 pr-4 bg-[#D9D9D9] text-black rounded-lg">전체</button>
              <button className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">무료</button>
              <button className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">유료</button>
            </div>
            <div>
              <div className="flex mt-16">
                <p className="text-black font-semibold text-xl leading-10">주체 단체:</p>
                <button className="ml-4 p-2 pl-4 pr-4 bg-[#D9D9D9] text-black rounded-lg">전체</button>
                <button
                  className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">문화예술과
                </button>
                <button
                  className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">문화워드유봄
                </button>
                <button
                  className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">고대문화재연구원
                </button>
                <button
                  className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">실상사
                </button>
                <button
                  className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">오작당
                </button>
              </div>
              <div className="flex mt-2 ml-20">
                <button
                  className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">문화유산활용연구소
                </button>
                <button
                  className="ml-4 p-2 pl-4 pr-4 rounded-lg bg-[#ffffff] border-solid border border-gray-500 text-black">김달진미술자료박물관
                </button>
              </div>
            </div>


          </div>
          <DayPicker className="ml-auto min-w-max rounded-br-3xl rounded-tr-3xl" mode="single" locale={ko}
                     month={partyDate} classNames={{
            today: `border-amber-500`, // Add a border to today's date
            selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
            root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
            chevron: `${defaultClassNames.chevron} fill-amber-500`,
          }}/>
        </div>
      </div>
      <div className="w-5/6 m-auto mb-20">
        <p className="m-auto font-bold mb-4 text-4xl text-black text-center">검색된 문화행사</p>
        <div className="grid grid-cols-5 gap-2 gap-y-12">
          {festivalItems.length === 1? (<div></div>):festivalItems.map((e) => {
            return (
              <div key={e.seqNo} className="rounded-lg p-3 border shadow-lg">
                <img className="rounded-lg h-3/5" src={e.imageUrl} alt={""}/>
                <div className="bg-[#FA870E] pt-2 pb-2 rounded-lg mt-2 mb-2">
                  <p className="text-center font-semibold text-xl">{e.sido}</p>
                </div>
                <p
                  className="text-black font-semibold text-xl  h-[28px] truncate">[{e.groupName == "" ? "등록된 단체 없음" : e.groupName}]</p>
                <p className="text-black font-semibold text-xl h-[56px] truncate ">{e.subTitle}</p>
                <p className="text-gray-500 text-sm">{e.sDate}~{e.eDate}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};


export default FestivalPage;
