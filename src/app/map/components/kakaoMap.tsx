'use client'

import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import {
  Map,
  MapMarker,
  CustomOverlayMap,
  useMap,
} from "react-kakao-maps-sdk";
import { MapItem } from "../../../../types/Map";

function InfoWindows({ item, setOpenOverlayId }: any) {
  console.log(item); // item 데이터가 제대로 들어왔는지 확인
  return (
    <CustomOverlayMap
      position={{
        lat: item.latitude,
        lng: item.longitude,
      }}
      zIndex={1000} // 클러스터러보다 높은 zIndex 설정
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
            <div className="font-bold text-xl mb-2">{item.item.bcodeName} <span>[{item.item.ccmaName}]</span></div>
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
  const [openOverlayId, setOpenOverlayId] = useState<number | null>(null);
  const [item, setItem] = useState<any>(null);
  const map = useMap()
  const getDetailData = async (pos: any) => {
    const url = `http://www.khs.go.kr/cha/SearchKindOpenapiDt.do?ccbaKdcd=${pos.ccbaKdcd}&ccbaCtcd=${pos.ccbaCtcd}&ccbaAsno=${pos.ccbaAsno}&ccbaCpno=${pos.ccbaCpno}`;
    const response = await axios.get(url);
    const parseString = require('xml2js').parseString;
  parseString(response.data,{explicitArray: false}, function (err: any, result: any) {
    if (result && result.result) {
      setOpenOverlayId(pos.no); // pos.no로 설정
      setItem(result.result); // item 데이터 업데이트
      console.log(result);
    }
});


  };

  const ReSetttingMapBounds = (
    points:  MapItem[]
  ) => {
  
    const bounds = useMemo(() => {
      const bounds = new kakao.maps.LatLngBounds()
      console.log( points)
      points.forEach((point) => {
       
        bounds.extend(new kakao.maps.LatLng(point.latitude, point.longitude))
      })
      return bounds
     
    }, [points])
    map.setBounds(bounds)
  }
  useEffect(() => {
    ReSetttingMapBounds(data)
  },[data])
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
    >
      {data &&
        data.map((pos) => (
          <div key={`${pos.latitude}-${pos.longitude}-${pos.no}`}>
            <MapMarker
              position={{
                lat: pos.latitude,
                lng: pos.longitude,
              }}
              onClick={() => getDetailData(pos)} // 클릭한 마커의 ID 저장
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
