import LoginImg from '../assets/images/png/LoginImg.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

type data = {
  nickname: string;
  id: string;
  password: string;
};

function SignupPage() {
  const navigate = useNavigate();

  function toLogin() {
    navigate('/login');
  }

  // const handleSignUp = async () => {
  //   try {
  //     const data = {
  //       nickname,
  //       id,
  //       password,
  //     };
  //     console.log(data);
  //     const response = await axios.post(
  //       'http://localhost:8080/api/v1/users',
  //       data,
  //     );
  //     console.log(response.status); // 실제 반환되는 상태 코드 확인
  //     // 응답 확인
  //     if (response.status === 201) {
  //       alert('회원가입 성공!');
  //       toLogin();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert('회원가입 실패!');
  //   }
  // };

  return (
    <div className="bg-loginimg w-full bg-[#fdfdfd]">
      <div className="flex justify-center font-LexendDeca">
        <img
          src={LoginImg}
          alt="signup"
          className="flex max-h-screen items-center justify-center"
        />
        <div className="ml-10 flex w-72 flex-col justify-center space-y-4">
          <div className="mb-3 text-[30pt] font-medium text-[#FFD600]">
            Sign up
          </div>
          <input
            className="rounded-md bg-[#f5f5f5] px-2 py-2 font-light outline-none "
            type="text"
            placeholder="Nickname"
          />
          <input
            className="rounded-md bg-[#f5f5f5] px-2 py-2 font-light outline-none "
            type="text"
            placeholder="ID"
          />
          <input
            className="mb-4 rounded-md bg-[#f5f5f5] px-2 py-2 font-light outline-none"
            type="password"
            placeholder="PassWord"
          />
          <button className="rounded-md bg-[#FFD600] py-2 font-light text-[#667085]">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
