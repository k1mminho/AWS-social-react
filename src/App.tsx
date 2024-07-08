import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/post' element={<Post/>}/>
      </Routes>
    </div>
  );
}

export default App;
