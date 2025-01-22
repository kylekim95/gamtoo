import { SelectProps } from "../../../types/Map";

export default function SelectBox({ name, value, title, handleChange }: SelectProps) {
  return (
    <div  className="  flex-1 basis-1/3 flex items-center ps-4 border  border-gray-200 rounded">
      <input
        id={value} // 고유한 ID
        type="radio"
        value={value}
        onChange={handleChange} // 부모에서 전달받은 onChange 핸들러
        name={name} // 그룹화를 위해 name 설정
        className="peer w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />
      <label
        htmlFor={value} // input과 연결
        className="w-full py-4 ms-2 peer-checked:bg-[#000] text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
    </div>
  );
}
