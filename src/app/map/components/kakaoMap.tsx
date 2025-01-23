'use client'
import axios from "axios";
import { useRef, useState, useEffect, useMemo } from "react";
import {
  Map,
  MapMarker,
  CustomOverlayMap,
} from "react-kakao-maps-sdk";
import { MapItem } from "../../../../types/Map";

function InfoWindows({ item, setOpenOverlayId }: any) {
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
        <div className="max-w-lg rounded overflow-hidden bg-white shadow-lg">
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
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs tracking-tight font-semibold text-gray-700 mr-2 mb-2">
              주소: {item.item.ccbaLcad}
            </span>
          </div>
        </div>
      </div>
    </CustomOverlayMap>
  );
}

export default function BasicMap({
  children,
  data,
}: {
  children: React.ReactNode;
  data: MapItem[];
}) {
  const mapRef = useRef<kakao.maps.Map | null>(null); // 지도 객체를 참조하기 위한 useRef
  const [openOverlayId, setOpenOverlayId] = useState<number | null>(null);
  const [item, setItem] = useState<any>(null);
  const bounds = useMemo(() => {
    if (mapRef.current) {
      const bounds = new kakao.maps.LatLngBounds()
  
      data.forEach((point) => {
        bounds.extend(new kakao.maps.LatLng(point.latitude, point.longitude))
      })
      return bounds}
    }, [data]) 
  const getDetailData = async (pos: any) => {
    const url = `http://www.khs.go.kr/cha/SearchKindOpenapiDt.do?ccbaKdcd=${pos.ccbaKdcd}&ccbaCtcd=${pos.ccbaCtcd}&ccbaAsno=${pos.ccbaAsno}&ccbaCpno=${pos.ccbaCpno}`;
    const response = await axios.get(url);
    const parseString = require("xml2js").parseString;
    parseString(response.data, { explicitArray: false }, function (err: any, result: any) {
      if (result && result.result) {
        setOpenOverlayId(pos.no);
        setItem(result.result);
      }
    });
  };

  const handleMarkerClick = (pos: any) => {
    getDetailData(pos);

    if (mapRef.current) {
      const moveLatLng = new kakao.maps.LatLng(pos.latitude, pos.longitude);
      mapRef.current.panTo(moveLatLng); // 지도 위치를 클릭한 마커로 이동
    }
  };
const updateBounds = () =>{
  if (mapRef.current) {
  
    mapRef.current.setBounds(bounds)
    // 지도 타입을 ROADMAP(일반 지도)로 설정
  }
}
  useEffect(() => {
updateBounds()
  }, [data]);
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
      onCreate={(map) => (mapRef.current = map)} // 지도 객체를 mapRef에 저장
    >
      {data &&
        data.map((pos) => (
          <div key={`${pos.latitude}-${pos.longitude}-${pos.no}`}>
            <MapMarker
              position={{
                lat: pos.latitude,
                lng: pos.longitude,
              }}
              onClick={() => handleMarkerClick(pos)} // 클릭한 마커의 ID 저장
            />
            {openOverlayId === pos.no && item && (
              <InfoWindows item={item} setOpenOverlayId={setOpenOverlayId} />
            )}
          </div>
        ))}

      {children}
    </Map>
  );
}
