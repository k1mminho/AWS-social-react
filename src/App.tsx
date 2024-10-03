import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Main from './pages/Main';
import Join from './pages/Join';
import Posts from './pages/Posts';
import Write from './pages/Write';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/post/:postId' element={<Post/>}/>
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/write' element={<Write/>}/>
      </Routes>
    </div>
  );
}

export default App;
