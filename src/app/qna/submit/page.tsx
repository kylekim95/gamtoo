export default function QnaSubmitPage() {
  return (
    <>
      <div className=" w-full w-">
        <div className="max-w-4xl mx-auto gap-10 px-4 flex flex-col">
          <div className="border-b py-3">
            <h3 className=" font-bold text-3xl py-4 leading-normal ">
              궁금하신 사항을 적어 주시면 <br />
              담당자가 자세하게 안내해드리겠습니다.
            </h3>
            <div className=" w-full flex font-bold text-red-500 justify-end">
              <p>*표시는 필수 입력 사항입니다.</p>
            </div>
          </div>
          <div>
            <div>
              <div className=" flex flex-col gap-7">
                <div className=" flex items-center gap-2">
                  <label className="flex w-14" htmlFor="subject">
                    제목
                    <span className="ml-2 text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-red-500"
                  />
                </div>
                <div className=" flex items-start gap-2">
                <label className="flex w-14" htmlFor="subject">
                    내용
                    <span className="ml-2 text-red-500">*</span>
                  </label>
                  <textarea
                    id="subject"
                    name="subject"
                    className="w-full p-3 rounded-md border h-96 border-gray-300 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex pb-20 justify-end w-full">
            <button className=" w-20 h-8 bg-[#B23742] text-white rounded-md">등록</button>
          </div>
        </div>
      </div>
    </>
  );
}
