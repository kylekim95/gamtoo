"use client"
import React from 'react';
import loginImage from "../../../public/loginImage.png";
import signupImage from "../../../public/signupImage.png";
import Image from "next/image";
import LoginType from "@/types/LoginType";

interface SignupType extends LoginType {
  passwordCheck: string;
  fullName: string;
}

export default function LoginPage() {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [loginInput, setLoginInput] = React.useState<LoginType>({
    email: "",
    password: ""
  });
  const [signupInput, setSignupInput] = React.useState<SignupType>({
    email: "",
    password: "",
    passwordCheck: "",
    fullName: ""
  });
  const toggle = () => {
    setIsActive(!isActive);
  };
  function handleLoginValueChange(field: string, e: React.ChangeEvent<HTMLInputElement>) {
    setLoginInput((state) => ({
      ...state,
      [field]: e.target.value
    }));
  }
  function handleSignupValueChange(field: string, e: React.ChangeEvent<HTMLInputElement>) {
    setSignupInput((state) => ({
      ...state,
      [field]: e.target.value
    }));
  }
  async function handleLoginSubmit() {
    if(loginInput.email.length < 6 || loginInput.password.length <= 4){
      alert("짧다")
      return;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/login`,{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: loginInput.email,
        password: loginInput.password
      })
    });
    if(response.status !== 200) {
      return;
    }
    const data = await response.json();
  }
  async function handleSignupSubmit() {
    if(signupInput.passwordCheck !== signupInput.password) {
      alert("비밀번호를 확인해주세요!");
      return;
    }
    if(signupInput.email.length < 6 || signupInput.fullName.length < 3 || signupInput.password.length <= 4){
      alert("짧다")
      return;
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/signup`,{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: signupInput.email,
        fullName: signupInput.fullName,
        password: signupInput.password
      })
    });
    if (response.status !== 200) {
      return;
    }
    const data = await response.json();
    setIsActive(!isActive);
  }
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
            <form method="post" className="flex flex-col w-[340px] gap-5">
              <input
                type="text"
                placeholder="email"
                onChange={(e) => {handleLoginValueChange("email",e)}}
                className="px-3 text-black py-2 bg-gray-100 rounded-md placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {handleLoginValueChange("password",e)}}
                className="px-3 py-2 text-black bg-gray-100 rounded-md placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="button"
                value="로그인"
                onClick={handleLoginSubmit}
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
            <form method="post" className="flex flex-col w-[340px] gap-5">
              <input
                type="email"
                placeholder="email"
                value={signupInput.email}
                onChange={(e) => handleSignupValueChange("email",e)}
                className="px-3 py-2 bg-gray-100 text-black rounded-md placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="name"
                value={signupInput.fullName}
                onChange={(e) => handleSignupValueChange("fullName",e)}
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="password"
                value={signupInput.password}
                placeholder="Password"
                onChange={(e) => handleSignupValueChange("password",e)}
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:font-bold placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="password"
                value={signupInput.passwordCheck}
                placeholder="Password Check"
                onChange={(e) => handleSignupValueChange("passwordCheck",e)}
                className="px-3 py-2 bg-gray-100 rounded-md text-black placeholder:capitalize placeholder:text-gray-300 focus:outline-none"
              />
              <input
                type="button"
                onClick={handleSignupSubmit}
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
