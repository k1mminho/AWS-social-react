import React from "react";
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
      {data?.map((post: posts) => (
        <div
          style={{ border: "1px solid black" }}
          onClick={() => navigate(`/post/${post.postId}`)}
          key={post.postId}
        >
          <div>{post.title}</div>
          <div>{post.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
