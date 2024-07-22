import React, { useState } from "react";
import {
  checkedEmail,
  changedEmail,
  verifyEmail,
  checkedCode,
  checkedNickname,
  changedNickname,
  fetchJoin,
} from "../service/api/userAPI";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 24px;
  input {
    outline: none;
    border: none;
    padding: 12px 0;
    border-bottom: 1px solid #5e5e5e;
  }
  input:focus {
    border-bottom: 1.5px solid black;
  }
  button {
    margin: 12px 0;
  }
`;

const Join = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState(0);
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate();
  const emailState = (e: any) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const codeState = (e: any) => {
    e.preventDefault();
    setCode(e.target.value);
  };
  const nicknameState = (e: any) => {
    e.preventDefault();
    setNickname(e.target.value);
  };
  const handleCheckedEmail = async () => {
    try {
      const result = await checkedEmail(email);
      if (result.message === "success") {
        console.log("사용 가능한 이메일입니다.");
        const result2 = await verifyEmail(email);
        console.log(email);
        if (result2.message === "success") {
          console.log("인증번호 :", result2.joinCode);
        }
      } else {
        console.log("사용할 수 없는 이메일입니다.");
      }
    } catch (error) {
      console.error("이메일 중복 확인 중 에러 발생:", error);
    }
  };

  const handleCheckedCode = async () => {
    const result = await checkedCode(code);
    if (result.message === "success") {
      console.log("인증번호 맞음.");
    } else {
      console.log("인증번호 중복 확인 중 에러 발생.");
    }
  };
  const handleCheckedNickname = async () => {
    const result = await checkedNickname(nickname);
    if (result.message === "success") {
      console.log("닉네임 사용 가능");
    } else {
      console.log("닉네임 중복");
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const body = {
      email: email,
      joinCode: code,
      nickname: nickname,
      password: e.target.password.value,
    };

    const result = await fetchJoin(body);
    if (result.message === "success") {
      console.log("회원가입 성공");
      navigate("/");
    } else {
      console.log("가입 중 오류 발생");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">이메일</label>
        <input type="email" name="email" autoFocus onChange={emailState} />
        <button type="button" onClick={handleCheckedEmail}>
          중복확인
        </button>
        <label htmlFor="code">인증번호</label>
        <input type="text" name="code" onChange={codeState} />
        <button type="button" onClick={handleCheckedCode}>
          인증확인
        </button>
        <label htmlFor="password">비밀번호</label>
        <input type="password" name="password" />
        <label htmlFor="nickname">닉네임</label>
        <input type="text" name="nickname" onChange={nicknameState} />
        <button onClick={handleCheckedNickname} type="submit">
          닉네임 중복확인
        </button>
        <button type="submit">가입하기</button>
      </Form>
    </div>
  );
};

export default Join;
