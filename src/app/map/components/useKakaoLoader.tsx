import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
    const key = process.env.KAKAO_MAP_API_KEY
  useKakaoLoaderOrigin({

    appkey: 'd937a3040d35ae438428d30f5149b722',
    libraries: ["clusterer", "drawing", "services"],
  })
}