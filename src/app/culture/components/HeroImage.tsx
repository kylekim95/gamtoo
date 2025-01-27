import SearchBar from './SearchBar'; // SearchBar 컴포넌트 임포트

export default function HeroImage() {
  return (
    <div className="relative w-full h-72">
      {/* 배경 이미지 */}
      <img
        src="https://cdn.pixabay.com/photo/2015/12/16/03/45/korea-1095361_1280.jpg"
        alt="CultureImage"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 텍스트 오버레이 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-white text-5xl font-extrabold">국가유산 조회</h1>
      </div>

      {/* SearchBar를 이미지 위에 배치 */}
      <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 z-20">
        <SearchBar  />
      </div>
    </div>
  );
}
