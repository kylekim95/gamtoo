"use client";
//라이브러리 정의
import axios from "axios";
import { useRef, useState, useEffect, useMemo } from "react";
import {
  Map,
  MapMarker,
  CustomOverlayMap,
  Polyline,
} from "react-kakao-maps-sdk";

//컴포넌트 정의
import { MapItem } from "../../../../types/Map";

// custom 인포윈도우
function InfoWindows({
  item,
  setOpenOverlayId,
  searchLoadHandler,
}: {
  item: any;
  setOpenOverlayId: any;
  searchLoadHandler: (e: any) => void;
}) {
  return (
    <CustomOverlayMap
      position={{
        lat: item.latitude,
        lng: item.longitude,
      }}
      zIndex={1000}
      clickable={true}
    >
      <div className="wrap absolute left-0 bottom-10">
        <div
          onClick={() => setOpenOverlayId(null)}
          className="w-7 h-7 rounded-full flex items-center justify-center absolute right-2 top-2 z-50 transition-all duration-300 hover:opacity-100 opacity-30 bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="max-w-lg rounded relative overflow-hidden bg-white shadow-lg">
          <img
            className="w-full max-h-96 object-cover"
            src={item.item.imageUrl}
            alt="Sunset in the mountains"
          />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              {item.item.bcodeName} <span>[{item.item.ccmaName}]</span>
            </div>
            <p className="text-gray-700 truncate text-ellipsis text-base">
              {item.item.content}
            </p>
          </div>
          <div className="px-6 justify-between items-center  flex pt-4 pb-2">
            <p className=" flex items-center justify-center bg-gray-200 rounded-full px-3 py-1 text-xs tracking-tight font-semibold text-gray-700 ">
              주소: {item.item.ccbaLcad}
            </p>
            <p
              onClick={() => searchLoadHandler(item)}
              className=" w-28 h-9 text-white flex justify-center items-center py-1 rounded-md hover:bg-[#b23741c2] bg-[#B23742]"
            >
              길찾기
            </p>
          </div>
        </div>
      </div>
    </CustomOverlayMap>
  );
}

export default function BasicMap({
  children,
  data,
  load,
  searchLoadHandler,
}: {
  children: React.ReactNode;
  data: MapItem[];
  load: any;
  searchLoadHandler: (e: any) => void;
}) {
  const mapRef = useRef<kakao.maps.Map | null>(null); 

  //state 정의
  const [openOverlayId, setOpenOverlayId] = useState<number | null>(null);
  const [item, setItem] = useState<any>(null);

// 지도 재설정 함수
  const bounds = useMemo(() => {
    if (mapRef.current && data.length > 0) {
      const bounds = new kakao.maps.LatLngBounds();
      data?.forEach((point) => {
        bounds.extend(new kakao.maps.LatLng(point.latitude, point.longitude));
      });
      return bounds;
    }
  }, [data]);

// 길찾기 버튼 클릭시 지도 재설정 함수
  const loadbounds = useMemo(() => {
    if (mapRef.current && load.sections) {
      const bound = load.sections[0].bound;
      const bounds = new kakao.maps.LatLngBounds();
      bounds.extend(new kakao.maps.LatLng(bound.max_y, bound.max_x));
      bounds.extend(new kakao.maps.LatLng(bound.min_y, bound.min_x));
      return bounds;
    }
  }, [load]);

// 마커 클릭시 상세정보 데이터 함수
  const getDetailData = async (pos: any) => {
    const url = `http://www.khs.go.kr/cha/SearchKindOpenapiDt.do?ccbaKdcd=${pos.ccbaKdcd}&ccbaCtcd=${pos.ccbaCtcd}&ccbaAsno=${pos.ccbaAsno}&ccbaCpno=${pos.ccbaCpno}`;
    const response = await axios.get(url);
    const parseString = require("xml2js").parseString;
    parseString(
      response.data,
      { explicitArray: false },
      function (err: any, result: any) {
        if (result && result.result) {
          setOpenOverlayId(pos.no);
          setItem(result.result);
        }
      }
    );
  };

  // 마커 클릭시 실행되는 함수
  const handleMarkerClick = (pos: any) => {
    getDetailData(pos);
    if (mapRef.current) {
      const moveLatLng = new kakao.maps.LatLng(pos.latitude, pos.longitude);
      mapRef.current.panTo(moveLatLng); // 지도 위치를 클릭한 마커로 이동
    }
  };
// update 지도크기
  const updateBounds = () => {
    if (mapRef.current && data.length > 0) {
      mapRef.current.setBounds(bounds!);
    }
  };
//길찾기시 update 지도크기
  const updateLoadBounds = () => {
    if (mapRef.current && load.sections) {
      mapRef.current.setBounds(loadbounds!);
    }
  };

  useEffect(() => {
    updateBounds();
  }, [data]);
  useEffect(() => {
    if (!load || !load.sections) return;
    updateLoadBounds();
    const linePath: kakao.maps.LatLng[] = [];
    load.sections[0].roads.forEach((router: { vertexes: any[] }) => {
      router.vertexes.forEach((vertex, index) => {
        if (index % 2 === 0) {
          linePath.push(
            new kakao.maps.LatLng(
              router.vertexes[index + 1],
              router.vertexes[index]
            )
          );
        }
      });
    });

    const polyline = new kakao.maps.Polyline({
      path: linePath,
      strokeWeight: 5,
      strokeColor: "#b23741c2",
      strokeOpacity: 1,
      strokeStyle: "solid",
    });

    polyline.setMap(mapRef.current);
    const startMarker = new kakao.maps.Marker({
      position: linePath[0],
      map: mapRef.current!,
      title: "출발점",
    });

    const endMarker = new kakao.maps.Marker({
      position: linePath[linePath.length - 1],
      map: mapRef.current!,
      title: "도착점",
    });

    return () => {
      polyline.setMap(null);
      startMarker.setMap(null);
      endMarker.setMap(null);
      setOpenOverlayId(null)
    };
  }, [load]);
  return (
    <Map
      id="map"
      center={{
        lat: 36.2683,
        lng: 127.6358,
      }}
      style={{
        width: "100%",
        height: "100vh",
      }}
      level={12}
      onCreate={(map) => (mapRef.current = map)}
    >
      {data.length > 0 &&
        data.map((pos) => (
          <div key={`${pos.latitude}-${pos.longitude}-${pos.no}`}>
            <MapMarker
              image={{
                src: "/icons/map_marker_icon.png",
                size: {
                  width: 30,
                  height: 42,
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 20,
                    y: 40,
                  },
                },
              }}
              position={{
                lat: pos.latitude,
                lng: pos.longitude,
              }}
              onClick={() => handleMarkerClick(pos)}
            />

            {openOverlayId === pos.no && item && (
              <InfoWindows
                item={item}
                searchLoadHandler={searchLoadHandler}
                setOpenOverlayId={setOpenOverlayId}
              />
            )}
          </div>
        ))}

      {children}
    </Map>
  );
}
