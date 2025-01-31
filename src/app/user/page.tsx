import { MegaphoneIcon } from "@heroicons/react/24/outline";

export default function User() {
  return (
    <>
      <div className="bg-[#F6E3C1] h-[850px] flex flex-col items-center">
        {/* 상단 */}
        <div className="w-[50%] h-[30%] bg-white mt-10 rounded-2xl flex flex-col">
          {/* 제목 */}
          <div className="flex flex-row gap-5 items-center ml-5 mt-6">
            <MegaphoneIcon className="size-9 stroke-[1]" />
            <span>공지사항</span>
          </div>
          {/* 내용 */}
          <div className="flex flex-col items-center mt-2 gap-2">
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              minima?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              minima?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              minima?
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
              minima?
            </div>
          </div>
        </div>
        <div className="w-[50%] h-[60%] bg-white mt-20 rounded-2xl flex flex-col gap-5 mb-8 ">
          {/* 제목 */}
          <div className=" text-center mt-12">
            <span className="font-bold text-2xl">회원정보 수정</span>
          </div>
          {/* 내용 */}
          <div className="flex flex-col items-center mt-5 gap-2">
            <form method="post" className="flex flex-col w-[340px] gap-5">
              <input
                disabled
                type="email"
                placeholder="email"
                className="px-3 py-2 bg-[#BFBFBF] text-black rounded-md placeholder:capitalize placeholder:font-bold placeholder:text-gray-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="name"
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password Check"
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="button"
                value="수정하기"
                className="px-4 py-2 text-lg font-medium text-white bg-[#EE765E] rounded-md cursor-pointer hover:bg-[#F56042]"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
