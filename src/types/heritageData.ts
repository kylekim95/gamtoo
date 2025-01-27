export interface heritage {
  name: string;
  type: string;
  designation: string;
  designationYear: number;
  region: string;
  era: string;
  imageUrl: string;
  address?: string;
}

const heritageData: heritage[] = [
  {
    name: "경복궁",
    type: "궁궐",
    designation: "사적",
    designationYear: 1963,
    region: "서울",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/2021062917265903.jpg",
    address: "서울특별시 종로구 사직로 161",
  },
  {
    name: "석굴암",
    type: "불교 유적",
    designation: "국보",
    designationYear: 1962,
    region: "경상북도 경주",
    era: "통일신라",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/2021042208550900.jpg",
    address: "경상북도 경주시 석굴암로 361",
  },
  {
    name: "첨성대",
    type: "천문 관측대",
    designation: "국보",
    designationYear: 1962,
    region: "경상북도 경주",
    era: "신라",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/2021032415274702.JPG",
    address: "경상북도 경주시 조선로 162",
  },
  {
    name: "종묘",
    type: "제례 시설",
    designation: "세계유산",
    designationYear: 1995,
    region: "서울",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/2021063016361203.jpg",
    address: "서울특별시 종로구 종로 155",
  },
  {
    name: "해인사 장경판전",
    type: "사찰",
    designation: "국보",
    designationYear: 1995,
    region: "경상남도 합천",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/1613042.jpg",
    address: "경상남도 합천군 해인사로 108",
  },
  {
    name: "팔만대장경",
    type: "기록물",
    designation: "세계기록유산",
    designationYear: 2007,
    region: "경상남도 합천",
    era: "고려시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/tangible_cult_prop/1637991.jpg",
    address: "경상남도 합천군 대장경로 561",
  },
  {
    name: "안압지",
    type: "정원",
    designation: "사적",
    designationYear: 1974,
    region: "경상북도 경주",
    era: "신라",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/history_site/2021033108342004.JPG",
    address: "경상북도 경주시 안압지로 38",
  },

  {
    name: "창덕궁",
    type: "궁궐",
    designation: "세계유산",
    designationYear: 1997,
    region: "서울",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/2021063008394301.jpg",
    address: "서울특별시 종로구 창덕궁로 99",
  },
  {
    name: "수원 화성",
    type: "성곽",
    designation: "세계유산",
    designationYear: 1997,
    region: "경기도 수원",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/history_site/2021041309433900.jpg",
    address: "경기도 수원시 팔달구 화성로 551",
  },
  {
    name: "덕수궁",
    type: "궁궐",
    designation: "사적",
    designationYear: 1985,
    region: "서울",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/treasure/2021070117142001.jpg",
    address: "서울특별시 중구 세종대로 99",
  },
  {
    name: "광화문",
    type: "문루",
    designation: "보물",
    designationYear: 1963,
    region: "서울",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/history_site/2021070608290701.jpg",
    address: "서울특별시 종로구 세종대로 175",
  },
  {
    name: "백제 무령왕릉",
    type: "왕릉",
    designation: "세계유산",
    designationYear: 2015,
    region: "충청남도 공주",
    era: "백제",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/history_site/2021051409033900.jpg",
    address: "충청남도 공주시 무령왕릉로 19",
  },
  {
    name: "남한산성",
    type: "산성",
    designation: "세계유산",
    designationYear: 2014,
    region: "경기도 광주",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/treasure/2023030617320400.jpg",
    address: "경기도 광주시 남한산성면 산성리 1",
  },
  {
    name: "강릉 오죽헌",
    type: "고택",
    designation: "보물",
    designationYear: 1963,
    region: "강원도 강릉",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/treasure/1616400.jpg",
    address: "강원도 강릉시 오죽헌길 24",
  },
  {
    name: "부산 범어사",
    type: "사찰",
    designation: "사적",
    designationYear: 1972,
    region: "부산",
    era: "신라",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/treasure/1615078.jpg",
    address: "부산광역시 금정구 범어사로 250",
  },
  {
    name: "제주 성산일출봉",
    type: "자연경관",
    designation: "세계자연유산",
    designationYear: 2007,
    region: "제주도",
    era: "선사시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/natural_monument/1632581.jpg",
    address: "제주특별자치도 서귀포시 성산읍 성산리 1",
  },

  {
    name: "밀양 표충사",
    type: "사찰",
    designation: "사적",
    designationYear: 1972,
    region: "경상남도 밀양",
    era: "통일신라",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/treasure/2021070615401102.jpg",
    address: "경상남도 밀양시 표충로 85",
  },
  {
    name: "제주 만장굴",
    type: "동굴",
    designation: "세계자연유산",
    designationYear: 2007,
    region: "제주도",
    era: "선사시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/natural_monument/2022052510321500.JPG",
    address: "제주특별자치도 제주시 구좌읍 만장굴길 88",
  },
  {
    name: "강강술래",
    type: "무형유산",
    designation: "국가무형유산",
    designationYear: 1966,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071215324805.jpg",
    address: "전국",
  },
  {
    name: "판소리",
    type: "무형유산",
    designation: "중요무형문화재",
    designationYear: 1964,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071215105900.jpg",
    address: "전국",
  },

  {
    name: "아리랑",
    type: "무형유산",
    designation: "국가무형유산",
    designationYear: 2012,
    region: "전국",
    era: "전통",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2016012617482500.jpg",
  },
  {
    name: "줄타기",
    type: "무형유산",
    designation: "중요무형문화재",
    designationYear: 1970,
    region: "전국",
    era: "전통",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071315310206.jpg",
  },
  {
    name: "택견",
    type: "무형유산",
    designation: "국가무형유산",
    designationYear: 1983,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071413171601.jpg",
  },
  {
    name: "김장문화",
    type: "무형유산",
    designation: "세계유산",
    designationYear: 2013,
    region: "전국",
    era: "현대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2018022616363300.jpg",
  },
  {
    name: "한산 모시짜기",
    type: "무형유산",
    designation: "국가무형유산",
    designationYear: 1967,
    region: "충청남도 서천",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071308580002.jpg",
  },
  {
    name: "제주 칠머리당 영등굿",
    type: "무형유산",
    designation: "중요무형문화재",
    designationYear: 1980,
    region: "제주도",
    era: "전통",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071409504701.jpg",
  },

  {
    name: "강릉 단오제",
    type: "무형유산",
    designation: "세계유산",
    designationYear: 2005,
    region: "강원도 강릉",
    era: "전통",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071216510902.jpg",
  },
  {
    name: "남사당놀이",
    type: "무형유산",
    designation: "국가무형유산",
    designationYear: 1988,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071215013702.jpg",
  },
  {
    name: "봉산 탈춤",
    type: "무형유산",
    designation: "국가무형유산",
    designationYear: 1970,
    region: "황해도 봉산",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/1623150.jpg",
  },
  {
    name: "매사냥",
    type: "무형유산",
    designation: "세계유산",
    designationYear: 2010,
    region: "전국",
    era: "전통",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/intangible_cult_prop/1644136.jpg",
  },
  {
    name: "옹기 제작",
    type: "무형유산",
    designation: "국가무형유산",
    designationYear: 1997,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071415331603.jpg",
  },
  {
    name: "전통 떡 만들기",
    type: "무형유산",
    designation: "국가무형유산",
    designationYear: 2018,
    region: "전국",
    era: "전통",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021110118011800.jpg",
  },
  {
    name: "제주 해녀 문화",
    type: "무형유산",
    designation: "세계유산",
    designationYear: 2016,
    region: "제주도",
    era: "전통",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2017060510171100.png",
  },

  {
    name: "가야금 연주",
    type: "무형유산",
    designation: "중요무형문화재",
    designationYear: 1971,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071309550000.jpg",
  },

  // 무형문화재

  {
    name: "종묘제례악",
    type: "음악",
    designation: "무형문화재",
    designationYear: 1964,
    region: "서울특별시",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2023112214362000.jpg",
    address: "서울특별시 종로구 훈정동 종묘",
  },

  {
    name: "강강술래",
    type: "무용",
    designation: "무형문화재",
    designationYear: 1966,
    region: "전라남도",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071215105900.jpg",
    address: "전라남도 진도군 강강술래 전수관",
  },

  {
    name: "나전칠기장",
    type: "공예",
    designation: "무형문화재",
    designationYear: 1967,
    region: "전라남도",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/intangible_cult_prop/1643774.jpg",
    address: "전라남도 나주시 나전칠기 박물관",
  },

  {
    name: "씨름",
    type: "스포츠",
    designation: "무형문화재",
    designationYear: 2018,
    region: "전국",
    era: "삼국시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071313551202.jpg",
    address: "전국 씨름 경기장",
  },

  {
    name: "가곡",
    type: "음악",
    designation: "무형문화재",
    designationYear: 1969,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071310562403.JPG",
    address: "전국 전통 음악 교육원",
  },
  {
    name: "단청장",
    type: "공예",
    designation: "무형문화재",
    designationYear: 2003,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071314151604.jpg",
    address: "전국 단청 보존회",
  },
  {
    name: "영산재",
    type: "불교의식",
    designation: "무형문화재",
    designationYear: 1973,
    region: "서울특별시",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071314254103.jpg",
    address: "서울특별시 종로구 불교 전통문화센터",
  },
  {
    name: "줄타기",
    type: "공연예술",
    designation: "무형문화재",
    designationYear: 1976,
    region: "경기도",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071315310201.jpg",
    address: "경기도 남양주시 줄타기 전수관",
  },
  {
    name: "고려청자 제작기법",
    type: "공예",
    designation: "무형문화재",
    designationYear: 1986,
    region: "전라북도",
    era: "고려시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/history_site/2021042611024705.JPG",
    address: "전라북도 강진군 고려청자 박물관",
  },

  {
    name: "한지장",
    type: "공예",
    designation: "무형문화재",
    designationYear: 1996,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071417511100.JPG",
    address: "전국 한지 제작소",
  },
  {
    name: "석전",
    type: "전통놀이",
    designation: "무형문화재",
    designationYear: 2000,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071414362907.jpg",
    address: "전국 석전 전수관",
  },
  {
    name: "농악",
    type: "공연예술",
    designation: "무형문화재",
    designationYear: 1966,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071215535506.jpg",
    address: "전국 농악 전수회관",
  },
  {
    name: "가야금 산조 및 병창",
    type: "음악",
    designation: "무형문화재",
    designationYear: 1975,
    region: "전국",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/imp_intangible_cult_prop/2021071309550100.jpg",
    address: "전국 가야금 교육원",
  },

  // 유형 문화재

  {
    name: "불국사 대웅전",
    type: "사찰",
    designation: "국보",
    designationYear: 1962,
    region: "경상북도",
    era: "통일신라",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/2022110909444401.jpg",
    address: "경상북도 경주시 불국로 385",
  },

  {
    name: "진주 촉석루",
    type: "누각",
    designation: "보물",
    designationYear: 1963,
    region: "경상남도",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/history_site/2021031909134704.jpg",
    address: "경상남도 진주시 촉석로 61",
  },

  {
    name: "강진 무위사 극락전",
    type: "사찰",
    designation: "국보",
    designationYear: 1962,
    region: "전라남도",
    era: "조선시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/2021070714141400.jpg",
    address: "전라남도 강진군 성전면 무위사로 308",
  },
  {
    name: "봉정사 극락전",
    type: "사찰",
    designation: "국보",
    designationYear: 1962,
    region: "경상북도",
    era: "고려시대",
    imageUrl:
      "https://www.heritage.go.kr/unisearch/images/national_treasure/1612630.jpg",
    address: "경상북도 안동시 서후면 봉정사길 222",
  },
];

export default heritageData;
