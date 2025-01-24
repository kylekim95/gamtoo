import React from 'react';

export default function Detail() {
	const items = ["항목 1", "항목 2", "항목 3", "항목 4", "항목 5", "항목 6", "항목 7"];
    return (
        <div>
            <div className="relative">
    {/* 이미지 */}
    <img
        src="https://cdn.pixabay.com/photo/2015/12/16/03/45/korea-1095361_1280.jpg"
        alt="CultureImage"
        className="bg-slate-300 w-full h-96 object-cover"
    />

    {/* 이미지 위 텍스트 */}
    <h1 className="absolute top-[46%] left-[10.5%] text-white text-3xl font-semibold">국보</h1>
    <h1 className="absolute top-[60%] left-[10%] text-white text-5xl font-bold">경복궁 근정전 (景福宮 勤政殿)</h1>
    <h1 className="absolute top-[75%] left-[12%] text-white text-xl font-bold">Geunjeongjeon Hall of Gyeongbokgung Palace</h1>

    {/* SVG 아이콘 배치 */}
    <svg
        className="absolute top-[75.8%] left-[10.5%]" // 위치 조정
        width="16"
        height="21"
        viewBox="0 0 22 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4247 26.604C10.4624 26.6264 10.4921 26.6437 10.5131 26.6558L10.548 26.6757C10.8266 26.8323 11.1722 26.8311 11.4511 26.6762L11.4869 26.6558C11.5079 26.6437 11.5376 26.6264 11.5753 26.604C11.6508 26.5592 11.7587 26.4939 11.8944 26.4084C12.1656 26.2374 12.5484 25.9853 13.0058 25.6545C13.9189 24.9941 15.1372 24.0143 16.3582 22.7344C18.7883 20.187 21.3125 16.3597 21.3125 11.4375C21.3125 5.60645 16.6954 0.879456 11 0.879456C5.30456 0.879456 0.6875 5.60645 0.6875 11.4375C0.6875 16.3597 3.21165 20.187 5.64182 22.7344C6.86282 24.0143 8.08114 24.9941 8.99424 25.6545C9.45156 25.9853 9.83442 26.2374 10.1056 26.4084C10.2413 26.4939 10.3492 26.5592 10.4247 26.604ZM11 15.2768C13.0711 15.2768 14.75 13.5579 14.75 11.4375C14.75 9.31711 13.0711 7.59821 11 7.59821C8.92893 7.59821 7.25 9.31711 7.25 11.4375C7.25 13.5579 8.92893 15.2768 11 15.2768Z"
            fill="white"
        />
    </svg>
</div>


            <div className="relative w-full flex">
                {/* 왼쪽 콘텐츠 */}
                <div className="w-2/3 bg-white border-2 border-solid border-black p-4 h-[500px] mt-[4.5vh] mr-16 ml-20">
                    <h1 className="text-black text-xl font-semibold">ABOUT</h1>
                    <h1 className="text-black text-4xl font-semibold">국가유산 설명</h1> <hr/>
                    <p className="text-black text-xl font-medium">남한강의 아름다운 경관과 잘 어우러져 있는 통일신라시대의 석탑으로, 당시에 세워진 석탑 중 가장 규모가 크며, 우리나라의 중앙부에 위치한다고 해서 중앙탑(中央塔)이라고도 부르는 이 탑은 2단의 기단(基壇) 위에 7층의 탑신(塔身)을 올린 모습이다.</p>
										<p className="text-black text-xl font-medium">높은 탑신을 받치기 위해 넓게 시작되는 기단은 각 면마다 여러 개의 기둥 모양을 새겨 놓았고, 탑신부의 각 층 몸돌 역시 모서리마다 기둥 모양의 조각을 두었다. 몸돌을 덮고 있는 지붕돌은 네 귀퉁이 끝이 경쾌하게 치켜올려 있어 자칫 무겁게 보일 수 있는 탑에 활기를 주고 있으며, 밑면에는 5단씩의 받침을 새겨 놓았다. 탑 정상의 머리장식은 보통 하나의 받침돌 위에 머리장식이 얹어지는 신라 석탑의 전형적인 양식에서 벗어나, 이중으로 포개어진 똑같은 모양의 받침돌이 머리장식을 받쳐주고 있다.기단에서의 기둥조각 배치, 탑신의 몸돌과 지붕돌의 짜임수법으로 보아 통일신라 후기인 8세기 후반에 세웠을 것으로 추측된다. 1917년 탑을 보수할 때 6층 몸돌과 기단 밑에서 사리장치와 유물이 발견되었는데, 특히 6층 몸돌에서 발견된 거울이 고려시대의 것으로 밝혀져 탑 조성 이후 고려시대에 와서 2차 봉안이 있었던 것으로 보인다.전체적으로 규모가 커서 웅장하기는 하나 너비에 비해 지나치게 높은 듯 하여 안정감은 덜하며, 세부수법이 약화되고 있어, 일제당시 보수하면서 일부 변형되었다는 논란이 있다.</p>
							  </div>

                {/* 오른쪽 콘텐츠 */}
                <div className="w-1/3 bg-white border-2 border-solid border-black p-4 h-[500px] mt-[4.5vh] mr-20">
                    <h1 className="text-black text-xl font-semibold">INFORMATION</h1>
                    <h1 className="text-black text-4xl font-semibold">국가유산 정보</h1> <hr/>

                    {/* 세로로 배치되는 항목들 */}
                    <div className="w-full flex flex-row mt-9 space-x-28 ml-7">
    {/* 첫 번째 items */}
    <div className="flex flex-col space-y-6">
        {items.map((item, index) => (
            <div key={index} className="text-black text-xl">
                {item}
            </div>
        ))}
    </div>

    {/* 두 번째 items */}
    <div className="flex flex-col space-y-6">
        {items.map((item, index) => (
            <div key={index} className="text-black text-xl">
                {item}
            </div>
        ))}
    </div>
</div>

											
                </div>
            </div>


          {/* 국가유산 위치 */}
					<div className="w-full border-2 border-solid border-black p-6 mt-6 overflow-x-auto">
					<h1 className="text-black text-xl font-semibold ml-20">INFORMATION</h1>			
    <h1 className="text-black text-4xl font-semibold mb-4 ml-20">국가유산 위치</h1>
	  {/* 위치 내용 */}
    <div className="w-[89vw] h-80 ml-[4%] bg-gray-200 border-2 border-solid border-black flex items-center justify-center max-w-full">
        <p className="text-black text-xl font-medium">여기에 지도가 들어갑니다.</p>
    </div>
</div>
<div className="relative w-full flex">
    {/* 왼쪽 콘텐츠 */}
    <div className="w-2/3 bg-white border-2 border-solid border-black p-4 h-[450px] mt-[4.5vh] mr-16 ml-20">
        <h1 className="text-black text-xl font-semibold">COMMENTS</h1>
        <h1 className="text-black text-4xl font-semibold">댓글</h1>
        <hr />
        <p className="text-black text-xl font-medium">여기에 댓글이 표시됩니다.</p>
    </div>

    {/* 오른쪽 콘텐츠 */}
    <div className="w-1/3 bg-white border-2 border-solid border-black p-4 h-[430px] mt-[4.5vh] mr-20">
        <h1 className="text-black text-xl font-semibold">VIDEO</h1>
        <h1 className="text-black text-4xl font-semibold">관련 영상보기</h1> 
        <hr />
        <p className="text-black text-xl font-medium">여기에 관련 영상이 표시됩니다.</p>
    </div>
</div>
<div className="w-full border-2 border-solid border-black p-6 mt-6 overflow-x-auto h-[60vh]">
    <h1 className="text-black text-xl font-semibold ml-20">SEE MORE</h1>            
    <h1 className="text-black text-4xl font-semibold mb-4 ml-20">이미지 더보기</h1> 
    {/* 이미지 더보기 콘텐츠 */}
    <div className="w-[89vw] h-80 ml-[4%] bg-gray-200 border-2 border-solid border-black flex items-center justify-center max-w-full">
        <p className="text-black text-xl font-medium">여기에 이미지 갤러리가 들어갑니다.</p>
    </div>
</div>
        </div>
    );
}
