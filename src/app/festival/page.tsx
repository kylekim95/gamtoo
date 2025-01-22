"use client"
import {parseStringPromise} from "xml2js";
import React from "react";

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
  const [festivalItem, setFestivalItem] = React.useState<Item[]>([{
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
  }])
  React.useEffect(() => {
    testData();
  })
  async function testData() {
    const data = await fetch('https://www.cha.go.kr/cha/openapi/selectEventListOpenapi.do?searchYear=2024&searchMonth=6');
    const text = await data.text()
    const result = await parseStringPromise(text);
    const items = result.result.item.map((e: Item) => {
      return {
        seqNo: e.seqNo,
        siteCode: e.siteCode,
        subTitle: e.subTitle,
        subContent: e.subContent,
        sDate: e.sDate,
        eDate: e.eDate,
        groupName: e.groupName,
        contact: e.contact,
        subDesc: e.subDesc,
        subPath: e.subPath,
        subDesc_2: e.subDesc_2,
        subDesc_3: e.subDesc_3,
        mainImageTemp: e.mainImageTemp,
        sido: e.sido,
        gugun: e.gugun,
        subDate: e.subDate
      }
    });
    setFestivalItem(items.splice(0, 50))
  }
  return (
    <div>
      <h1>Festival List</h1>
      
    </div>
  );
};


export default FestivalPage;
