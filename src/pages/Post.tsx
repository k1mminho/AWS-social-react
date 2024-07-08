import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPost } from "../service/api/postAPI";
import styled from "styled-components";

const Body = styled.div`
  display: grid;
  justify-items: center;
  border: 1px solid black;
`;
const Post = () => {
  let postId: number = 1;
  const { data, status } = useQuery(
    ["getPost", postId],
    () => getPost(postId),
    { retry: false, refetchIntervalInBackground: false }
  );
  console.log(data);

  return (
    <div>
      <Body>{data.title}</Body>
    </div>
  );
};

export default Post;
