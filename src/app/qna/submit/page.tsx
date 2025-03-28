'use client'

import axios from "axios";
import {  useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  title:string;
  content:string;
}

const url = process.env.NEXT_PUBLIC_BASIC_URL
export default function QnaSubmitPage() {

const router = useRouter()
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormData>();


  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const formData = {
      title:JSON.stringify(data),
      image: null,
      channelId: '679ce5308b8d584759230494',
    }
    const response = await axios.post(`${url}/posts/create`, formData);
    if(response.status === 200){
      router.push('/qna')
    }
 
  }
  
  return (
    <>
      <div className=" w-full w-">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto gap-10 px-4 flex flex-col">
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
                      {...register("title", { 
                        required: "제목을 입력해주세요", 
                        pattern: {
                          value: /^.{0,30}$/,
                          message: "제목 입력 (최대 30자)"
                        } 
                      })}
                    type="text"
                    id="subject"
                    name="title"
                    className={`w-full p-3 rounded-md border border-gray-300 focus:outline-none ${errors.title ? 'border-red-500': 'focus:border-green-500'}`}
                  />
                  
                </div>
                <div className="pl-16">  {errors.title && <p className="text-red-500">{errors.title.message}</p>}</div>
              
                <div className=" flex items-start gap-2">
                <label className="flex w-14" htmlFor="subject">
                    내용
                    <span className="ml-2 text-red-500">*</span>
                  </label>
                  <textarea
                     {...register("content", { 
                      required: "내용을 입력해주세요", 
                      pattern: {
                        value: /^.{0,255}$/,
                        message: "내용 입력 (최대 255자)"
                      } 
                    })}
                    id="subject"
                    name="content"
                    className={`w-full p-3 rounded-md border h-96 border-gray-300 focus:outline-none ${errors.content ? 'border-red-500': 'focus:border-green-500'} `}
                  />
                </div>
                <div className="pl-16">  {errors.content && <p className="text-red-500">{errors.content.message}</p>}</div>
              </div>
            </div>
          </div>
          <div className="flex pb-20 justify-end w-full">
            <button type="submit" className=" w-20 h-8 bg-[#B23742] text-white rounded-md">등록</button>
          </div>
        </form>
      </div>
    </>
  );
}
