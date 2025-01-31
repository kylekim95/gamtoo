"use client";

// 내부

import Navigation from "@/components/main/navigation";
import Heritage from "@/components/main/heritage";
import CultureFestival from "@/components/main/cultureFestival";
import TodayQuiz from "@/components/main/todayQuiz";
import Map from "@/components/main/map";
import VideoList from "@/components/main/videoList";
import {useAppSelector} from "@/lib/redux/store";

export default function Home() {
  return (
    <div className="main ">
      <Navigation />
      {/* 문화재 리스트 영역 */}
      <div className="mt-11 mx-6">
        <Heritage />
      </div>
      {/* 문화재 행사 */}
      <div className=" mx-6">
        <CultureFestival />
      </div>
      {/* 오늘의 퀴즈 */}
      <div>
        <TodayQuiz />
      </div>
      {/* 동영상 & 지도 */}
      <div className="flex flex-row mb-4">
        <VideoList />
        <Map />
      </div>
    </div>
  );
}
