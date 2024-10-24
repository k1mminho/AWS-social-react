import React from "react";
import { Route, Routes } from "react-router-dom";
import PostView from "./pages/PostView";
import Main from "./pages/Main";
import Join from "./pages/Join";
import PostList from "./pages/PostList";
import PostWrite from "./pages/PostWrite";
import GroupChatrooms from "./pages/GroupChatrooms";
import GroupChatCreate from "./pages/GroupChatCreate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="join" element={<Join />} />
        <Route path="post">
          <Route path=":postId" element={<PostView />} />
          <Route path="list" element={<PostList />} />
          <Route path="write" element={<PostWrite />} />
        </Route>

        <Route path="groupChatroom" element={<GroupChatrooms />}>
          <Route path="create" element={<GroupChatCreate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
