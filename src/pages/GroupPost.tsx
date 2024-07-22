import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useAuthContext } from "../context/AuthContext";
import { useParams } from "react-router-dom";
import { getGroupPost } from "../service/api/groupChatAPI";

const Body = styled.div`
  display: grid;
  justify-items: center;
  border: 1px solid red;
`;
const GroupPost = () => {
  const {memoUserInfo} = useAuthContext();
  const {isLoggedIn, userInfo} = memoUserInfo;
  const{postId} = useParams()

  const { data, status } = useQuery(
    ["getGroupPost", postId],
    () => getGroupPost(postId as string),
    { retry: false, refetchIntervalInBackground: false }
  );

  if (status === "loading"){
    return <div>Loading</div>
  }else if (status === "error"){
    return <div>Error</div>
  }

  return (
    <div>
      <Body>{data.title} <hr />{data.content}</Body>
    </div>
  );
};

export default GroupPost;
