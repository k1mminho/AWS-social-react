import React, { useState } from "react";
import { getPosts } from "../service/api/postAPI";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

interface posts {
  postId: number;
  title: string;
  content: string;
  writerId: number;
  category: string;
  readhit: number;
  likes: number;
}
const Posts = () => {
  const [state, setState] = useState("get");

  const navigate = useNavigate();
  const { data, status } = useQuery(["getPosts"], () => getPosts(), {
    retry: false,
    refetchIntervalInBackground: false,
  });

  if (status === "loading") {
    return <h2>Loding</h2>;
  }

  if (status === "error") {
    return <h2>Error</h2>;
  }
  return (
    <div>
      {state == "get"
        ? data?.map((post: posts) => (
            <div
              style={{ border: "1px solid black" }}
              // onClick={() => navigate(`/post/${post.postId}`)}
              key={post.postId}
            >
              <div>{post.title}</div>
              <div>{post.content}</div>
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

export default Posts;
