import Script from "next/script";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
          <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_MAP_API_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
            {children}
      </>
    );
  }