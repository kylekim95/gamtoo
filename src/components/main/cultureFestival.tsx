import { useState, useEffect } from "react";
import { parseStringPromise } from "xml2js";
import { parseISO } from "date-fns";
import dayjs from "dayjs";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
export default function CultureFestival() {
  interface Item {
    seqNo: string;
    subTitle: string;
    eDate: string;
    imageUrl: string;
  }
  const [filteredData, setFilteredData] = useState<Item[]>([]);
  const [festivalItems, setFestivalItems] = useState<Item[]>([]);
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
        subTitle: result.result.item[i].subTitle[0],
        eDate: `${result.result.item[i].eDate[0].slice(
          0,
          4
        )}.${result.result.item[i].eDate[0].slice(4, 6)}.${result.result.item[
          i
        ].eDate[0].slice(6, 8)}`,
        imageUrl: `/festivalPosts/${i}.jpg`,
      });
    }

    setFestivalItems(items);
    alert("Data fetch success");
  }
  useEffect(() => {
    testData();
  }, []);

  // 날짜 변경
  const currentDate = dayjs();
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handlePreviousMonth = () => {
    const newDate = selectedDate.subtract(1, "month");
    setSelectedDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = selectedDate.add(1, "month");
    setSelectedDate(newDate);
  };

  useEffect(() => {
    const filteredData = festivalItems.filter((item) => {
      const itemDate = item.eDate.slice(0, 7);
      const formatDate = selectedDate.format("YYYY.MM");
      return formatDate === itemDate;
    });
    setFilteredData(filteredData);
  }, [selectedDate]);

  return (
    <>
      {/* 상단 부분 */}
      <div className="contentWrapper flex flex-row justify-between items-end border-b">
        {/* 왼쪽 */}
        <div className="flex flex-col pb-1">
          <div className="flex flex-col pb-1">
            <div className=" text-[#F09AFF]">CULTURAL HERITAGE EVENT</div>
            <div className="flex flex-row items-end gap-4">
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
                  문화재 행사
                </span>
              </div>
              <span className="font-semibold text-base text-stone-500">
                매 달 열리는 다양한 행사들!
                <span className="text-[#E7D406]"> 문화재 행사</span> 한번에 보기{" "}
              </span>
            </div>
          </div>
        </div>
        {/* 오른쪽 */}
        <div className="flex flex-row items-center gap-3 mr-5 text-black">
          <CheckIcon className="size-5" />
          <span className="">모든 행사</span>
        </div>
      </div>
      {/* 하단 부분 */}
      <div className="flex flex-row gap-11 mt-8 w-full h-[340px]">
        {/* 날짜 조회 */}
        <div className="flex flex-col justify-center items-center w-[10%]">
          <button onClick={handleNextMonth} className="w-11">
            <ChevronUpIcon className="size-11 text-black" />
          </button>
          <span className="text-black text-xl">
            {selectedDate.format("YYYY.MM")}
          </span>
          <button onClick={handlePreviousMonth} className="w-11">
            <ChevronDownIcon className="size-11 text-black" />
          </button>
        </div>
        {/* 행사 카드 */}
        <div className="w-[85%] h-[340px] overflow-x-auto">
          <div className="flex flex-row gap-4">
            {filteredData.map((item, index) => {
              return (
                <div
                  className="flex-shrink-0 flex flex-col w-[280px] h-[320px] rounded-md shadow-[5px_5px_5px_#ccc8c8]"
                  key={index}
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }}
                >
                  {/* flex-shrink-0 추가: className="flex-shrink-0"를 자식 요소 <div>에 추가하여 크기가 줄어들지 않도록 설정*/}
                  {/* 이미지가 차지하는 영역 */}
                  <div className="relative w-[280px] h-[230px] mb-1">
                    <Image
                      src={item.imageUrl}
                      alt=""
                      fill // 부모 컨테이너를 채우도록 설정
                      priority // LCP로 감지된 이미지에 우선순위 부여
                      sizes="280px" // 부모 컨테이너의 고정 너비와 동일하게 설정
                      style={{
                        objectFit: "cover",
                        objectPosition: "center top", // 상단 중심 정렬
                      }}
                    />
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
            })}
          </div>
        </div>
      </div>
    </>
  );
}
