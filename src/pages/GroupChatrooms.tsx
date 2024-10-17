import React from "react";
import { useQuery } from "react-query";
import { getGroupChatroom } from "../service/api/groupChatAPI";

interface GroupChatroomsProps {
  roomId : number,
  readerId : number,
  title : string,
  anonymous : boolean,
  members : number,
}
const GroupChatrooms = () => {
  const { data, status } = useQuery(
    ["getGroupChatroom"],
    () => getGroupChatroom(),
    { retry: false, refetchIntervalInBackground: false }
  );
  if (status === "loading") {
    return <h1>Loading</h1>;
  } else if (status === "error") {
    return <h1>Error</h1>;
  }

  return (
    <div>
      {data.map((groupChatrooms: GroupChatroomsProps) => (
        <div key={groupChatrooms.roomId}>
          <h1>{groupChatrooms.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default GroupChatrooms;
