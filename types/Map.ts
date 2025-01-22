
// 셀렉트 바 인터페이스
export interface SelectProps  {
    title: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name: string;
  };
