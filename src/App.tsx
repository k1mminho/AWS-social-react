import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Main from './pages/Main';
import Join from './pages/Join';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/join' element={<Join/>}/>
        <Route path='/post' element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
