"use client"
import {parseStringPromise} from "xml2js";
import React from "react";
import festivalImage from "../../../public/festivalPage_festivalPoster.jpg"
import Image from "next/image";
import { parseISO, format } from 'date-fns'
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
  groupName?: string;
  contact?: string;
  subDesc: string;
  subPath?: string;
  subDesc_2: string;
  subDesc_3: string;
  mainImageTemp?: string;
  sido: string;
  gugun: string;
  subDate: string;
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
    subDate: ""
  }]);
  const defaultClassNames = getDefaultClassNames();
  const partyDate = parseISO("2024-06-10");
  console.log("partyDate", partyDate)

  React.useEffect(() => {
    testData();
    console.log(festivalItems)
  },[]);


  async function testData() {
    const data = await fetch('https://www.cha.go.kr/cha/openapi/selectEventListOpenapi.do?searchYear=2024&searchMonth=6');
    const text = await data.text()
    const result = await parseStringPromise(text);
    const items = result.result.item.map((e: Item) => {
      return {
        seqNo: e.seqNo[0],
        siteCode: e.siteCode[0],
        subTitle: e.subTitle[0],
        subContent: e.subContent[0],
        sDate: e.sDate[0],
        eDate: e.eDate[0],
        groupName: e.groupName,
        contact: e.contact,
        subDesc: e.subDesc[0],
        subPath: e.subPath,
        subDesc_2: e.subDesc_2[0],
        subDesc_3: e.subDesc_3[0],
        mainImageTemp: e.mainImageTemp,
        sido: e.sido[0],
        gugun: e.gugun[0],
        subDate: e.subDate[0]
      }
    });
    setFestivalItems(items.splice(0, 50))
  }
  return (
    <div>
      <div className="bg-festivalBg pt-12 pb-12 mt-2">
        <div className="w-5/6 m-auto">
          <p className="text-black font-bold text-3xl ml-auto mb-4">인기 행사</p>
          <div className={"flex"}>
            <div className="w-1/6 m-auto ml-0">
              <Image className="rounded-lg" src={festivalImage} alt={""}/>
              <div className="absolute">
                <p className="relative -top-10 left-2 italic text-5xl ">1</p>
              </div>
              <p className="text-black mt-2 font-semibold text-2xl">{festivalItems[0].subTitle}</p>
              <p className="text-black">{festivalItems[0].subDesc_2}</p>
            </div>
            <div className="w-1/6 m-auto ml-0">
              <Image className="rounded-lg" src={festivalImage} alt={""}/>
              <div className="absolute">
                <p className="relative -top-10 left-2 italic text-5xl ">2</p>
              </div>
              <p className="text-black mt-2 font-semibold text-2xl">{festivalItems[0].subTitle}</p>
              <p className="text-black">{festivalItems[0].subDesc_2}</p>
            </div>
            <div className="w-1/6 m-auto ml-0">
              <Image className="rounded-lg" src={festivalImage} alt={""}/>
              <div className="absolute">
                <p className="relative -top-10 left-2 italic text-5xl ">3</p>
              </div>
              <p className="text-black mt-2 font-semibold text-2xl">{festivalItems[0].subTitle}</p>
              <p className="text-black">{festivalItems[0].subDesc_2}</p>
            </div>
            <div className="w-1/6 m-auto ml-0">
              <Image className="rounded-lg" src={festivalImage} alt={""}/>
              <div className="absolute">
                <p className="relative -top-10 left-2 italic text-5xl ">4</p>
              </div>
              <p className="text-black mt-2 font-semibold text-2xl">{festivalItems[0].subTitle}</p>
              <p className="text-black">{festivalItems[0].subDesc_2}</p>
            </div>
            <div className="w-1/6 m-auto ml-0">
              <Image className="rounded-lg" src={festivalImage} alt={""}/>
              <div className="absolute">
                <p className="relative -top-10 left-2 italic text-5xl ">5</p>
              </div>
              <p className="text-black mt-2 font-semibold text-2xl">{festivalItems[0].subTitle}</p>
              <p className="text-black">{festivalItems[0].subDesc_2}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex bg-black">
          <div>

          </div>
          <DayPicker  mode="single" locale={ko} month={partyDate} classNames={{
            today: `border-amber-500`, // Add a border to today's date
            selected: `bg-amber-500 border-amber-500 text-white`, // Highlight the selected day
            root: `${defaultClassNames.root} shadow-lg p-5`, // Add a shadow to the root element
            chevron: `${defaultClassNames.chevron} fill-amber-500`
          }} />
        </div>
      </div>
    </div>
  );
};


export default FestivalPage;
