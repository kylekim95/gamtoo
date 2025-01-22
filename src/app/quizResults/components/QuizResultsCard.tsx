import React from 'react'

import Table from './Table'
const MaskSVG = (color: string, width:number, height:number)=>{
  return <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
  width={width} height={height} viewBox="0 0 512.000000 512.000000"
  preserveAspectRatio="xMidYMid meet">
 
 <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 fill={color} stroke="none">
 <path d="M1431 5104 c-118 -31 -229 -118 -282 -219 -26 -48 -352 -963 -383
 -1075 -38 -133 -46 -245 -46 -632 l0 -378 -38 0 c-92 0 -203 -62 -241 -134
 -11 -19 -22 -26 -44 -26 -89 0 -200 -82 -225 -166 -9 -31 -12 -289 -12 -1058
 l0 -1016 80 0 80 0 0 1015 0 1016 25 25 c36 36 55 28 72 -30 30 -101 150 -186
 265 -186 l38 0 0 -228 c0 -253 8 -302 62 -404 42 -79 137 -167 221 -203 66
 -29 67 -30 83 -85 9 -30 36 -107 61 -170 115 -293 285 -554 485 -746 739 -709
 1752 -457 2261 562 25 49 47 98 49 107 2 14 -14 25 -66 47 -38 16 -70 29 -72
 27 -1 -1 -31 -60 -67 -132 -239 -472 -595 -767 -1011 -840 -258 -45 -547 21
 -781 178 -417 280 -708 803 -801 1442 -25 169 -25 564 -1 725 25 159 63 326
 103 451 19 58 34 110 34 115 0 5 -32 21 -71 36 l-71 26 -14 -35 c-46 -109
 -121 -426 -144 -603 -30 -237 -22 -580 19 -820 10 -58 17 -107 15 -109 -8 -9
 -82 79 -105 125 l-24 49 0 610 c0 649 2 683 51 879 89 359 280 689 538 933
 243 230 499 368 811 435 144 31 407 31 551 0 181 -39 368 -113 502 -198 29
 -19 54 -34 56 -34 2 0 23 30 47 66 35 54 40 67 28 75 -8 5 -54 33 -103 61
 l-88 52 5 56 c9 101 69 189 162 238 69 37 188 38 255 3 58 -30 107 -76 131
 -124 11 -21 97 -255 190 -520 148 -419 208 -610 209 -667 0 -8 -26 37 -58 100
 -71 141 -144 254 -249 385 -85 105 -258 279 -272 273 -5 -2 -29 -28 -54 -58
 l-46 -55 118 -120 c64 -66 138 -147 163 -180 224 -297 361 -642 398 -1010 7
 -72 10 -301 8 -655 l-3 -545 -34 -63 c-29 -53 -87 -120 -96 -110 -1 2 6 51 16
 109 138 808 -94 1666 -589 2182 -384 398 -886 540 -1357 383 -204 -69 -365
 -169 -539 -336 -118 -114 -244 -267 -230 -279 29 -25 113 -81 120 -80 5 0 45
 46 90 102 291 368 706 548 1109 482 345 -56 654 -275 891 -630 362 -545 478
 -1322 300 -2020 -14 -55 -32 -119 -40 -142 -9 -25 -11 -45 -6 -48 16 -10 122
 -45 135 -45 7 0 20 26 29 58 16 57 16 57 82 86 134 59 247 201 274 345 6 29
 10 152 10 272 l0 219 38 0 c115 0 235 85 265 186 17 58 36 66 72 30 l25 -25 0
 -1016 0 -1015 80 0 80 0 0 1016 c0 757 -3 1027 -12 1056 -26 89 -132 168 -223
 168 -24 0 -35 6 -46 26 -38 72 -149 134 -241 134 l-38 0 0 378 c0 387 -8 499
 -46 632 -31 112 -357 1027 -383 1075 -54 103 -165 188 -286 220 -246 64 -503
 -98 -555 -351 -10 -45 -15 -54 -28 -49 -49 19 -194 57 -275 72 -126 23 -408
 24 -532 1 -79 -15 -228 -54 -277 -73 -13 -5 -18 4 -28 49 -53 254 -312 417
 -559 350z m239 -174 c100 -50 162 -143 164 -243 l1 -59 -94 -54 c-144 -83
 -244 -159 -373 -283 -183 -176 -314 -352 -425 -570 -29 -57 -53 -100 -53 -95
 0 5 9 47 19 94 20 88 345 1020 380 1087 32 63 101 118 181 144 44 15 152 4
 200 -21z m-950 -2411 l0 -122 -46 6 c-69 7 -109 51 -109 116 0 73 47 119 123
 120 l32 1 0 -121z m3804 82 c26 -27 31 -39 31 -81 0 -66 -40 -110 -109 -117
 l-46 -6 0 123 0 123 46 -6 c34 -3 55 -13 78 -36z"/>
 <path d="M2460 3984 c-227 -82 -293 -362 -125 -529 66 -66 125 -90 225 -89 72
 0 93 4 136 26 75 39 107 70 145 140 30 57 33 71 34 148 0 100 -24 159 -90 225
 -82 82 -222 116 -325 79z m163 -158 c103 -43 128 -177 48 -257 -112 -113 -296
 -12 -267 146 18 94 128 150 219 111z"/>
 <path d="M1250 3399 c-23 -44 -40 -82 -38 -84 8 -7 128 -65 136 -65 4 0 24 33
 44 74 41 83 44 75 -44 125 l-57 32 -41 -82z"/>
 <path d="M1856 3265 c-190 -48 -369 -218 -445 -421 -26 -68 -51 -188 -51 -245
 l0 -39 80 0 80 0 0 38 c0 20 7 68 15 106 54 253 269 435 489 412 98 -10 168
 -51 270 -157 80 -84 87 -94 81 -123 -14 -68 -10 -65 -73 -50 -112 27 -236 13
 -332 -36 -19 -10 -91 -57 -159 -105 -146 -102 -242 -151 -317 -161 l-54 -6 0
 -80 0 -81 60 7 c121 14 228 64 401 189 57 41 124 85 149 97 53 27 154 37 220
 21 33 -7 46 -7 52 2 14 22 9 -7 -77 -435 -64 -318 -85 -442 -85 -502 l0 -79
 -92 -91 c-61 -59 -119 -106 -168 -133 -124 -70 -280 -113 -407 -113 l-53 0 0
 -82 0 -81 98 6 c245 16 470 116 645 287 l71 69 73 -67 c102 -93 153 -124 212
 -130 87 -8 118 8 253 130 l74 67 70 -67 c183 -180 447 -292 685 -292 l59 0 0
 78 0 79 -92 6 c-217 15 -407 104 -557 262 l-71 75 0 78 c0 57 -22 187 -85 500
 -86 428 -91 457 -77 435 6 -9 19 -9 52 -2 66 16 167 6 220 -21 25 -12 92 -56
 149 -97 173 -125 280 -175 401 -189 l60 -7 0 81 0 80 -54 6 c-75 10 -171 59
 -317 161 -143 100 -173 117 -254 140 -64 19 -214 17 -267 -4 -29 -11 -30 -11
 -43 55 -6 29 1 39 81 123 102 106 172 147 270 157 221 23 435 -158 489 -414 8
 -40 15 -89 15 -108 l0 -34 81 0 82 0 -6 73 c-27 307 -235 570 -503 633 -132
 31 -293 2 -413 -75 -28 -18 -75 -59 -105 -92 l-55 -59 -121 0 -121 0 -49 54
 c-106 115 -232 175 -385 182 -59 2 -110 -1 -149 -11z m831 -946 c72 -358 112
 -577 113 -620 l0 -65 -106 -95 c-59 -52 -117 -95 -130 -97 -19 -3 -50 19 -134
 95 l-110 98 0 60 c0 50 206 1122 225 1173 17 46 37 -31 142 -549z"/>
 <path d="M1660 2064 c-227 -82 -293 -362 -125 -529 66 -66 125 -90 225 -89 72
 0 93 4 136 26 75 39 107 70 145 140 30 57 33 71 34 148 0 100 -24 159 -90 225
 -82 82 -222 116 -325 79z m163 -158 c103 -43 128 -177 48 -257 -65 -65 -157
 -65 -222 0 -124 123 13 325 174 257z"/>
 <path d="M3260 2064 c-227 -82 -293 -362 -125 -529 66 -66 125 -90 225 -89 72
 0 93 4 136 26 75 39 107 70 145 140 30 57 33 71 34 148 0 100 -24 159 -90 225
 -82 82 -222 116 -325 79z m163 -158 c103 -43 128 -177 48 -257 -65 -65 -157
 -65 -222 0 -124 123 13 325 174 257z"/>
 <path d="M2025 1175 c-29 -28 -31 -52 -9 -126 90 -306 432 -483 726 -376 96
 35 156 73 224 143 65 67 113 148 138 233 22 74 20 98 -9 126 l-24 25 -511 0
 -511 0 -24 -25z m888 -166 c-40 -69 -104 -129 -181 -166 -72 -36 -81 -38 -172
 -38 -91 0 -100 2 -172 38 -77 37 -141 97 -181 166 l-18 31 371 0 371 0 -18
 -31z"/>
 <path d="M160 160 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
 <path d="M4800 160 l0 -80 80 0 80 0 0 80 0 80 -80 0 -80 0 0 -80z"/>
 </g>
 </svg> 
}

