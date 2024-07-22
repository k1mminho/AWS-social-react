import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { getGroupPosts } from "../service/api/groupChatAPI";
import { useAuthContext } from "../context/AuthContext";

interface groupPosts {
  postId: number;
  title: string;
  content: string;
  writerId: number;
  category: string;
  readhit: number;
  likes: number;
}

const GroupPosts = () => {
  
  const { memoUserInfo } = useAuthContext();
  const { isLoggedIn, userInfo } = memoUserInfo;

  const [state, setState] = useState("get");

  const navigate = useNavigate();
  const { data, status } = useQuery(["getGroupPosts"], () => getGroupPosts(), {
    retry: false,
    refetchIntervalInBackground: false,
  });

  if (status === "loading") {
    return <h2>Loding</h2>;
  }

  if (status === "error") {
    return <h2>Error</h2>;
  }

  if (!isLoggedIn) {
    return (
      <div>
        <h2>로그인 후 이용 가능한 컨텐츠입니다</h2>
        <Link to="/">로그인 하러가기</Link>
      </div>
    );
  }


  return (
    <div>
      {state == "get"
        ? data?.map((groupPost: groupPosts) => (
            <div
              style={{ border: "1px solid black" }}
              // onClick={() => navigate(`/groupPost/${groupPost.postId}`)}
              key={groupPost.postId}
            >
              <div>{groupPost.title}</div>
              <div>{groupPost.content}</div>
              <button onClick={() => setState("post")}>모임 만들기</button>
            </div>
          ))
        : state == 'post' ? <div>
          <form action="submit">
            <label htmlFor="title">제목</label>
            <input type="text" id="title" name="title"/>
            <label htmlFor="content">내용</label>
            <input type="text" id="content" name="content" />
            <label htmlFor="category">취미종류</label>
            <input type="text" id="category" name="category" />
            <button type="submit">만들기</button>
          </form>
        </div> : <div></div> }
    </div>
  );
};

export default GroupPosts;
