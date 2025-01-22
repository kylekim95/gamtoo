import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <Image
        src="https://cdn.pixabay.com/photo/2022/10/08/14/03/gyeongbokgung-palace-7507027_1280.jpg"
        alt="Gyeongbokgung Palace"
        layout="fill" // 부모 컨테이너를 채우도록 설정
        objectFit="cover"
        objectPosition="center " // 상단 중심 정렬
      />
    </div>
  );
}