type DataType = {
  id: string,
  problem: string,
  answer: string,
  userSelect: string,
  result: React.JSX.Element
}

export default function QuizResultsCard() {
  const dummyDesc = ["id", "문제", "정답", "선택된 답", "결과"];
  const dummyData : DataType[] = [
    {id:"1", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"2", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"3", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"4", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"5", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"6", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"7", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"8", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"9", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"10", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"11", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"12", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"13", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"14", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"15", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"16", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"17", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"18", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"19", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
    {id:"20", problem:"이것은 문제입니다. 이것은 문제입니까?", answer:"정답", userSelect:"유저 답", result:MaskSVG("#FF2222", 25, 25)},
  ];

  return (
    <div className='pb-5'>
      <div className='flex flex-col items-center bg-white w-full min-w-[500px] max-w-[600px] aspect-[1/1.1] px-5 py-3 rounded-lg'>
        <span className='text-black self-start text-xs mb-1'>정답을 클릭해서 해당 문화재의 상세 정보를 확인하세요!</span>
        <Table<DataType> data={dummyData} spacing={[1,6,2,2,2]} desc={dummyDesc} />
        <div className='w-full h-8 border-b'></div>
        <div className='self-end mt-[-50px] -rotate-12 rounded-full overflow-hidden'>{ MaskSVG("#FF2222", 100, 100) }</div>
      </div>
    </div>
  )
}
