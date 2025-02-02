// 셀렉트 바 인터페이스
export interface SelectProps {
  title: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  checked?: boolean;
}

export interface MapItem {
  ccbaAdmin: string;
  ccbaAsno: string;
  ccbaCncl: string;
  ccbaCpno: string;
  ccbaCtcd: string;
  ccbaCtcdNm: string;
  ccbaKdcd: string;
  ccbaMnm1: string;
  ccbaMnm2: string;
  ccmaName: string;
  ccsiName: string;
  crltsnoNm: string;
  latitude: number;
  longitude: number;
  no: number;
  regDt: Date;
  sn: string;
}
