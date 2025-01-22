"use client"
import React from 'react';
import loginImage from "../../../public/loginImage.png";
import signupImage from "../../../public/signupImage.png";
import Image from "next/image";

export default function LoginPage() {
  const [isActive, setIsActive] = React.useState<boolean>(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`w-full h-[1000px] content-center ${isActive ? 'active bg-[#FFDCCF]' : 'bg-[#DAD1E6]'}`}>
      <section
        className={`relative flex w-[800px] h-[390px] overflow-hidden rounded-lg transition-transform m-auto duration-1000 ${
          isActive ? 'active' : ''
        }`}
      >
        {/* Left Section */}
        <div
          className={`absolute left-[400px] top-0 w-[400px] h-[800px] flex flex-col transition-transform duration-1000 ${
            isActive ? 'translate-y-0' : 'translate-y-[-400px]'
          }`}>
          <Image src={signupImage} alt={""} className="w-[600px]"/>
          <div className="flex flex-col items-center justify-center h-[400px] bg-white">
            <h1 className="mb-5 text-3xl text-center font-semibold text-black">로그인</h1>
            <form className="flex flex-col w-[340px] gap-5">
              <input
                type="text"
                placeholder="email"
                className="px-3 text-black py-2 bg-gray-100 rounded-md placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="px-3 py-2 text-black bg-gray-100 rounded-md placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="submit"
                value="로그인"
                className="px-4 py-2 text-lg font-medium text-white bg-[#BF9AF0] rounded-md cursor-pointer hover:bg-[#AE7CF1]"
              />
            </form>
            <p className="mt-5 text-sm uppercase text-black">
              아직 감투의 회원이 아닌신가요?{'   '}
              <button
                className="font-bold text-[#BF9AF0] hover:underline"
                onClick={toggle}
              >
                회원가입
              </button>
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={` absolute top-0 w-[400px] h-[800px] flex flex-col transition-transform duration-1000 ${
            isActive ? 'translate-y-[-400px]' : 'translate-y-0'
          }`}
        >
          <Image src={loginImage} alt={""} className="w-full"/>
          <div className="flex flex-col items-center justify-center h-[400px] bg-white">
            <h1 className="mb-5 text-xl text-center">Create An Account</h1>
            <form className="flex flex-col w-[340px] gap-5">
              <input
                type="text"
                placeholder="email"
                className="px-3 py-2 bg-gray-100 text-black rounded-md placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="name"
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Create Password"
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="submit"
                value="회원가입"
                className="px-4 py-2 text-lg font-medium text-white bg-[#EE765E] rounded-md cursor-pointer hover:bg-[#F56042]"
              />
            </form>
            <p className="mt-5 text-sm uppercase text-black">
              이미 감투의 회원이신가요?{'    '}
              <button
                className="font-bold text-[#EE765E] hover:underline"
                onClick={toggle}
              >
                로그인
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
