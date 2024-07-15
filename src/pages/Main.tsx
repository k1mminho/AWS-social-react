import React from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom'; // useLocation 추가
import { fetchLogin } from '../service/api/userAPI';
import { useAuthContext } from '../context/AuthContext';

const Main = () => {
  const navigate = useNavigate();
  const location = useLocation(); // useLocation 훅 사용
  const { login, memoUserInfo } = useAuthContext();
  const { isLoggedIn } = memoUserInfo;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      email: formData.get('email') as string,
      password: formData.get('password') as string
    };
    const result = await fetchLogin(body);
    console.log(result)
    const array = ["updatePwd", "join", "findPwd", "logout", null];

    if (result.message === "success") {
      login(result.userInfo);
      if (array.includes(location.state)) navigate("/post");
      else navigate(-1);
    } else if (result.message === "blocked") {
      // blocked 처리
    } else if (result.message === "NoExist") {
      // 존재하지 않는 사용자 처리
    } else if (result.message === "PwdFail") {
      // 비밀번호 오류 처리
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" required />
        <input type="password" name="password" required />
        <button type="submit">Login</button>
      </form>
      <Link to="/join">회원가입 하기</Link>
    </div>
  );
};

export default Main;
